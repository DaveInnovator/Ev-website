import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bgImage">
          <nav className="text-white fixed w-full">
            <ul className="flex justify-around py-10 items-center">
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>EXPLORE</a>
              </li>
              <li>
                {/* <img src={logo} alt='swsw' className='w-[4em]'/> */}
                <div className="h-[4em] w-[4em] rounded-[50%] bg-blue-700"></div>
              </li>
              <li>
                <a>JOURNAL</a>
              </li>
              <li>
                <a>SEARCH</a>
              </li>
            </ul>
          </nav>
          <div className="bg-[#00000071] text-white h-[90vh] flex justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-[65px] font-bold">The Great Outdoors</h1>
              <p>Wander often, Wonder always</p>
            </div>
          </div>
        </div>
        <div className="bg-black text-white pt-[6em]">
          <div className="flex items-center flex-col gap-4 mb-12">
            <h1 className="text-[36px]">Explore the World</h1>
            <p className="text-center w-1/2">
              We seek to provide the most authentic content from athletes,
              adventures, explorers and travellers around the world. Our
              long-term mission is to educate inspire and enable all peoples to
              experience & protect wilderness.
            </p>
          </div>
          <div className="px-[8em] flex justify-between mb-12">
            <div className="w-[20em] h-[25em] bg-blue-500"></div>
            <div className="w-[20em] h-[25em] bg-[orange]"></div>
            <div className="w-[20em] h-[25em] bg-blue-500"></div>
          </div>
          <p className="text-center text-[14px] text-blue-600">SEE MORE &gt;</p>
        </div>
      </div>
    );
  }
}

export default App;
