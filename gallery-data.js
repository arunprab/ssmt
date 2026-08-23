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
 *     Optional: add  album: 'album-id'  to group it under one of the ALBUMS
 *     below (id must match). Photos without an album just show in the main grid.
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
    { file: 'construction/construction-01.jpg', caption: 'Foundation Work — Pillar Laying', category: 'construction', date: '2018-06', album: 'construction-2022' },
    { file: 'construction/construction-02.jpg', caption: 'Temple Construction Progress',     category: 'construction', date: '2022-01', album: 'construction-2022' },
    { file: 'construction/construction-03.jpg', caption: 'Garba Griha Construction',         category: 'construction', date: '2022-01', album: 'construction-2022' },
    { file: 'construction/construction-04.jpg', caption: 'Mandapam Structural Work',         category: 'construction', date: '2022-01', album: 'construction-2022' },
    { file: 'construction/construction-07.jpg', caption: 'Rajagopuram Rising — Aerial View',           category: 'construction', date: '2024' },
    { file: 'construction/construction-08.jpg', caption: 'Temple Complex Under Construction — Aerial', category: 'construction', date: '2024' },
    { file: 'construction/construction-09.jpg', caption: 'Construction Progress — Aerial Panorama',    category: 'construction', date: '2024' },

    /* Architecture */
    { file: 'architecture/architecture-01.jpg', caption: 'Dravidian Architectural Detail',   category: 'architecture', date: '2022-01', album: 'architecture-2022' },
    { file: 'architecture/architecture-02.jpg', caption: 'Carved Stone Pillars',             category: 'architecture', date: '2022-01', album: 'architecture-2022' },
    { file: 'architecture/architecture-03.jpg', caption: 'Gopuram Decorative Carvings',      category: 'architecture', date: '2022-01', album: 'architecture-2022' },
    { file: 'architecture/architecture-04.jpg', caption: 'Temple Sculpture Work',            category: 'architecture', date: '2022-01', album: 'architecture-2022' },
    { file: 'architecture/architecture-05.jpg', caption: 'Stone Vigraham Craftsmanship',     category: 'architecture', date: '2022-01', album: 'architecture-2022' },
    { file: 'architecture/architecture-06.jpg', caption: 'Mandapam Column Detail',           category: 'architecture', date: '2022-01', album: 'architecture-2022' },

    /* Campus */
    { file: 'campus/campus-02.jpg', caption: 'Aerial View — Temple Grounds',   category: 'campus', date: '2024', album: 'campus-aerial' },
    { file: 'campus/campus-05.jpg', caption: 'Drone View — Temple Complex',    category: 'campus', date: '2024', album: 'campus-aerial' },
    { file: 'campus/campus-06.jpg', caption: 'Birds Eye View of the Campus',   category: 'campus', date: '2024', album: 'campus-aerial' },

    /* Kumbhabhishekam — Ceremony (2026) */
    { file: 'ceremony/ceremony-01.jpg', caption: 'Kalasam Adorned for Kumbhabhishekam',      category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-02.jpg', caption: 'Sacred Kalasam — Close-up',                category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-03.jpg', caption: 'Nadaswaram & Mridangam Ensemble',          category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-04.jpg', caption: 'Kalasam Prepared with Flowers',             category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-05.jpg', caption: 'Decorated Yagashala Sannidhi',              category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-06.jpg', caption: 'Row of Golden Kalasams',                    category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-07.jpg', caption: 'Acharyas Leading the Kumbhabhishekam Procession', category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-08.jpg', caption: 'Golden Kalasams Ready for Consecration',    category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-09.jpg', caption: 'Kalasams Awaiting the Abhishekam',          category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-10.jpg', caption: 'Dwajastambham',                             category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-11.jpg', caption: 'Decorated Yagashala Interior',              category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-12.jpg', caption: 'Homam Kundam with Naga Deity',              category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },
    { file: 'ceremony/ceremony-13.jpg', caption: 'Yagashala — Rows of Homa Kundams',          category: 'ceremony', date: '2026-06', album: 'kumbhabhishekam-2026' },

    /* Architecture — Post-Kumbhabhishekam (2026) */
    { file: 'architecture/architecture-07.jpg', caption: 'Entrance Arch — Temple Emblem',      category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-08.jpg', caption: 'Grand Entrance Arch — Front View',   category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-09.jpg', caption: 'Entrance Arch with Gopuram Beyond',  category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-10.jpg', caption: 'Rajagopuram Tower — Golden Kalasam Crest', category: 'architecture', date: '2026-06' },
    { file: 'architecture/architecture-11.jpg', caption: 'Rajagopuram Amidst the Palms',       category: 'architecture', date: '2026-06' },
    { file: 'architecture/architecture-12.jpg', caption: 'Rajagopuram — Sculpted Tiers',        category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-13.jpg', caption: 'Main Sanctum Entrance Doorway',       category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-14.jpg', caption: 'Temple Facade with Dwajastambham',    category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-15.jpg', caption: 'Golden Dwajastambham (Flagpost)',     category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-16.jpg', caption: 'Simha Vahanam — Stone Lion Sculpture', category: 'architecture', date: '2026-08' },
    { file: 'architecture/architecture-17.jpg', caption: 'Carved Stone Relief — Durga',          category: 'architecture', date: '2026-08' },

    /* Construction — Finishing Touches (2026) */
    { file: 'construction/construction-05.jpg', caption: 'Stone Deity Carvings — Finishing Work', category: 'construction', date: '2026-06' },
    { file: 'construction/construction-06.jpg', caption: 'Vimanam Dome — Finishing Touches',       category: 'construction', date: '2026-06' },
  ],

  /* ── VIDEOS ────────────────────────────────────── */
  videos: [
    /* Kumbhabhishekam — Sankara TV Coverage */
    {
      embedId:  'flyqideyVyk',
      title:    'Sankara TV — Kumbhabhishekam Day 1 Program',
      category: 'kumbhabhishekam',
      duration: '',
      date:     '2026-06'
    },
    {
      embedId:  'uP7Gd463FaE',
      title:    'Sankara TV — Kumbhabhishekam Day 2 Program',
      category: 'kumbhabhishekam',
      duration: '',
      date:     '2026-06'
    },
    {
      embedId:  'N1oHtqvChtQ',
      title:    'Sankara TV — Kumbhabhishekam Day 3 Program',
      category: 'kumbhabhishekam',
      duration: '',
      date:     '2026-06'
    },
    {
      embedId:  'TTXboWzRI2Y',
      title:    'Sankara TV — Final Day Live (25th June 2026)',
      category: 'kumbhabhishekam',
      duration: '',
      date:     '2026-06'
    },

    /* Temple Walkthroughs */
    {
      embedId:  'dLDfXCSSvaQ',
      title:    'Temple Exterior Walkthrough',
      category: 'walkthrough',
      duration: '',
      date:     '2024'
    },
    {
      embedId:  'Xfwp5T-CfPw',
      title:    'Temple Interior Walkthrough',
      category: 'walkthrough',
      duration: '',
      date:     '2024'
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
      count: 3,
      year:  '2024'
    },
    {
      id:    'kumbhabhishekam-2026',
      name:  'Maha Kumbhabhishekam 2026',
      cover: 'ceremony/ceremony-07.jpg',
      count: 13,
      year:  '2026'
    },
    {
      id:    'historical',
      name:  'Historical Moments',
      cover: 'past/past-01.jpg',
      count: 4,
      year:  '2012–2018',
      type:  'past'
    },
  ],

  /* ── HOME PAGE STRIP ──────────────────────────────
   *  These photos scroll automatically on the home page.
   *  To update:
   *    1. Drop your photo into  images/gallery/<any-subfolder>/
   *    2. Add the filename below as  'subfolder/filename.jpg'
   *    3. To remove a photo, delete its line.
   *  ─────────────────────────────────────────────── */
  homeStrip: [
    'architecture/architecture-14.jpg',
    'ceremony/ceremony-07.jpg',
    'ceremony/ceremony-01.jpg',
    'architecture/architecture-08.jpg',
    'architecture/architecture-06.jpg',
    'architecture/architecture-10.jpg',
    'architecture/architecture-11.jpg',
    'architecture/architecture-12.jpg',
    'ceremony/ceremony-06.jpg',
    'ceremony/ceremony-10.jpg',
  ],

  /* ── PAST PHOTOS ───────────────────────────────── */
  past: [
    { file: 'past/past-01.jpg', caption: 'Early Temple Days',           year: '2012', category: 'campus',       album: 'historical' },
    { file: 'past/past-02.jpg', caption: 'Temple Foundation Ceremony',  year: '2013', category: 'ceremony',     album: 'historical' },
    { file: 'past/past-03.jpg', caption: 'Construction Beginnings',     year: '2014', category: 'construction', album: 'historical' },
    { file: 'past/past-04.jpg', caption: 'Devotees at the Sacred Site', year: '2018', category: 'ceremony',     album: 'historical' },
  ]

};
