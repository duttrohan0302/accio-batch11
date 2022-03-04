import React from "react";
import './App.css';
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

const url = "https://course-api.com/react-tours-project"

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      tours:[],
      loading: true
    }

    this.fetchTours = this.fetchTours.bind(this)
    this.removeTour = this.removeTour.bind(this)
  }

  removeTour(id){
    this.setState({tours:this.state.tours.filter((tour)=>tour.id!==id)})
  }
  // fetchTours = async () => {

  // }

  componentDidMount(){
    this.fetchTours()
  }
  async fetchTours (){
    try{
      this.setState({loading:true})
      const response = await fetch(url)

      const toursFetched = await response.json()
      console.log(toursFetched)
      this.setState({tours:toursFetched,loading:false})
    }catch(err){
      this.setState({loading:false})
      console.log(err)

    }
  }

  render(){

    if(this.state.loading){
      return(
        <main>
          <Loading />
        </main>
      )
    }

    if(this.state.tours.length === 0 ){
      return(
          <main>
            <div className="title">
              <h2>No tours left</h2>
              <button className="btn" onClick={this.fetchTours}>refresh</button>
            </div>
          </main>
      )
    }
    return(
      <main>
        <Tours tours={this.state.tours} removeTour={this.removeTour}/>
      </main>
    )
  }
}

export default App;
