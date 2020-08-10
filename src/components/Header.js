// import React, { useEffect, useRef } from "react";
import React from "react";

const Header = ({ headerRef, setHeaderHeight }) => {
  /* const headerRef = useRef();
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
    window.addEventListener(
      "resize",
      setHeaderHeight(headerRef.current.clientHeight)
    );
  }, [headerRef, setHeaderHeight]); */
  return (
    <header
      id="header"
      ref={headerRef}
      // className="text-white bg-primary w-100 p-2 d-flex fixed-top"
      className="text-white bg-primary w-100 p-2 d-flex"
    >
      <h1>Header</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        tenetur quia vel ex autem dolor, illo molestiae inventore earum
        voluptates perferendis amet veniam sint veritatis dignissimos
        exercitationem impedit, eum corrupti?
      </div>
    </header>
  );
};

export default Header;
