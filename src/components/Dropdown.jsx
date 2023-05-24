import React, { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import "./dropdown.css";

const Dropdown = ({ title, list, index }) => {
  // visibility of dropdown

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleButtonClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // ref part
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  // selected item view
  const [selectedItem, setSelectedItem] = useState("Select Color");

  const handleItemClick = (event) => {
    setSelectedItem(event.target.textContent);
    setIsDropdownVisible(false);
  };

  return (
    <div className="button">
      <div className="title">
        <button onClick={handleButtonClick}>
          {selectedItem}
          <i>
            <HiChevronDown />
          </i>
        </button>
      </div>

      {isDropdownVisible && (
        <div className="list" ref={dropdownRef}>
          {list.map((item, key) => {
            return (
              <div key={key} onClick={handleItemClick} className="list-item">
                {item}
                <hr className="hr-line" />
              </div>
            );
          })}
        </div>
      )}

      {selectedItem && <p>Selected item: {selectedItem}</p>}
    </div>
  );
};

export default Dropdown;
