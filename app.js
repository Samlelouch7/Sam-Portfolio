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
,
{
    "title": "Holding the Luck | Drawing Process | Sam Parmar",
    "type": "youtube",
    "videoId": "S4OvkfncqCo",
    "duration": "2:51",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=S4OvkfncqCo",
    "embedUrl": "https://www.youtube-nocookie.com/embed/S4OvkfncqCo",
    "thumbUrl": "assets/thumbs/yt_S4OvkfncqCo.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/S4OvkfncqCo/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "Eye tutorial | Drawing | Art",
    "type": "youtube",
    "videoId": "TZvtSmOazdQ",
    "duration": "5:54",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=TZvtSmOazdQ",
    "embedUrl": "https://www.youtube-nocookie.com/embed/TZvtSmOazdQ",
    "thumbUrl": "assets/thumbs/yt_TZvtSmOazdQ.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/TZvtSmOazdQ/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "AUGUST",
    "type": "youtube",
    "videoId": "PAp_J2vjLpI",
    "duration": "1:55",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=PAp_J2vjLpI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/PAp_J2vjLpI",
    "thumbUrl": "assets/thumbs/yt_PAp_J2vjLpI.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/PAp_J2vjLpI/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "GUMMY BEAR AND THE EYE",
    "type": "youtube",
    "videoId": "28-4VOT8ZKk",
    "duration": "1:29",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=28-4VOT8ZKk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/28-4VOT8ZKk",
    "thumbUrl": "assets/thumbs/yt_28-4VOT8ZKk.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/28-4VOT8ZKk/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "How I Draw Time Lapse DOMINIUM",
    "type": "youtube",
    "videoId": "ZxlQLFIOcHQ",
    "duration": "2:21",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=ZxlQLFIOcHQ",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ZxlQLFIOcHQ",
    "thumbUrl": "assets/thumbs/yt_ZxlQLFIOcHQ.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/ZxlQLFIOcHQ/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "MY MOST FAVOURITE DRAWING",
    "type": "youtube",
    "videoId": "Fm8u6m1Phs0",
    "duration": "0:15",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=Fm8u6m1Phs0",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Fm8u6m1Phs0",
    "thumbUrl": "assets/thumbs/yt_Fm8u6m1Phs0.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/Fm8u6m1Phs0/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "SELF CENTERED | SAM PARMAR",
    "type": "youtube",
    "videoId": "6RneRNUUBr4",
    "duration": "2:42",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=6RneRNUUBr4",
    "embedUrl": "https://www.youtube-nocookie.com/embed/6RneRNUUBr4",
    "thumbUrl": "assets/thumbs/yt_6RneRNUUBr4.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/6RneRNUUBr4/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "WRAPPED IN TRADITION time lapse",
    "type": "youtube",
    "videoId": "wbmbCBVOmVY",
    "duration": "5:35",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=wbmbCBVOmVY",
    "embedUrl": "https://www.youtube-nocookie.com/embed/wbmbCBVOmVY",
    "thumbUrl": "assets/thumbs/yt_wbmbCBVOmVY.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/wbmbCBVOmVY/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "My Favourite Drawings #shorts",
    "type": "youtube",
    "videoId": "qgq3nURNcX8",
    "duration": "0:09",
    "is_short": true,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=qgq3nURNcX8",
    "embedUrl": "https://www.youtube-nocookie.com/embed/qgq3nURNcX8",
    "thumbUrl": "assets/thumbs/yt_qgq3nURNcX8.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/qgq3nURNcX8/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "pencil on paper drawing time lapse #shorts",
    "type": "youtube",
    "videoId": "fQmai-MQrWk",
    "duration": "0:37",
    "is_short": true,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=fQmai-MQrWk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/fQmai-MQrWk",
    "thumbUrl": "assets/thumbs/yt_fQmai-MQrWk.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/fQmai-MQrWk/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "HONEY drawing time-lapse @jonodry",
    "type": "youtube",
    "videoId": "Iv3n6et5wqo",
    "duration": "2:55",
    "is_short": false,
    "is_inspired": true,
    "mediaUrl": "https://www.youtube.com/watch?v=Iv3n6et5wqo",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Iv3n6et5wqo",
    "thumbUrl": "assets/thumbs/yt_Iv3n6et5wqo.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/Iv3n6et5wqo/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "PUPIL time-lapse video DRAWING",
    "type": "youtube",
    "videoId": "EPlZ-Iogswo",
    "duration": "4:24",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=EPlZ-Iogswo",
    "embedUrl": "https://www.youtube-nocookie.com/embed/EPlZ-Iogswo",
    "thumbUrl": "assets/thumbs/yt_EPlZ-Iogswo.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/EPlZ-Iogswo/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "EREN YEAGER SPEED DRAWING",
    "type": "youtube",
    "videoId": "AW63mzd03tU",
    "duration": "1:34",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=AW63mzd03tU",
    "embedUrl": "https://www.youtube-nocookie.com/embed/AW63mzd03tU",
    "thumbUrl": "assets/thumbs/yt_AW63mzd03tU.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/AW63mzd03tU/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "SOLITUDE @jonodry",
    "type": "youtube",
    "videoId": "-wFT0fRE1aY",
    "duration": "3:31",
    "is_short": false,
    "is_inspired": true,
    "mediaUrl": "https://www.youtube.com/watch?v=-wFT0fRE1aY",
    "embedUrl": "https://www.youtube-nocookie.com/embed/-wFT0fRE1aY",
    "thumbUrl": "assets/thumbs/yt_-wFT0fRE1aY.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/-wFT0fRE1aY/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "Speed drawing of carryminati | VARDAAN |",
    "type": "youtube",
    "videoId": "ZNHjfr1pdOc",
    "duration": "4:30",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=ZNHjfr1pdOc",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ZNHjfr1pdOc",
    "thumbUrl": "assets/thumbs/yt_ZNHjfr1pdOc.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/ZNHjfr1pdOc/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "'STOPPED '",
    "type": "youtube",
    "videoId": "dnAEjYPuJFQ",
    "duration": "3:38",
    "is_short": false,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=dnAEjYPuJFQ",
    "embedUrl": "https://www.youtube-nocookie.com/embed/dnAEjYPuJFQ",
    "thumbUrl": "assets/thumbs/yt_dnAEjYPuJFQ.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/dnAEjYPuJFQ/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "Deku Drawing Process #deku #drawing| Procreate| My Hero Academia",
    "type": "youtube",
    "videoId": "Cfno7oJwp9g",
    "duration": "Short",
    "is_short": true,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=Cfno7oJwp9g",
    "embedUrl": "https://www.youtube-nocookie.com/embed/Cfno7oJwp9g",
    "thumbUrl": "assets/thumbs/yt_Cfno7oJwp9g.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/Cfno7oJwp9g/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "drawing sounds",
    "type": "youtube",
    "videoId": "hY1dHXa_Gkk",
    "duration": "Short",
    "is_short": true,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=hY1dHXa_Gkk",
    "embedUrl": "https://www.youtube-nocookie.com/embed/hY1dHXa_Gkk",
    "thumbUrl": "assets/thumbs/yt_hY1dHXa_Gkk.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/hY1dHXa_Gkk/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "I HAVE NO IDEA HOW THE HELL I MADE THIS",
    "type": "youtube",
    "videoId": "YMnSfjq8VYI",
    "duration": "Short",
    "is_short": true,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=YMnSfjq8VYI",
    "embedUrl": "https://www.youtube-nocookie.com/embed/YMnSfjq8VYI",
    "thumbUrl": "assets/thumbs/yt_YMnSfjq8VYI.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/YMnSfjq8VYI/hqdefault.jpg",
    "section": "youtube"
  },
  {
    "title": "Eren Jaeger Drawing #AOT",
    "type": "youtube",
    "videoId": "zKxho4JXQwg",
    "duration": "Short",
    "is_short": true,
    "is_inspired": false,
    "mediaUrl": "https://www.youtube.com/watch?v=zKxho4JXQwg",
    "embedUrl": "https://www.youtube-nocookie.com/embed/zKxho4JXQwg",
    "thumbUrl": "assets/thumbs/yt_zKxho4JXQwg.jpg",
    "remoteThumbUrl": "https://i.ytimg.com/vi/zKxho4JXQwg/hqdefault.jpg",
    "section": "youtube"
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
  const fabBtn = document.getElementById('returnToTopFab');
  const stickyTabNav = document.getElementById('stickyTabNav');
  const tabButtonsContainer = document.querySelector('.tab-buttons');
  const tabActivePill = document.getElementById('tabActivePill');

  let currentActiveTabBtn = document.querySelector('.tab-btn.active') || tabButtons[0];

  function init() {
    setupTabs();
    setupCards();
    setupModal();
    setupSharing();
    setupFab();
    setupStickyObserver();
  }

  function setupFab() {
    if (!fabBtn) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        fabBtn.classList.add('visible');
      } else {
        fabBtn.classList.remove('visible');
      }
    }, { passive: true });

    fabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Sticky Tab Bar Scroll Elevation
  function setupStickyObserver() {
    if (!stickyTabNav) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        stickyTabNav.classList.add('is-scrolled');
      } else {
        stickyTabNav.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // Sliding Indicator Pill Animation
  function updateActivePill(targetBtn, smooth = true) {
    if (!tabActivePill || !targetBtn || !tabButtonsContainer) return;

    if (!smooth) {
      tabActivePill.style.transition = 'none';
    } else {
      tabActivePill.style.transition = 'transform 0.32s cubic-bezier(0.2, 0.0, 0, 1.0), width 0.32s cubic-bezier(0.2, 0.0, 0, 1.0), opacity 0.2s ease';
    }

    const btnLeft = targetBtn.offsetLeft;
    const btnWidth = targetBtn.offsetWidth;

    tabActivePill.style.transform = 'translate3d(' + btnLeft + 'px, 0, 0)';
    tabActivePill.style.width = btnWidth + 'px';
    tabButtonsContainer.classList.add('pill-ready');

    // On mobile / horizontally scrolling tab bar, keep active tab in view
    if (tabButtonsContainer.scrollWidth > tabButtonsContainer.clientWidth) {
      const scrollTarget = btnLeft - (tabButtonsContainer.clientWidth / 2) + (btnWidth / 2);
      tabButtonsContainer.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
    }
  }

  // Tab Filtering & Switching with Smooth Transitions
  function setupTabs() {
    // Position the pill on load
    if (currentActiveTabBtn) {
      // Small timeout to allow font rendering / layout settling
      setTimeout(() => updateActivePill(currentActiveTabBtn, false), 50);
    }

    // Window resize handler to keep pill perfectly positioned
    window.addEventListener('resize', () => {
      if (currentActiveTabBtn) {
        updateActivePill(currentActiveTabBtn, false);
      }
    }, { passive: true });

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        currentActiveTabBtn = btn;

        // Smoothly animate the sliding pill to the clicked tab
        updateActivePill(btn, true);

        // Filter sections with smooth entrance animation
        sections.forEach(sec => {
          const secId = sec.getAttribute('data-section-id');
          if (targetTab === 'all' || secId === targetTab) {
            sec.classList.remove('tab-hidden');
            sec.classList.remove('tab-enter');
            // Trigger reflow to restart entrance animation
            void sec.offsetWidth;
            sec.classList.add('tab-enter');
          } else {
            sec.classList.add('tab-hidden');
            sec.classList.remove('tab-enter');
          }
        });

        // Smooth scroll to top of content when tab changes
        if (targetTab !== 'all') {
          const targetSec = document.getElementById(targetTab);
          if (targetSec) {
            const topBarHeight = (stickyTabNav ? stickyTabNav.offsetHeight : 50) + 75;
            const targetTop = targetSec.getBoundingClientRect().top + window.scrollY - topBarHeight;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
          }
        }
      });
    });

    // Check if initial URL has a section hash like #pencil-digital or #3d
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) {
      const matchingBtn = document.querySelector('.tab-btn[data-tab="' + initialHash + '"]');
      if (matchingBtn) {
        matchingBtn.click();
      }
    }
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
    if (item.type === 'youtube') {
      const frameWrap = document.createElement('div');
      frameWrap.className = 'youtube-frame-wrapper';
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + item.videoId + '?autoplay=1&rel=0';
      iframe.title = item.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      frameWrap.appendChild(iframe);
      modalStage.appendChild(frameWrap);
    } else if (item.type === 'video') {
      const vid = document.createElement('video');
      vid.src = item.mediaUrl;
      vid.controls = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.muted = false;
      vid.volume = 1.0;
      modalStage.appendChild(vid);

      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // If browser restricts unmuted autoplay, mute and resume play with controls
          console.warn('Unmuted autoplay prevented by browser policy:', err);
          vid.muted = true;
          vid.play().catch(() => {});
        });
      }
    } else {
      const img = document.createElement('img');
      img.src = item.mediaUrl;
      img.alt = item.title;
      modalStage.appendChild(img);
    }

    const ytAction = document.getElementById('modalYtAction');
    if (ytAction) {
      if (item.type === 'youtube') {
        ytAction.style.display = 'block';
        ytAction.innerHTML = '<a href="https://www.youtube.com/watch?v=' + item.videoId + '" target="_blank" rel="noopener noreferrer" class="btn-watch-yt"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg><span>Watch on YouTube ↗</span></a>';
      } else {
        ytAction.style.display = 'none';
        ytAction.innerHTML = '';
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const iframe = modalStage.querySelector('iframe');
    if (iframe) {
      iframe.src = '';
    }
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
