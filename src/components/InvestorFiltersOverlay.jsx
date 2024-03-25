import React from "react";

const InvestorFiltersOverlay = ({ isFilterOpen, setIsFilterOpen }) => {
  return (
    <div className="investor-filters-overlay">
      <div className="investor-filters-content">
        {/* Content of the overlay */}
        <h2>Investor Filters</h2>
        {/* Add your filter options here */}
        <button onClick={() => setIsFilterOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default InvestorFiltersOverlay;
