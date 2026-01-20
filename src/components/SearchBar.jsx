/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        {/* Menggunakan Unicode Search yang lebih bersih atau SVG */}
        <span className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        
        <input
          type="text"
          placeholder="Cari nama surat (contoh: Al-Fatihah)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchBar;