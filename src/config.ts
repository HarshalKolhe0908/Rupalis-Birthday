export const config = {
  // Personal Information
  name: 'Radha',

  // Music Configuration
  music: {
    url: new URL('./assets/MOV_17753316343428178.mp3', import.meta.url).href,
    enabled: true, // Start with music enabled
    volume: 0.6,
  },

  // PAGE 1: CINEMATIC INTRO
  cinematicIntro: {
    backgroundImage: 'Intro.png',
    title: 'Happy Birthday......Rupali🎂✨',
    subtitle: 'A little birthday surprise made with care ✨',
    cta: 'Tap To Begin ✨',
  },

  // PAGE 2: MEMORY GALLERY
  memoryGallery: {
    title: 'Your Beautiful Pics 📸',
    autoScroll: true,
    autoScrollInterval: 5000,
    photos: [
      {
        id: 1,
        src: 'MemoryGallery1.png',
        caption: 'Like art — rare, beautiful, and hard to forget 🌙',
      },
      {
        id: 2,
        src: 'MemoryGallery2.png',
        caption: 'Some smiles make moments feel lighter 🌸',
      },
      {
        id: 3,
        src: 'MemoryGallery3.jpg',
        caption: 'A quiet little sorry for the moments I got wrong 💫',
      },
    ],
  },

  // PAGE 3: RADHA KRISHNA SHAYARI (SPIRITUAL PAGE)
  radhaKrishnaShayari: {
    backgroundImage: 'RadhaKrishna.png',
    shayariLines: [
      'वो चांद भी तुम्हारे आगे सादा लगे,',
      'हूर फिखी, तुम्हारा नूर ज्यादा लगे,',
      'मत पूंछो कैसे लगते हो तुम मुझे,',
      'तुम ऐसे लगते हो जैसे कान्हा को राधा लगे...!!',
    ],
  },

  // PAGE 4: SHORT NOTE (HANDWRITTEN LETTER)
  shortNote: {
    title: 'A Thoughtful Note 💝',
    content: 'Fakt tujha birthday thoda special vatava mhanun ha chhotasa prayatna kela 💫 Kahi expectation nahi, kahi pressure nahi… fakt tujha divas chhan java, khup hasa, khush raha ani life madhye khup sundar goshti milava hech manapasun vatla ✨',
    signature: '— With warmth',
  },

  // PAGE 5: GIFT SECTION
  giftSection: {
    title: 'Something For You 🎁',
    description: 'I had been thinking of giving this to you since January, especially for your birthday 💫',
    giftImage: 'Gift.jpg',
    note: 'A gift wrapped in hopes and good wishes',
  },

  // PAGE 6: MOON SKETCH PAGE
  moonSketch: {
    sketchImage: 'MoonSketch.png',
    caption: 'But somehow, you make it beautiful 💫',
  },

  // PAGE 7: ENDING PAGE
  endingPage: {
    mainText: 'Happy Birthday once again ❤️',
    subText: 'Wishing you happiness, smiles, peace, and beautiful moments ahead ✨',
    cta: 'Replay Experience',
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
