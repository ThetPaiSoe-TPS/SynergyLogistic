import React from 'react';
import './Logistics.css';

function Logistics() {
  return (
    <div className="logistics-page">
      {/* Hero Section */}
      <div className="logistics-hero">
        <img 
          src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=1666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Logistics operations" 
          className="logistics-hero-image"
        />
        <h1 className="logistics-hero-title">LOGISTICS</h1>
      </div>

      {/* Main Content */}
      <section className="logistics-intro">
        <h2>COMPLETE LOGISTICS SOLUTIONS THAT ALLOW<br />YOUR BUSINESS TO OPERATE MORE EFFECTIVELY</h2>
        <p>
          Murphy is an industry-leading Third Party Logistics Company, based out of Minneapolis, 
          MN, and Kansas City, MO providing logistics solutions to our customers in the Midwest 
          and throughout the nation. Our 500-truck fleet provides customized logistics solutions 
          with distribution, brokerage, and asset-off-the-yard services and a solid network of 
          freight brokerage partners. We prioritize customer service at each stage of the order 
          fulfillment process, providing real-time updates so you can make crucial decisions in 
          real-time.
        </p>
        <p>
          Murphy warehousing and transport management teams maintain the uniqueness of each 
          supply chain by customizing distribution services according to the needs of the shipper. 
          Our shippers have access to dedicated fleet in the United States and a wide range of tailored 
          solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="logistics-services">
        <h2>LOGISTICS SERVICES</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brokerage" />
            <h3>BROKERAGE</h3>
            <a href="/contact" className="learn-more">LEARN MORE</a>
          </div>

          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7" alt="Transport" />
            <h3>TRANSPORT<br />(ASSET BASED CARRIER & RAIL)</h3>
            <a href="/contact" className="learn-more">LEARN MORE</a>
          </div>

          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Custom Distribution" />
            <h3>CUSTOM<br />DISTRIBUTION</h3>
            <a href="/contact" className="learn-more">LEARN MORE</a>
          </div>

          <div className="service-item">
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec" alt="International Logistics" />
            <h3>INTERNATIONAL<br />LOGISTICS</h3>
            <a href="/contact" className="learn-more">LEARN MORE</a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="logistics-certifications">
        <h2>LOGISTICS CERTIFICATIONS</h2>
        <button className="view-certifications">View Certifications</button>
      </section>

      {/* Why Murphy Section */}
      <section className="why-murphy">
        <h2>WHY MURPHY LOGISTICS?</h2>
        <p>
          Murphy's rich tradition over the past 120 years has allowed us to build unique 3PL logistics solutions founded on trust, integrity, and 
          established relationships. Through these relationships, Murphy continues to deliver practical solutions to companies of all sizes from 
          coast-to-coast.
        </p>
        <button className="learn-more">LEARN MORE</button>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How can a logistics company help with healthcare deliveries?</h3>
            <div className="faq-toggle">+</div>
          </div>
          <div className="faq-item">
            <h3>Do logistics companies offer customized logistics solutions for complex supply chains?</h3>
            <div className="faq-toggle">+</div>
          </div>
          <div className="faq-item">
            <h3>What technology does Murphy Logistics use to manage logistics solutions?</h3>
            <div className="faq-toggle">+</div>
          </div>
          <div className="faq-item">
            <h3>Is it expensive to partner with a logistics solution provider?</h3>
            <div className="faq-toggle">+</div>
          </div>
          <div className="faq-item">
            <h3>Does Murphy Logistics offer warehousing services alongside its logistics solutions?</h3>
            <div className="faq-toggle">+</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="logistics-cta">
        <h2>READY TO MOVE YOUR BUSINESS FORWARD?</h2>
        <a href="/contact" className="cta-button">REQUEST A QUOTE</a>
      </section>
    </div>
  );
}

export default Logistics; 