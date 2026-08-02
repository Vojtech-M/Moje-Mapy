import React from "react";
import { Link } from "react-router-dom";
import maps from "../data/maps.json";

const Home = () => {
  return (
    <div className="home-layout">
      <section className="card-section">
        <div className="section-header">
          <h2>Mapy a gastro</h2>
          <p>Nevíte kam na výlet nebo jídlo? Mrkněte sem</p>
        </div>

        <div className="grid-cards">
          {maps.map((item) => (
            <Link 
              to={`/post/${item.id}`} 
              key={item.id} 
              className="map-card"
            >
              <div className="card-icon">{item.icon || "📍"}</div>
              <div className="card-content">
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;