import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../fontawesome/css/all.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import heroImage from '../img/hero.jpg';
import { Parallax } from 'react-parallax';
import ProjectCards from '../Projects/ProjectCards';
import projects from '../Projects/projects';
import SearchComponent from './components/SearchComponent';
import allData from './components/allData';

const JavascriptProjects = () => {
    const loader = () => {
        $(window).on('load', function () {
            $('body').addClass('loaded');
        });
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loader();
    }, []);
    const jsprojectsCat = projects.filter(item => item.category === 2);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const projectsPerPage = 8;
    const totalProjects = jsprojectsCat.length;
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = jsprojectsCat.slice(indexOfFirstProject, indexOfLastProject);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        const totalPages = Math.ceil(totalProjects / projectsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const calculatedTotalPages = Math.ceil(totalProjects / projectsPerPage);
        setTotalPages(calculatedTotalPages);
    }, [totalProjects, projectsPerPage]);

    return (
        <>
            <div id="loader-wrapper">
                <div id="loader"></div>

                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
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
                    <h2 className="col-6 tm-text-primary">Latest projects</h2>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <form action="" className="tm-text-primary">
                            Page {currentPage} of {totalPages}
                        </form>
                    </div>
                </div>
                <div className="row tm-mb-90 tm-gallery">
                    {currentProjects.map((project) => (
                        <ProjectCards key={project.id} project={project} />
                    ))}
                </div>
                <div className="row tm-mb-90">
                    <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                        <button onClick={handlePrevClick} disabled={currentPage === 1}
                            className="btn btn-primary tm-btn-prev mb-2 ">
                            Previous
                        </button>

                        <div className="tm-paging d-flex">
                            {Array.from({ length: Math.ceil(totalProjects / projectsPerPage) }, (_, index) => (

                                <button className="active tm-paging-link" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                                    {index + 1}
                                </button>

                            ))}
                        </div>
                        <button
                            className="btn btn-primary tm-btn-prev mb-2"
                            onClick={handleNextClick} disabled={currentPage === Math.ceil(totalProjects / projectsPerPage)}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JavascriptProjects;
