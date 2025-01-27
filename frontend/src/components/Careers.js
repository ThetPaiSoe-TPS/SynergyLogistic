import React from 'react';
import './Careers.css';

function Careers() {
  // Add these image URLs inside your component
  const eeoImages = [
    "https://images.pexels.com/photos/7709219/pexels-photo-7709219.jpeg",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg"
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="careers-hero">
        <img 
          src="https://images.pexels.com/photos/7706455/pexels-photo-7706455.jpeg" 
          alt="Warehouse operations" 
          className="careers-hero-image"
        />
        <h1 className="careers-hero-title">CAREERS</h1>
      </div>

      {/* Join Team Section */}
      <section className="join-team-section">
        <h2 className="join-team-title">JOIN THE SYNERGY TEAM!</h2>
        <p className="join-team-description">
          Synergy is in its fifth generation of family leadership, but many of our employees have
          also proudly worked at Synergy for generations. Worker tenure averages nearly two
          decades, making Synergy a great place to work!
        </p>
        <p className="join-team-description">
          If you are interested in joining our team, please submit the appropriate application listed
          below.
        </p>
        <a href="/transparency" className="transparency-link">View our Transparency in Coverage information</a>
      </section>

      {/* Current Job Openings */}
      <section className="job-openings-section">
        <div className="job-openings-container">
          <h2 className="job-openings-title">CURRENT JOB OPENINGS</h2>
          <div className="no-openings">No Current Openings</div>
        </div>
      </section>

      {/* EEO Section */}
      <section className="eeo-section">
        <div className="eeo-container">
          <div className="eeo-images-grid">
            {eeoImages.map((image, index) => (
              <div key={index} className="eeo-image-wrapper">
                <img 
                  src={image}
                  alt={`Equal Employment Opportunity ${index + 1}`}
                  className="eeo-image"
                />
              </div>
            ))}
          </div>
          <div className="eeo-content">
            <h2>EQUAL EMPLOYMENT OPPORTUNITY POLICY</h2>
            <p>
              Synergy Warehouse Company is an Equal Opportunity Employer. This means that we provide all applicants and employees with equal employment opportunities based on their qualifications, job performance, ability, or length of service. We comply with all applicable federal, state and local laws governing non-discrimination in employment in every location in which the company has facilities.
            </p>
            <p>
              We do not consider race, creed, color, religion, sex/gender, sexual orientation, national origin, age, disability, marital status, genetic information, status as a covered veteran of the Armed Forces of the United States, or any other protected status in employment decisions.
            </p>
            <p>
              This policy applies to every applicant and all employees and the terms and conditions of their employment including, but not limited to, hiring, placements, promotions, terminations, layoffs, recalls, transfers, leaves of absence, compensation, and training.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <h2 className="cta-title">READY TO MOVE YOUR BUSINESS FORWARD?</h2>
        <a href="/contact" className="cta-button">REQUEST A QUOTE</a>
      </section>
    </div>
  );
}

export default Careers; 