import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            type="button"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

////filterItems{breakfast} === filterItems=(categorys) in app.js
//breakfast === breakfast aakumbol filter true aakum app ath maathram print aakum
//if you want to add dinner look at the end of data.js
