import React from "react";
import Header from "../Components/Header";
import ImageCard from "../Components/Card";
import VideoCard from "../Components/VideoCard";

const Home = () => {
  return (
    <div className="container">
      <Header heading={"HEADER"} />
      <div className="images-container">
        <ImageCard
          imageUrl={
            "https://apod.nasa.gov/apod/image/2009/NGC772_PS2_CROP_INSIGHT2048.jpg"
          }
          title={"title"}
          desc={"description"}
        />
        <VideoCard
          videoUrl={"../assets/video.mp4"}
          title={"title"}
          desc={"description"}
        />
      </div>
    </div>
  );
};

export default Home;
