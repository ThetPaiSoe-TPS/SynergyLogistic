import React from 'react';
import './Locations.css';
import { 
  heroBg, 
  warehouseImage, 
  logisticsImage, 
  distributionImage,
  foodBeverageImage,
  industrialImage,
  medicalImage,
  consumerGoodsImage 
} from '../assets/images';

function Locations() {
  const minnesotaLocations = [
    {
      name: 'Corporate HQ & Logistics Campus',
      address: '345 Plato Blvd E',
      city: 'Saint Paul, MN 55107',
      image: warehouseImage
    },
    {
      name: 'Minneapolis Distribution Center',
      address: '701 24th Ave SE',
      city: 'Minneapolis, MN 55414',
      image: logisticsImage
    },
    {
      name: 'Eagan Distribution Center',
      address: '905 Yankee Doodle Rd',
      city: 'Eagan, MN 55121',
      image: distributionImage
    },
    {
      name: 'Shakopee Distribution Center',
      address: '901 Canterbury Rd',
      city: 'Shakopee, MN 55379',
      image: foodBeverageImage
    },
    {
      name: 'Fridley Distribution Center',
      address: '4700 Main St',
      city: 'Fridley, MN 55421',
      image: industrialImage
    },
    {
      name: 'Fridley Distribution Center',
      address: '4850 Main St',
      city: 'Fridley, MN 55421',
      image: medicalImage
    }
  ];

  const kansasCityLocations = [
    {
      name: 'Stilwell Distribution Center',
      address: '6000 Stilwell St',
      city: 'Kansas City, MO 64120',
      image: consumerGoodsImage
    },
    {
      name: 'Front Street Logistics Campus',
      address: '5414 Front St',
      city: 'Kansas City, MO 64120',
      image: warehouseImage
    },
    {
      name: 'Executive Distribution Center',
      address: '6800 Executive Dr',
      city: 'Kansas City, MO 64120',
      image: logisticsImage
    }
  ];

  return (
    <div className="locations-page">
      {/* Hero Section */}
      <section 
        className="locations-hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`
        }}
      >
        <h1>WAREHOUSE LOCATIONS</h1>
      </section>

      {/* Minnesota Locations */}
      <section className="locations-section">
        <h2>MINNESOTA</h2>
        <p className="section-description">
          Warehouses, Distribution Centers and Logistics Companies
          <br />
          For a more detailed view of our warehouse locations, check out our
          <a href="/minnesota-warehousing"> Minnesota Warehousing</a> page.
        </p>
        <div className="locations-grid">
          {minnesotaLocations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-image">
                <img src={location.image} alt={location.name} />
              </div>
              <div className="location-info">
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <p>{location.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kansas City Locations */}
      <section className="locations-section">
        <h2>KANSAS CITY</h2>
        <p className="section-description">
          Warehouses and Distribution Centers
          <br />
          For a more detailed view of our warehouse locations, please view our
          <a href="/missouri-warehousing"> Missouri Warehousing Page</a>
        </p>
        <div className="locations-grid">
          {kansasCityLocations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-image">
                <img src={location.image} alt={location.name} />
              </div>
              <div className="location-info">
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <p>{location.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Locations; 