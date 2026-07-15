import { Routes, Route } from 'react-router'
import './App.css'
import Nav from './components/Nav'
import ProjectCarousel from './components/ProjectCarousel'
import ProjectSection from './components/ProjectSection'
import PhotoGallery from './components/PhotoGallery'
// import PixelName from './components/PixelName'
import WorkExperience from './components/WorkExperience'
import ContactSection from './components/ContactSection'
import ProjectDetail from './components/ProjectDetail'
// import VoiceTestimonial from './components/VoiceTestimonial'
  // import Architecture from "./components/Architecture"


// const myTranscript = [
//   { start: 0, end: 3, text: "Hey! I just wanted to say..." },
//   { start: 3.5, end: 7, text: "The website Dextrus built for us is incredible." },
//   { start: 7.5, end: 12, text: "Our conversion rate doubled in the first week." },
//   { start: 12.5, end: 16, text: "Highly recommend working with him!" }
// ];

const HomePage = () => (
  <div className="container">
    <div className='profile'>
      <div className="avatar">
        <img src="/maxwellweb3.png" alt="" />
      </div>
      <h1>Hey, I'm Maxwell Edunfunke (w3b3T). <br /> Software & Robotics Engineer</h1>
      <p>
        Creating innovative solutions and captivating designs.
        <br />
        University student by day, <code>visionary</code> creator by night.
      </p>
    </div>

    <ProjectCarousel />

    <div className='about'>
      <h1>About</h1>
      <p>
        I craft solid, scalable products with exceptional user experiences, focusing on innovation and practical problem-solving.
      </p>
      <p>
        I'm Maxwell Edunfunke, a software engineer with 3+ years of experience spanning full-stack web development, mobile apps, and robotics. After sharpening my foundation through a professional development academy, I have focused on mastering modern web architecture and building secure distributed systems. 
      </p>
      <p>
        Currently, I serve as the Chief Technology Officer (CTO) at Charmpay, where I drive the technical execution, engineering architecture, and frontend development for our escrow payment platforms.
      </p>
      <p>
        A defining milestone in my career was being selected to represent Nigeria at the World Robot Olympiad (WRO) 2023 International Finals in Panama City. Competing on a global stage against top talent worldwide, my team engineered, programmed, and calibrated autonomous robotic systems under strict, high-pressure competitive criteria. This experience solidified my expertise in algorithmic logic, hardware-software integration, and rapid problem-solving under pressure.
      </p>

      <PhotoGallery />
    </div>
    {/* <Architecture/> */}

    <ProjectSection />
    {/* <PixelName /> */}
    <WorkExperience />
    
    {/* <h2 className="work-title">What people say about me</h2> */}

    {/* <div className="testimonials-grid">
   <VoiceTestimonial 
      name="CEO of Impactprenuer Global - Mr. George Bassey"
      audioSrc="/audio.MP3"
      time="11:05 am"
      transcript={myTranscript}
    />
   <VoiceTestimonial 
      name="CEO of Prefran Global Foods Limited"
      audioSrc="/audio.MP3"
      time="11:05 am"
      transcript={myTranscript}
    />
   <VoiceTestimonial 
      name="CEO of Afnotek - Mr. Nang Denzel"
      audioSrc="/audio.MP3"
      time="11:05 am"
      transcript={myTranscript}
    />
  </div> */}
    <ContactSection onSubmit={(data) => console.log('Form submitted: ', data)} isLoading={false}/>
  </div>
);

function App() {
  return (
    <>
      <section id="center">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </section>
    </>
  )
}

export default App
