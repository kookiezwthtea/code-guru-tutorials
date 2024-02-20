
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from './images/placeholder.webp';

function ProjectCards({ project }) {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    import(`./images/${project.image}`)
      .then((image) => setImagePath(image.default))
      .catch((error) => {
        console.error('Error loading image:', error);
        setImagePath(placeholderImage);
      });
  }, [project.image]);
  
  const cardStyle = {
  backgroundImage: `url(${imagePath})`,
  };
  return (
    <>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
    <Link to={`/project/${project.id}`}>
                <figure class="effect-ming tm-video-item">
                    <img src={imagePath}  alt="Image" className="img-fluid" />
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>{project.name}</h2>
                        <h1>{project.title}</h1>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">{project.date}</span>
                    <span>9,999 views</span>
                </div>
                </Link>
            </div>

</>

  );
}

export default ProjectCards;
