import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [navOptions, setNavOptions] = useState([
    {
      label: "Home",
      id: 1,
      isExpanded: true,
      subOptions: [
        { id: 10, label: "Home Level 1", href: "https://condenast.com" },
        { id: 20, label: "Home Level 2", href: "https://condenast.com" },
        { id: 30, label: "Home Level 3", href: "https://condenast.com" },
      ],
    },
    {
      label: "About",
      id: 2,
      isExpanded: false,
      subOptions: [
        { id: 1, label: "About Level 1", href: "https://condenast.com" },
        { id: 2, label: "About Level 2", href: "https://condenast.com" },
        { id: 3, label: "About Level 3", href: "https://condenast.com" },
      ],
    },
  ]);

  const toggleFirstLevel = (e, value) => {
    e.preventDefault();
    const targetTagName = e.target.tagName.toLowerCase();
    if (targetTagName !== "a") {
      console.log(`toggle first level`, e.target, value);
      const updatedOptions = navOptions.map((item) =>
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
            <li key={index} onClick={(e) => toggleFirstLevel(e, option.id)}>
              <span href={option.href}>
                {/* Used conditional operator to show either "-" or "+" based on isExpanded */}
                {option.label} {option.isExpanded ? "-" : "+"}
              </span>
              {/* Used logical AND operator to conditionally render the subOptions */}
              {option.subOptions && option.isExpanded && (
                <ul>
                  {option.subOptions.map((subOption, subIndex) => (
                    <li key={subIndex}>
                      {/* Replaced anchor tag with Link component */}
                      <Link to={subOption.href}>{subOption.label}</Link>
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
