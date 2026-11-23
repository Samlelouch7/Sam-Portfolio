/**
 * SAM PARMAR — PORTFOLIO CLIENT ENGINE
 * Full Interactive Tabs • 50 Curated Media Works • Lightbox & Socials
 */

(function () {
  'use strict';

  const ALL_ITEMS = [
  {
    "title": "bow and arrow final",
    "type": "video",
    "mediaUrl": "assets/media/bow and arrow final.mp4",
    "thumbUrl": "assets/thumbs/bow and arrow final_thumb.jpg",
    "section": "2d-animation"
  },
  {
    "title": "Fire final",
    "type": "video",
    "mediaUrl": "assets/media/Fire final.mp4",
    "thumbUrl": "assets/thumbs/Fire final_thumb.jpg",
    "section": "2d-animation"
  },
  {
    "title": "fire 2d",
    "type": "video",
    "mediaUrl": "assets/media/fire 2d.mp4",
    "thumbUrl": "assets/thumbs/fire 2d_thumb.jpg",
    "section": "2d-animation"
  },
  {
    "title": "heavy lift final",
    "type": "video",
    "mediaUrl": "assets/media/heavy lift final.mp4",
    "thumbUrl": "assets/thumbs/heavy lift final_thumb.jpg",
    "section": "2d-animation"
  },
  {
    "title": "personaly walk final",
    "type": "video",
    "mediaUrl": "assets/media/Personality walk final .mp4",
    "thumbUrl": "assets/thumbs/Personality walk final _thumb.jpg",
    "section": "2d-animation"
  },
  {
    "title": "0001-0086",
    "type": "video",
    "mediaUrl": "assets/media/0001-0086.mp4",
    "thumbUrl": "assets/thumbs/0001-0086_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "Ball and tail first pass0001-0096",
    "type": "video",
    "mediaUrl": "assets/media/Ball and tail first pass0001-0096.mp4",
    "thumbUrl": "assets/thumbs/Ball and tail first pass0001-0096_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "Dialoge Emily0001-0067",
    "type": "video",
    "mediaUrl": "assets/media/Dialoge Emily0001-0067.mp4",
    "thumbUrl": "assets/thumbs/Dialoge Emily0001-0067_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "Roar",
    "type": "image",
    "mediaUrl": "assets/media/Roar.png",
    "thumbUrl": "assets/thumbs/Roar_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "scared_shocked front",
    "type": "image",
    "mediaUrl": "assets/media/scared_shocked front.png",
    "thumbUrl": "assets/thumbs/scared_shocked front_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "Walk Girl0001-0092",
    "type": "video",
    "mediaUrl": "assets/media/Walk Girl0001-0092.mp4",
    "thumbUrl": "assets/thumbs/Walk Girl0001-0092_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "Final video[0001-0240]",
    "type": "video",
    "mediaUrl": "assets/media/Final video[0001-0240].mp4",
    "thumbUrl": "assets/thumbs/Final video[0001-0240]_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "front rendered",
    "type": "image",
    "mediaUrl": "assets/media/front rendered.png",
    "thumbUrl": "assets/thumbs/front rendered_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "final front right rendered light2",
    "type": "image",
    "mediaUrl": "assets/media/final front right rendered light2  .png",
    "thumbUrl": "assets/thumbs/final front right rendered light2  _thumb.jpg",
    "section": "3d"
  },
  {
    "title": "cheese burger Color final",
    "type": "image",
    "mediaUrl": "assets/media/cheese burger Color final.png",
    "thumbUrl": "assets/thumbs/cheese burger Color final_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "minion",
    "type": "image",
    "mediaUrl": "assets/media/minion.png",
    "thumbUrl": "assets/thumbs/minion_thumb.jpg",
    "section": "3d"
  },
  {
    "title": "PXL_20250718_192651463",
    "type": "image",
    "mediaUrl": "assets/media/PXL_20250718_192651463.jpg",
    "thumbUrl": "assets/thumbs/PXL_20250718_192651463_thumb.jpg",
    "section": "wood"
  },
  {
    "title": "PXL_20250808_163818549",
    "type": "image",
    "mediaUrl": "assets/media/PXL_20250808_163818549.jpg",
    "thumbUrl": "assets/thumbs/PXL_20250808_163818549_thumb.jpg",
    "section": "wood"
  },
  {
    "title": "PXL_20250812_050723986.NIGHT.RAW-01.COVER",
    "type": "image",
    "mediaUrl": "assets/media/PXL_20250812_050723986.NIGHT.RAW-01.COVER.jpg",
    "thumbUrl": "assets/thumbs/PXL_20250812_050723986.NIGHT.RAW-01.COVER_thumb.jpg",
    "section": "wood"
  },
  {
    "title": "banana",
    "type": "image",
    "mediaUrl": "assets/media/banana .jpg",
    "thumbUrl": "assets/thumbs/banana _thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "solitude",
    "type": "image",
    "mediaUrl": "assets/media/solitude.jpg",
    "thumbUrl": "assets/thumbs/solitude_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "Honey",
    "type": "image",
    "mediaUrl": "assets/media/Honey.jpg",
    "thumbUrl": "assets/thumbs/Honey_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "Gummy bear and eye",
    "type": "image",
    "mediaUrl": "assets/media/Gummy bear and eye.jpg",
    "thumbUrl": "assets/thumbs/Gummy bear and eye_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "August",
    "type": "image",
    "mediaUrl": "assets/media/August.jpg",
    "thumbUrl": "assets/thumbs/August_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "IMG20211014125315",
    "type": "image",
    "mediaUrl": "assets/media/IMG20211014125315.jpg",
    "thumbUrl": "assets/thumbs/IMG20211014125315_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "Wrapped in tradition",
    "type": "image",
    "mediaUrl": "assets/media/Wrapped in tradition.jpg",
    "thumbUrl": "assets/thumbs/Wrapped in tradition_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "Pupil",
    "type": "image",
    "mediaUrl": "assets/media/Pupil .jpg",
    "thumbUrl": "assets/thumbs/Pupil _thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": true
  },
  {
    "title": "Self Centered",
    "type": "image",
    "mediaUrl": "assets/media/Self Centered.jpeg",
    "thumbUrl": "assets/thumbs/Self Centered_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Girrafe",
    "type": "image",
    "mediaUrl": "assets/media/Girrafe.jpg",
    "thumbUrl": "assets/thumbs/Girrafe_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Eye",
    "type": "image",
    "mediaUrl": "assets/media/Eye.jpg",
    "thumbUrl": "assets/thumbs/Eye_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "colored pencil",
    "type": "image",
    "mediaUrl": "assets/media/colored pencil.jpg",
    "thumbUrl": "assets/thumbs/colored pencil_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Penny wise",
    "type": "image",
    "mediaUrl": "assets/media/Penny wise.jpg",
    "thumbUrl": "assets/thumbs/Penny wise_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Hope",
    "type": "image",
    "mediaUrl": "assets/media/Hope.jpg",
    "thumbUrl": "assets/thumbs/Hope_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Save",
    "type": "image",
    "mediaUrl": "assets/media/Save.jpg",
    "thumbUrl": "assets/thumbs/Save_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Screenshot 2026-11-08 at 3.05.30\u202fPM",
    "type": "image",
    "mediaUrl": "assets/media/Screenshot 2026-11-08 at 3.05.30\u202fPM.png",
    "thumbUrl": "assets/thumbs/Screenshot 2026-11-08 at 3.05.30\u202fPM_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Iron man",
    "type": "image",
    "mediaUrl": "assets/media/Iron man.jpg",
    "thumbUrl": "assets/thumbs/Iron man_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Dragon Wall art",
    "type": "image",
    "mediaUrl": "assets/media/Dragon Wall art.jpg",
    "thumbUrl": "assets/thumbs/Dragon Wall art_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Tokyo Ghoul",
    "type": "image",
    "mediaUrl": "assets/media/Tokyo Ghoul.jpg",
    "thumbUrl": "assets/thumbs/Tokyo Ghoul_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "PXL_20221212_012753429~2",
    "type": "image",
    "mediaUrl": "assets/media/PXL_20221212_012753429~2.jpg",
    "thumbUrl": "assets/thumbs/PXL_20221212_012753429~2_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "IMG20211014130103",
    "type": "image",
    "mediaUrl": "assets/media/IMG20211014130103.jpg",
    "thumbUrl": "assets/thumbs/IMG20211014130103_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "IMG20211014130049",
    "type": "image",
    "mediaUrl": "assets/media/IMG20211014130049.jpg",
    "thumbUrl": "assets/thumbs/IMG20211014130049_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "PXL_20230730_035911183",
    "type": "image",
    "mediaUrl": "assets/media/PXL_20230730_035911183.jpg",
    "thumbUrl": "assets/thumbs/PXL_20230730_035911183_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "IMG_0174",
    "type": "image",
    "mediaUrl": "assets/media/IMG_0174.JPG",
    "thumbUrl": "assets/thumbs/IMG_0174_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "1691130504949",
    "type": "image",
    "mediaUrl": "assets/media/1691130504949.jpg",
    "thumbUrl": "assets/thumbs/1691130504949_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Untitled_Artwork (1)",
    "type": "image",
    "mediaUrl": "assets/media/Untitled_Artwork (1).jpg",
    "thumbUrl": "assets/thumbs/Untitled_Artwork (1)_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Project (20230815095349)",
    "type": "image",
    "mediaUrl": "assets/media/Project (20230815095349).jpg",
    "thumbUrl": "assets/thumbs/Project (20230815095349)_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "IMG_0183",
    "type": "image",
    "mediaUrl": "assets/media/IMG_0183.JPG",
    "thumbUrl": "assets/thumbs/IMG_0183_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "IMG_0008",
    "type": "image",
    "mediaUrl": "assets/media/IMG_0008.jpg",
    "thumbUrl": "assets/thumbs/IMG_0008_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "Untitled_Artwork",
    "type": "image",
    "mediaUrl": "assets/media/Untitled_Artwork.png",
    "thumbUrl": "assets/thumbs/Untitled_Artwork_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  },
  {
    "title": "IMG_0184",
    "type": "image",
    "mediaUrl": "assets/media/IMG_0184.JPG",
    "thumbUrl": "assets/thumbs/IMG_0184_thumb.jpg",
    "section": "pencil-digital",
    "is_inspired": false
  }
];

  let activeModalIndex = -1;

  // DOM Elements
  const tabButtons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.portfolio-section');
  const cards = document.querySelectorAll('.media-card');
  const modal = document.getElementById('lightboxModal');
  const modalStage = document.getElementById('lightboxStage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalInspiredNote = document.getElementById('modalInspiredWarning');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const copyBtn = document.getElementById('copyBtn');
  const toastNotice = document.getElementById('toastNotice');

  function init() {
    setupTabs();
    setupCards();
    setupModal();
    setupSharing();
  }

  // Tab Filtering & Switching
  function setupTabs() {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        sections.forEach(sec => {
          const secId = sec.getAttribute('data-section-id');
          if (targetTab === 'all' || secId === targetTab) {
            sec.classList.remove('tab-hidden');
          } else {
            sec.classList.add('tab-hidden');
          }
        });

        // Smooth scroll to top of content when tab changes
        if (targetTab !== 'all') {
          const targetSec = document.getElementById(targetTab);
          if (targetSec) {
            targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // Media Cards (Hover Play + Click)
  function setupCards() {
    cards.forEach(card => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      const isVideo = card.querySelector('video') !== null;

      if (isVideo) {
        const vid = card.querySelector('.card-hover-video');
        const thumb = card.querySelector('.card-thumb');

        card.addEventListener('mouseenter', () => {
          if (vid) {
            vid.style.display = 'block';
            thumb.style.opacity = '0';
            vid.play().catch(() => {});
          }
        });

        card.addEventListener('mouseleave', () => {
          if (vid) {
            vid.pause();
            vid.currentTime = 0;
            vid.style.display = 'none';
            thumb.style.opacity = '1';
          }
        });
      }

      card.addEventListener('click', () => openModal(idx));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(idx);
        }
      });
    });
  }

  // Lightbox Modal
  function openModal(idx) {
    if (idx < 0 || idx >= ALL_ITEMS.length) return;
    activeModalIndex = idx;
    const item = ALL_ITEMS[activeModalIndex];

    modalTitle.textContent = item.title;
    modalCategory.textContent = (item.section || '').toUpperCase();

    if (item.is_inspired) {
      modalInspiredNote.style.display = 'block';
      modalInspiredNote.textContent = 'Master study inspired by Jono Dry (not an original composition).';
    } else {
      modalInspiredNote.style.display = 'none';
    }

    modalStage.innerHTML = '';
    if (item.type === 'video') {
      const vid = document.createElement('video');
      vid.src = item.mediaUrl;
      vid.controls = true;
      vid.autoplay = true;
      vid.loop = true;
      vid.playsInline = true;
      modalStage.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src = item.mediaUrl;
      img.alt = item.title;
      modalStage.appendChild(img);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const vid = modalStage.querySelector('video');
    if (vid) {
      vid.pause();
      vid.src = '';
    }
    modalStage.innerHTML = '';
  }

  function setupModal() {
    if (!modal) return;
    modalCloseBtn.addEventListener('click', closeModal);
    modal.querySelector('.lightbox-backdrop').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') {
        const next = (activeModalIndex + 1) % ALL_ITEMS.length;
        openModal(next);
      }
      if (e.key === 'ArrowLeft') {
        const prev = (activeModalIndex - 1 + ALL_ITEMS.length) % ALL_ITEMS.length;
        openModal(prev);
      }
    });
  }

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-text').textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => toastNotice.classList.remove('show'), 3000);
  }

  function setupSharing() {
    const copyHandler = () => {
      const url = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => showToast('Link copied to clipboard!'));
      } else {
        showToast('Link: ' + url);
      }
    };
    if (copyBtn) copyBtn.addEventListener('click', copyHandler);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
