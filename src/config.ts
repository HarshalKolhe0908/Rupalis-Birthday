export const config = {
  // Personal Information
  name: "Sarah",
  
  // Optional: Background music URL (replace with your own)
  musicUrl: "", // e.g., "https://example.com/birthday-music.mp3"
  
  // Intro Section
  intro: {
    message: "Happy Birthday",
  },

  // Story Sections
  story: {
    welcome: {
      title: "A Small Birthday Surprise 🎁",
      description: "I wanted to create something special just for you.",
    },
    
    // Photo gallery - replace image URLs with your own photos
    gallery: {
      title: "Our Favorite Memories 📸",
      photos: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1530268729831-4be0efb468a0?w=400&h=500&fit=crop",
          caption: "Remember this moment?",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop",
          caption: "Laughter and joy",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
          caption: "Beautiful moments",
        },
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
          caption: "Always smiling",
        },
      ],
    },

    // Things to admire - customize these qualities
    admire: {
      title: "Things I Admire About You ✨",
      qualities: [
        {
          id: 1,
          emoji: "💫",
          title: "Your Kindness",
          description: "The way you care for others is truly beautiful",
        },
        {
          id: 2,
          emoji: "😊",
          title: "Your Smile",
          description: "It brightens every room you enter",
        },
        {
          id: 3,
          emoji: "💪",
          title: "Your Strength",
          description: "You inspire me with your resilience",
        },
        {
          id: 4,
          emoji: "🌟",
          title: "Your Positivity",
          description: "You see the good in everything",
        },
        {
          id: 5,
          emoji: "🎨",
          title: "Your Creativity",
          description: "Everything you do has a unique touch",
        },
        {
          id: 6,
          emoji: "🤗",
          title: "Your Warmth",
          description: "You make everyone feel loved",
        },
      ],
    },

    // Birthday wishes
    wishes: {
      title: "Birthday Wishes For You 🎉",
      wishes: [
        "Wishing you a day filled with joy and laughter.",
        "May every moment be as special as you are.",
        "Hope your year ahead brings amazing adventures.",
        "Celebrating not just today, but the wonderful person you are every day.",
        "May happiness follow you wherever you go.",
      ],
    },

    // Thoughtful message
    message: {
      title: "A Thoughtful Corner 💝",
      text: "I just wanted to make your day feel a little special. You deserve to feel celebrated, appreciated, and loved—not just today, but always. Thank you for being the wonderful person you are.",
    },

    // Optional gift section
    gift: {
      title: "Something For You 🎀",
      description: "I once thought you might like this",
      image: "https://images.unsplash.com/photo-1552189549-03eab8442b30?w=400&h=400&fit=crop",
      note: "A symbol of the thoughtfulness and care I wish for you.",
    },
  },

  // Finale Section
  finale: {
    mainMessage: "Happy Birthday!",
    subMessage: "Wishing you happiness, smiles, and beautiful moments ahead ❤️",
    closingMessage: "Thank you for letting me celebrate with you.",
  },

  // Color customization
  colors: {
    primary: "from-orange-400 to-pink-500",
    secondary: "from-purple-400 to-pink-400",
    accent: "from-pink-400 to-rose-400",
  },
}
