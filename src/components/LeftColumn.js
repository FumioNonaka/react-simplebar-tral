import React from "react";
import SimpleBar from "simplebar-react";

const LeftColumn = ({ headerHeight, leftColumnHeight, leftColumnRef }) => {
  return (
    <div
      id="left-column"
      ref={leftColumnRef}
      className="bg-light p-2"
      style={{
        height: leftColumnHeight,
        position: "absolute",
        top: headerHeight,
      }}
    >
      {/* <SimpleBar id="left-column" className="bg-light p-2"> */}
      <h3>Left column</h3>
      <ul id="list" className="pl-4">
        {Array.from(new Array(20), (_, index) => (
          <li key={index}>item {String(index + 1).padStart(2, 0)}</li>
        ))}
      </ul>
    </div>
    // </SimpleBar>
  );
};

export default LeftColumn;
