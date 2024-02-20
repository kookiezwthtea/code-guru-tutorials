import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchComponent.css';

const SearchComponent = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest('.search-component') === null) {
        setShowDropdown(false);
      }
    };


    document.addEventListener('click', handleClickOutside);

  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    const filteredResults = data
      ? data.filter((item) => item && item.name && item.name.toLowerCase().includes(query.toLowerCase()))
      : [];

    setResults(filteredResults);
    onSearch(query);

    setShowDropdown(true);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  return (
    <div className="search-component">
      <div className="d-flex tm-search-form">
        <input
          className="form-control tm-search-input"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-success tm-search-btn" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div id="search-results" className={`search-results ${showDropdown ? 'show-results' : ''}`}>
        {results.map((result, index) => (
          <Link
            key={index}
            to={`/project/${result.id}`}
            className="search-result-item"
            onClick={handleLinkClick}
          >
            {result.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
