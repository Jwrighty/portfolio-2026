# Consulting Business Page

Status: needs-triage

## Problem Statement

Jason needs his existing portfolio to provide credible, truthful evidence that he operates as a self-employed web designer and frontend consultant in Meguro, Tokyo. Meguro Ward has confirmed that its supporting evidence can include a website representing the business together with a recent bank statement showing Jason's name and a business-related transfer.

The portfolio currently presents Jason almost exclusively as a senior/principal frontend engineer seeking a permanent role. Its hero, content order, availability language, and footer are all optimized for recruiters and hiring managers. It contains Keelty Master Thatcher as genuine website work, but it does not clearly describe a consulting offer, identify Jason's current business location, provide a business contact address, or give a visitor an explicit client-facing path.

Jason's primary goal remains securing a permanent role to support a stable relocation from Tokyo to the UK. The site must therefore establish a credible self-employed business without recasting Jason as an agency, obscuring his job-search availability, or weakening the portfolio's existing recruiter proposition. The business representation must remain factually accurate, modest in its claims, and useful if a genuine prospective client makes contact.

## Solution

Add a compact `/consulting` page to the existing portfolio deployment. The page will reuse the established visual system and present Jason, under his own name, as an independent web designer and frontend consultant based in Meguro, Tokyo.

The page will explain three focused services, feature Keelty Master Thatcher as selected client work, publish the business details Meguro Ward expects to see, and provide `jason.wrighty@gmail.com` as the contact address. It will connect back to the engineering portfolio and be discoverable from the homepage through one restrained internal link and one additional sentence in the existing introduction.

The homepage will remain career-first. Its “Open to new roles” status, senior/principal positioning, career-before-projects order, and permanent-role footer will remain intact. No new brand, agency identity, separate website, custom domain, pricing system, enquiry form, or broader marketing funnel will be introduced.

Success means that:

- A Meguro Ward reviewer can identify Jason's name, business activity, business location, and a live example of the work without interpreting an employment-focused portfolio.
- A genuine prospective client can understand what Jason offers and contact him.
- A recruiter still understands within the first viewport that Jason's priority is a permanent senior/principal frontend role.
- All published claims remain accurate and consistent with Jason's supporting documentation and real work.

## User Stories

1. As a Meguro Ward reviewer, I want to see a clearly identified self-employed business page, so that I can understand what business Jason operates.
2. As a Meguro Ward reviewer, I want to see Jason Wright named as the proprietor, so that I can match the website to the applicant and bank statement.
3. As a Meguro Ward reviewer, I want to see web design and frontend consulting stated as the business activity, so that I can understand the nature of the work.
4. As a Meguro Ward reviewer, I want to see Meguro, Tokyo, Japan identified as the business location, so that I can confirm where the self-employed activity is based.
5. As a Meguro Ward reviewer, I want the business details grouped in one scannable section, so that I do not need to infer them from project copy.
6. As a Meguro Ward reviewer, I want to see a live example of relevant client work, so that I can connect the stated business activity to real output.
7. As a Meguro Ward reviewer, I want the site to identify Jason rather than an invented agency, so that the public identity aligns with the submitted evidence.
8. As a Meguro Ward reviewer, I want the consulting page to be reachable through a stable URL, so that the evidence can be reviewed directly.
9. As a prospective small-business client, I want to understand that Jason designs and builds websites, so that I can decide whether his service fits my needs.
10. As a prospective product-team client, I want to understand that Jason offers frontend consulting, so that I can assess whether he can support an existing application.
11. As a prospective client with an existing website, I want to see performance, accessibility, technical SEO, responsive behavior, and usability improvements named, so that I can recognize a relevant engagement.
12. As a prospective client, I want each service explained in plain language, so that I understand the outcome without needing detailed technical knowledge.
13. As a prospective client, I want to know that Jason is available for selected projects, so that I know enquiries are welcome without assuming agency-scale capacity.
14. As a prospective client, I want a direct email contact, so that I can make an enquiry without using social media.
15. As a prospective client, I want the email link to open a new message addressed to Jason, so that contacting him is immediate.
16. As a prospective client, I want to see Keelty Master Thatcher featured prominently, so that I can judge the quality and relevance of Jason's commercial website work.
17. As a prospective client, I want to understand Jason's contribution to Keelty, so that I can distinguish his work from the client's underlying business and photography.
18. As a prospective client, I want to visit the live Keelty website, so that I can evaluate the delivered experience directly.
19. As a prospective client, I want the Keelty description to cover structure, visual design, development, performance, and technical SEO, so that I understand the breadth of the engagement.
20. As a prospective client, I want the consulting page to feel consistent with the portfolio, so that the business appears to be a genuine part of Jason's professional practice.
21. As a prospective client on mobile, I want the page to remain readable and easy to navigate, so that I can evaluate and contact Jason from any device.
22. As a keyboard user, I want every link to have a visible focus state and a descriptive label, so that I can navigate the page without a pointer.
23. As a screen-reader user, I want a logical heading hierarchy, semantic sections, meaningful image text, and clearly named links, so that I can understand the page structure and actions.
24. As a visitor with reduced-motion preferences, I want the consulting page to respect my preference, so that its presentation remains comfortable.
25. As a visitor, I want an obvious route back to the main portfolio, so that I can explore Jason's engineering experience and other work.
26. As a hiring manager, I want the homepage to continue leading with permanent-role availability, so that Jason's employment objective remains unambiguous.
27. As a hiring manager, I want the consulting activity described as an additional part of Jason's practice, so that it does not obscure his senior/principal frontend positioning.
28. As a hiring manager, I want a consulting link available without dominating the first viewport, so that I can investigate the work if relevant while keeping the employment narrative primary.
29. As a recruiter scanning quickly, I want the existing location, seniority, and availability signals to remain intact, so that the homepage still works as a screening surface.
30. As a recruiter, I want the new homepage sentence to be concise, so that it adds evidence without making the introduction feel unfocused.
31. As Jason, I want to operate under my own name, so that the website, email, bank account, invoice, and administrative evidence can remain aligned.
32. As Jason, I want the public contact address to be `jason.wrighty@gmail.com`, so that prospective clients have a professional way to reach me without additional domain setup.
33. As Jason, I want the consulting page to reuse the existing Keelty project data and imagery where practical, so that factual details do not drift between two presentations of the same work.
34. As Jason, I want the consulting page to reuse the current design system, so that I do not have to maintain a second visual identity.
35. As Jason, I want the change to remain small and independently maintainable, so that it does not distract from my permanent job search.
36. As Jason, I want the site to make no unsupported claims about revenue, outcomes, testimonials, commissioning, or client scale, so that the business representation remains truthful.
37. As Jason, I want to be able to update my location and contact details from a central source, so that time-sensitive business information stays consistent.
38. As Jason, I want the consulting page to have an accurate title and description for search results and link previews, so that it is intelligible when shared directly.
39. As Jason, I want the consulting route included in the generated site output and sitemap, so that it behaves as a first-class public page.
40. As Jason, I want the site to continue building as fully static HTML, so that the new page does not add operational cost or runtime complexity.
41. As Jason, I want the page to work without client-side JavaScript, so that it retains the portfolio's performance and resilience characteristics.
42. As Jason, I want the existing “Open to new roles” message and permanent-role footer preserved, so that the consulting addition cannot be mistaken for a change in career priority.

## Implementation Decisions

### Visitor path and information architecture

- Add one first-class consulting route to the existing portfolio rather than creating a separate domain, standalone site, or agency brand.
- Treat the consulting page as a focused persuasion surface for prospective clients and an evidence surface for Meguro Ward.
- Keep the homepage as the primary experience surface for hiring managers and recruiters.
- Add a restrained internal “Consulting” link near the existing professional links on the homepage. Preserve the social navigation's semantic meaning by not labeling the internal route as a social link.
- Add one sentence to the current homepage introduction: “Alongside product engineering, I take on selected web design and frontend consulting projects for small businesses and product teams.”
- Preserve the existing homepage availability status, senior/principal role positioning, content order, career material, project collection, and footer language.
- Provide a clear internal route from the consulting page back to the main portfolio.

### Consulting-page content

- Use “Jason Wright — Web Design & Frontend Consulting” as the business identity. Do not invent a studio, agency, or registered-company identity.
- Lead with “Web design & frontend consulting” and explain that Jason designs and builds clear, high-performing websites and product interfaces for small businesses and product teams.
- State “Based in Meguro, Tokyo, and available for selected projects.”
- Present three services: small-business websites, frontend consulting, and focused website improvements.
- Keep service language outcome-oriented and accessible to non-technical visitors while retaining specific technical capabilities where they establish credibility.
- Feature Keelty Master Thatcher as the sole selected client-work example at launch.
- Describe Jason's Keelty contribution accurately across site structure, visual design, development, performance, and technical SEO.
- Link directly to the live Keelty site.
- Do not publish invented metrics, testimonials, revenue, client-volume claims, or commissioning language that cannot be supported.
- Publish a dedicated business-details section containing proprietor, business activity, location, contact, and availability.
- Use `jason.wrighty@gmail.com` as the public contact address and expose it as an email action.
- Publish “Meguro, Tokyo, Japan” rather than a full residential address unless Meguro Ward later confirms that a street address is required.

### Data and reuse

- Extend the central site-identity data to include the public email address and structured business details that may change over time.
- Reuse the existing Keelty project entry as the source of truth for its title, live URL, cover image, status, and short description where those fields fit the consulting presentation.
- Keep consulting-specific narrative copy close to the consulting page rather than forcing client-service language into the general project schema.
- Avoid a new abstraction for the service list unless another consumer emerges; the content is static and page-specific.
- Avoid duplicating the entire existing project-card interaction. The consulting page needs a direct client-work presentation, not a technology-first disclosure card.
- Continue using the existing shared layout, metadata builder, optimized image pipeline, typography, color tokens, spacing system, link treatments, and accessibility conventions.

### Visual and interaction design

- Preserve the established “Signal on the Stage” visual system: near-black background, restrained vermilion accent, Bricolage Grotesque reading type, Fragment Mono metadata, hairline separators, and no shadows.
- Use the existing measured reading column and section-label pattern so the page feels native to the portfolio.
- Give the Keelty cover image the page's primary visual emphasis; keep services and business details predominantly typographic.
- Use border-separated sections rather than boxed service cards or generic agency-marketing components.
- Keep all actions as text links, consistent with the current component vocabulary.
- Use descriptive visible labels such as “Discuss a project,” “Visit the website,” and “Back to portfolio.”
- Retain responsive behavior, keyboard navigation, focus visibility, WCAG AA contrast, semantic landmarks, and genuine reduced-motion handling.
- Do not add a contact form, client-side form handling, analytics beyond the existing site analytics, or new third-party scripts.

### Metadata and delivery

- Give the consulting route its own page title, description, canonical path, Open Graph metadata, and Twitter Card metadata through the existing metadata system.
- Suggested title: “Web Design & Frontend Consulting | Jason Wright”.
- Suggested description: “Independent web designer and frontend consultant based in Meguro, Tokyo, building clear, high-performing websites and product interfaces.”
- Include the route in the statically generated site and sitemap.
- Deploy through the portfolio's existing Vercel workflow and current public host. Purchasing or configuring a custom domain is not required for this feature.
- Keep the implementation fully prerendered and free of new runtime dependencies.

### Module boundaries

- **Business identity module:** centralizes proprietor name, public email, business activity, location, and availability behind a small stable data interface.
- **Consulting page composition:** owns the consulting-specific hierarchy and copy while consuming shared layout, business identity, project data, and primitives.
- **Selected client-work presentation:** renders the Keelty proof in a service-oriented form using the existing project entry as its factual source.
- **Homepage consulting entry point:** adds the supporting sentence and internal navigation action without changing the homepage's primary employment narrative.
- **Page metadata:** uses the existing pure metadata builder with consulting-specific inputs; no new metadata subsystem is required.
- These boundaries match the agreed scope. The business identity data is the only deep-module opportunity: it isolates time-sensitive facts behind a simple interface and prevents inconsistencies across the page, metadata, and future business materials.

## Testing Decisions

- Good tests verify externally observable behavior rather than component structure, CSS class names, or internal implementation details.
- No new automated test framework will be introduced for this feature. This follows the existing portfolio decision that static Astro presentation is best validated through production builds and user-visible review until meaningful interactive logic appears.
- The production build must complete successfully, validating the consulting route, content collection usage, image processing, metadata integration, internal links, and sitemap generation.
- The generated consulting page must be checked to confirm that its visible business details include Jason's name, web design/frontend consulting activity, Meguro location, Gmail contact address, and selected-project availability.
- Navigation checks must verify the homepage consulting link, consulting-page return link, email action, and live Keelty link from the user's perspective.
- Metadata checks must verify the consulting-specific page title, description, canonical path, Open Graph values, and inclusion in the generated sitemap.
- Accessibility verification must cover semantic landmarks, heading order, meaningful Keelty image text, descriptive link names, keyboard navigation, visible focus states, contrast, and reduced-motion behavior.
- Responsive visual verification must cover representative mobile and desktop widths, text zoom up to 200 percent, long-line wrapping, and the Keelty image treatment.
- Regression verification must confirm that the homepage still leads with “Open to new roles,” retains its senior/principal positioning and existing section order, and does not visually elevate consulting above permanent-role availability.
- Content review must explicitly check that the page contains no unsupported outcomes, testimonials, client-scale claims, revenue claims, or misleading descriptions of how Keelty was commissioned.
- Prior art is the repository's existing verification model: the static build validates schemas and generated routes, while rendered-page review validates presentation and accessibility. There is no existing automated test suite to extend.

## Out of Scope

- Creating a separate consulting website or repository.
- Purchasing, registering, or configuring a custom domain.
- Creating a new business, studio, or agency brand.
- Representing Jason as an incorporated company, registered agency, or multi-person team.
- Changing the homepage's primary audience from hiring managers and recruiters to consulting clients.
- Removing or de-emphasizing “Open to new roles.”
- Reordering the homepage career and project sections.
- Redesigning the portfolio or replacing its current visual system.
- Adding navigation infrastructure for multiple future marketing pages.
- Adding consulting pricing, packages, retainers, availability calendars, booking tools, or proposal generation.
- Adding a contact form, CRM, newsletter, or lead-capture integration.
- Adding a dedicated consulting analytics funnel or new analytics provider.
- Adding additional nominal client projects solely to make the business appear larger.
- Publishing a testimonial without the client's explicit approval.
- Publishing a full residential address unless separately required and approved.
- Publishing bank statements, invoices, payment amounts, or other application evidence on the public website.
- Generating or altering financial evidence, administrative forms, invoices, contracts, or payment records as part of the website feature.
- Making claims about Meguro Ward approval or guaranteeing nursery placement.
- Creating a new automated test framework for a static content page.
- Building individual project case-study routes beyond the consulting-page Keelty presentation.
- Changing the broader project content schema unless implementation reveals a genuine shared-data requirement.

## Further Notes

- Meguro Ward's published 2026 childcare guidance requires self-employed applicants to provide a self-completed employment certificate plus two forms of supporting evidence: one demonstrating the nature of the business and one demonstrating recent working income. A website and recent bank record are explicitly listed examples. The website feature supports only the first half of that evidence pair.
- The public business details should remain consistent with the name, location, activity, invoice, bank record, and employment certificate Jason actually uses. The website must not be treated as a substitute for truthful, internally consistent administrative documents.
- The guidance also identifies monthly working time as relevant to childcare eligibility. The site will not publish working hours; those belong in the official employment certificate and must reflect Jason's genuine working activity.
- The selected public contact is `jason.wrighty@gmail.com`. A custom-domain email may replace it later, but domain setup is not a dependency for launch.
- Keelty Master Thatcher is already live and visible in the portfolio. This feature changes its prominence and framing for a client audience without inventing a second version of the project.
- The current portfolio product brief is hiring-manager-first. This feature intentionally adds a secondary client and administrative evidence path rather than changing that primary positioning.
- The recommended implementation sequence is: centralize business details; compose the consulting page; add the selected Keelty presentation; add page metadata; add the homepage sentence and consulting link; run production, responsive, accessibility, content, and regression verification.
- This PRD enters the local issue tracker with `needs-triage` status. It can be converted into independently grabbable implementation issues after scope review.
