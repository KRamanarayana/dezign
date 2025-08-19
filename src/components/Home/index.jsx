import { Component } from "react";
import { CiSearch } from "react-icons/ci";
import { PiArrowUpRight } from "react-icons/pi";
import "./index.css";
import ExperienceSection from "./circle"

import { useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s animation
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  // ✅ Format numbers as "3k", "20k", "43k"
  const formatNumber = (num) => {
    if (num >= 1000) {
      return Math.floor(num / 1000) + "k";
    }
    return num;
  };

  return (
    <p className="paragraph-count-value">
      {formatNumber(count)}
      {suffix}
    </p>
  );
};




class Home extends Component {
  render() {
    return (
      <>
        <div className="bg-img">
          {/* Navbar */}
          <div className="top-header">
            <div className="navbar-logo">
              <div className="logo-icon">😊</div>
              <h1>SAOR</h1>
            </div>
            <ul className="navbar-links">
              <select className="select-option">
                <option>Home</option>
              </select>
              <li className="list-item">About</li>
              <select className="select-option">
                <option>Portfolio</option>
              </select>
              <select className="select-option">
                <option>Pages</option>
              </select>
              <select className="select-option">
                <option>Blog</option>
              </select>
              <li className="list-item">Contact</li>
            </ul>
            <div className="navbar-actions">
              <div className="search-box">
                <CiSearch />
              </div>
              <button className="quote-btn">
                Get A Quote <PiArrowUpRight />
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="container_image-direction">
            <div className="hero-content">
              <div className="cont">
              <div className="tagline">
                <span className="highlight">SEO & Marketi</span> 
              </div>
              <span className="highlight">ng Agency</span></div>
              {/* <h1 className="heading-bottom">
                Empowering <br /> Growth Unlock <br /> SEO Solutions
              </h1> */}
              {/* <h1 className="heading-bottom animate-text">
                Empowering <br /> Growth Unlock <br /> SEO Solutions
              </h1> */}
              <h1 className="heading-bottom">
                Empowering <br /> Growth Unlock <br /> SEO Solutions
              </h1>

              <p className="bottom-para">
                At Saor, we are dedicated to helping businesses navigate the
                complex digital landscape with ease. We specialize in providing
                a full spectrum of SEO.
              </p>
              <button className="primary-btn">
                Get Started Now <PiArrowUpRight className="PiArrowUpRight" />
              </button>

              {/* Bottom mini-section */}
              <div className="mini-section">
                <span className="mini-text">Get Started Now</span>
                <div className="avatars">
                  <img
                    src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755419191/subperson1_uui8j6.webp"
                    alt="user1"
                  />
                  <img
                    src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755419268/subperson2_lf6bm3.webp"
                    alt="user2"
                  />
                  <img
                    src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755419298/subperson3_vsjzcc.webp"
                    alt="user3"
                  />
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </div>

            <div className="person1_image-direction">
              <img
                src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755412124/person1_nzvrlm.webp"
                alt="logo"
                className="person1_image"
              />
            </div>
          </div>
        </div>

        {/* SEO Left Section */}
          <div className="seo-left">
            <div className="welcome-text-and-heading">
            <span className="welcome-text">🔘 Welcome to SEO Agency 🔘</span>
            {/* <h2 className="Comprehensive-heading">
              Comprehensive SEO & <br /> Digital Marketing Solutions.
            </h2> */}
            {/* <h2 className="comprehensive-heading">
              <span>Comprehensive</span> <span>SEO</span> & <br />
              <span>Digital</span> <span>Marketing</span> <span>Solutions.</span>
            </h2> */}
            <div className="comprehensive-seo-hed">
            <h2 className="comprehensive-heading">
             <span>Comprehensive</span> <span>SEO</span> 
              <br />
            <span>Digital</span> <span>Marketing</span> <span>Solutions.</span>
            </h2>
            </div>
            </div>
            <div className="seo-left-section-and-seo-right-section">
            <div className="left-seo-direction">
          <p className="seo-service-paragraph">
            Our SEO services ensure your website ranks higher on search engines
            like Google, helping your business attract more organic traffic.
            From keyword research and on-page optimization to link building and
            technical SEO, we use proven strategies to improve your visibility
            and authority online.
          </p>
          <p className="seo-service-paragraph">
            We believe in making informed decisions. By using analytics and
            performance…
          </p>

          {/* Progress Bars */}
          <div className="progress-bar">
            <div className="progress-title">
              <span>SEO Analysis</span> <span>80%</span>
            </div>
            <div className="bar">
              <div
                className="fill yellow"
                style={{ "--target-width": "80%" }}
              ></div>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-title">
              <span>Marketing Strategy</span> <span>90%</span>
            </div>
            <div className="bar">
              <div
                className="fill black"
                style={{ "--target-width": "90%" }}
              ></div>
            </div>
          </div>

          <button className="about-btn">More About Us <PiArrowUpRight className="PiArrowUpRight"/></button>
          </div>
         

        {/* SEO Right Section */}
        <div>
          <div className="seo-right">
          <div className="seo-images">
            <img
              src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755488808/person2_hv7uyh.webp"
              alt="seo 1"
              className="img1"
            />

            {/* Circle with Text */}
            <div className="cirlce-and-image-group-direction">
              <div className="half-circle-and-half-image-direction">
                <div class="half-circle left"></div>
                <div class="half-circle left"></div>
              <div className="circle-play-wrapper">
                
              <div className="main-circle">
                <svg viewBox="0 0 200 200" className="circle-svg">
                  <circle cx="100" cy="100" r="90" fill="#f9d71c" />
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,10 a90,90 0 1,1 -0.1,0"
                    />
                  </defs>
                  <text
                    fill="#000"
                    fontSize="14"
                    fontWeight="bold"
                    letterSpacing="3"
                  >
                    <textPath xlinkHref="#circlePath" startOffset="50%" className="text-path">
                      BUILD A SUCCESS BRAND WITH SAOR
                    </textPath>
                  </text>
                </svg>
                <div className="play-icon">▶</div>
              </div>
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755488821/person3_xwjntf.webp"
                alt="seo 2"
                className="img2"
              />
            </div>
            </div>
          </div>
          </div>
        </div>  
            </div>

            {/* page3 */}
         <div className="count-hari-line-para-dir">
          <div className="horizantal-line-count-dir">
            <div className="count-psra">
              <Counter target={3000} suffix="+" />
              <p className="successful-project">Successful Project</p>
            </div>
            <hr className="horizantal-line" />
          </div>

          <div className="horizantal-line-count-dir">
            <div className="count-psra">
              <Counter target={20000} suffix="" />
              <p className="successful-project">Experience Team</p>
            </div>
            <hr className="horizantal-line" />
          </div>

          <div className="horizantal-line-count-dir">
            <div className="count-psra">
              <Counter target={43000} suffix="+" />
              <p className="successful-project">Happy Customer</p>
            </div>
            <hr className="horizantal-line" />
          </div>

          <div className="horizantal-line-count-dir">
            <div className="count-psra">
              <Counter target={36000} suffix="+" />
              <p className="successful-project">Successful Project</p>
            </div>
            <hr className="horizantal-line" />
          </div>
      </div>
          <div className="slanted-banner">
            <div className="slanted-content">
              <span>✨ SEO Strategy Development </span>
              <span>✨ Search Engine Optimization </span>
              <span>✨ Research & Analysis </span>
              <span>✨ Content Solutions </span>
            </div>
          </div>
          <div className="services-container">
    
    {/* Left Side */}
    <div className="services-left">
      <h4 className="services-subtitle">
        <span className="dot"></span> Our Services
      </h4>
      <div className="circle-container">     
         <h2 className="services-heading">
           Boost your SEO ranking with <br /> excellent effective services
         </h2>
         <div className="view-all-work-circle">
            <p className="circle-view-para">View All Work <PiArrowUpRight /></p>
         </div>
      </div>   

      <hr className="services-line" />
    <div className="service-card-ul-list-img-container">
      <div>
        <div className="service-card highlighted">
        <div>
          <h3>Search Engine Optimization</h3>
          <p>
            Our SEO services ensure your website ranks higher on search engines
            like Google, helping your business.
          </p>
        </div>
        <button className="btn-yellow">➜</button>
        </div>
        <ul className="service-list">
        <li>Pay-Per-Click (PPC) Advertising <span className="span-arrow-bg">↗</span></li>
        <li>Content Marketing <span className="span-arrow-bg">↗</span></li>
        <li>Email Marketing <span className="span-arrow-bg">↗</span></li>
        <li>Social Media Marketing <span className="span-arrow-bg">↗</span></li>
        <li>Conversion Rate Optimization <span className="span-arrow-bg">↗</span></li>
        </ul>
    </div>
    <hr className="service-middle-line"/>

    {/* Right Side */}
      <div className="services-right">
      <img
        src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755488845/seo_fno8wl.webp"
        alt="SEO Services"
      />
      {/* <button className="circle-btn">View All Work ↗</button> */}
      </div>
     </div>
    </div>
  </div>
  <hr className="services-line" />
  </div>
  <div>
    
      <div className="experience-header">
        <span className="tag">Our Mission & Vision</span>
        {/* <h2 className="title">
          Present creative and innovative <br /> SEO solutions
        </h2> */}
       <div className="title-wrapper">
  <h2 className="comprehensive-heading">
    <span>Prasent creative and innovative </span> 
     <br /> 
    <span>SEO solution</span> 
  </h2>
</div>
      </div>

      <div className="">
          <ExperienceSection/>
    
       
      </div>
  </div>
  <div className="card-container-dir">
     <div className="card">
        <h4 className="card-subtitle">Our Mission</h4>
        <h2 className="card-title">Customer Success Is Our Mission</h2>
        <p className="card-text">
          Our mission is to empower businesses by creating digital marketing
          strategies that are not only effective but sustainable. We believe in
          building long–term relationships with our clients by delivering results
          that exceed expectations and drive real, tangible growth.
        </p>
      </div>

      {/* Vision Card */}
      <div className="card">
        <h4 className="card-subtitle">Our Vision</h4>
        <h2 className="card-title">To be the Leading Agency in the Industry.</h2>
        <p className="card-text">
          We help you build and maintain a strong social media presence across
          platforms like Facebook, Instagram, LinkedIn, and Twitter. By crafting
          tailored social media strategies, we engage your audience, foster brand
          loyalty, and drive conversions.
        </p>
      </div>
    </div>
      <div className="bottom-bg-container">
        <p className=""><span>Team</span> <span>Member</span></p>
        <h1 className="comprehensive-heading"> 
          <span>Meat Our</span> <span>Team Members</span>
        </h1>
        <div className="circle-container-1">
           <img src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1700976287/samples/man-portrait.jpg" 
             alt="logo"
             className="women-logo-bottom-img"
           />
          <img src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1700976290/samples/woman-on-a-football-field.jpg" 
             alt="logo"
             className="women-logo-bottom-img"
          />
          <img src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1700976283/samples/smile.jpg" 
             alt="logo"
             className="women-logo-bottom-img"
           />
        </div>
      </div>
      </>
    );
  }
}

export default Home;
