/*
 * =====================================================
 *  SSMT Gallery Data — Edit this file to add content
 * =====================================================
 *
 *  PHOTOS
 *  ------
 *  1. Drop your image into:  images/gallery/<category>/
 *     Categories: construction | ceremony | architecture | campus
 *  2. Add one object below in the photos array.
 *     { file: 'category/filename.jpg', caption: '...', category: '...', date: 'YYYY-MM' }
 *
 *  VIDEOS
 *  ------
 *  Option A — YouTube: set embedId to the YouTube video ID
 *  Option B — Local file: set localFile to filename inside images/videos/
 *
 *  PAST PHOTOS
 *  -----------
 *  Drop photos into images/gallery/past/ and add entries to the past array.
 *
 *  DATE FORMAT:  'YYYY-MM'  e.g. '2022-01'  or just  '2022'
 * =====================================================
 */

var GALLERY_DATA = {

  /* ── RECENT PHOTOS ─────────────────────────────── */
  photos: [
    /* Construction */
    { file: 'construction/construction-01.jpg', caption: 'Foundation Work — Pillar Laying', category: 'construction', date: '2018-06' },
    { file: 'construction/construction-02.jpg', caption: 'Temple Construction Progress',     category: 'construction', date: '2022-01' },
    { file: 'construction/construction-03.jpg', caption: 'Garba Griha Construction',         category: 'construction', date: '2022-01' },
    { file: 'construction/construction-04.jpg', caption: 'Mandapam Structural Work',         category: 'construction', date: '2022-01' },

    /* Architecture */
    { file: 'architecture/architecture-01.jpg', caption: 'Dravidian Architectural Detail',   category: 'architecture', date: '2022-01' },
    { file: 'architecture/architecture-02.jpg', caption: 'Carved Stone Pillars',             category: 'architecture', date: '2022-01' },
    { file: 'architecture/architecture-03.jpg', caption: 'Gopuram Decorative Carvings',      category: 'architecture', date: '2022-01' },
    { file: 'architecture/architecture-04.jpg', caption: 'Temple Sculpture Work',            category: 'architecture', date: '2022-01' },
    { file: 'architecture/architecture-05.jpg', caption: 'Stone Vigraham Craftsmanship',     category: 'architecture', date: '2022-01' },
    { file: 'architecture/architecture-06.jpg', caption: 'Mandapam Column Detail',           category: 'architecture', date: '2022-01' },

    /* Campus */
    { file: 'campus/campus-01.jpg', caption: 'Temple Campus View',             category: 'campus', date: '2024' },
    { file: 'campus/campus-02.jpg', caption: 'Aerial View — Temple Grounds',   category: 'campus', date: '2024' },
    { file: 'campus/campus-03.jpg', caption: 'Campus Overview — Drone Shot',   category: 'campus', date: '2024' },
    { file: 'campus/campus-04.jpg', caption: 'Temple Site Aerial Panorama',    category: 'campus', date: '2024' },
    { file: 'campus/campus-05.jpg', caption: 'Drone View — Temple Complex',    category: 'campus', date: '2024' },
    { file: 'campus/campus-06.jpg', caption: 'Birds Eye View of the Campus',   category: 'campus', date: '2024' },
  ],

  /* ── VIDEOS ────────────────────────────────────── */
  videos: [
    {
      localFile: 'temple-exterior-walkthrough.mov',
      title:     'Temple Exterior Walkthrough',
      category:  'architecture',
      duration:  '',
      date:      '2024'
    },
    {
      localFile: 'temple-interior-walkthrough.mov',
      title:     'Temple Interior Walkthrough',
      category:  'architecture',
      duration:  '',
      date:      '2024'
    },
  ],

  /* ── ALBUMS ────────────────────────────────────── */
  albums: [
    {
      id:    'construction-2022',
      name:  'Construction Progress 2022',
      cover: 'construction/construction-02.jpg',
      count: 4,
      year:  '2022'
    },
    {
      id:    'architecture-2022',
      name:  'Temple Architecture 2022',
      cover: 'architecture/architecture-01.jpg',
      count: 6,
      year:  '2022'
    },
    {
      id:    'campus-aerial',
      name:  'Campus Aerial Views',
      cover: 'campus/campus-02.jpg',
      count: 6,
      year:  '2024'
    },
    {
      id:    'historical',
      name:  'Historical Moments',
      cover: 'past/past-01.jpg',
      count: 4,
      year:  '2012–2018'
    },
  ],

  /* ── PAST PHOTOS ───────────────────────────────── */
  past: [
    { file: 'past/past-01.jpg', caption: 'Early Temple Days',           year: '2012', category: 'campus'       },
    { file: 'past/past-02.jpg', caption: 'Temple Foundation Ceremony',  year: '2013', category: 'ceremony'     },
    { file: 'past/past-03.jpg', caption: 'Construction Beginnings',     year: '2014', category: 'construction' },
    { file: 'past/past-04.jpg', caption: 'Devotees at the Sacred Site', year: '2018', category: 'ceremony'     },
  ]

};
