/**
 * SAM PARMAR — ATELIER PORTFOLIO ENGINE
 * Vanilla JavaScript • Zero Dependencies • Offline-First & Remote-Ready
 */

(function () {
  'use strict';

  // Portfolio items data embedded directly so it works offline via file:// as well as over HTTP(S)
  const PORTFOLIO_DATA = {
    artist: {
      name: "Sam Parmar",
      title: "Animator, 3D Artist & Draftsman",
      tagline: "Crafting movement, spatial worlds, and hyper-detailed drawings with timeless discipline.",
      location: "Canada / US",
      bio: "I am an animator and visual craftsman operating across hand-drawn 2D animation, Blender 3D environment & character workflows, classical graphite draftsmanship, and physical timber fabrication. My work focuses on weight, anatomical truth, expressive timing, and meticulous physical texturing.",
      socials: [
        {
          platform: "Instagram",
          handle: "@art.by.sam7",
          url: "https://www.instagram.com/art.by.sam7/",
          icon: "instagram",
          label: "Artwork, Sketches & Renders"
        },
        {
          platform: "YouTube",
          handle: "@samparmar1522",
          url: "https://www.youtube.com/@samparmar1522",
          icon: "youtube",
          label: "Animation Breakdown & Reels"
        }
      ],
      stats: [
        { number: "24", label: "Featured Works" },
        { number: "2D / 3D", label: "Motion Disciplines" },
        { number: "100%", label: "Original Craft" }
      ]
    },
    projects: [
      {
        id: "bow-arrow",
        title: "Bow & Arrow Mechanics",
        category: "2d-animation",
        source: "2D_Animations/bow and arrow final.mp4",
        type: "video",
        year: "2026",
        tags: ["2D Animation", "Action Mechanics", "Arcs & Timing"],
        desc: "Character action study exploring tension, release dynamics, anticipation, and recoil follow-through in a continuous dynamic draw sequence.",
        mediaUrl: "assets/media/bow-arrow.mp4",
        thumbUrl: "assets/thumbs/bow-arrow.jpg",
        tools: "Hand-Drawn 2D, 24fps"
      },
      {
        id: "personality-walk",
        title: "Personality Walk Cycle",
        category: "2d-animation",
        source: "fall 2026/2d/Personality walk final .mp4",
        type: "video",
        year: "2026",
        tags: ["2D Animation", "Character Locomotion", "Weight & Attitude"],
        desc: "Full-body walk cycle emphasizing character attitude, hip tilt, spine articulation, and secondary drag through purposeful pacing.",
        mediaUrl: "assets/media/personality-walk.mp4",
        thumbUrl: "assets/thumbs/personality-walk.jpg",
        tools: "2D Animation, 24fps"
      },
      {
        id: "heavy-lift",
        title: "Heavy Lift Body Mechanics",
        category: "2d-animation",
        source: "fall 2026/2d/heavy lift final.mp4",
        type: "video",
        year: "2026",
        tags: ["2D Animation", "Weight Distribution", "Squash & Stretch"],
        desc: "Physical weight study demonstrating counterbalancing, spine strain, leg drive, and force anticipation lifting an immovable mass.",
        mediaUrl: "assets/media/heavy-lift.mp4",
        thumbUrl: "assets/thumbs/heavy-lift.jpg",
        tools: "2D Character Animation, 24fps"
      },
      {
        id: "fluid-splash",
        title: "Fluid Splash & Impact VFX",
        category: "2d-animation",
        source: "fall 2026/2d/1-381 Splash final.mp4",
        type: "video",
        year: "2026",
        tags: ["2D VFX", "Fluid Dynamics", "Hand-drawn Effects"],
        desc: "High-energy hand-drawn fluid splash animation tracking droplet dispersion, surface tension, and secondary ripples upon impact.",
        mediaUrl: "assets/media/fluid-splash.mp4",
        thumbUrl: "assets/thumbs/fluid-splash.jpg",
        tools: "Hand-drawn VFX, 24fps"
      },
      {
        id: "secondary-hair-motion",
        title: "Secondary Hair Dynamics",
        category: "2d-animation",
        source: "fall 2026/2d/hair flow.mp4",
        type: "video",
        year: "2026",
        tags: ["2D Animation", "Secondary Motion", "Wave Principle"],
        desc: "Fluid overlapping action study demonstrating wave action, drag, and inertia through flowing hair strands responding to sudden movement.",
        mediaUrl: "assets/media/secondary-hair-motion.mp4",
        thumbUrl: "assets/thumbs/secondary-hair-motion.jpg",
        tools: "2D Frame-by-Frame, 24fps"
      },
      {
        id: "fire-vfx",
        title: "Hand-Drawn Fire Dynamics",
        category: "2d-animation",
        source: "fall 2026/2d/Fire 1 .mp4",
        type: "video",
        year: "2026",
        tags: ["2D VFX", "Organic Motion", "Morphology"],
        desc: "Hand-animated flame study emphasizing volume preservation, dissipation timing, and rhythmic licking curves of combustion.",
        mediaUrl: "assets/media/fire-vfx.mp4",
        thumbUrl: "assets/thumbs/fire-vfx.jpg",
        tools: "Hand-Drawn 2D Effects"
      },
      {
        id: "fabric-flow",
        title: "Cloth & Fabric Flow",
        category: "2d-animation",
        source: "fall 2026/2d/dress.mp4",
        type: "video",
        year: "2026",
        tags: ["2D Animation", "Cloth Simulation", "Overlap"],
        desc: "Investigation of fabric mass, breeze interaction, and overlapping wave motion responding to hip motion.",
        mediaUrl: "assets/media/fabric-flow.mp4",
        thumbUrl: "assets/thumbs/fabric-flow.jpg",
        tools: "2D Animation, 24fps"
      },
      {
        id: "cinematic-sequence",
        title: "Story Sequence & Scene Cuts",
        category: "2d-animation",
        source: "fall 2026/2d/Final Project/untitled folder/Untitled 3 - all shots.mp4",
        type: "video",
        year: "2026",
        tags: ["2D Animation", "Cinematography", "Multi-Shot"],
        desc: "Multi-camera animated narrative sequence exploring dynamic framing, shot transitions, and dramatic character beats.",
        mediaUrl: "assets/media/cinematic-sequence.mp4",
        thumbUrl: "assets/thumbs/cinematic-sequence.jpg",
        tools: "2D Animation & Storyboarding"
      },
      {
        id: "sci-fi-cyberpunk",
        title: "Cyberpunk Neon District",
        category: "3d-cgi",
        source: "Blender assignments/scene scifi/final front right rendered light2  .png",
        type: "image",
        year: "2026",
        tags: ["Blender Cycles", "Lighting & Shading", "Environment Art"],
        desc: "Atmospheric 3D cyberpunk street environment featuring volumetric fog, neon spill, emissive shaders, and distressed architectural texturing.",
        mediaUrl: "assets/media/sci-fi-cyberpunk.png",
        thumbUrl: "assets/thumbs/sci-fi-cyberpunk.jpg",
        tools: "Blender 4.x, Cycles Engine, Procedural Shaders"
      },
      {
        id: "sci-fi-alley-lighting",
        "title": "Cyberpunk Lighting Pass",
        category: "3d-cgi",
        source: "Blender assignments/scene scifi/final front right rendered light .png",
        type: "image",
        year: "2026",
        tags: ["Blender", "Color Grading", "Lighting Study"],
        desc: "High-contrast lighting breakdown balancing warm sodium street lamps against cool cyan accent fills across industrial facades.",
        mediaUrl: "assets/media/sci-fi-alley-lighting.png",
        thumbUrl: "assets/thumbs/sci-fi-alley-lighting.jpg",
        tools: "Blender, Photometric Lights"
      },
      {
        id: "3d-character-walk",
        title: "3D Bipedal Walk Cycle",
        category: "3d-cgi",
        source: "fall 2026/3d/walk/Walk final .mp4",
        type: "video",
        year: "2026",
        tags: ["3D Animation", "Blender Rigging", "Locomotion"],
        desc: "3D character walk cycle exploring pelvis translation, foot rolls, clavicle counterbalancing, and clean weight shifts in Blender.",
        mediaUrl: "assets/media/3d-character-walk.mp4",
        thumbUrl: "assets/thumbs/3d-character-walk.jpg",
        tools: "Blender Rigging & Graph Editor"
      },
      {
        id: "ball-tail-overlap",
        title: "Ball & Tail Overlap Study",
        category: "3d-cgi",
        source: "fall 2026/3d/Ball and tail first pass0001-0104 final.mp4",
        type: "video",
        year: "2026",
        tags: ["3D Animation", "Follow-Through", "Principles"],
        desc: "Classical animation principle study rendered in 3D: successive breaking of joints, flexible trailing, and deceleration settling.",
        mediaUrl: "assets/media/ball-tail-overlap.mp4",
        thumbUrl: "assets/thumbs/ball-tail-overlap.jpg",
        tools: "Blender 3D, Graph Editor Curve Tuning"
      },
      {
        id: "3d-cinematic-flythrough",
        title: "Atmospheric 3D Scene Study",
        category: "3d-cgi",
        source: "Blender assignments/final/Final video[0001-0240].mp4",
        type: "video",
        year: "2025",
        tags: ["3D Animation", "Camera Motion", "Atmosphere"],
        desc: "Cinematic camera choreography through a textured 3D landscape with physical depth of field and environmental scattering.",
        mediaUrl: "assets/media/3d-cinematic-flythrough.mp4",
        thumbUrl: "assets/thumbs/3d-cinematic-flythrough.jpg",
        tools: "Blender, Camera Rig, Physical Fog"
      },
      {
        id: "character-sculpt-roar",
        title: "Character Expression: Primal Roar",
        category: "3d-cgi",
        source: "fall 2026/3d/final pose/Roar front.png",
        type: "image",
        year: "2026",
        tags: ["3D Sculpting", "Facial Topology", "Expression"],
        desc: "Character facial modeling study focusing on dynamic facial muscular deformation, jaw depression, and expressive silhouette.",
        mediaUrl: "assets/media/character-sculpt-roar.png",
        thumbUrl: "assets/thumbs/character-sculpt-roar.jpg",
        tools: "Blender Sculpt Mode & Retopology"
      },
      {
        id: "character-sculpt-shock",
        title: "Character Expression: Shock",
        category: "3d-cgi",
        source: "fall 2026/3d/final pose/Shoked front.png",
        type: "image",
        year: "2026",
        tags: ["3D Sculpting", "Expression", "Posing"],
        desc: "Expressive character key pose exploring eye-line elevation, brow furrowing, and asymmetrical mouth tension.",
        mediaUrl: "assets/media/character-sculpt-shock.png",
        thumbUrl: "assets/thumbs/character-sculpt-shock.jpg",
        tools: "Digital Sculpting & Key Posing"
      },
      {
        id: "surreal-hand-water",
        title: "Submersion & Tension (Surrealist Study)",
        category: "fine-art",
        source: "Artwork/Graphite drawings/jono dry inspired/IMG20211014125315.jpg",
        type: "image",
        year: "2022",
        tags: ["Graphite on Paper", "Surrealism", "Hyperrealism"],
        desc: "Intricate graphite drawing exploring skin folds, water displacement, micro-reflections, and dark value saturation inspired by Jono Dry.",
        mediaUrl: "assets/media/surreal-hand-water.jpg",
        thumbUrl: "assets/thumbs/surreal-hand-water.jpg",
        tools: "Staedtler & Faber-Castell Graphite (9B–2H), Blending Stumps"
      },
      {
        id: "metamorphosis-sketch",
        title: "Metamorphosis in Lead",
        category: "fine-art",
        source: "Artwork/Graphite drawings/jono dry inspired/PXL_20221203_232656865 (1).jpg",
        type: "image",
        year: "2022",
        tags: ["Graphite Pencil", "Value Structure", "Fine Art"],
        desc: "High-contrast graphite master rendering with seamless transitions from velvety 8B matte blacks to raw paper highlights.",
        mediaUrl: "assets/media/metamorphosis-sketch.jpg",
        thumbUrl: "assets/thumbs/metamorphosis-sketch.jpg",
        tools: "Graphite on Heavyweight Smooth Bristol"
      },
      {
        id: "anatomical-hands",
        title: "Anatomical Study: Grip & Form",
        category: "fine-art",
        source: "Artwork/Graphite drawings/original/PXL_20241013_053909136.RAW-01.COVER (1).jpg",
        type: "image",
        year: "2024",
        tags: ["Graphite on Bristol", "Anatomy", "Texture"],
        desc: "Deep study of hand anatomy, tendon articulation, bone landmarks, and skin pore texturing rendered with meticulous pencil control.",
        mediaUrl: "assets/media/anatomical-hands.jpg",
        thumbUrl: "assets/thumbs/anatomical-hands.jpg",
        tools: "Graphite pencils & kneaded eraser"
      },
      {
        id: "classical-portraiture",
        title: "Classical Portraiture Study",
        category: "fine-art",
        source: "Artwork/Graphite drawings/portrait/PXL_20230730_035911183.jpg",
        type: "image",
        year: "2023",
        tags: ["Traditional Portrait", "Chiaroscuro", "Graphite"],
        desc: "Portrait study in graphite utilizing classical chiaroscuro lighting, subtle facial planes, and expressive gaze capture.",
        mediaUrl: "assets/media/classical-portraiture.jpg",
        thumbUrl: "assets/thumbs/classical-portraiture.jpg",
        tools: "Graphite on archival paper"
      },
      {
        id: "monumental-lead-study",
        title: "Tonal Synthesis & Texture",
        category: "fine-art",
        source: "Artwork/Graphite drawings/original/PXL_20260102_223115885.RAW-01 (2).jpg",
        type: "image",
        year: "2026",
        tags: ["Graphite & Charcoal", "Tonal Mastery", "Realism"],
        desc: "Complex tonal rendering combining graphite and carbon for deep optical densities and tactile surface variance.",
        mediaUrl: "assets/media/monumental-lead-study.jpg",
        thumbUrl: "assets/thumbs/monumental-lead-study.jpg",
        tools: "Carbon & Graphite Composite"
      },
      {
        id: "figure-portrait-study",
        title: "Intimate Gaze: Charcoal & Lead",
        category: "fine-art",
        source: "Artwork/Graphite drawings/portrait/IMG20211014125716.jpg",
        type: "image",
        year: "2021",
        tags: ["Portraiture", "Charcoal & Graphite", "Lighting"],
        desc: "Delicate rendering capturing quiet human expression, hair fiber delineation, and soft edge control.",
        mediaUrl: "assets/media/figure-portrait-study.jpg",
        thumbUrl: "assets/thumbs/figure-portrait-study.jpg",
        tools: "Graphite & Charcoal"
      },
      {
        id: "woodcraft-joinery-01",
        title: "Handcrafted Timber Sculpture & Form",
        category: "physical-craft",
        source: "Artwork/Woodwork/PXL_20250718_192651463.jpg",
        type: "image",
        year: "2025",
        tags: ["Fine Woodworking", "Natural Grain", "Tactile Craft"],
        desc: "Precision joinery and organic contouring celebrating natural wood grain, chatoyancy, and hand-rubbed oil finish.",
        mediaUrl: "assets/media/woodcraft-joinery-01.jpg",
        thumbUrl: "assets/thumbs/woodcraft-joinery-01.jpg",
        tools: "Hand planes, Japanese pull saw, Hardwood, Tung oil"
      },
      {
        id: "woodcraft-joinery-02",
        title: "Bespoke Hardwood Construction",
        category: "physical-craft",
        source: "Artwork/Woodwork/PXL_20250808_163818549.jpg",
        type: "image",
        year: "2025",
        tags: ["Wood Craft", "Joinery", "Functional Art"],
        desc: "Hand-planed hardwood structure detailing edge bevels, dimensional stability, and durable traditional craftsmanship.",
        mediaUrl: "assets/media/woodcraft-joinery-02.jpg",
        thumbUrl: "assets/thumbs/woodcraft-joinery-02.jpg",
        tools: "Traditional Joinery & Finishing"
      },
      {
        id: "digital-concept-01",
        title: "Atmospheric Digital Painting",
        category: "fine-art",
        source: "Artwork/digital /Project (20230815095349).jpg",
        type: "image",
        year: "2023",
        tags: ["Digital Painting", "Atmosphere", "Color Harmony"],
        desc: "Expressive digital brushwork balancing loose atmospheric suggestion with tight focal definition.",
        mediaUrl: "assets/media/digital-concept-01.jpg",
        thumbUrl: "assets/thumbs/digital-concept-01.jpg",
        tools: "Digital Stylus & Custom Textures"
      }
    ]
  };

  // State Management
  let currentCategory = 'all';
  let activeModalIndex = -1;
  let filteredProjects = [...PORTFOLIO_DATA.projects];
  let currentPlaybackRate = 1.0;

  // DOM Elements Cache
  const worksGrid = document.getElementById('worksGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const visibleCountEl = document.getElementById('visibleCount');
  const studioClockEl = document.getElementById('studioClock');
  const shareBtn = document.getElementById('sharePortfolioBtn');
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const toastNotice = document.getElementById('toastNotice');

  // Modal Elements
  const modal = document.getElementById('lightboxModal');
  const modalStage = document.getElementById('lightboxMediaStage');
  const modalCategory = document.getElementById('drawerCategory');
  const modalTitle = document.getElementById('drawerTitle');
  const modalDesc = document.getElementById('drawerDesc');
  const modalYear = document.getElementById('drawerYear');
  const modalTools = document.getElementById('drawerTools');
  const modalTags = document.getElementById('drawerTags');
  const modalCloseBtn = document.getElementById('lightboxCloseBtn');
  const modalPrevBtn = document.getElementById('lightboxPrevBtn');
  const modalNextBtn = document.getElementById('lightboxNextBtn');

  // SVG Icons
  const ICONS = {
    play: '<svg viewBox="0 0 24 24"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>',
    pause: '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
    video: '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
    image: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>'
  };

  // Initialize
  function init() {
    renderGrid();
    setupFilters();
    setupModalEvents();
    setupLiveClock();
    setupSharing();
  }

  // Update Live Clock (Local Time for studio feel)
  function setupLiveClock() {
    function tick() {
      if (!studioClockEl) return;
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      studioClockEl.textContent = `${timeStr} Local`;
    }
    tick();
    setInterval(tick, 1000);
  }

  // Render Grid
  function renderGrid() {
    if (!worksGrid) return;
    worksGrid.innerHTML = '';

    filteredProjects = currentCategory === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === currentCategory);

    if (visibleCountEl) {
      visibleCountEl.textContent = `Showing ${filteredProjects.length} of ${PORTFOLIO_DATA.projects.length} Works`;
    }

    filteredProjects.forEach((proj, idx) => {
      const card = document.createElement('article');
      card.className = 'work-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View details of ${proj.title}`);

      const isVideo = proj.type === 'video';
      const badgeIcon = isVideo ? ICONS.video : ICONS.image;
      const badgeLabel = isVideo ? 'Motion' : 'Still';

      card.innerHTML = `
        <div class="card-media-wrapper">
          <img src="${proj.thumbUrl}" alt="${proj.title}" loading="lazy" class="card-thumb" />
          ${isVideo ? `<video src="${proj.mediaUrl}" muted loop playsinline preload="none" class="card-hover-video" style="display:none;"></video>` : ''}
          <div class="media-type-badge">
            ${badgeIcon}
            <span>${badgeLabel}</span>
          </div>
          <div class="play-cue-overlay">
            <div class="play-cue-btn">
              ${isVideo ? ICONS.play : ICONS.image}
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-header-line">
            <h3 class="card-title">${proj.title}</h3>
            <span class="card-year">${proj.year}</span>
          </div>
          <p class="card-desc">${proj.desc}</p>
          <div class="card-tags">
            ${proj.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
          </div>
        </div>
      `;

      // Hover-to-preview video behavior
      if (isVideo) {
        const hoverVideo = card.querySelector('.card-hover-video');
        const thumbImg = card.querySelector('.card-thumb');

        card.addEventListener('mouseenter', () => {
          if (hoverVideo) {
            hoverVideo.style.display = 'block';
            thumbImg.style.opacity = '0';
            hoverVideo.play().catch(() => {});
          }
        });

        card.addEventListener('mouseleave', () => {
          if (hoverVideo) {
            hoverVideo.pause();
            hoverVideo.currentTime = 0;
            hoverVideo.style.display = 'none';
            thumbImg.style.opacity = '1';
          }
        });
      }

      // Click to open in Lightbox
      card.addEventListener('click', () => {
        openModal(idx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(idx);
        }
      });

      worksGrid.appendChild(card);
    });
  }

  // Filter Setup
  function setupFilters() {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.getAttribute('data-category');
        renderGrid();
      });
    });
  }

  // Modal / Theater Lightbox
  function openModal(index) {
    if (index < 0 || index >= filteredProjects.length) return;
    activeModalIndex = index;
    const proj = filteredProjects[activeModalIndex];

    modalCategory.textContent = proj.category.replace('-', ' ').toUpperCase();
    modalTitle.textContent = proj.title;
    modalDesc.textContent = proj.desc;
    modalYear.textContent = proj.year;
    modalTools.textContent = proj.tools || 'Original Artifact';
    modalTags.innerHTML = proj.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

    // Clear stage
    modalStage.innerHTML = '';

    if (proj.type === 'video') {
      const video = document.createElement('video');
      video.src = proj.mediaUrl;
      video.controls = false; // Custom controls
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.playbackRate = currentPlaybackRate;

      // Custom controls container
      const controlsBar = document.createElement('div');
      controlsBar.className = 'theater-video-controls';
      controlsBar.innerHTML = `
        <div class="video-scrub-bar" id="theaterScrubBar">
          <div class="video-scrub-progress" id="theaterScrubProgress"></div>
        </div>
        <div class="video-controls-row">
          <div class="video-ctrl-left">
            <button class="ctrl-btn" id="theaterPlayBtn" aria-label="Play/Pause">
              ${ICONS.pause}
            </button>
            <span class="time-readout" id="theaterTime">00:00 / 00:00</span>
          </div>
          <div class="video-ctrl-right">
            <button class="speed-select-btn" id="theaterSpeedBtn" title="Cycle playback speed for animation study">${currentPlaybackRate}x</button>
            <button class="ctrl-btn" id="theaterLoopBtn" title="Toggle Loop" style="color:var(--accent-ember);">
              <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
            </button>
            <button class="ctrl-btn" id="theaterFullscreenBtn" aria-label="Fullscreen">
              <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
            </button>
          </div>
        </div>
      `;

      modalStage.appendChild(video);
      modalStage.appendChild(controlsBar);

      // Wire controls
      const playBtn = controlsBar.querySelector('#theaterPlayBtn');
      const scrubBar = controlsBar.querySelector('#theaterScrubBar');
      const scrubProgress = controlsBar.querySelector('#theaterScrubProgress');
      const timeReadout = controlsBar.querySelector('#theaterTime');
      const speedBtn = controlsBar.querySelector('#theaterSpeedBtn');
      const loopBtn = controlsBar.querySelector('#theaterLoopBtn');
      const fullscreenBtn = controlsBar.querySelector('#theaterFullscreenBtn');

      function formatTime(sec) {
        if (isNaN(sec)) return '00:00';
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = Math.floor(sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
      }

      playBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playBtn.innerHTML = ICONS.pause;
        } else {
          video.pause();
          playBtn.innerHTML = ICONS.play;
        }
      });

      video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const pct = (video.currentTime / video.duration) * 100;
        scrubProgress.style.width = `${pct}%`;
        timeReadout.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
      });

      scrubBar.addEventListener('click', (e) => {
        const rect = scrubBar.getBoundingClientRect();
        const clickPos = (e.clientX - rect.left) / rect.width;
        video.currentTime = clickPos * video.duration;
      });

      speedBtn.addEventListener('click', () => {
        const speeds = [0.5, 1.0, 1.5, 2.0];
        const nextIdx = (speeds.indexOf(currentPlaybackRate) + 1) % speeds.length;
        currentPlaybackRate = speeds[nextIdx];
        video.playbackRate = currentPlaybackRate;
        speedBtn.textContent = `${currentPlaybackRate}x`;
      });

      loopBtn.addEventListener('click', () => {
        video.loop = !video.loop;
        loopBtn.style.color = video.loop ? 'var(--accent-ember)' : 'var(--text-muted)';
      });

      fullscreenBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
      });

      video.play().catch(() => {
        playBtn.innerHTML = ICONS.play;
      });

    } else {
      const img = document.createElement('img');
      img.src = proj.mediaUrl;
      img.alt = proj.title;
      modalStage.appendChild(img);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Pause any playing video inside stage
    const video = modalStage.querySelector('video');
    if (video) {
      video.pause();
      video.src = '';
    }
    modalStage.innerHTML = '';
  }

  function nextModalItem() {
    if (filteredProjects.length === 0) return;
    const nextIdx = (activeModalIndex + 1) % filteredProjects.length;
    openModal(nextIdx);
  }

  function prevModalItem() {
    if (filteredProjects.length === 0) return;
    const prevIdx = (activeModalIndex - 1 + filteredProjects.length) % filteredProjects.length;
    openModal(prevIdx);
  }

  function setupModalEvents() {
    if (!modal) return;

    modalCloseBtn.addEventListener('click', closeModal);
    modalPrevBtn.addEventListener('click', prevModalItem);
    modalNextBtn.addEventListener('click', nextModalItem);

    modal.querySelector('.lightbox-backdrop').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModalItem();
      if (e.key === 'ArrowLeft') prevModalItem();
      if (e.key === ' ') {
        const vid = modalStage.querySelector('video');
        if (vid) {
          e.preventDefault();
          if (vid.paused) vid.play();
          else vid.pause();
        }
      }
    });
  }

  // Sharing & Toast
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-text').textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }

  function setupSharing() {
    const shareAction = () => {
      const shareUrl = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast('Portfolio link copied to clipboard!');
        }).catch(() => {
          showToast('Link: ' + shareUrl);
        });
      } else {
        showToast('Link: ' + shareUrl);
      }
    };

    if (shareBtn) shareBtn.addEventListener('click', shareAction);
    if (copyLinkBtn) copyLinkBtn.addEventListener('click', shareAction);
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
