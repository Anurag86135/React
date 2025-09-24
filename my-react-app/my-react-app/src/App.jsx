// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import React ,{ useState } from "react"

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// // const App=()=>{
// //   return (<>
// //  {/* /* // <h1>hello React ji</h1>
// //   //  </>
// //    */ }
// // <form>
// //   <input/>
// //   <butoon>click</butoon>
// // </form> </>)
// // }
// // export default App
// // import React from 'react'

// const App= () => {
//   console.log("hiii");
//   let [state,setState]=useState(0)
//   function fun1(){
//     setState(state+1)
//   }
//     //count+=1
//     // console.log(count)/
//   return (
//     <div>
//       <h2>{state}</h2>
//       <button onClick={fun1}>click</button>
//     </div>
//   )
// }


// export default App



//day2


// import { useState } from "react";

// const App = () => {
// console.log("hiii");
// let [state, setState] = useState("red");

// function fun1() {
//  if (state === "red") {
//    setState("gold");
//  } else {
//    setState("red");
//  }
// }

// return (
//  <div style={{ backgroundColor: state, height: "100vh" }}>
//    <h2>{state}</h2>
//    <button onClick={fun1}>click</button>
//  </div>
// );
// };

// export default App;

//day2.2
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState();
//   let data = new Date().toLocaleTimeString()
//   console.log(data);

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>++</button>
//       <button onClick={() => setCount(count - 1)}>--</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;

//day2.3 start stop watch
// import { useState, useEffect } from "react";

// const App = () => {
//   const [time, setTime] = useState(0); // stopwatch ka time (seconds)
//   const [isRunning, setIsRunning] = useState(false); // stopwatch chal raha hai ya nahi

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1); // har sec 1 add
//       }, 1000);
//     }

//     return () => clearInterval(interval); // cleanup jab stop ho ya component unmount ho
//   }, [isRunning]);

//   return (
//     <div>
//       <h2>⏱ Stopwatch: {time} sec</h2>
//       <button onClick={() => setIsRunning(true)}>Start</button>
//       <button onClick={() => setIsRunning(false)}>Stop</button>
//       <button onClick={() => setTime(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;

//day3.1

// import React from 'react'
// // import { useState, useEffect } from "react";
// import { useState, useEffect } from "react";


// const App = () => {
//   let[count,SetCount]= useState(0)
  
//   useEffect(()=>{
//     console.log("hello")
//   },[count])
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>SetCount(count+1)}>click</button>
//     </div>
//   )
// }

// export default App

//day3.2
// import React from 'react'
// import { useState, useEffect } from "react";
// const App = () => {
//   let[count,SetCount]= useState(0)
//   let [city,SetCity]=useState("Delhi")
  
//   useEffect(()=>{
//     console.log("hello")
//   },[count])
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>SetCount(count+1)}>click</button>
//       <h3>{city}</h3>
//       <button onClick ={()=>{SetCity("Bhopal")}}>Change</button>
//     </div>
//   )
// }

// export default App

//day3.4
import React from 'react'
import  "./App.css"
import { useState, useEffect } from "react";
const App = () => {
  // let[count,SetCount]= useState(0)
  // let [city,SetCity]=useState("Delhi")
  let[ApiData,SetApiData]=useState([])
  useEffect(()=>{
    // console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json()
    }).then((data)=>{console.log(data)
      SetApiData(data)
    })
  },[])
  return (
    <div>
      {/* <h3>{count}</h3>
      <button onClick={()=>SetCount(count+1)}>click</button>
      <h3>{city}</h3>
      // <button onClick ={()=>{SetCity("Bhopal")}}>Change</button> */
      
      
      ApiData.map((a)=>{return(<>
      <p id="one">{a.id}</p>
      <h2 id="two">{a.title}</h2></>)})}
    </div>
  )
}

export default App

