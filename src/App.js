
import './App.css';
//import React,{useState} from 'react';
import logoUrl from './coca-cola.gif';

const MyFunction = () => {
  window.open("https://www.coca-colacompany.com/");
}


function App() {

  // const [isSpinning, setIsSpinning] = useState(false);

  // const handleClick = () => {
  //   setIsSpinning(!isSpinning);
  // };
  return (
    <div className="App">
      <>
     <div  className="parent">
        <h1> Wish You a Happy New Year </h1>

        <div className="child">
        
        <button onClick={MyFunction}>Know More</button>

        {/* <a href="https://www.coca-colacompany.com/">Know More</a>; */}

        </div>

        <div  className="child1"
        
        // {`child1 ${isSpinning ? "spinning" : ""}`}
        //    onClick={handleClick}
        >
        {/* <img src="https://www.coca-colacompany.com/content/dam/journey/us/en/private/2020/12/2020-12-31-ccs-2020-year-in-review-1.jpg" alt="Happy New Year" /> */}
         
          <img src={logoUrl} alt="coca-cola-logo" width={200}  height={100}/>
        </div>


     </div>
      </>
    </div>
  );
}

export default App;
