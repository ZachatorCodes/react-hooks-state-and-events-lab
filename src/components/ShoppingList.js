import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCatagory, setFilterBy] = useState("All");

  function handleChange(e) {
    setFilterBy(e.target.value);
  }

  const filteredFoods = items.filter(item => {
    if (selectedCatagory === "All") {
      return true;
    }
    else {
      return item.category === selectedCatagory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredFoods.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
