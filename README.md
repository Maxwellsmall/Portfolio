 personal portfolio
A fast, fully responsive portfolio application built to showcase my web development projects, engineering background, and technical articles. I designed and built this site to serve as a clean, centralized hub for my work, focusing on clean layout shifts, modern styling, and optimal performance.

 The Tech Stack
 Frontend Framework: Next.js (App Router)
 Styling & Layout: Tailwind CSS
 Animations: Framer Motion
 Deployment & Hosting: Vercel

 Dynamic Routing: Built using the React.Ts  Router structure, leveraging folder-based paths and layouts to keep global UI elements like headers and footers consistent across pages without unneccesary re-renders.

 Smooth Scrolling Elements: Integrated a hardware-accelerated infinite horizontal marquee using Framer Motion to display partner and brand elements dynamically without layout stuttering or rendering lag.
 
 Component Modularity: Designed highly reusable UI components—such as dynamic blog cards and step-based feature layouts—ensuring clean, dry code across the entire application.
 Client vs. Server Separation: Optimized data handling by utilizing Server Components by default for fast initial page loads, explicitly applying the client directive only where active user interaction, state changes, or frontend animations require it.

 Fluid Layouts and Animation: Getting continuous horizontal scroll tracks to loop seamlessly without breaking layout alignment or squishing custom aspect-ratio imagery took some trial and error with Tailwind's flex-shrink rules and Framer Motion coordinates. 
 Structuring Code Architecture: Navigating folder-based routing meant learning how Next.js isolates public route segments. I had to learn how to structure internal sub-components natively within their operational directories without accidentally leaking private layout files into public URL paths.


1. Clone the repository:
```bash
git clone <https://github.com/Maxwellsmall/Portfolio.git>
cd <project-desktop-portfolio>