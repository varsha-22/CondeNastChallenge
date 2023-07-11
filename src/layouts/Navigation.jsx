import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [navOptions, setNavOptions] = useState([
    {
      label: "Home",
      id: 1,
      isExpanded: true,
      subOptions: [
        { id: 10, label: "Home Level 1" },
        { id: 20, label: "Home Level 2" },
        { id: 30, label: "Home Level 3" }
      ]
    },
    {
      label: "About",
      id: 2,
      isExpanded: false,
      subOptions: [
        { id: 1, label: "About Level 1" },
        { id: 2, label: "About Level 2" },
        { id: 3, label: "About Level 3" }
      ]
    }
  ]);

  const toggleFirstLevel = (e, value) => {
    e.preventDefault();
    const targetTagName = e.target.tagName.toLowerCase();
    if (targetTagName !== "a") {
      const updatedOptions = navOptions.map(
        item =>
          value === item.id ? { ...item, isExpanded: !item.isExpanded } : item
      );

      setNavOptions(updatedOptions);
    }
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          {navOptions.map((option, index) => (
            <li key={index} onClick={e => toggleFirstLevel(e, option.id)}>
              <span>
                {/* Used conditional operator to show either "-" or "+" based on isExpanded */}
                {option.label} {option.isExpanded ? "-" : "+"}
              </span>
              {/* Used logical AND operator to conditionally render the subOptions */}
              {option.subOptions &&
                option.isExpanded && (
                  <ul>
                    {option.subOptions.map((subOption, subIndex) => (
                      <li key={subIndex}>
                        {/* Replaced anchor tag with Link component */}
                        <span>{subOption.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
