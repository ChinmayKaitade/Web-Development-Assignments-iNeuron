import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./SingleImage.css";

const SingleImage = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos/${id}`
        );
        setImage(response.data.photo);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-image">
      <div className="single-image-container">
        <div className="image-section">
          <img src={image.url} alt={image.title} />
        </div>
        <div className="content-section">
          <h2>{image.title}</h2>
          <p>{image.description}</p>
          <Link to="/" className="back-link">
            Back to Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
