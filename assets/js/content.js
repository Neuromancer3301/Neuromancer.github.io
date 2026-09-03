/* =============================================================================
   content.js — THE ONLY FILE YOU NEED TO EDIT
   -----------------------------------------------------------------------------
   Every word on this site comes from this file. Adding a project, a skill, an
   award or a blog post means adding one object to the right array — you never
   touch HTML, CSS or JavaScript.

   HOW TO USE THIS FILE
     1. Replace everything in [square brackets] with your real details.
     2. Delete any entry you don't want.
     3. Empty an array entirely (e.g. `research: []`) and that whole section
        disappears from the page AND from the navigation, automatically.

   Nothing here is ever parsed as HTML, so apostrophes, ampersands and angle
   brackets in your text are always safe.
   ========================================================================== */

const SITE = {

  /* ==========================================================================
     1. IDENTITY  — who you are (appears in the hero and the browser tab)
     ====================================================================== */
  name: "Niamul Abid",
  initials: "",                    // leave "" to auto-derive from your name
  role: "CSE Undergraduate",
  org: "Islamic University of Technology",
  location: "Gazipur, Bangladesh",

  // The first thing anyone reads. Two sentences, in your own voice.
  // Say what you work on and what draws you to it — not "passionate about tech".
  tagline:
    "Fourth-semester Computer Science and Engineering student at IUT. " +
    "Trying to connect the dots.",
  // TODO: rewrite the line above so it sounds like you. It matters more than
  // any other sentence on the site.

  /* ==========================================================================
     2. CONTACT  — email, GitHub and LinkedIn are required by the assignment
     ====================================================================== */
  email: "iamzihan055@gmail.com",

  socials: [
    { label: "Email",    handle: "iamzihan055@gmail.com", href: "mailto:iamzihan055@gmail.com", icon: "mail" },
    { label: "GitHub",   handle: "@Neuromancer3301",   href: "https://github.com/Neuromancer3301",   icon: "github"   },
    { label: "LinkedIn", handle: "in/md-niamul-al-zihan-747a2b219/",        href: "https://www.linkedin.com/in/md-niamul-al-zihan-747a2b219/", icon: "linkedin" },

    // Optional — uncomment and fill in, or delete:
    // { label: "Codeforces", handle: "[@handle]", href: "[Codeforces URL]", icon: "code" },
    // { label: "Twitter/X",  handle: "[@handle]", href: "[X URL]",          icon: "link" },
  ],

  // Drop a PDF at assets/resume.pdf and set this to "assets/resume.pdf".
  // Leave "" and the Résumé button hides itself.
  // resumeUrl: "",

  /* ==========================================================================
     3. ABOUT  — each string becomes a paragraph. Two or three is plenty.
     ====================================================================== */
  about: [
    "I'm a CS undergrad who loves building cool stuff, solving algorithm " +
      "problems, and exploring new tech.",
    "Right now I'm deep in software development and problem solving, always " +
      "looking for things that make me think. Big on learning, chess, reading, " +
      "and imagining random ideas in my head.",
  ],

  /* ==========================================================================
     4. SKILLS  — grouped so the list stays readable as it grows
     ====================================================================== */
  skills: [
    { group: "Languages",  items: ["C", "C++", "Python", "Java", "SQL"] },
    { group: "Data & ML",  items: ["NumPy", "pandas", "scikit-learn"] },
    { group: "Tools",      items: ["Git", "Linux", "PostgreSQL"] },
  ],
  // TODO: delete anything you would not be comfortable being asked about in an
  // interview. A short honest list is worth far more than a long padded one.

  /* ==========================================================================
     5. PROJECTS  — copy a block to add one
     --------------------------------------------------------------------------
       title    project name
       year     "2026"  or  "2025 — present"
       status   "Shipped" | "In progress" | "Archived"  (colours the badge)
       blurb    1–3 sentences: what it does AND what was technically hard
       tags     technologies used
       links    label + href; an empty href hides that link
       featured true = accent bar and pinned to the top of the list
     ====================================================================== */
  projects: [
    {
      title: "Dynamics Engine",
      status: "In progress",
      blurb:
        "A desktop N-pendulum physics simulation engine that models the motion " +
        "of interconnected pendulums using an object-oriented design. It " +
        "visualises realistic pendulum movement and lets you experiment with " +
        "any number of connected pendulums, which makes it useful for learning " +
        "classical mechanics and numerical simulation. Currently extending it " +
        "into a solar system model.",
      tags: ["Java", "JavaFX"],
      links: [{ label: "Source", href: "https://github.com/Neuromancer3301/Dynamics-Engine" }],
      featured: true,
    },
    {
      title: "Simple FSM",
      status: "Shipped",
      blurb:
        "A finite state machine implementation showing how software moves " +
        "between predefined states in response to events — the pattern behind " +
        "embedded systems, game logic, operating systems and protocol design.",
      tags: ["Python"],
      links: [{ label: "Source", href: "https://github.com/Neuromancer3301/Simple-FSM" }],
      featured: true,
    },
    {
      title: "Project AMTA",
      status: "Shipped",
      blurb: "A marketplace application built in C++.",
      tags: ["C++"],
      links: [{ label: "Source", href: "https://github.com/Neuromancer3301/Project-AMTA" }],
      featured: false,
    },
  ],

  /* ==========================================================================
     6. ACADEMIC ACHIEVEMENTS
     ====================================================================== */
  achievements: [
    {
      year: "2026",
      title: "IUT Excellence Award",
      detail: "Awarded by the Islamic University of Technology.",
    },
    {
      year: "2025",
      title: "Silver Medal — University Physics Competition (UPC)",
      detail: "International team competition in applied physics problem solving.",
    },
    {
      year: "2023",
      title: "National Participant — Bangladesh Olympiad in Informatics",
      detail: "Bangladesh's national olympiad in algorithmic problem solving.",
    },
  ],

  /* ==========================================================================
     7. RESEARCH  — leave as [] until you have some; the section stays hidden
     ====================================================================== */
  research: [
    // {
    //   title: "[Paper or research project title]",
    //   venue: "[Conference, journal, or supervising lab]",
    //   year: "[2027]",
    //   blurb: "[The question you asked and what you found.]",
    //   links: [{ label: "PDF", href: "[URL]" }, { label: "Code", href: "[URL]" }],
    // },
  ],

  /* ==========================================================================
     8. EDUCATION & EXPERIENCE  — one timeline, newest first
        kind: "education" | "work" | "activity"   (only changes the dot colour)
     ====================================================================== */
  timeline: [
    {
      period: "2024 — 2028",
      title: "B.Sc. in Computer Science and Engineering",
      org: "Islamic University of Technology",
      detail: "Currently in the fourth semester.",
      kind: "education",
    },
    {
      period: "2021 — 2023",
      title: "Higher Secondary Certificate",
      org: "Bogura Government College",
      kind: "education",
    },
    {
      period: "2021",
      title: "Secondary School Certificate",
      kind: "education",
    },
  ],

  /* ==========================================================================
     9. LEADERSHIP & COMMUNITY  — clubs, volunteering, organising, mentoring
     ====================================================================== */
  // leadership: [
  //   {
  //     role: "[Your Role]",
  //     org: "[Club, society or organisation]",
  //     period: "[2025 — present]",
  //     detail: "[What you are responsible for and what you have actually changed or organised.]",
  //   },
    // Delete the block above if you have nothing here yet — the section will
    // hide itself rather than showing an empty heading.
  // ],

  /* ==========================================================================
     10. WRITING  — blog posts, technical write-ups, notes
         Starting this habit early is worth a lot. Leave [] to hide.
     ====================================================================== */
  writing: [
    // { title: "[Post title]", date: "[2026-03-14]", blurb: "[One-line summary.]", href: "[URL]" },
  ],

  /* ==========================================================================
     11. INTERESTS  — the section that makes this feel like a person
     ====================================================================== */
  interests: [
    { title: "Chess", body: "The cleanest game I know for thinking a few moves ahead." },
    { title: "Books", body: "Fiction mostly, and whatever else ends up in the pile." },
    { title: "Exploring", body: "New places, new tools, new rabbit holes." },
    { title: "Music", body: "Always something playing while I work." },
  ],

  /* ==========================================================================
     12. GALLERY  — optional. Photos, artwork, screenshots, posters.
     --------------------------------------------------------------------------
       Put image files in assets/img/ and reference them here. Images are
       lazy-loaded automatically. `alt` is required for accessibility — describe
       what is in the image, not "image1.jpg".
       Leave [] and the gallery disappears.
     ====================================================================== */
  // gallery: [
  //   // { src: "assets/img/photo-01.jpg", alt: "[Describe what is shown]", caption: "[Optional caption]" },
  // ],

  /* ==========================================================================
     13. FOOTER
     ====================================================================== */
  footerNote:
    "Designed and built from scratch with semantic HTML, CSS and vanilla " +
    "JavaScript. No frameworks, no build step. Hosted on GitHub Pages.",
};

window.SITE = SITE;
