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

The prompts I sent, in order.

### Prompt 1

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

### Prompt 2

> so I've changed some of the files that you've provided, please check and make
> them the way they were

*I had edited `content.js` myself to add my real name, email, GitHub and
LinkedIn, and had commented out the sections I had not yet filled in. In doing so
I left an unmatched closing bracket, which broke the file and made the whole site
render blank. The assistant found and fixed that one line, and kept my own
content rather than reverting it.*

### Prompt 3

> tell me step by steps on what I need to do
