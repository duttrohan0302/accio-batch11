import './App.css';
import React, { useState } from 'react';
import Tabs from "./Components/Tabs"

function App(){

  // const tabNames = ["Home","About", "Features"]
  const [tabNames,setTabNames] = useState(["Home","About", "Features"])

    return (
      <div className='app'>
          <div className='browser'>
            <Tabs tabNames={tabNames}/>
            <div className="viewport">Pages Go Here</div>
          </div>
      </div>
    );
}

// class App extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       tabNames: ["Home","About", "Features"]
//     }
//   }
//   render(){
//     return (
//       <div className='app'>
//           <div className='browser'>
//             <Tabs tabNames={this.state.tabNames}/>
//             <div className="viewport">Pages Go Here</div>
//           </div>
//       </div>
//     );
//   }
// }

export default App;
