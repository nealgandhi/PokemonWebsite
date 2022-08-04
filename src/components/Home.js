import React from "react";
import Body from "./Body";
import aba from "../assets/ABA.png"

function Home() {
  return (
    <div className="text-white place-content-center align-center object-center justify-center py-8 font-mono subpixel-antialiased"  style={{textAlign:'center', marginLeft:'25%', marginRight:'25%', width:'50%'}}>
      <div className="flex flex-col align-center">
        <p>Welcome to my Pokemon Website</p>
        <p>
          <a href="/search">Search for Pokemon Stats</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
