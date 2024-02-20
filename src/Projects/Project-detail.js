// ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../fontawesome/css/all.min.css';
import NavBar from '../Pages/components/NavBar';
import Footer from '../Pages/components/Footer';
import { Parallax } from 'react-parallax';
import heroImage from '../img/hero.jpg';
import projects from './projects';
import placeholderImage from './images/placeholder.webp';
import SearchComponent from '../Pages/components/SearchComponent';
import allData from '../Pages/components/allData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id, 10));
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    const loader = () => {
      $(window).on('load', function () {
        $('body').addClass('loaded');
      });
    };

    loader();
  }, []);


  useEffect(() => {
    import(`./images/${project.image}`)
      .then((image) => setImagePath(image.default))
      .catch((error) => {
        console.error('Error loading image:', error);
        setImagePath(placeholderImage);
      });
  }, [project.image]);


  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavBar />
      <div className="parallax-container">
                <Parallax bgImage={heroImage} strength={500}>
                    <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll">
                    </div>
                </Parallax>
                <SearchComponent data={allData} onSearch={handleSearch} />
            </div>

      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-12 tm-text-primary">{project.name}</h2>
        </div>
        <div className="row tm-mb-90 " >
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
            <img src={imagePath} alt="Image" className="img-fluid" />
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
            <div className="tm-bg-gray tm-video-details">
              <p className="mb-4">
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
              </p>
              <div className="text-center mb-5">
                <a href={project.link} className="btn btn-primary tm-btn-big">
                  View Live Demo
                </a>
                <a href={project.gitHubLink} className="btn btn-info tm-btn-big ml-4">
                  Download Code Files
                </a>
              </div>
              <div className="mb-4 d-flex flex-wrap">
                <div className="mr-4 mb-2">
                  <span className="tm-text-gray-dark">Date: </span>
                  <span className="tm-text-primary">{project.date}</span>
                </div>
                <div className="mr-4 mb-2">
                  <span className="tm-text-gray-dark">Complexity Level: </span>
                  <span className="tm-text-primary">{project.complexity}</span>
                </div>
              </div>

              <div>
                <h3 className="tm-text-gray-dark mb-3">Technologies Used</h3>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  JavaScript
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  HTML&CSS
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  ReactJS
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Bootstrap
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row tm-mb-90">
          <h2 className='col-12 tm-text-primary'>Documentation</h2>
          <p className='mb-4'>
            <div dangerouslySetInnerHTML={{ __html: project.steps }} />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
