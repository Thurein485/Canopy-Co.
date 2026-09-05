export const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Learn", to: "/learn" },
  { label: "Quiz", to: "/quiz" },
  { label: "Community", to: "/get-involved" },
  { label: "Contact", to: "/contact" }
];

export const homeFeatureCards = [
  {
    icon: "bi-exclamation-circle",
    title: "Understand the real problems",
    text: "Learn how poor shade, weak lighting, unclear paths, and limited access affect daily park use."
  },
  {
    icon: "bi-book-half",
    title: "Learn the key ideas simply",
    text: "Short lessons explain what makes a park feel safer, greener, and easier to use for more people."
  },
  {
    icon: "bi-ui-checks-grid",
    title: "Check your understanding",
    text: "A short quiz helps visitors remember the lessons and turn learning into something more practical."
  }
];

export const homeStats = [
  { value: 4, suffix: "", label: "easy learning topics" },
  { value: 1, suffix: "", label: "learning quiz" },
  { value: 3, suffix: "", label: "ways to take part" }
];

export const homeUrgencyCards = [
  {
    title: "Some people do not feel comfortable staying",
    text: "Weak lighting, limited shade, and poor seating can make a park feel less welcoming than it should."
  },
  {
    title: "Small design problems create bigger daily issues",
    text: "A short path repair or a few shaded seats can change who uses the space and how long they stay."
  },
  {
    title: "People support change more when they understand it",
    text: "Clear public education helps residents, families, and local groups see why park upgrades matter."
  }
];

export const learningJourney = [
  {
    step: "01",
    title: "See what is missing",
    text: "Notice the basic things a park needs, like shade, lighting, seating, and clear paths."
  },
  {
    step: "02",
    title: "Learn why it matters",
    text: "Understand how those details affect comfort, safety, access, and the way people use the space."
  },
  {
    step: "03",
    title: "Take simple action",
    text: "Use the quiz, join a workshop, or take part in community activities to keep learning active."
  }
];

export const mythFactItems = [
  {
    myth: "Park upgrades are mostly about appearance.",
    fact: "In reality, shade, lighting, seating, and access directly change how safe and usable a park feels."
  },
  {
    myth: "If a park is open, it already works for everyone.",
    fact: "Good access, visible paths, and places to rest make a big difference for families, seniors, and people with mobility needs."
  }
];

export const campaignPhotoSet = [
  {
    title: "Safer, greener public paths",
    text: "Clear walking routes and tree cover are some of the easiest ways to improve daily park use.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    source: "https://unsplash.com"
  },
  {
    title: "Community presence matters",
    text: "A park becomes stronger when people feel comfortable gathering, learning, and coming back often.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    source: "https://unsplash.com"
  },
  {
    title: "Nature and stewardship",
    text: "Planting and everyday care help a park feel healthier, cooler, and more inviting.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    source: "https://unsplash.com"
  }
];

export const homeHeroPhotos = [
  {
    title: "Park path at golden hour",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "People gathering in a public green space",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Shaded seating and trees in a city park",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const educationPartners = [
  "City Green Schools",
  "Neighborhood Parent Network",
  "Open Streets Youth Club",
  "Urban Ecology Circle"
];

export const audienceGroups = [
  {
    title: "Families and caregivers",
    text: "Learn why shade, seating, and clear movement matter for everyday park visits with children."
  },
  {
    title: "Students and youth groups",
    text: "Use the lessons and quiz as a simple way to talk about public space, climate, and community life."
  },
  {
    title: "Residents and local groups",
    text: "Understand the basics quickly enough to join public conversations with confidence."
  }
];

export const learnTopics = [
  {
    id: "safety",
    icon: "bi-shield-check",
    title: "Safety and visibility",
    summary: "People use parks more when they can see clearly, move easily, and feel comfortable being there.",
    whyItMatters: "A park does not need to feel dangerous to lose users. Even a dim path or hidden corner can make people leave earlier or avoid the space.",
    lookFor: [
      "Paths that feel too dark in the evening",
      "Corners or edges that are hard to see into"
    ],
    action: "What would make your local park feel safer after sunset?"
  },
  {
    id: "shade",
    icon: "bi-tree",
    title: "Shade and comfort",
    summary: "Shade, seating, and cooler resting spots help people stay longer and use the park more often.",
    whyItMatters: "When a park is too hot or there is nowhere to pause, many visitors shorten their trip or choose not to come at all.",
    lookFor: [
      "Open areas with little tree cover",
      "Popular paths or play areas with no nearby seating"
    ],
    action: "Where would extra shade or a seat help most?"
  },
  {
    id: "access",
    icon: "bi-universal-access",
    title: "Access and inclusion",
    summary: "A better park works for children, older adults, wheelchair users, caregivers, and first-time visitors.",
    whyItMatters: "Access is not only about ramps. It is also about smooth paths, easy entrances, and a layout people can understand quickly.",
    lookFor: [
      "Broken, uneven, or narrow paths",
      "Entrances that feel unclear or hard to reach"
    ],
    action: "Which entrance or path feels hardest to use today?"
  },
  {
    id: "ecology",
    icon: "bi-droplet-half",
    title: "Ecology and climate resilience",
    summary: "Trees, planting, and water-sensitive design can make a park cooler, greener, and more resilient.",
    whyItMatters: "Ecology is not separate from daily use. Greener parks often feel better to walk through, stay in, and care for over time.",
    lookFor: [
      "Areas that feel exposed or overheated",
      "Spots where planting could help with drainage and shade"
    ],
    action: "Where could planting improve both comfort and environmental health?"
  }
];

export const learningFacts = [
  {
    value: "Shade",
    label: "helps decide whether people stay for five minutes or fifty."
  },
  {
    value: "Lighting",
    label: "can change whether a path feels welcoming or avoided."
  },
  {
    value: "Access",
    label: "improves the experience for parents, wheelchair users, older adults, and first-time visitors."
  }
];

export const observationPrompts = [
  {
    title: "Look at the path network",
    text: "Can people move clearly from entrance to seating, lawn, and gathering areas without confusion?"
  },
  {
    title: "Check where people can pause",
    text: "If someone is older, tired, or with children, is there a comfortable place to stop nearby?"
  },
  {
    title: "Notice heat and openness",
    text: "Are the busiest areas protected by tree cover, or do they feel exposed and uncomfortable?"
  }
];

export const workshopTypes = [
  "Guided neighborhood park walks",
  "School mini-lessons and quiz sessions",
  "Family observation worksheets",
  "Community planting and care days"
];

export const impactMetrics = [
  { value: 68, suffix: "%", label: "target increase in shaded rest areas" },
  { value: 74, suffix: "%", label: "stormwater capture target in planted zones" },
  { value: 850, suffix: "", label: "projected volunteer hours in the first season" },
  { value: 16, suffix: "", label: "weeks for visible phase-one change" }
];

export const impactOutcomes = [
  {
    title: "Daily public benefit",
    text: "Safer paths, shade, seating, and better access improve the experience for people who use the park most often."
  },
  {
    title: "Environmental benefit",
    text: "Planting and stormwater improvements help the park perform better in heat and wet weather."
  },
  {
    title: "Community benefit",
    text: "Education, events, and stewardship turn physical improvements into long-term neighborhood value."
  }
];

export const impactPhotoSet = [
  {
    title: "Shade and seating support longer visits",
    text: "Comfort improvements change whether a park feels like a place to pass through or a place to stay.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Greener spaces improve everyday wellbeing",
    text: "Trees, planting, and open lawn space make a park feel cooler, calmer, and more welcoming.",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80"
  }
];

export const localImpactNotes = [
  "Better shaded routes can support longer visits during hotter months.",
  "Visible seating and clearer circulation help first-time visitors feel more comfortable.",
  "Greener edges and planting areas can improve both comfort and stormwater performance."
];

export const quizQuestions = [
  {
    id: "q1",
    question: "Why is lighting important in a local park?",
    options: [
      "It can improve safety and evening comfort",
      "It makes grass grow faster",
      "It replaces the need for paths",
      "It only matters during festivals"
    ],
    answer: 0,
    explanation: "Lighting helps visitors feel more comfortable using the park during darker hours and supports clearer visibility."
  },
  {
    id: "q2",
    question: "What is one benefit of adding more shade trees?",
    options: [
      "They remove the need for seating",
      "They make paths narrower",
      "They can reduce heat and improve comfort",
      "They only help wildlife, not people"
    ],
    answer: 2,
    explanation: "Shade trees improve comfort for visitors while also supporting ecological goals."
  },
  {
    id: "q3",
    question: "Why do accessible paths matter?",
    options: [
      "They only help cyclists",
      "They improve use for wheelchairs, strollers, and many everyday visitors",
      "They are mostly decorative",
      "They reduce the need for entrances"
    ],
    answer: 1,
    explanation: "Accessible paths help different users move through the park more safely and easily."
  },
  {
    id: "q4",
    question: "What can rain gardens help with?",
    options: [
      "Creating indoor event spaces",
      "Managing stormwater runoff",
      "Replacing all lawn areas",
      "Lighting the park at night"
    ],
    answer: 1,
    explanation: "Rain gardens are landscape features that help absorb and manage water during rainfall."
  },
  {
    id: "q5",
    question: "Why are events and community programs useful in a park?",
    options: [
      "They help people return regularly and build local connection",
      "They make trees unnecessary",
      "They stop maintenance from being needed",
      "They only matter for tourists"
    ],
    answer: 0,
    explanation: "Programming turns a park into an active social place instead of a space people only pass through."
  },
  {
    id: "q6",
    question: "Why do educational websites help public projects?",
    options: [
      "They remove the need for funding",
      "They help people understand the public value of change",
      "They replace community input",
      "They only matter after construction finishes"
    ],
    answer: 1,
    explanation: "Educational tools help residents understand why improvements matter before and during change."
  }
];

export const supportTracks = [
  {
    icon: "bi-mortarboard",
    title: "Learning champions",
    text: "Help more residents, students, and families explore the educational content and key park topics."
  },
  {
    icon: "bi-clipboard-check",
    title: "Workshop supporters",
    text: "Take part in guided walks, mini lessons, and quiz-based activities that make the site more useful offline too."
  },
  {
    icon: "bi-flower1",
    title: "Stewardship volunteers",
    text: "Join clean-up, planting, and observation activities that connect park learning with real community action."
  }
];

export const involvementBenefits = [
  {
    title: "People understand local parks better",
    text: "Clear educational content helps residents notice the design details that shape everyday park use."
  },
  {
    title: "Learning becomes more social",
    text: "Events and shared activities make the lessons feel more real than reading on a screen alone."
  },
  {
    title: "Knowledge turns into action",
    text: "Quizzes, events, and local participation make the site more useful than a static information page."
  }
];

export const eventItems = [
  {
    title: "Neighborhood learning walk",
    date: "June 14",
    text: "A guided walk explaining real issues around paths, shade, safety, and park access."
  },
  {
    title: "Park learning evening",
    date: "June 26",
    text: "A community session focused on how better design shapes comfort, safety, and inclusion."
  },
  {
    title: "Park stewardship day",
    date: "July 12",
    text: "A volunteer event that combines hands-on care with simple educational activities on site."
  }
];

export const faqItems = [
  {
    question: "Why include quizzes on an educational website?",
    answer: "Quizzes help visitors retain key ideas, engage more actively with the content, and track what they have learned."
  },
  {
    question: "Why focus on learning as well as design?",
    answer: "When people understand why shade, lighting, access, and planting matter, they can talk about park improvement more clearly and confidently."
  },
  {
    question: "Can the community still shape the project?",
    answer: "Yes. Feedback, workshops, and local events all help keep the learning experience connected to real neighborhood priorities."
  }
];

export const contactCards = [
  {
    icon: "bi-geo-alt",
    title: "Learning hub",
    text: "18 Willow Lane, Community Center Annex"
  },
  {
    icon: "bi-telephone",
    title: "Phone",
    text: "(555) 014-2783"
  },
  {
    icon: "bi-envelope",
    title: "Email",
    text: "hello@canopyco.org"
  },
  {
    icon: "bi-calendar-event",
    title: "Next workshop",
    text: "Updated automatically from the local learning calendar"
  }
];

export const contactPhoto = {
  title: "Community workshop in a park setting",
  text: "Use the contact page to ask questions, join future workshops, or connect the lessons to your own neighborhood experience.",
  image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
};
