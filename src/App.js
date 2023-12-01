import {useState} from "react"
import './App.css';

function App() {
   const [color,setColor]= useState("blue")
  return (
    <div className=" w-full h-screen duration-200"
    style={{backgroundColor : color}}>
      <div className="contain">
        <div className="modify">
          <h3>YOUR BACKGROUND COLOR CHANGER</h3>
           <br/>
          <button 
          onClick={() => setColor("white")}
          className="btn"
          >
              white
          </button>
          <button className="btn"
          onClick={() => setColor("black")}
          >
              black
          </button>
          <button className="btn"
          onClick={() => setColor("olive")}>
               olive            
          </button>
          <button className="btn"
          onClick={() => setColor("violet")}>
               violet
          </button>
          <button className="btn"
          onClick={() => setColor("skyblue")}>
               skyblue
          </button>
          <button className="btn"
          onClick={() => setColor("orange")}>
               orange
          </button>
        </div>

      </div>

       
    </div>
  );
}

export default App;
