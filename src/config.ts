export const config = {
  // Personal Information
  name: 'Radha',

  // Music Configuration
  music: {
    url: '', // Optional: Replace with cinematic ambient music URL
    enabled: false, // Start muted
    volume: 0.6,
  },

  // PAGE 1: CINEMATIC INTRO
  cinematicIntro: {
    backgroundImage: 'https://images.unsplash.com/photo-1513002749550-c59a4a8b04b0?w=1080&q=80',
    subtitle: 'A little birthday surprise made with care ✨',
    cta: 'TAP TO BEGIN ✨',
  },

  // PAGE 2: MEMORY GALLERY
  memoryGallery: {
    title: 'Our Favorite Memories 📸',
    autoScroll: true,
    autoScrollInterval: 5000, // 5 seconds
    photos: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1516991891827-8b1817e3d7fa?w=600&q=80',
        caption: 'Remember this moment?',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1532572642622-b0694463f3e1?w=600&q=80',
        caption: 'Laughter and joy',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1439614615377-4ee1e27e9c12?w=600&q=80',
        caption: 'Beautiful moments',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
        caption: 'Always smiling',
      },
    ],
    hasVideo: false,
    videoUrl: '',
  },

  // PAGE 3: RADHA KRISHNA SHAYARI (SPIRITUAL PAGE)
  radhaKrishnaShayari: {
    backgroundImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80',
    shayariLines: [
      'वो चांद भी तुम्हारे आगे सादा लगे,',
      'हूर फिखी, तुम्हारा नूर ज्यादा लगे,',
      'मत पूंछो कैसे लगते हो तुम मुझे,',
      'तुम ऐसे लगते हो जैसे कान्हा को राधा लगे...!!',
    ],
    mood: 'Spiritual • Poetic • Timeless',
  },

  // PAGE 4: SHORT NOTE
  shortNote: {
    title: 'A Thoughtful Note 💝',
    content: 'I wanted to make your birthday feel a little special. Not because you need validation, but because you deserve to know how much you mean. No pressure, no expectations—just genuine care wrapped up in this little experience.',
    signature: '— With warmth',
  },

  // PAGE 5: GIFT SECTION
  giftSection: {
    title: 'Something For You 🎁',
    description: 'Something thoughtful I imagined for you ✨',
    giftImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
    note: 'A gift wrapped in hopes and good wishes',
  },

  // PAGE 6: MOON + SKETCH (WOW MOMENT)
  moonSketch: {
    sketchImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    moonGlow: true,
    starryBackground: true,
    shayariLines: [
      'Tu bilkul chand ki tarah hai...',
      'Noor bhi, gurur bhi aur door bhi',
      'But somehow, you make it beautiful 💫',
    ],
    musicSwell: true,
  },

  // PAGE 7: ENDING PAGE
  endingPage: {
    mainText: 'Happy Birthday once again ❤️',
    subText: 'Wishing you happiness, smiles, peace, and beautiful moments ahead. Thank you for being you ✨',
    cta: 'Celebrate Again',
  },

  // COLORS & THEME
  theme: {
    primary: '#ec4899',
    secondary: '#a855f7',
    accent: '#f43f5e',
    dark: {
      from: '#1f2937',
      to: '#111827',
    },
  },
}
