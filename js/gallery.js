/* ============================================
   SSMT — Dynamic Gallery Renderer
   Reads from gallery-data.js and renders all
   four gallery tabs with animations.
   ============================================ */

(function () {

  var IMG_BASE = '../images/gallery/';
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  /* ── Utilities ─────────────────────────── */

  function formatDate(str) {
    if (!str) return '';
    var parts = str.split('-');
    if (parts.length === 2) return MONTHS[parseInt(parts[1], 10) - 1] + ' ' + parts[0];
    return parts[0];
  }

  function animateIn(cards) {
    cards.forEach(function (card, i) {
      setTimeout(function () {
        card.classList.add('visible');
      }, i * 60);
    });
  }

  function showEmpty(container, message) {
    container.innerHTML =
      '<div class="gallery-empty">' +
        '<i class="fas fa-images"></i>' +
        '<p>' + message + '</p>' +
      '</div>';
  }

  function updateCount(tabId, count) {
    var tab = document.querySelector('[data-tab="' + tabId + '"]');
    if (tab) {
      var badge = tab.querySelector('.tab-count');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'tab-count';
        tab.appendChild(badge);
      }
      badge.textContent = count;
    }
  }

  /* ── Skeleton Loader ────────────────────── */

  function showSkeletons(container, count) {
    var html = '';
    for (var i = 0; i < count; i++) {
      html += '<div class="gallery-card skeleton-card"><div class="skeleton skeleton-img"></div><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-sub"></div></div>';
    }
    container.innerHTML = html;
  }

  /* ── Photo Gallery ──────────────────────── */

  function renderPhotos(photos) {
    var grid = document.getElementById('photoGallery');
    if (!grid) return;

    updateCount('photos', photos.length);

    if (!photos || photos.length === 0) {
      showEmpty(grid, 'Photos will be uploaded soon. Please check back!');
      return;
    }

    grid.innerHTML = photos.map(function (p, i) {
      return (
        '<div class="gallery-card" data-category="' + p.category + '" data-date="' + p.date + '">' +
          '<div class="gallery-thumb">' +
            '<img src="' + IMG_BASE + p.file + '" alt="' + p.caption + '" loading="lazy" onerror="this.parentElement.parentElement.style.display=\'none\'">' +
            '<div class="gallery-overlay">' +
              '<button class="gallery-zoom" aria-label="View full size"><i class="fas fa-search-plus"></i></button>' +
            '</div>' +
          '</div>' +
          '<div class="gallery-info"><h4>' + p.caption + '</h4><span>' + formatDate(p.date) + '</span></div>' +
        '</div>'
      );
    }).join('');

    animateIn(grid.querySelectorAll('.gallery-card'));
  }

  /* ── Video Gallery ──────────────────────── */

  function renderVideos(videos) {
    var grid = document.getElementById('videoGallery');
    if (!grid) return;

    updateCount('videos', videos.length);

    if (!videos || videos.length === 0) {
      showEmpty(grid, 'Videos will be added soon. Please check back!');
      return;
    }

    grid.innerHTML = videos.map(function (v) {
      // Thumbnail: explicit thumbnail > gopuram fallback
      var thumb = v.thumbnail
        ? '../images/videos/' + v.thumbnail
        : '../images/gopuram-main.jpg';
      var typeLabel = v.localFile ? '<span class="video-type-badge"><i class="fas fa-film"></i> Local</span>' : '';
      return (
        '<div class="video-card" data-category="' + (v.category || '') + '" data-date="' + (v.date || '') + '">' +
          '<div class="video-thumb">' +
            '<img src="' + thumb + '" alt="' + v.title + '" loading="lazy" onerror="this.src=\'../images/gopuram-main.jpg\'">' +
            '<div class="play-overlay"><i class="fas fa-play-circle"></i></div>' +
            typeLabel +
          '</div>' +
          '<div class="video-info">' +
            '<h4>' + v.title + '</h4>' +
            '<span class="video-meta"><i class="fas fa-calendar"></i> ' + formatDate(v.date) +
            (v.duration ? ' &nbsp;|&nbsp; <i class="fas fa-clock"></i> ' + v.duration : '') + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    animateIn(grid.querySelectorAll('.video-card'));
    setupVideoModal(videos);
  }

  /* ── Past Photos ────────────────────────── */

  function renderPast(past) {
    var grid = document.getElementById('pastGallery');
    if (!grid) return;

    if (!past || past.length === 0) {
      showEmpty(grid, 'Historical photos will be added here.');
      return;
    }

    grid.innerHTML = past.map(function (p) {
      return (
        '<div class="gallery-card" data-category="' + p.category + '">' +
          '<div class="gallery-thumb">' +
            '<img src="' + IMG_BASE + p.file + '" alt="' + p.caption + '" loading="lazy" onerror="this.parentElement.parentElement.style.display=\'none\'">' +
            '<div class="gallery-overlay"><button class="gallery-zoom" aria-label="View full size"><i class="fas fa-search-plus"></i></button></div>' +
          '</div>' +
          '<div class="gallery-info"><h4>' + p.caption + '</h4><span>' + p.year + '</span></div>' +
        '</div>'
      );
    }).join('');

    animateIn(grid.querySelectorAll('.gallery-card'));
  }

  /* ── Albums ─────────────────────────────── */

  function renderAlbums(albums) {
    var grid = document.getElementById('albumsGrid');
    if (!grid) return;

    if (!albums || albums.length === 0) {
      showEmpty(grid, 'Albums will be organised here once photos are uploaded.');
      return;
    }

    grid.innerHTML = albums.map(function (a) {
      var cover = a.cover ? IMG_BASE + a.cover : '../images/gopuram-main.jpg';
      return (
        '<div class="news-card album-card">' +
          '<div class="news-image">' +
            '<img src="' + cover + '" alt="' + a.name + '" loading="lazy" onerror="this.src=\'../images/gopuram-main.jpg\'">' +
            '<span class="news-date">' + a.year + '</span>' +
          '</div>' +
          '<div class="news-body">' +
            '<h4>' + a.name + '</h4>' +
            '<p>' + (a.count || 0) + ' Photos</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    animateIn(grid.querySelectorAll('.album-card'));
  }

  /* ── Filters (smooth fade) ──────────────── */

  function setupFilters() {
    document.querySelectorAll('.gallery-filters').forEach(function (fc) {
      var btns = fc.querySelectorAll('.filter-btn');
      var grid = fc.parentElement.querySelector('.photo-gallery-grid, .video-gallery-grid');
      if (!grid) return;

      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          btns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var filter = btn.dataset.filter;
          var cards = grid.querySelectorAll('.gallery-card, .video-card');

          cards.forEach(function (card) {
            var match = filter === 'all' || card.dataset.category === filter;
            if (match) {
              card.style.display = '';
              setTimeout(function () { card.classList.add('visible'); }, 10);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'scale(0.95)';
              setTimeout(function () { card.style.display = 'none'; }, 250);
            }
          });
        });
      });
    });
  }

  /* ── Video Modal with YouTube embed ─────── */

  function setupVideoModal(videos) {
    var modal = document.getElementById('videoModal');
    if (!modal) return;

    var modalContent = modal.querySelector('.video-modal-content');

    document.querySelectorAll('.video-card').forEach(function (card, i) {
      card.addEventListener('click', function () {
        var video = videos[i];
        if (video && video.embedId) {
          // YouTube embed
          modalContent.innerHTML =
            '<button class="video-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video.embedId + '?autoplay=1" ' +
            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="border-radius:8px;min-height:400px"></iframe>';
        } else if (video && video.localFile) {
          // Local video file (.mov / .mp4)
          var src = '../images/videos/' + video.localFile;
          modalContent.innerHTML =
            '<button class="video-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
            '<video controls autoplay playsinline style="width:100%;max-height:75vh;border-radius:8px;background:#000">' +
              '<source src="' + src + '" type="video/mp4">' +
              '<source src="' + src + '" type="video/quicktime">' +
              'Your browser does not support this video format.' +
            '</video>';
        } else {
          modalContent.innerHTML =
            '<button class="video-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
            '<div class="video-placeholder"><i class="fas fa-video"></i><p>Video link not yet configured.</p></div>';
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        modalContent.querySelector('.video-modal-close').addEventListener('click', closeModal);
      });
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    function closeModal() {
      // Pause local video before removing it
      var v = modalContent.querySelector('video');
      if (v) { v.pause(); }
      modal.classList.remove('active');
      document.body.style.overflow = '';
      modalContent.innerHTML =
        '<button class="video-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '<div class="video-placeholder"><i class="fas fa-video"></i><p>Video player will be embedded here.</p></div>';
    }
  }

  /* ── Lightbox with touch swipe ──────────── */

  function setupLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var images = [];
    var currentIndex = 0;

    function collectImages() {
      images = [];
      document.querySelectorAll('#photoGallery .gallery-card, #pastGallery .gallery-card').forEach(function (card) {
        var img = card.querySelector('.gallery-thumb img');
        var title = card.querySelector('.gallery-info h4');
        if (img && img.src) {
          images.push({ src: img.src, title: title ? title.textContent : '' });
        }
      });
    }

    function open(index) {
      collectImages();
      currentIndex = index;
      show();
    }

    function show() {
      if (!images[currentIndex]) return;
      lightboxImg.src = images[currentIndex].src;
      lightboxImg.style.opacity = '0';
      lightboxImg.onload = function () {
        lightboxImg.style.transition = 'opacity 0.3s ease';
        lightboxImg.style.opacity = '1';
      };
      if (lightboxCaption) lightboxCaption.textContent = images[currentIndex].title;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function prev() { currentIndex = (currentIndex - 1 + images.length) % images.length; show(); }
    function next() { currentIndex = (currentIndex + 1) % images.length; show(); }

    // Delegate zoom button clicks
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.gallery-zoom');
      if (!btn) return;
      var card = btn.closest('.gallery-card');
      collectImages();
      var cards = Array.from(document.querySelectorAll('#photoGallery .gallery-card, #pastGallery .gallery-card'));
      var idx = cards.indexOf(card);
      open(idx >= 0 ? idx : 0);
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prev);
    lightbox.querySelector('.lightbox-next').addEventListener('click', next);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });

    // Touch swipe support
    var touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    }, { passive: true });
  }

  /* ── Search ─────────────────────────────── */

  function setupSearch() {
    var searchInput = document.getElementById('gallerySearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      var term = this.value.toLowerCase().trim();
      document.querySelectorAll('#photoGallery .gallery-card').forEach(function (card) {
        var caption = (card.querySelector('h4') || {}).textContent || '';
        var match = !term || caption.toLowerCase().includes(term);
        card.style.display = match ? '' : 'none';
        if (match) card.classList.add('visible');
      });
    });
  }

  /* ── Init ───────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof GALLERY_DATA === 'undefined') return;

    var photoGrid = document.getElementById('photoGallery');
    if (photoGrid) showSkeletons(photoGrid, 6);

    // Small delay so skeletons render first
    setTimeout(function () {
      renderPhotos(GALLERY_DATA.photos || []);
      renderVideos(GALLERY_DATA.videos || []);
      renderPast(GALLERY_DATA.past || []);
      renderAlbums(GALLERY_DATA.albums || []);
      setupFilters();
      setupSearch();
      setupLightbox();
    }, 300);
  });

})();
