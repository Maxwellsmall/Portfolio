import './App.css'
import Nav from './components/Nav'
import ProjectCarousel from './components/ProjectCarousel'

function App() {
  return (
    <>
      <section id="center">
        <Nav />
        <div className="container">
        <div className='profile'>
          <div className="avatar">
            <img src="/dextrus.jpg" alt="" />
          </div>
          <h1>Hey, I'm Chukwuchebem David. <br /> Software Engineer</h1>
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

I'm Robinson Honour, a Nigerian software developer with 9+ years of experience in web development, app development, robotics, cloud computing, and game development. I specialize in building robust applications, cloud platforms, and cutting-edge robotics solutions.

A self-taught programmer, ranked among the top programmers in Port Harcourt, Nigeria, I am an active tech content creator, speaker, and mentor passionate about empowering others in tech. I'm also the CEO and founder of Pxxl App, a cloud deployment platform for websites, APIs, and databases.


          </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
