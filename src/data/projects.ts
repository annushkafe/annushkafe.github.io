// All portfolio content lives here. Each project is one object.
// Image paths are relative to src/assets/work/.

export type Tag =
  | 'creative-direction'
  | 'research'
  | 'ux'
  | 'branding'
  | 'fashion-psychology'
  | 'speculative';

export const tagLabels: Record<Tag, string> = {
  'creative-direction': 'Creative direction',
  research: 'Research',
  ux: 'UX',
  branding: 'Branding',
  'fashion-psychology': 'Fashion psychology',
  speculative: 'Speculative',
};

export type ObjectName =
  | 'jar' | 'hanger' | 'tumbler' | 'mirror' | 'tape'
  | 'book' | 'monitor' | 'camera' | 'doll' | 'envelope' | 'flamingo' | 'pattern';

export type Img = { src: string; alt: string; caption?: string };
// Short vertical videos; `src` is relative to public/ (videos are served as-is, not processed).
export type Reel = { src: string; title: string; meta?: string; alt: string };

export type Diagram =
  | { kind: 'bubbles'; center: string; nodes: string[] }
  | { kind: 'flow'; steps: string[]; branch?: { after: number; label: string; joinsAt: number } }
  | { kind: 'steps'; steps: string[] }
  | { kind: 'phases'; phases: { title: string; items: string[] }[] }
  | { kind: 'themes'; items: { title: string; body?: string }[] }
  | { kind: 'journey'; stages: string[]; rows: { label: string; cells: string[][] }[] }
  | { kind: 'split-flow'; before: string[]; question: string; groups: { title: string; body: string }[]; after: string[] }
  | { kind: 'concepts'; nodes: { id: string; x: number; y: number; r: number; weight: number }[]; links: [string, string][] };

export type Block =
  | { type: 'text'; heading?: string; body: string[] }
  | { type: 'numbered'; heading?: string; intro?: string; items: { title: string; body: string }[] }
  | { type: 'images'; heading?: string; intro?: string; images: Img[]; layout?: 'grid' | 'phones' | 'deck' | 'pair' | 'wide' | 'carousel'; phone?: boolean }
  | { type: 'reels'; heading?: string; intro?: string; reels: Reel[] }
  | { type: 'diagram'; heading?: string; intro?: string; caption?: string; diagram: Diagram }
  | { type: 'quote'; text: string; by?: string }
  | { type: 'stats'; heading?: string; items: { value: string; label: string }[] };

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  year?: string;
  client?: string;
  role?: string;
  object: ObjectName;
  tags: Tag[];
  summary: string;
  facts?: { label: string; value: string }[];
  status?: 'in-progress';
  blocks: Block[];
};

export const projects: Project[] = [
  {
    slug: 'first-club',
    title: 'Curating & directing FMCG content at First Club',
    shortTitle: 'First Club',
    kicker: 'Creative direction · FMCG',
    year: '2026',
    client: 'First Club, Bangalore',
    role: 'Curation Consultant',
    object: 'jar',
    tags: ['creative-direction', 'branding', 'ux'],
    summary:
      'Creatively directing and styling Reels, UGC-style and product-led content for FMCG products, food styling for shoots, and curating seasonal collections from trend research and consumer insight.',
    facts: [
      { label: 'Role', value: 'Curation Consultant' },
      { label: 'When', value: 'May 2026 – present' },
      { label: 'Where', value: 'Bangalore' },
    ],
    blocks: [
      {
        type: 'numbered',
        heading: 'What I do',
        items: [
          { title: 'Curate collections', body: 'Seasonal and themed product collections built on trend research and consumer insight, improving product discovery and contributing to sales.' },
          { title: 'Direct & style content', body: 'In-app and short-form content from concept to execution, working alongside the content team. I creatively directed and styled Reels for FMCG products, UGC-style videos and product-led content, including scripting and voiceovers, to drive engagement and add-to-cart behaviour.' },
          { title: 'Food styling', body: 'Styling food and FMCG products for photo and video shoots, composing each plate, pack and prop so the product looks irresistible and true to the brand.' },
          { title: 'Design for understanding', body: 'UX-focused product descriptions, educational infographics and wireframes for new product categories, combining visual storytelling and user-centred thinking.' },
        ],
      },
      {
        type: 'reels',
        heading: 'Recipe reels',
        intro: 'Short, shoppable recipe videos for the app, produced end to end by my team and me: from pitching video ideas and sourcing products from inventory to styling, shooting and editing. I shaped the creative direction, styled the food and props, and cooked each recipe on camera. Every ingredient on screen links to the product in the strip below it.',
        reels: [
          { src: 'work/first-club/reels/01.mp4', title: 'Congress bun', meta: 'Indian · Snack', alt: 'Soft buns split, buttered and filled, served on a deep blue platter' },
          { src: 'work/first-club/reels/02.mp4', title: 'Strawberry fig toast', meta: 'Continental · Breakfast', alt: 'Thick sourdough spread with yoghurt and topped with strawberries and figs on a pink striped cloth' },
          { src: 'work/first-club/reels/03.mp4', title: 'Vietnamese salted coffee', meta: 'Vietnamese · Drink', alt: 'Cold espresso poured over salted cream in a glass on a wooden board' },
          { src: 'work/first-club/reels/04.mp4', title: 'Quick mousse', meta: 'Continental · Dessert', alt: 'Chocolate yoghurt whipped into a mousse and finished with raspberries' },
          { src: 'work/first-club/reels/05.mp4', title: 'How to make matcha', meta: 'Japanese · Drink', alt: 'Matcha whisked with warm water and layered over frothy milk in a glass' },
          { src: 'work/first-club/reels/06.mp4', title: 'Vegan brekkie bowl', meta: 'Breakfast', alt: 'A breakfast bowl topped with granola and a burst of berries' },
          { src: 'work/first-club/reels/07.mp4', title: 'Banana matcha latte', meta: 'Drink', alt: 'Banana milk blended and topped with a layer of matcha among leafy plants' },
          { src: 'work/first-club/reels/08.mp4', title: 'Strawberry milk', meta: 'Drink', alt: 'Crushed strawberries topped with cold milk in a glass jar' },
          { src: 'work/first-club/reels/09.mp4', title: 'Breakfast fruit parfait', meta: 'Breakfast', alt: 'Layers of yoghurt, fruit and granola built up in a tall glass' },
        ],
      },
      {
        type: 'images',
        heading: 'International Tea Day collection',
        intro: 'A storefront built around “What’s your tea style?” I helped curate 20+ products into three personas (the tea connoisseur, the classic hot chai lover and the matcha lover), each opening its own edit of teas, snacks and accessories. The banners, photography and app design were created with the First Club design and category teams.',
        layout: 'carousel',
        phone: true,
        images: [
          { src: 'first-club/store/01-landing.jpg', alt: 'The Tea Day landing page: “Celebrating International Tea Day, 20+ varieties for the chai loyalists to the matcha converts”, with tiles to shop by type' },
          { src: 'first-club/store/02-matcha.jpg', alt: '“What’s your tea style” banner for the matcha lover: matcha tins on wooden plinths with a matcha bun and iced strawberry matcha' },
          { src: 'first-club/store/03-chai.jpg', alt: 'Banner for the classic hot chai lover: chai boxes, a brass kettle and whole spices on a wooden table' },
          { src: 'first-club/store/04-connoisseur.jpg', alt: 'Banner for the tea connoisseur: premium tea boxes on jade plinths beside a cake stand and celadon teapot' },
          { src: 'first-club/store/05-connoisseur-list.jpg', alt: 'The Tea Connoisseur collection, with oatmeal cookies, a tea ball infuser, Mogo Mogo green tea and a glass teapot' },
          { src: 'first-club/store/06-chai-list.jpg', alt: 'The Classic Hot Chai Lover collection, with rusks, kadak chai, masala tea and salted biscuits' },
          { src: 'first-club/store/07-matcha-list.jpg', alt: 'The Matcha Lover collection, with almond milk, wild honey and two ceremonial grade matchas' },
          { src: 'first-club/store/08-flavoured.jpg', alt: 'The Flavoured Teas aisle, with tulsi green teas, chamomile and rock salt and lemon green tea' },
        ],
      },
    ],
  },
  {
    slug: 'nefs-x-evara',
    title: 'Nef’s × Evara: a Bali-inspired luxury lifestyle campaign',
    shortTitle: 'Nef’s × Evara',
    kicker: 'Creative direction · Styling',
    year: '2026',
    client: 'Nef’s × Evara, Bangalore',
    role: 'Creative director & stylist',
    object: 'flamingo',
    tags: ['creative-direction', 'branding'],
    summary:
      'A two-chapter lifestyle campaign shot at Evara, a new Bali-inspired luxury villa in Bangalore. I wrote the proposal, built the moodboards, pulled the wardrobe and styled four models from a sunlit poolside shoot into an evening house party.',
    facts: [
      { label: 'Role', value: 'Creative direction & styling' },
      { label: 'Photography', value: 'PK' },
      { label: 'Where', value: 'Evara villa, Bangalore' },
      { label: 'Format', value: 'Campaign stills & short-form reels' },
    ],
    blocks: [
      {
        type: 'numbered',
        heading: 'The vision',
        items: [
          { title: 'The world', body: 'A new Bali-inspired luxury villa has landed in Bangalore: lush landscaping, a sculptural poolside and interiors that feel like a private resort. This is the setting we brought to life.' },
          { title: 'The feel', body: 'Sun-warmed skin, effortless elegance, golden hour light. Pieces that feel like they belong on an island but still work in the city. Relaxed luxury, never overdone.' },
          { title: 'The story', body: 'Two chapters: daylight ease by the pool, and a curated evening that moves indoors to a dance floor. Same villa, two moods, one collection bridging both.' },
        ],
      },
      {
        type: 'images',
        layout: 'wide',
        images: [{ src: 'evara/villa.jpg', alt: 'Evara villa at blue hour, lit up behind the pool with a pink flamingo float on the water' }],
      },
      {
        type: 'numbered',
        heading: 'Chapter 1: Poolside campaign',
        intro: 'Swimwear, cover-ups, vacation co-ords and beachy accessories, styled for the villa’s gardens, terrace and pool.',
        items: [
          { title: 'Models', body: 'Four models in a mix of poses: lounging poolside, standing, and in the water.' },
          { title: 'Energy', body: 'Relaxed, effortless, sun-kissed, aspirational and a little playful.' },
          { title: 'Setting', body: 'Villa landscaping, the poolside terrace and the water itself.' },
          { title: 'Light', body: 'Golden hour and natural midday light.' },
        ],
      },
      {
        type: 'images',
        heading: 'Poolside',
        layout: 'carousel',
        images: [
          { src: 'evara/day/01.jpg', alt: 'A model in a pale yellow plunging one-piece stands in the shaded villa garden' },
          { src: 'evara/day/02.jpg', alt: 'Two models lean into each other, one in a zebra-print top and one in a yellow swimsuit' },
          { src: 'evara/day/03.jpg', alt: 'Two models look back over their shoulders in a brown bikini and a yellow one-piece on the lantern-lit terrace' },
          { src: 'evara/day/08.jpg', alt: 'The brown bikini in profile against the glass doors and garden' },
          { src: 'evara/day/09.jpg', alt: 'Two models in swimwear share a clear umbrella in the garden' },
          { src: 'evara/day/10.jpg', alt: 'Three models in swimwear stand on the pool deck beside a flamingo float' },
          { src: 'evara/day/11.jpg', alt: 'A model in a zebra-print top with a frangipani in her hair shades her eyes' },
          { src: 'evara/day/13.jpg', alt: 'A model in a pink bikini climbs the pool ladder' },
          { src: 'evara/day/14.jpg', alt: 'The pink bikini resting on the pool edge beside a flamingo float' },
          { src: 'evara/day/15.jpg', alt: 'A model in a floral swimsuit beside the pink flamingo float' },
          { src: 'evara/day/16.jpg', alt: 'The floral swimsuit perched on the flamingo float, sunglasses on her head' },
          { src: 'evara/day/18.jpg', alt: 'A model in a black swimsuit lies along the pool edge at dusk' },
          { src: 'evara/day/19.jpg', alt: 'The black swimsuit leaning on the pool edge with a cocktail' },
          { src: 'evara/day/20.jpg', alt: 'A model in a black halter swimsuit sits on the pool edge, frangipani in her hair' },
        ],
      },
      {
        type: 'numbered',
        heading: 'Chapter 2: Evening party',
        intro: 'Evening dresses, elevated separates, statement co-ords and evening accessories for an elegant house party.',
        items: [
          { title: 'Models', body: 'The same four models restyled for the evening, joined by influencers.' },
          { title: 'Content', body: 'Short reels: fluid, social and aspirational, with high-energy nightlife.' },
          { title: 'Setting', body: 'The villa’s first-floor dance floor, with a large balcony shot.' },
          { title: 'Mood', body: 'An elegant house party full of movement, music and flash photos.' },
        ],
      },
      {
        type: 'images',
        heading: 'After dark',
        layout: 'carousel',
        images: [
          { src: 'evara/night/01.jpg', alt: 'A model in a brown halter top and long skirt walks down rain-wet garden steps' },
          { src: 'evara/night/03.jpg', alt: 'The brown halter look with one hand on the wall, gazing into the garden' },
          { src: 'evara/night/04.jpg', alt: 'A model in a red-and-white scarf top and white tiered skirt holds a beaded bag' },
          { src: 'evara/night/05.jpg', alt: 'The scarf top look beside a model in a brown slip dress at night' },
          { src: 'evara/night/07.jpg', alt: 'Two models clink glasses under warm lights' },
          { src: 'evara/night/08.jpg', alt: 'A model in a pink floral co-ord stands on the lit terrace' },
          { src: 'evara/night/11.jpg', alt: 'A model raises her wine glass on the dance floor' },
          { src: 'evara/night/12.jpg', alt: 'The pink floral co-ord dancing under warm party lights' },
        ],
      },
    ],
  },
  {
    slug: 'ai-whiskey-experience',
    title: 'AI in retail: a whiskey experience',
    shortTitle: 'AI Whiskey Experience',
    kicker: 'Speculative retail · UX research',
    year: '2023',
    client: 'Holition, London',
    role: 'UX & Strategy Intern',
    object: 'tumbler',
    tags: ['speculative', 'ux', 'research'],
    summary:
      'What do people expect from an AI-integrated store? We tested two whiskey-experience prototypes for a duty-free retail space to find out.',
    facts: [
      { label: 'Participants', value: '12 · aged 20–40, London' },
      { label: 'Methods', value: 'Focus group, 1:1 interviews, prototype testing' },
      { label: 'Tools', value: 'Figma, Miro' },
    ],
    blocks: [
      {
        type: 'text',
        heading: 'Overview',
        body: ['AI is reshaping retail spaces by enhancing customer experience. In this case study we explored what experience shoppers expect from an AI-integrated store, by testing two whiskey-experience prototypes in a duty-free space.'],
      },
      {
        type: 'diagram',
        heading: 'Process',
        diagram: {
          kind: 'phases',
          phases: [
            { title: 'Prototyping + user testing', items: ['Research plan', 'Prototyping plan', 'User testing'] },
            { title: 'Development + recommendation', items: ['Adaptations', 'Development', 'Recommendation'] },
          ],
        },
      },
      {
        type: 'diagram',
        heading: 'How can a visual experience take the user on a journey?',
        intro: 'Mapping what a visualised journey could do for a brand, and where it could backfire.',
        diagram: {
          kind: 'bubbles',
          center: 'Visualised journey experience',
          nodes: [
            'Greater brand awareness',
            'Strengthening of brand image',
            'Sense of self-identification',
            'Personal connection to products',
            'Greater loyalty to product',
            'Fun and joy associated with product and brand',
            'Entertainment during the purchasing path',
            'Possible distraction from product',
            'Inspired confidence in tech-based products',
            'Display of technological prowess',
            'Changed perception of modernity and craft',
            'Redefinition of brand image',
          ],
        },
      },
      {
        type: 'numbered',
        heading: 'Research plan',
        items: [
          { title: 'Aim', body: 'Understand what it takes to create an interactive AI experience that helps users find tailored products and recommendations.' },
          { title: 'Method', body: 'Participants interacted with a prototype, then answered questions about their experience.' },
          { title: 'Participants', body: '12 in total: 4 in a focus group and 8 in 1:1 interviews. Aged 20–40, living in London.' },
        ],
      },
      {
        type: 'diagram',
        heading: 'Crafting a product journey',
        intro: 'We studied use cases of AI in retail and current market trends, identified the experiences customers want, and designed the journey around them.',
        diagram: {
          kind: 'flow',
          steps: ['Onboarding', 'Questions & refinement', 'Taste profile', 'Final selection', 'Checkout'],
          branch: { after: 2, label: 'How it works', joinsAt: 4 },
        },
      },
      {
        type: 'images',
        heading: 'User testing',
        intro: 'Two walkthrough prototypes, one narrative and one functional, built in Figma to understand needs and pain points specific to duty-free, explored through guided interviews.',
        layout: 'wide',
        images: [{ src: 'whiskey-ai/03.gif', alt: 'Animated map of prototype concepts plotted from traditional to futuristic and exploratory to guided' }],
      },
      {
        type: 'diagram',
        heading: 'Analysis & insights',
        intro: 'By transcribing and coding on Miro, we identified three themes and the questions they raised.',
        diagram: {
          kind: 'themes',
          items: [
            { title: 'Commercial value', body: 'How can AI-enabled experiences generate sales and increase conversion?' },
            { title: 'Trust', body: 'How do we build trust in AI so users feel their privacy is respected and recommendations are reliable?' },
            { title: 'Narrative & functional', body: 'Which approach, narrative or functional, creates the most engaging experience?' },
          ],
        },
      },
      { type: 'text', body: ['These insights were carried into immediate and future projects.'] },
    ],
  },
  {
    slug: 'identity-in-xr-environments',
    title: 'Identity in XR environments',
    shortTitle: 'Identity in XR Environments',
    kicker: 'Fashion psychology · Digital identity',
    year: '2023',
    client: 'MSc research, London College of Fashion',
    object: 'monitor',
    tags: ['research', 'fashion-psychology', 'speculative'],
    summary:
      'How do people identify with their avatars? A mixed-methods study using Ready Player Me found people bond far more with avatars built as their ideal self.',
    facts: [
      { label: 'Participants', value: '20 · aged 20–33' },
      { label: 'Methods', value: 'Avatar Identification Scale, semi-structured interviews' },
      { label: 'Tools', value: 'Ready Player Me, SPSS, Excel, Leximancer' },
    ],
    blocks: [
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'This study looks at avatar customisation in virtual worlds and reveals avatars as powerful tools for emotional expression and adaptability.',
          'Avatars aren’t just idealised selves. They let people communicate emotion and role-play, which shows how fluid digital self-representation is.',
        ],
      },
      {
        type: 'text',
        heading: 'Problem statement',
        body: ['Avatars now live far beyond gaming, on Snapchat, Meta and more. I set out to understand how everyday people relate to their avatars: the gap between ideal and actual self-representation, and what drives customisation. Hypothesis: people identify more strongly with avatars that resemble their ideal self.'],
      },
      {
        type: 'numbered',
        heading: 'Research design',
        items: [
          { title: 'Participants', body: '20 people aged 20–33, split equally by gender, from diverse nationalities. Gen Z and millennials, none of them hardcore gamers, all new to Ready Player Me.' },
          { title: 'Materials', body: 'A shortened Avatar Identification Scale (Van Looy et al., 2012) measuring similarity and wishful identification, plus semi-structured interviews on identity and avatar creation.' },
        ],
      },
      {
        type: 'diagram',
        heading: 'Participant journey',
        diagram: {
          kind: 'split-flow',
          before: [
            'Onboarding',
            'Participants share their screen and create a Ready Player Me avatar from a photo of themselves',
            'Avatar Identification Scale, before customisation',
          ],
          question: 'Divided into two groups',
          groups: [
            { title: 'Ideal self', body: 'Customise the avatar to how they want to be perceived' },
            { title: 'Actual self', body: 'Customise the avatar to look exactly like themselves' },
          ],
          after: [
            'Avatar Identification Scale, after customisation',
            '1:1 semi-structured interview',
            'Debriefing',
          ],
        },
      },
      {
        type: 'images',
        heading: 'Actual self vs. ideal self',
        layout: 'grid',
        images: [
          { src: 'self-and-avatar/05.jpg', alt: 'Actual-self avatar: a man in a white sweatshirt and black trousers', caption: 'Actual self' },
          { src: 'self-and-avatar/06.png', alt: 'Actual-self avatar: a woman in a black suit', caption: 'Actual self' },
          { src: 'self-and-avatar/07.png', alt: 'Ideal-self avatar: a figure in a futuristic black and gold outfit with a patterned mask', caption: 'Ideal self' },
          { src: 'self-and-avatar/08.jpg', alt: 'Ideal-self avatar: a woman in camouflage jacket, mini skirt and boots', caption: 'Ideal self' },
        ],
      },
      {
        type: 'stats',
        heading: 'Findings',
        items: [
          { value: 'U = 84.5', label: 'Ideal-self avatars produced significantly higher identification than actual-self avatars' },
          { value: '↑ both', label: 'Both groups identified more with their avatar after customising it' },
          { value: '13 → 4', label: 'Themes from Leximancer, grouped into four core insights' },
        ],
      },
      {
        type: 'diagram',
        heading: 'Concept map',
        intro: 'Thematic analysis of 20 transcripts in Leximancer, recreated. Larger circles are more central concepts.',
        diagram: {
          kind: 'concepts',
          nodes: [
            { id: 'avatar', x: 50, y: 52, r: 11, weight: 1 },
            { id: 'look', x: 57, y: 33, r: 9, weight: 0.5 },
            { id: 'wearing', x: 71, y: 33, r: 9, weight: 0.5 },
            { id: 'fit', x: 73, y: 53, r: 9, weight: 0.45 },
            { id: 'vibe', x: 60, y: 66, r: 9, weight: 0.5 },
            { id: 'people', x: 52, y: 76, r: 9, weight: 0.4 },
            { id: 'similar', x: 40, y: 66, r: 9, weight: 0.6 },
            { id: 'carefree', x: 28, y: 61, r: 9, weight: 0.7 },
            { id: 'escape', x: 18, y: 48, r: 9, weight: 0.85 },
            { id: 'different', x: 30, y: 46, r: 9, weight: 0.6 },
            { id: 'characters', x: 30, y: 32, r: 9, weight: 0.4 },
            { id: 'comfortable', x: 40, y: 22, r: 9, weight: 0.45 },
            { id: 'better', x: 22, y: 14, r: 9, weight: 0.8 },
            { id: 'happy', x: 80, y: 78, r: 9, weight: 0.8 },
          ],
          links: [
            ['avatar', 'look'], ['look', 'wearing'], ['wearing', 'fit'], ['avatar', 'vibe'], ['vibe', 'fit'],
            ['vibe', 'happy'], ['vibe', 'people'], ['avatar', 'similar'], ['similar', 'carefree'],
            ['similar', 'people'], ['carefree', 'escape'], ['escape', 'different'], ['different', 'avatar'],
            ['different', 'characters'], ['characters', 'comfortable'], ['characters', 'better'],
          ],
        },
      },
      {
        type: 'numbered',
        heading: 'Insights',
        intro: 'Avatars let people express themselves beyond real-life constraints, emphasising uniqueness and aspiration.',
        items: [
          { title: 'Dressed for a place, or dressed as a feeling', body: 'The actual-self group chose realistic outfits shaped by context. The ideal-self group dressed to express personality, emotion and sentiment.' },
          { title: 'Exploring sides of personality', body: 'Participants showcased qualities they rarely express day to day; some built personas far from their true selves as escapism.' },
          { title: 'A human face to connect', body: 'A strong preference for humanoid avatars for connection, empathy and relatability, with some interest in non-human avatars for role-play.' },
          { title: 'Balancing sameness and exploration', body: 'Default avatars felt generic, just a starting point. Exploration ranged from unrealistic accessories to real-world wearability.' },
        ],
      },
    ],
  },
  {
    slug: 'aistetic',
    title: 'Usability testing with Aistetic',
    shortTitle: 'Aistetic',
    kicker: 'UX research · Fashion tech',
    year: '2023',
    client: 'Aistetic, London',
    role: 'User Researcher',
    object: 'tape',
    tags: ['research', 'ux'],
    summary:
      'Evaluating a 3D AI body-scanning app built for size inclusivity: how usability and data-privacy cues shape satisfaction, trust and recommendation.',
    facts: [
      { label: 'Participants', value: '40 · survey, 30+ interviewed' },
      { label: 'Methods', value: 'SUS, PSSUQ, interviews, correlation analysis' },
      { label: 'Tools', value: 'Qualtrics, SPSS, Excel' },
    ],
    blocks: [
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'Aistetic is 3D body-measurement software that promotes body diversity and size inclusivity for e-commerce clothing retailers and fashion brands.',
          'The study evaluated the app’s usability and functionality, and its impact on user satisfaction, trust and likelihood to recommend. Early interviews showed the biggest pain point was data protection.',
        ],
      },
      {
        type: 'diagram',
        heading: 'Process',
        diagram: {
          kind: 'steps',
          steps: ['Initial interviews and primary research', 'Identifying pain points and defining the problem', 'Quantitative user testing with surveys', 'Statistical analysis', 'Insights and implementation'],
        },
      },
      {
        type: 'text',
        heading: 'Research design',
        body: ['Participants used the demo web app, completed a 3D body scan to find their size, then filled in a Qualtrics survey on usability, privacy and information security. The survey used the System Usability Scale (SUS) and the Post-Study System Usability Questionnaire (PSSUQ), analysed in SPSS and Excel.'],
      },
      {
        type: 'stats',
        heading: 'Insights',
        items: [
          { value: '90%', label: 'of participants rated the app highly usable and easy to navigate (M = 23.57)' },
          { value: 'r ≈ moderate', label: 'The easier the app was to use, the more likely people were to recommend it' },
          { value: '> 50%', label: 'felt protected thanks to bold “your data is protected” messaging' },
        ],
      },
      {
        type: 'text',
        heading: 'Recommendation',
        body: ['For those still unsure, add a small, accessible link to the full terms and policies that explains each step in plain language, so every user gets a satisfying, trustworthy experience.'],
      },
    ],
  },
  {
    slug: 'click-fit',
    title: 'Click-Fit: a digital wardrobe app',
    shortTitle: 'Click-Fit',
    kicker: 'UX design · Fashion psychology',
    object: 'hanger',
    tags: ['ux', 'fashion-psychology', 'research'],
    summary:
      'An app that catalogues your wardrobe and builds outfits from clothes you already own. It’s designed to curb overconsumption by making people aware of what they have.',
    facts: [
      { label: 'Type', value: 'UX case study' },
      { label: 'Methods', value: 'Surveys, interviews, usability testing' },
      { label: 'Tools', value: 'Paper, Figma' },
    ],
    blocks: [
      {
        type: 'numbered',
        heading: 'Overview',
        items: [
          { title: 'The product', body: 'Click-Fit helps you organise your wardrobe through cataloguing and helps you build outfits with clothes you already have.' },
          { title: 'The problem', body: 'People overconsume because they feel they have nothing to wear, because they can’t remember all the clothing they own.' },
          { title: 'The goal', body: 'Make people aware of everything they own at the click of a button, and match existing pieces into new outfits.' },
        ],
      },
      {
        type: 'text',
        heading: 'Understanding the user',
        body: [
          'We used a mixed-methods approach: surveys, interviews and usability testing with a diverse group of participants. We assumed users mainly forgot what they owned and wanted a cataloguing tool.',
          'In-depth interviews told a richer story: cluttered wardrobes and lack of time shaped outfit choices just as much. We pivoted from pure inventory management to intuitive organisation tools and quick outfit generation.',
        ],
      },
      {
        type: 'numbered',
        heading: 'Pain points',
        items: [
          { title: 'Forgetfulness', body: 'People forget what they own, so clothes go unworn. A full visual catalogue reduces cognitive load and makes choosing easier.' },
          { title: 'Lack of time', body: 'Rushed mornings lead to rushed decisions. Quick outfit suggestions based on preferences and occasion streamline the choice.' },
          { title: 'Clutter', body: 'A cluttered wardrobe is overwhelming. Categories and filters make pieces easy to find.' },
          { title: 'Overconsumption', body: 'Showing what you already own, and new ways to combine it, encourages mindful consumption.' },
        ],
      },
      {
        type: 'images',
        heading: 'Persona: Sarah, the busy professional',
        intro: 'A 30-year-old marketing manager in the city with a busy schedule and after-hours events. She forgets what she owns, repeats the same outfits and struggles with a cluttered wardrobe.',
        layout: 'pair',
        images: [{ src: 'click-fit/01.png', alt: 'Portrait used for the persona Sarah, a woman in a cream knit jumper' }],
      },
      { type: 'quote', text: 'As a busy professional, I want to quickly view my entire wardrobe and receive outfit suggestions, so I can save time and look stylish without searching through clutter.', by: 'Sarah, user story' },
      {
        type: 'images',
        heading: 'Storyboard',
        intro: 'To understand the path a user would take, I sketched a storyboard of the key moments.',
        layout: 'grid',
        images: [
          { src: 'click-fit/02.jpg', alt: 'Sketch: a frustrated person surrounded by clothes', caption: 'So many clothes, nothing to wear.' },
          { src: 'click-fit/03.jpg', alt: 'Sketch: a person photographing a shirt with their phone', caption: 'They download Click-Fit and catalogue everything.' },
          { src: 'click-fit/04.jpg', alt: 'Sketch: a hand scrolling a wardrobe screen', caption: 'Browsing the wardrobe is quick and easy.' },
          { src: 'click-fit/05.jpg', alt: 'Sketch: an outfit suggestion screen', caption: 'Outfit suggestions make deciding faster.' },
          { src: 'click-fit/06.jpg', alt: 'Sketch: a happy, dressed person', caption: 'Ready in no time.' },
        ],
      },
      {
        type: 'diagram',
        heading: 'User journey map',
        intro: 'Breaking the journey down helped me empathise with the user at every step.',
        diagram: {
          kind: 'journey',
          stages: ['Awareness', 'Consideration', 'Usage', 'Post-usage'],
          rows: [
            { label: 'Tasks', cells: [
              ['Discover Click-Fit through social media and blogs', 'Research sustainable fashion apps'],
              ['Download the app', 'Explore features for outfit creation'],
              ['Catalogue existing wardrobe items', 'Generate outfit suggestions'],
              ['Share outfits on social media', 'Give feedback on app functionality'],
            ] },
            { label: 'Feelings', cells: [
              ['Curious', 'Hopeful', 'Excited', 'Motivated'],
              ['Interested', 'Cautious', 'Overwhelmed', 'Intrigued'],
              ['Engaged', 'Satisfied', 'Empowered', 'Creative'],
              ['Proud', 'Connected', 'Valued', 'Heard'],
            ] },
            { label: 'Opportunities', cells: [
              ['Targeted eco-conscious marketing', 'Clear information on sustainability benefits'],
              ['Guided onboarding tutorials', 'Simpler navigation to key features'],
              ['Video recognition for faster cataloguing', 'Personalised recommendations from past use'],
              ['Community for sharing sustainable practices', 'Easy feedback mechanisms'],
            ] },
          ],
        },
      },
      {
        type: 'images',
        heading: 'Paper wireframes',
        intro: 'Many iterations of each screen on paper, to work out how every feature could fit before going digital.',
        layout: 'pair',
        images: [
          { src: 'click-fit/08.jpg', alt: 'Paper wireframes of the Home and Upload screens' },
          { src: 'click-fit/09.jpg', alt: 'Paper wireframes of the Schedule and Generate screens' },
        ],
      },
      {
        type: 'numbered',
        heading: 'Four features for four pain points',
        items: [
          { title: 'Upload', body: 'Catalogue clothing so users can declutter.' },
          { title: 'Schedule', body: 'Plan outfits ahead and save time.' },
          { title: 'Generate', body: 'Build outfits quickly and wear more of what you own.' },
          { title: 'Wardrobe', body: 'Browse your clothes anywhere and avoid buying near-duplicates.' },
        ],
      },
      {
        type: 'images',
        heading: 'Digital wireframes & lo-fi prototype',
        intro: 'The home screen shows today’s scheduled or suggested outfit, with quick access to every feature.',
        layout: 'phones',
        images: [
          { src: 'click-fit/10.png', alt: 'Wireframe: Home screen with today’s outfit', caption: 'Home' },
          { src: 'click-fit/11.png', alt: 'Wireframe: Upload screen with camera and gallery', caption: 'Upload' },
          { src: 'click-fit/12.png', alt: 'Wireframe: Schedule screen with calendar', caption: 'Schedule' },
          { src: 'click-fit/13.png', alt: 'Wireframe: Generate screen with tops, bottoms and accessories', caption: 'Generate' },
          { src: 'click-fit/14.png', alt: 'Wireframe: Wardrobe screen with categories', caption: 'Wardrobe' },
        ],
      },
    ],
  },
  {
    slug: 'personality-and-avatars',
    title: 'Personality, styling & online avatars',
    shortTitle: 'Personality & Avatars',
    kicker: 'Fashion psychology · Research paper',
    object: 'mirror',
    tags: ['research', 'fashion-psychology'],
    summary:
      'Does neuroticism shape how differently we dress our avatars versus ourselves? An exploratory study of Gen Z Bitmoji styling.',
    facts: [
      { label: 'Participants', value: '30 · Gen Z' },
      { label: 'Design', value: 'Within-participant, quantitative' },
      { label: 'Tools', value: 'Big Five Inventory, custom avatar style scale, SPSS' },
    ],
    blocks: [
      {
        type: 'text',
        heading: 'Abstract',
        body: [
          'This exploratory study looks at the link between neuroticism (a Big Five personality trait) and the gap between how Gen Z people style their Snapchat Bitmoji and how they dress in real life.',
          'Participants completed a neuroticism assessment and a custom “avatar style scale” measuring differences between virtual and real-world self-presentation.',
        ],
      },
      {
        type: 'stats',
        heading: 'Results',
        items: [
          { value: 'r = −.304', label: 'A moderate correlation between neuroticism and avatar vs. real-life styling' },
          { value: 'p = .103', label: 'Not statistically significant. A small, homogenous sample limits generalisation' },
          { value: '90%', label: 'of participants scored “average” on neuroticism' },
        ],
      },
      {
        type: 'text',
        heading: 'Why it matters',
        body: [
          'We express our ideal self through clothing, and social platforms now let anyone build a customisable avatar. People higher in neuroticism are more likely to present ideal or false selves online, so their digital style may diverge from what they wear.',
          'Most research focuses on gamers. As virtual avatars go mainstream, this study lays the groundwork for understanding how personality shapes digital fashion, and calls for larger, more diverse samples.',
        ],
      },
      { type: 'text', heading: 'Keywords', body: ['Neuroticism · Digital avatars · Fashion psychology · Self-presentation · Gen Z · Virtual identity'] },
    ],
  },
  {
    slug: 'creative-projects',
    title: 'Creative projects: photo series',
    shortTitle: 'Photo Series',
    kicker: 'Creative direction · Photography',
    object: 'camera',
    tags: ['creative-direction'],
    summary:
      'Self-portrait and directed photo series exploring longing, intimacy and the rituals we use to feel close to someone.',
    blocks: [
      {
        type: 'images',
        heading: 'Remnants of Innocence',
        intro: 'Creative direction: Annushka Ebenazar · Photography: Pruthvi K · Model: Julia Valgas',
        layout: 'carousel',
        images: [
          { src: 'creative/remnants/01.jpg', alt: 'A hand in black lace holds dried roses and an old cigarette packet against a dark blue wall' },
          { src: 'creative/remnants/02.jpg', alt: 'A woman with a fringe and a ribbon collar looks sideways in near darkness, a lace sleeve raised behind her' },
          { src: 'creative/remnants/03.jpg', alt: 'Dried roses held up to the face, catching warm low light' },
          { src: 'creative/remnants/04.jpg', alt: 'A dried rose covers one eye while a lace-gloved hand rests below' },
          { src: 'creative/remnants/05.jpg', alt: 'A lit match glows beside her face among dried flowers' },
          { src: 'creative/remnants/06.jpg', alt: 'A single dried rose held in front of a blurred face' },
          { src: 'creative/remnants/07.jpg', alt: 'A dried rose in focus, her face fading into the dark behind it' },
          { src: 'creative/remnants/08.jpg', alt: 'Dried roses left lying in the dark' },
        ],
      },
      {
        type: 'images',
        heading: 'Midnight Makeup',
        intro: 'A self-portrait series about long-distance love, and how make-up becomes a way to feel closer to your lover.',
        layout: 'carousel',
        images: [
          { src: 'creative/midnight/01.jpg', alt: 'Self-portrait applying red lipstick in a round mirror, captioned “In just 20 minutes”' },
          { src: 'creative/midnight/02.jpg', alt: 'Applying lipstick with her reflection in the mirror, captioned “I can have you all to myself”' },
          { src: 'creative/midnight/03.jpg', alt: 'Lipstick close to the mirror, captioned “Ik you’re half way across the world”' },
          { src: 'creative/midnight/04.jpg', alt: 'Applying eyeliner in the mirror, captioned “And here I am dressing up as though I’m going out with you”' },
          { src: 'creative/midnight/05.jpg', alt: 'Finishing her lips at the mirror, captioned “Just to hear your voice”' },
          { src: 'creative/midnight/06.jpg', alt: 'Blowing a kiss at her reflection, captioned “It might seem stupid”' },
          { src: 'creative/midnight/07.jpg', alt: 'Seen from behind with her hair pinned up, captioned “But it brings back memories”' },
          { src: 'creative/midnight/08.jpg', alt: 'Turning her head over a bare shoulder, captioned “Calms me…”' },
          { src: 'creative/midnight/09.jpg', alt: 'Looking back at the camera as the phone rings, captioned “Sweeps me back to the feeling of you…”' },
        ],
      },
      {
        type: 'images',
        heading: 'Missed You',
        intro: 'A self-portrait series about an unrequited lover who can’t catch her love’s attention.',
        layout: 'carousel',
        images: [
          { src: 'creative/missed/01.jpg', alt: 'Self-portrait in a blue dress at a garden table with glasses, captioned “I hope you’ll show up today”' },
          { src: 'creative/missed/02.jpg', alt: 'Looking down at the garden table, captioned “I don’t wanna start without you”' },
          { src: 'creative/missed/03.jpg', alt: 'Taking a phone photo in an arched mirror among plants, captioned “let me send a reminder”' },
          { src: 'creative/missed/04.jpg', alt: 'Her mirror reflection holding a phone beside a blue glass, captioned “and now I’ll wait…”' },
          { src: 'creative/missed/05.jpg', alt: 'Checking her phone in the mirror twenty minutes later, captioned “is that you? hope just another notification”' },
          { src: 'creative/missed/06.jpg', alt: 'Hiding behind her phone in the mirror, captioned “message seen”' },
          { src: 'creative/missed/07.jpg', alt: 'Pouring wine into a blue glass, captioned “Looks like I’ll have to start without you”' },
          { src: 'creative/missed/08.jpg', alt: 'Holding the glass and looking away, captioned “strike III, I still don’t know if you deserve this…”' },
          { src: 'creative/missed/09.jpg', alt: 'Raising the glass with closed eyes, captioned “I don’t care about you that much either, I won’t let this bother me”' },
          { src: 'creative/missed/10.jpg', alt: 'Drinking from the blue glass, captioned “but I’d be lying if I said I didn’t miss you”' },
        ],
      },
    ],
  },
  {
    slug: 'kraftgurus',
    title: 'Kraftgurus: consumer profiling & brand book',
    shortTitle: 'Kraftgurus',
    kicker: 'Branding · Consumer research',
    year: '2022',
    client: 'Kraftgurus, London',
    role: 'Consumer Profiling & Branding Intern',
    object: 'book',
    tags: ['branding', 'research', 'creative-direction'],
    summary:
      'Competitor analysis, consumer profiles, narrative avatars and a full brand book for a brand bringing authentic, handmade Indian craft to a global luxury audience.',
    facts: [
      { label: 'Deliverables', value: 'Competitor analysis, consumer profiles, avatars, brand book' },
      { label: 'Markets', value: 'UK, Japan, India' },
    ],
    blocks: [
      {
        type: 'images',
        heading: 'Competitor analysis',
        layout: 'deck',
        images: [1, 2, 3, 4].map((n) => ({ src: `kraftgurus/${String(n).padStart(2, '0')}.jpg`, alt: `Kraftgurus competitor analysis, slide ${n}` })),
      },
      {
        type: 'images',
        heading: 'Consumer profiles',
        intro: 'Projected consumer groups across the UK and Japan: the xenophile, the diaspora and the corporate customer.',
        layout: 'deck',
        images: [5, 6, 7, 8, 9].map((n) => ({ src: `kraftgurus/${String(n).padStart(2, '0')}.jpg`, alt: `Kraftgurus consumer profile, slide ${n}` })),
      },
      {
        type: 'images',
        heading: 'Consumer narratives & avatars',
        intro: 'Projected ideal consumers, written as people: Hannah, Manjit and Reina.',
        layout: 'deck',
        images: [10, 11, 12, 13].map((n) => ({ src: `kraftgurus/${String(n).padStart(2, '0')}.jpg`, alt: `Kraftgurus consumer narrative, slide ${n}` })),
      },
      {
        type: 'images',
        heading: 'The brand book',
        layout: 'deck',
        images: Array.from({ length: 22 }, (_, i) => i + 14).map((n) => ({ src: `kraftgurus/${String(n).padStart(2, '0')}.jpg`, alt: `Kraftgurus brand book, page ${n - 13}` })),
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
