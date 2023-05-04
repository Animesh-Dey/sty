import React from "react";

const ImageCard = ({ imageUrl, title, desc }) => {
  return (
    <div className="card">
      <a href={imageUrl} title="view full image" target="_blank">
        <img
          src={imageUrl}
          alt="NASA Picture Of The Day"
          className="card-img-top"
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
