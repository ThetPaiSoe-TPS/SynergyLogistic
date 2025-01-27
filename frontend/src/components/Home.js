import React from 'react';
import './Home.css';
import {
  heroBg,
  warehouseImage,
  logisticsImage,
  distributionImage,
  foodBeverageImage,
  industrialImage,
  medicalImage,
  consumerGoodsImage,
  consumerGoodsNewsImage,
  reshoringNewsImage,
  ctaBgImage
} from '../assets/images';
import CertificationSlider from './CertificationSlider';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}>
        <div className="hero-content">
          <h1>MOVING BUSINESS FORWARD</h1>
          <p>Your trusted partner in logistics and supply chain solutions</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Synergy Supply Chain Section */}
      <section className="supply-chain-section">
        <div className="supply-chain-container">
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Synergy Logistics Celebrates Excellence"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-container">
            <h2>SYNERGY SUPPLY CHAIN</h2>
            <p>
              Synergy Supply Chain offers full 3PL logistics solutions to meet the growing needs of almost any business, 
              especially those in industries associated with Food & Beverage, Industrial, Medical, and Consumer Goods. 
              Synergy carries a 500-truck fleet in our supply chain network, allowing us to deliver consistent and reliable 
              results throughout the country and beyond.
            </p>
            <button onClick={() => navigate('/why-choose-us')} className="learn-more">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service-grid">
          <div className="service-card">
            <img src={warehouseImage} alt="Warehousing" />
            <h3>WAREHOUSING</h3>
            <p>Efficient space and transport management for your commercial warehousing and distribution centers.</p>
            <button onClick={() => navigate('/why-choose-us')} className="learn-more">LEARN MORE</button>
          </div>

          <div className="service-card">
            <img src={logisticsImage} alt="Logistics" />
            <h3>LOGISTICS</h3>
            <p>Operate more efficiently with our integrated logistics and transportation solutions.</p>
            <button onClick={() => navigate('/logistics')} className="learn-more">LEARN MORE</button>
          </div>

          <div className="service-card">
            <img src={distributionImage} alt="Distribution" />
            <h3>DISTRIBUTION</h3>
            <p>Value-added 3PL coverage and distribution services to help your business grow.</p>
            <button onClick={() => navigate('/why-choose-us')} className="learn-more">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>RECENT NEWS</h2>
        <div className="news-grid">
          <div className="news-card">
            <div className="news-image">
              <img src={consumerGoodsNewsImage} alt="Consumer Goods Supply Chain" />
            </div>
            <div className="news-content">
              <h3>RESILIENT CONSUMER GOODS SUPPLY CHAIN: KEY STRATEGIES FOR SUCCESS</h3>
              <p>A resilient consumer goods supply chain isn't just a safeguard against disaster—it's a powerful tool for staying ahead in business. It allows you to consistently meet consumer expectations, even during...</p>
              <button className="read-more">
                <span>READ MORE</span>
              </button>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img src={reshoringNewsImage} alt="Reshoring Strategy" />
            </div>
            <div className="news-content">
              <h3>PROS AND CONS OF RESHORING AS A SUPPLY CHAIN STRATEGY</h3>
              <p>If you're a manufacturer considering reshoring, you're likely weighing the pros and cons of bringing production back home. Reshoring has gained traction as companies like yours look for ways to...</p>
              <button className="read-more">
                <span>READ MORE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section" style={{ 
        backgroundImage: `url(${ctaBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h2>READY TO MOVE YOUR BUSINESS FORWARD?</h2>
        <button className="cta-button">
          REQUEST A QUOTE
        </button>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2>Our Certifications</h2>
        <CertificationSlider />
      </section>
    </div>
  );
}

export default Home; 