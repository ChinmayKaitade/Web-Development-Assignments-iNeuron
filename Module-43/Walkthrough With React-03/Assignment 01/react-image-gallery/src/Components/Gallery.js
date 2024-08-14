import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
        );
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <Link to={`/image/${image.id}`} key={image.id}>
          <img src={image.url} alt="" className="thumbnail" />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
