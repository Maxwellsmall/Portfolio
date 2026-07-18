 Maxwell Edunfunke (w3b3T) | Personal Portfolio

A fast, fully responsive portfolio application built to showcase my web development projects, engineering background, and technical articles. I designed and built this site to serve as a clean, centralized hub for my work, focusing on clean layout shifts, modern styling, and optimal performance.

  Live Link
[devmaxi.vercel.app](https://devmaxi.vercel.app)

  What I Did & Why

 1. Architectural Architecture & Stack Selection
 Next.js (App Router) & TypeScript: Chosen as the core framework to take advantage of file-based routing and native Server Components. This architecture keeps global UI elements (like headers and footers) consistent across pages without unnecessary re-renders, resulting in faster initial page loads.
 Tailwind CSS: Used for utility-first styling to ensure fluid, responsive layouts across all device form factors while maintaining an extremely small CSS footprint.
 Framer Motion: Integrated to handle complex, hardware-accelerated animations smoothly without causing rendering lag or layout stuttering.

 2. Technical Engineering Challenges Solved
 Client vs. Server Component Separation: Optimized data handling and page load speeds by leveraging Server Components by default. I explicitly applied the `'use client'` directive only where active user interaction, state changes, or frontend animations required it.
 Seamless Loop Animations: Engineering the continuous, infinite horizontal marquee took careful orchestration. I had to resolve layout alignment issues and prevent custom aspect-ratio imagery from squishing by fine-tuning Tailwind's `flex-shrink` rules alongside Framer Motion coordinate systems.
 Robust Folder Architecture: Navigating Next.js folder-based routing meant learning how the framework isolates public route segments. I structured internal sub-components natively within their operational directories without leaking private layout files into public URL paths, keeping the codebase clean and modular.

  The Tech Stack
 Frontend Framework: Next.js (App Router)
 Language: TypeScript, JavaScript
 Styling & Layout: Tailwind CSS
 Animations: Framer Motion
 Deployment & Hosting: Vercel

 Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Maxwellsmall/Portfolio.git](https://github.com/Maxwellsmall/Portfolio.git)
   cd Portfolio