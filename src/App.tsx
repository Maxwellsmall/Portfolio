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
import VoiceTestimonial from './components/VoiceTestimonial'

const myTranscript = [
  { start: 0, end: 3, text: "Hey! I just wanted to say..." },
  { start: 3.5, end: 7, text: "The website Dextrus built for us is incredible." },
  { start: 7.5, end: 12, text: "Our conversion rate doubled in the first week." },
  { start: 12.5, end: 16, text: "Highly recommend working with him!" }
];

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
        I like to craft solid and scalable products with exceptional user experiences, focusing on innovation and problem-solving across various industries.
      </p>
      <p>
        I'm Maxwell Edunfunke, a Nigerian software developer with 9+ years of experience in web development, app development, robotics, cloud computing, and game development. I specialize in building robust applications, cloud platforms, and cutting-edge robotics solutions.
      </p>
      <p>
        A self-taught programmer, ranked among the top programmers in Port Harcourt, Nigeria, I am an active tech content creator, speaker, and mentor passionate about empowering others in tech. I'm also the CEO and founder of Pxxl App, a cloud deployment platform for websites, APIs, and databases.
      </p>

      <PhotoGallery />
    </div>

    <ProjectSection />
    {/* <PixelName /> */}
    <WorkExperience />
    
    <h2 className="work-title">What people say about me</h2>

    <div className="testimonials-grid">
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
  </div>
    <ContactSection />
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
