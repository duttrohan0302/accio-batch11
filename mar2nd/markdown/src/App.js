import React from "react";
import ReactMarkdown from "react-markdown";
import './App.css';

// function App() {
//   return (
//     <div className="App">
//         App is running
//     </div>
//   );
// }

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      markdown: "",
      loading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeLoadingVar = this.changeLoadingVar.bind(this);
  }
  handleChange(e){
    this.setState({
      markdown: e.target.value
    })
  }
  changeLoadingVar(){
    this.setState({
      loading: false
    })
  }

  componentDidMount(){
    setTimeout(this.changeLoadingVar,3000)
  }
  render(){
    if(this.state.loading){
      return (<div><h1>Loading...</h1></div>)
    }
 
    return(
      <div className="app">
        <textarea onChange={this.handleChange}/>
        <ReactMarkdown className="preview" children={this.state.markdown}/>
      </div>
    )
  }
}

export default App;
