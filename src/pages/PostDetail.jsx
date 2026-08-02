import React from "react";
import { useParams, Link } from "react-router-dom";
import maps from "../data/maps.json";

const PostDetail = () => {
  const { id } = useParams();
  const post = maps.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="detail-container">
        <h2>Mapa nenalezena</h2>
        <Link to="/" className="back-link">← Zpět na přehled</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Zpět na hlavní stranu</Link>
      
      <div className="detail-header">
        <div className="detail-title-group">
          <span className="detail-icon">{post.icon || "📍"}</span>
          <h1>{post.title}</h1>
        </div>
        <p className="detail-desc">{post.description}</p>
      </div>

      <div className="detail-actions">
        <a 
          href={post.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="external-map-btn"
        >
          Otevřít přímo na Mapy.cz ↗
        </a>
      </div>

      {post.content && (
        <div className="detail-text">
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;