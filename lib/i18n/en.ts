import type { Dictionary } from "./types";

/** Anglická verze — struktura musí odpovídat cs.ts (hlídá typ Dictionary). */
export const en: Dictionary = {
  htmlLang: "en",
  languageName: "English",

  meta: {
    title: "Glampidol | Tiny house with sauna in a plum orchard",
    description:
      "Private glamping in Lípa near the Vizovice Hills, Czech Republic. Tiny house for 2 guests + 1, Finnish sauna included, terrace, grill, fire pit and views over the countryside.",
    keywords: [
      "glamping Czech Republic",
      "tiny house Zlín region",
      "glamping with sauna",
      "accommodation with sauna",
      "Vizovice Hills",
      "romantic stay in nature",
      "Moravia glamping",
    ],
    galleryTitle: "Photo gallery | Glampidol",
    galleryDescription:
      "The complete Glampidol gallery — the cabin, Finnish sauna, interior, terrace and the plum orchard below the Vizovice Hills.",
    ogImageAlt:
      "Tiny house with a terrace and barrel sauna in a plum orchard at sunset",
  },

  nav: {
    cabin: "The cabin",
    sauna: "Sauna",
    surroundings: "Around",
    gallery: "Gallery",
    pricing: "Rates",
    faq: "FAQ",
    contact: "Contact",
  },

  header: {
    book: "Book your stay",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    badge: "Glamping in a plum orchard below the Vizovice Hills",
    headlineTop: "Switch off the city.",
    headlineAccent: "Switch on",
    headlineAccentNoWrap: "the quiet.",
    subheadline:
      "A private tiny house with views over the hills, a Finnish sauna and the kind of evening that makes going home feel like a bad idea.",
    ctaPrimary: "Check availability",
    ctaSecondary: "See the cabin",
    scroll: "Discover more",
    scrollAria: "Scroll to the next section",
    imageAlt:
      "The Glampidol tiny house with sauna in a plum orchard at sunset",
    badges: [
      "For 2 + 1 guests",
      "Sauna included",
      "Terrace",
      "Grill",
      "Wi-Fi",
      "Parking at the door",
    ],
  },

  intro: {
    eyebrow: "Welcome to the orchard",
    headline: "Mornings with a view. Evenings in the sauna.",
    headlineAccent: "The kind of calm a calendar can't hold.",
    text: "In the middle of a plum orchard, cradled by the Vizovice Hills, there is a place where time slows down. Mornings start with coffee by the big window. Days are for hiking, or for staying exactly where you are. And evenings belong to the sauna, which washes off whatever the city left behind.",
  },

  benefits: [
    {
      title: "Privacy in the orchard",
      text: "No corridors, no neighbours through the wall. Just the tiny house, the orchard, the views and room to be offline for a while.",
    },
    {
      title: "A sauna steps from bed",
      text: "Heat it up for the evening after a hike, or for a slow morning. You never have to go anywhere for it.",
    },
    {
      title: "Tiny house comfort",
      text: "Loft bedroom, kitchenette, bathroom, air conditioning, heating, Wi-Fi and a terrace. Nature, yes. Roughing it, no.",
    },
    {
      title: "Close to the good stuff",
      text: "Luhačovice spa, Lešná Zoo, Vizovice, Lukov castle and the trails of the Vizovice Hills are all within easy reach.",
    },
  ],

  cabin: {
    eyebrow: "The cabin",
    headline: "Small space, big calm",
    text: "Glampidol was designed to breathe. Every detail has a purpose — sleeping, the view, cooking, resting and getting back to something simpler. Inside you'll find a living area with a sofa bed, a kitchenette, a bathroom with shower and a loft bedroom with a 160 × 200 cm mattress.",
    features: [
      "Loft bedroom, 160 × 200 cm",
      "Sofa bed for a third guest",
      "Bathroom with shower and toilet",
      "Fully equipped kitchenette",
      "Fridge with freezer",
      "Gas hob",
      "Coffee machine",
      "Electric kettle",
      "Air conditioning",
      "Gas heating",
      "Wi-Fi",
      "Towels, bathrobes and sauna sheets",
    ],
  },

  sauna: {
    eyebrow: "Sauna",
    headline: "A Finnish sauna, yours alone",
    text1:
      "The best evenings at Glampidol start simply. The day fades, the orchard goes quiet, and you move into the warmth of the Finnish sauna. No booking a slot. No other guests. No extra charge.",
    text2:
      "After a hike, after the grill, after a long week at work. The sauna here isn't an add-on. It's the ritual that turns an ordinary stay into a small reset for body and head.",
  },

  terrace: {
    eyebrow: "Terrace · Grill · Fire pit",
    headline: "Dinner tastes better lit by a setting sun",
    text: "The terrace in front of the cabin is for morning coffee, unhurried breakfasts and grilling in the evening. When the day turns golden, all you have to do is cook something good, sit outside and let the orchard be the backdrop.",
    features: [
      "Covered terrace with seating",
      "Grill",
      "Fire pit",
      "Lawn around the cabin",
    ],
  },

  audience: {
    eyebrow: "Who it's for",
    headline: "Who feels at home at Glampidol",
    cards: [
      {
        title: "For couples",
        text: "A stay for two, the sauna, the terrace, an evening by the fire and a morning with no alarm.",
      },
      {
        title: "For a couple with a child",
        text: "The cabin is built for two, but a third can sleep on the sofa bed. The child gets the orchard, the grown-ups get the quiet, and everyone gets a few days off the usual routine.",
      },
      {
        title: "For a tired mind",
        text: "For when you need to switch off screens, the city and the to-do list. Arrive, breathe out and just be for a few days.",
      },
      {
        title: "For an active weekend",
        text: "The Vizovice Hills, cycling, day trips, Lešná Zoo, Luhačovice spa, castles, chateaux and swimming nearby.",
      },
    ],
  },

  surroundings: {
    eyebrow: "Around",
    headline: "Off on your own, but not cut off",
    text: "Glampidol sits in a plum orchard in the landscape of the Vizovice Hills. You get quiet and privacy, but you're also close to places that can fill a whole weekend — from a walk up to the viewpoint above the village to a day at the Luhačovice spa or Lešná Zoo.",
    tripsTitle: "Days out nearby",
    tripsHint: "Click to open the official website.",
    openWeb: "Open website",
  },

  trips: [
    {
      title: "Lešná Zoo and Chateau",
      distance: "20 km",
      text: "The most visited attraction in the Zlín region — 240 animal species in an old park, with a chateau at its heart.",
      alt: "Main entrance to Lešná Zoo in Zlín",
    },
    {
      title: "Luhačovice Spa",
      distance: "25 km",
      text: "Moravia's largest spa town. The colonnade, Jurkovič's timber architecture, mineral springs and a day with no plan.",
      alt: "The spa colonnade in Luhačovice",
    },
    {
      title: "Zelené outdoor pool",
      distance: "10 km",
      text: "Zlín's summer lido — swimming pool, water slide, lazy river and shade under the trees.",
      alt: "Zelené outdoor swimming pool in Zlín",
    },
    {
      title: "Lipské paseky viewpoint",
      distance: "3 km on foot",
      text: "The terrace viewpoint above Lípa. A half-circle panorama over the Dřevnice valley and the Hostýn Hills — walkable from the cabin.",
      alt: "View over Lípa nad Dřevnicí and the surrounding hills",
    },
  ],

  gallery: {
    eyebrow: "Gallery",
    headline: "Look inside Glampidol",
    text: "Timber, light, big windows, the sauna, the terrace and the orchard all around. Here are the places where you'll have breakfast, rest, grill and wind down in the evening.",
    cta: "Full photo gallery",
  },

  galleryPage: {
    eyebrow: "Photo gallery",
    headline: "All of Glampidol in pictures",
    text: "The cabin in the orchard, the Finnish sauna, the light-filled interior, the terrace at sunset and the views across the Vizovice Hills. Have a look around before you set off.",
    back: "Back to the homepage",
  },

  reviews: {
    eyebrow: "Reviews",
    headline: "How people switch off here",
    ratingSummary: "5.0 out of 5 — 24 guest reviews",
    ratingCta: "All reviews on e-chalupy.cz",
    translatedNote: "Reviews are translated from the Czech originals.",
    items: [
      {
        text: "If we could, we'd give it 200 %! Everything was perfect — a beautiful place, quiet, seclusion, everything clean and finished down to the last detail. The owners are kind and attentive, and there's plenty to do nearby. Evenings by the grill on the terrace; we rested like never before. We'll definitely be back, thank you!",
        author: "Pavla",
        when: "couple · spring 2025",
      },
      {
        text: "An absolutely brilliant place for people who want to switch off and enjoy themselves. Everything is superbly equipped — kitchenette, outdoor grill, bathroom. The evening sauna is a priceless bonus. Our host is lovely and really makes sure everything is just right. Nothing to fault; we'll recommend this place to everyone we know. Thank you!",
        author: "Lukáš",
        when: "couple · autumn 2025",
      },
      {
        text: "Absolutely divine, both the location and the facilities. We enjoyed it as a couple, but it would be lovely with children too. We'll definitely be back. Beautiful views, great trips nearby, wonderful sauna.",
        author: "Iveta",
        when: "couple · spring 2026",
      },
      {
        text: "A wonderful cabin in a quiet spot with a stunning view. Communication with the owners was very pleasant, and any issue was sorted out immediately. The cabin is cosy, lovingly finished, and nothing is missing. Thank you, and we recommend it.",
        author: "Veronika",
        when: "family · autumn 2025",
      },
      {
        text: "Beautiful, peaceful surroundings — snow and deer in the morning, a starry sky in the evening. The place is modern and practical. We're looking forward to coming back when the trees are in blossom.",
        author: "Guest",
        when: "couple · winter 2024",
      },
      {
        text: "Very likeable and helpful owners, effortless communication. Beautiful surroundings for a quiet family holiday with plenty of trips nearby. The cabin suits two adults and a child at most; it's thought through in every detail and exceptionally well equipped. The holiday exceeded our expectations.",
        author: "Guest",
        when: "family · summer 2025",
      },
      {
        text: "The stay was absolutely perfect. We felt better here than we have anywhere in a long time. The atmosphere is lovely, the owners incredibly kind, the facilities excellent. We recommend it wholeheartedly and hope to come back.",
        author: "The Ježeks",
        when: "family · autumn 2025",
      },
      {
        text: "Very helpful owners; the cabin and the grounds were thoroughly clean. The location gives you complete privacy. I can recommend it wholeheartedly.",
        author: "The Kesoš family",
        when: "couple · summer 2025",
      },
    ],
  },

  pricing: {
    eyebrow: "Rates",
    headline: "Rates for your stay",
    text: "The rate covers the tiny house and use of the Finnish sauna. The minimum stay is 2 nights — a single night is possible at a separate rate.",
    cancellationTitle: "Cancellation policy",
    checkTitle: "Check-in and check-out",
    cta: "Check availability",
    groups: [
      {
        title: "Per night",
        note: "Applies to stays of 2 nights or more.",
        rows: [
          { label: "Sunday–Thursday", price: "CZK 3,200", unit: "/ night" },
          { label: "Friday–Saturday", price: "CZK 3,500", unit: "/ night" },
          { label: "July–August", price: "CZK 3,500", unit: "/ night" },
        ],
      },
      {
        title: "Full weekend",
        note: "",
        rows: [
          {
            label: "Friday–Sunday (2 nights)",
            price: "CZK 7,000",
            unit: "",
          },
        ],
      },
      {
        title: "Single night",
        note: "Sunday to Thursday as normal. A Friday or Saturday night can be booked no earlier than 24 hours before arrival.",
        rows: [{ label: "One night", price: "CZK 5,000", unit: "" }],
      },
    ],
    notes: [
      "The rate covers the tiny house and use of the Finnish sauna.",
      "Rates may differ over public holidays and school holidays.",
    ],
    cancellation: [
      { when: "72 hours before arrival", refund: "full refund" },
      { when: "24 hours before arrival", refund: "50 % refunded" },
      { when: "On the day of arrival", refund: "no refund" },
    ],
    checkTimes: [
      { label: "Check-in", value: "after 3 pm" },
      { label: "Check-out", value: "by 12 noon" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "The questions we get most",
    items: [
      {
        question: "Is the sauna included?",
        answer: "Yes. Use of the Finnish sauna is included in the rate.",
      },
      {
        question: "How many people does Glampidol sleep?",
        answer:
          "Glampidol sleeps 2 guests + 1. The loft bedroom with its 160 × 200 cm mattress is for two; a third guest sleeps on the sofa bed in the living area. Please bear in mind the sofa bed isn't as comfortable as the bed upstairs — it works best for a child or a shorter stay.",
      },
      {
        question: "Can we come for just one night?",
        answer:
          "Yes, a single night costs CZK 5,000. From Sunday to Thursday you can book it as far ahead as you like. Friday and Saturday nights are released at the last minute — they can be booked no earlier than 24 hours before arrival, provided nobody has taken the date for the whole weekend by then.",
      },
      {
        question: "Can we bring a dog?",
        answer:
          "We're sorry, but we can't accommodate pets. The cabin is non-smoking.",
      },
      {
        question: "Is Glampidol good in winter too?",
        answer:
          "Yes. The cabin has gas heating, and the sauna makes a winter stay even better.",
      },
      {
        question: "Where do we park?",
        answer: "Parking is right by the tiny house, a few steps from the door.",
      },
    ],
  },

  reservation: {
    eyebrow: "Booking",
    headline: "Pick your dates and come switch off",
    text: "Availability and booking are handled on e-chalupy.cz, where you'll find an up-to-date calendar — so you can see straight away when Glampidol is free.",
    phone: "Phone",
    email: "Email",
    location: "Location",
    locationValue: "Lípa, Zlín Region, Czech Republic",
    cardEyebrow: "Availability calendar",
    cardTitle: "We handle bookings through e-chalupy.cz",
    cardText:
      "You'll see free dates, rates and reviews from guests who have already stayed with us.",
    cardCta: "Book on e-chalupy",
    cardNote:
      "Prefer to talk to a person? Call or write and we'll sort it out directly.",
  },

  footer: {
    tagline:
      "A private tiny house with a sauna in a plum orchard below the Vizovice Hills. A place where the city switches off and the quiet switches on.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Follow us",
    copyright: "Glamping in a plum orchard.",
    credit: "Made by bnbmind.cz",
    photoCredits: "Photos of nearby places:",
  },

  imageAlts: {
    cabinExterior:
      "Timber cabin with a Finnish sauna in the middle of a plum orchard",
    cabinForest: "Timber facade of the cabin and the terrace with seating",
    interior: "Light interior with large windows looking into the orchard",
    living: "Living area with a sofa and a view into the orchard",
    kitchen: "Equipped kitchenette with a window onto the orchard",
    bathroom: "Bathroom with shower, washbasin and a round mirror",
    sauna: "Finnish sauna interior with stove and an arched window",
    firepit: "Early evening on the terrace by the fire pit and grill",
    grill: "Dinner laid out on the terrace at sunset",
    orchard: "Golden light over the plum orchard at sunset",
    hillsView: "View from the terrace over the valley and the Vizovice Hills",
    forest: "View from the terrace across the surrounding hills and valley",
    tentView: "Terrace with seating and a view into the orchard at sunset",
  },

  imageLabels: {
    cabinExterior: "The cabin in the orchard",
    cabinForest: "Timber up close",
    interior: "Morning by the big window",
    living: "Living area",
    kitchen: "Kitchenette",
    bathroom: "Bathroom",
    sauna: "Finnish sauna",
    firepit: "Evening by the fire pit",
    grill: "Dinner on the terrace",
    orchard: "Golden light over the orchard",
    hillsView: "View over the hills",
    forest: "Looking out to the hills",
    tentView: "Terrace at sunset",
  },
};
