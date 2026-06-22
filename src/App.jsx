import { useState, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Dropdown from './dropdown.jsx'

function App() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setFeaturesOpen(false);
        setCompanyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <nav className='nav' ref={navRef}>
      <img src="images/logo.svg" alt="Logo" />
      <div className="desktop-nav">
    <div className="nav-left">
      <div className="drop1">
      <a href="#">Features</a>
  <img
  src="images/icon-arrow-down.svg"
  alt="arrow" id="arrow1"
  onClick={() => {
    setCompanyOpen(false);
    setFeaturesOpen((prev) => !prev);
  }}
/>
{featuresOpen && (
  <div className="first-content">
      <div className="flex1" id="flex">
          <img src="images/icon-todo.svg" alt="todo" />
          <a href="#">Todo List</a>
      </div>
      <div className="flex2" id="flex">
          <img src="images/icon-calendar.svg" alt="calendar" />
          <a href="#">Calendar</a>
      </div>
      <div className="flex3" id="flex">
          <img src="images/icon-reminders.svg" alt="reminders" />
          <a href="#">Reminders</a>
      </div>
      <div className="flex4" id="flex">
          <img src="images/icon-planning.svg" alt="planning" />
          <a href="#">Planning</a>
      </div>
  </div>
)}
</div>
<div className="drop2">
<a href="#">Company</a>
<img
    src="images/icon-arrow-down.svg"
    alt="arrow" id="arrow2"
    onClick={() => {
      setFeaturesOpen(false);
      setCompanyOpen((prev) => !prev);
    }}
  />
  {companyOpen && (
    <div className="second-content">
        <a href="#">History</a>
        <a href="#">Our Team</a>
        <a href="#">Blog</a>
    </div>
    )}
</div>
      <a href="#">Careers</a>
      <a href="#">About</a>
    </div>

    <div className="nav-right">
      <button id="login-btn">Login</button>
      <button id="register-btn">Register</button>
    </div>
  </div>
      <Dropdown />
    </nav>
    <div className="hero">
      <div className="hero-image">
        <img
      src="images/image-hero-mobile.png"
      srcSet="images/image-hero-mobile.png 600w, images/image-hero-desktop.png 1200w"
      sizes="(min-width: 1024px) 550px, 100vw"
      alt="Hero"
      />
   </div>
      <div className="hero-text">
        <h1>Make <br /> remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <div className="btn">
        <button className='button'>Learn more</button>
        </div>
        <div className="client-logos">
          <img src="images/client-databiz.svg" alt="Databiz" />
          <img src="images/client-audiophile.svg" alt="Audiophile" />
          <img src="images/client-meet.svg" alt="Meet" />
          <img src="images/client-maker.svg" alt="Maker" />
        </div>
      </div>
    </div>
    </>
  )
}
export default App;
