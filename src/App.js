import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.css";
// import "bootstrap";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import MainContents from "./components/MainContents";
import LeftColumn from "./components/LeftColumn";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [leftColumnWidth, setLeftColumnWidth] = useState(0);
  const [leftColumnHeight, setLeftColumnHeight] = useState(0);
  const header = useRef(null);
  const leftColumn = useRef(null);
  useEffect(() => {
    // const header = document.getElementById("header");
    const _header = header.current;
    const _leftColumn = leftColumn.current;
    const setLayout = () => {
      setHeaderHeight(_header.clientHeight);
      setLeftColumnWidth(_leftColumn.clientWidth);
      setLeftColumnHeight(window.innerHeight - _header.clientHeight);
      console.log("left column height:", _leftColumn);
    };
    window.addEventListener("resize", setLayout);
    setLayout();
  }, []);
  return (
    // <div className="App">
    <div className="App" style={{ paddingTop: headerHeight }}>
      <Header headerRef={header} />
      {/* <Header setHeaderHeight={setHeaderHeight} /> */}
      <div className="container-fluid d-flex px-0">
        <LeftColumn
          leftColumnRef={leftColumn}
          leftColumnHeight={leftColumnHeight}
          headerHeight={headerHeight}
        />
        <MainContents leftColumnWidth={leftColumnWidth} />
      </div>
    </div>
  );
}

export default App;
