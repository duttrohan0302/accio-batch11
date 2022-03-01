import './App.css';
import React from 'react';
import Tabs from "./Components/Tabs"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      tabNames: ["Home","About", "Features"]
    }
  }
  render(){
    return (
      <div className='app'>
          <div className='browser'>
            <Tabs tabNames={this.state.tabNames}/>
            <div className="viewport">Pages Go Here</div>
          </div>
      </div>
    );
  }
}

export default App;
