//import { useState } from 'react';
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
    incrementDecrementHandler = (event)=>{
        event.target.innerHTML === "Increment" ? this.setState((preval)=>{
          return { count: preval.count+1}
        }) : this.setState((preval)=>{
          return { count: preval.count-1}
        });
    }
    render(){
      return (
        <div className="App">
         <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
         <div>
           <button type="button" onClick={this.incrementDecrementHandler}>Increment</button>
           <button type="button" onClick={this.incrementDecrementHandler}>Decrement</button>
         </div>
     </div>
      )
    };

  }
// function App() {
//   const [count,setCount] = useState(0);
//   const incrementDecrementHandler = (event)=>{
//     event.target.innerHTML === "Increment" ? setCount(preval => ++preval) : setCount(preval => --preval);
//   }
//   return (
//     <div className="App">
//         <h1>Counter App</h1>
//         <p>Count: {count}</p>
//         <div>
//           <button onClick={incrementDecrementHandler}>Increment</button>
//           <button onClick={incrementDecrementHandler}>Decrement</button>
//         </div>
//     </div>
//   );
// }

export default App;
