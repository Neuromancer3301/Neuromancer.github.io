# AI Tool Usage Disclosure

**Student:** [Your Full Name]
**Student ID:** [Your ID]
**Course:** Humanities / Ethics
**Assignment:** Assignment 01 — Creating a Portfolio Website
**Instructor:** Samnun Azfar, Junior Lecturer, CSE
**Submitted:** [Date]

---

## 1. Declaration

I used an AI assistant in preparing this assignment. This document discloses
which tool I used, what it was used for, how the work was divided between the
tool and me, and the complete history of the prompts I sent. I am submitting
this voluntarily and in full, in line with the assignment's requirement to
declare AI usage.

## 2. Tool used

| Tool | Developer | Model | Access |
|------|-----------|-------|--------|
| Claude Code | Anthropic | Claude Opus 5 | Command-line interface |

No other AI tool was used at any stage — no ChatGPT, Gemini, Copilot, or
AI-assisted design tool.

## 3. Purpose of use

I used the assistant for the **software engineering** portion of the assignment:

- Designing the site architecture — specifically the decision to drive the
  entire site from a single `content.js` data file so that future additions
  require no HTML or CSS changes, which addresses the assignment's
  extensibility requirement.
- Writing `index.html`, `assets/css/styles.css` and `assets/js/main.js`.
- Implementing accessibility features (semantic landmarks, ARIA attributes,
  focus management, reduced-motion support).
- Writing the deployment documentation in `README.md`.
- Verifying the rendered output with an automated DOM test.

## 4. Division of work

**The AI produced:** the HTML structure, the CSS theme and layout system, the
JavaScript rendering logic, and the README documentation. It also proposed the
overall data-driven architecture.

**I produced:** the design direction and visual preferences I asked it to work
toward; all personal content — my biography, project descriptions, skills,
academic achievements, education history, and contact details; review and
testing of the generated code; and the deployment to GitHub Pages.

> **[EDIT THIS SECTION BEFORE SUBMITTING.]** The two paragraphs above describe
> the split as it stands at the time of writing. Adjust them so they describe
> what *actually* happened — for example, if you modified the colours, rewrote
> parts of the code, or changed the layout yourself, say so specifically. An
> inaccurate description here is precisely the failure mode this deliverable
> exists to catch.

## 5. Academic integrity statement

All personal information, project descriptions, and claims about my achievements
in this portfolio are my own and are factually accurate. The AI assistant did not
generate any claim about my background; where it inserted placeholder text, I
replaced it with my own details before submission. I have read and understood
every line of the code submitted, and I am able to explain how it works.

---

## 6. Prompt history

The complete sequence of prompts I sent, in order and unedited.

### Prompt 1

> there's nothing in this folder, but here's the guidelines for this assignment.
> I need you to complete this assignment.

*No guidelines were actually attached to this message, so the assistant declined
to proceed and asked me to supply them.*

### Prompt 2

> Assignment 01: Creating a Portfolio Website — Samnun Azfar, Junior Lecturer,
> CSE — 100 points — Due Tomorrow
>
> This assignment tasks you to create your own portfolio website.
>
> **Deliverables:** GitHub repository for the portfolio website (with privacy set
> to public); Domain link of website portfolio is hosted on; If you used any AI
> tools, the names of the tools and the history of the sent prompts.
>
> **Requirements:** Clearly mention your identity, information about you, and your
> contact information (Email, GitHub profile, LinkedIn profile at the bare
> minimum); Include and highlight your previous/ongoing projects, academic
> achievements and research (if any); Exercise creativity to tailor the theme,
> design and elements to suit your interests and preference; Feel free to include
> anything else you feel like (e.g. your artwork, photography, writing, music,
> community involvement etc. — anything that helps define you).
>
> **Suggestions:** Use GitHub Pages to host the portfolio; make sure the website
> clearly and concisely represents your interests but also comprehensively covers
> all your works and projects; make your portfolio extensible, since you are in
> your fourth semester and will be doing a lot more over the next two years;
> document your writings and projects online; you can freely utilize LLMs to
> implement and realize your website; you can adapt the design from an existing
> open-source portfolio, but make sure that you modify it to fit your requirements.
>
> *(Full brief, including the tutorial links and the example portfolios — minimal:
> Guido van Rossum, Paul Graham, Chris Olah, Andrej Karpathy; fancy: Jackie Zhang,
> Gazi Jarin.)*

### Prompt 3

> is it done?

*The assistant reported that the site was built but the assignment was not
complete: the content was still placeholder, nothing had been deployed, and this
disclosure document was unfinished.*

### Prompt 4

> **Role:** You are a world-class portfolio designer, senior front-end engineer,
> UX/UI designer, and GitHub Pages deployment expert. Your task is to design and
> build a submission-ready personal portfolio website that satisfies every
> requirement of my Humanities course assignment while being polished enough to
> serve as my real long-term portfolio. Optimize for both academic grading and
> professional credibility.
>
> **Context:** I am a 4th-semester Computer Science and Engineering student
> creating my first long-term portfolio. The website should not feel like a
> temporary class project — it should be scalable so I can continue adding
> projects, research, achievements, and experiences over the next two years.
>
> **Design vision:** Combine the strengths of Andrej Karpathy (clean
> professionalism), Chris Olah (thoughtful information hierarchy), and Jackie
> Zhang (beautiful visual execution). Minimal but premium; elegant rather than
> flashy; modern and calming; highly readable; visually cohesive. Avoid looking
> like a generic Bootstrap template.
>
> **Technical constraints:** HTML5, CSS3, vanilla JavaScript only; GitHub Pages
> compatible; no backend; no unnecessary frameworks; semantic HTML and clean
> architecture.
>
> **Information architecture:** Hero, About, Skills, Projects, Academic
> Achievements, Research, Experience (future-ready), Leadership & Community,
> Gallery or Interests, Contact, Footer.
>
> **UX requirements:** smooth scrolling, active navigation highlighting, subtle
> animations, hover interactions, responsive cards, consistent spacing system,
> strong typography hierarchy, balanced whitespace.
>
> **Accessibility requirements:** semantic HTML, keyboard navigation, visible
> focus states, alt text, proper heading hierarchy, ARIA labels, WCAG-conscious
> colour contrast.
>
> **Performance requirements:** fast loading, lightweight assets, efficient CSS,
> minimal JavaScript, lazy loading where appropriate.
>
> Also generate the GitHub Pages deliverables (repository structure, git
> initialization steps, deployment steps, optional custom domain instructions,
> `.gitignore`, `README.md`) and a ready-to-submit AI disclosure document.
>
> Work in seven phases: requirement analysis, portfolio strategy, wireframe,
> complete implementation, personalization with clearly marked editable
> placeholders, deployment guide, and final verification. Organize the response
> under fourteen specified headings. If any instruction is ambiguous, state the
> assumption, choose the safest grading-friendly implementation, and continue.

### Prompt 5

> so is it deployed yet?

### Prompt 6

> tell me the step by step how to do so

### Prompt 7

> so I've changed some of the files that you've provided, please check and make
> them the way they were

*I had edited `content.js` myself to add my real name, email, GitHub and
LinkedIn, and had commented out the sections I had not filled in. In doing so I
left an unmatched closing bracket, which broke the file and made the whole site
render blank. The assistant found and fixed that one line, and kept my own
content rather than reverting it.*

### Prompt 8

> tell me step by steps on what I need to do

### Prompt 9

> write the ABOUT part

### Prompt 10

> make it much more casual

### Prompt 11

> add neuromancer line

### Prompt 12

> *(Supplied my real content for the site: the About text, three projects —
> Dynamics Engine, Simple FSM and Project AMTA, with descriptions, tech stacks
> and repository links; three achievements — Bangladesh Olympiad in Informatics
> 2023, University Physics Competition silver medal 2025, IUT Excellence Award
> 2026; my university, HSC and SSC dates; my interests; and the GitHub
> repository name.)*

### Prompt 13

> I've used that repo name, follow that

### Prompt 14

> Settings → Pages → Deploy from a branch → main → / (root) → Save what's this?

### Prompt 15

> remove this line: "The handle's from a Gibson novel I read too young and never
> quite got over."

### Prompt 16

> add netpro model school & college in ssc section

### Prompt 17

> has all of them been updated?

### Prompt 18

> can you give me the prompt history?

---

> **[KEEP THIS LOG UP TO DATE.]** Append any further prompts, in order, before
> you submit. This log is itself a graded deliverable.
