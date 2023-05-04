import React from "react";

const VideoCard = ({ videoUrl, title, desc }) => {
  return (
    <div className="card">
      <video width="100%" height="100%" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default VideoCard;
