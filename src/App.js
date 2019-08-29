import React from 'react';
import './App.css';

function HelloJenno() {
  return(
    <button className="App-jennoButton">
      Press me if your name is Jenno.
    </button>
  );
}


function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-headerText">s h a r o n&nbsp;&nbsp;&nbsp;h w a n g</h1>
          <span className="App-header-toolbarText">          
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">work</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">about</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">contact</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">resume</a>
          </span>       
      </header>
    </div>
  );
}

function Graphics() {
  return(
    <div className="App-graphics">
      {/* <div className="infront"></div> */}
      {/* <div className="behind"></div> */}
      <div className="image">
        <img src="cinque-terre-bw.jpg"/>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Graphics />
    </div>
  );
}

export default App;
