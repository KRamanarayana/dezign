import "./circle.css";

const ExperienceSection = () => {
  return (
    <div className="experience-content">
      <div className="experience-image">
        {/* Badge Overlay */}
                                                      
              {/* <span className="years">24</span> */}

        <div className="experience-badge">

          <div className="circle">
<p className="circlee">24</p>
            <span className="circle-text">YEARS OF EXPERIENCE</span>
          </div>
        </div>

        {/* Team Image */}
        <img
          src="https://res.cloudinary.com/dnn94cb0w/image/upload/v1755488792/group_u7ncvk.webp"
          alt="Team Working"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
