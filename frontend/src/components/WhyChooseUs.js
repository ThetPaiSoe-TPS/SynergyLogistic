import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <div className="why-choose-page">
      {/* Hero Section */}
      <div className="why-choose-hero">
        <img 
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866" 
          alt="Logistics warehouse" 
          className="why-choose-hero-image"
        />
        <h1 className="why-choose-hero-title">WHY CHOOSE SYNERGY LOGISTICS?</h1>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <h2 className="intro-title">WHY SYNERGY?</h2>
        <p className="intro-description">
          Our robust warehousing and distribution logistics management system can track pallets,
          cases, and single items with ease. We act as an extension of our client's businesses and
          learn the ins and outs of all their patterns so we can deliver the same level of quality and
          care that they would.
        </p>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088" alt="120 Years" />
            <h3>120 YEARS</h3>
            <p>For 120 years, we've excelled in food-grade warehousing and logistics, rail transloading, and large-scale distribution, always putting the customer first.</p>
            <a href="/history" className="feature-link">LEARN MORE</a>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Experience" />
            <h3>EXPERIENCE</h3>
            <p>Many of the 250+ companies we work with have unique requirements. We explore the uniqueness of every product we ship to deliver superior service.</p>
            <a href="/experience" className="feature-link">LEARN MORE</a>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" alt="Awards" />
            <h3>AWARDS</h3>
            <p>Synergy Supply Chain receives many recognitions and awards from the industry, our clients, and safety/regulatory organizations.</p>
            <a href="/awards" className="feature-link">LEARN MORE</a>
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="unique-value-section">
        <div className="value-content">
          <h2>WHAT MAKES SYNERGY UNIQUE?</h2>
          <p>
            Our strength comes from working with different industries, serving the
            region as the only General Purpose Free Trade Zone (119). We understand
            the unique challenges of each sector and provide tailored solutions that
            drive success.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" 
          alt="Warehouse operations" 
          className="value-image"
        />
      </section>

      {/* CTA Section */}
      <section className="why-choose-cta">
        <h2 className="cta-title">READY TO EXPERIENCE THE SYNERGY DIFFERENCE?</h2>
        <a href="/contact" className="cta-button">REQUEST A QUOTE</a>
      </section>
    </div>
  );
}

export default WhyChooseUs; 