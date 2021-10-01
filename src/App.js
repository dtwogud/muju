import axios from 'axios';
import React from "react";
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    isLoading: true,
    data : []
  };

  muju = async() => { 
    const today = new Date();
    let year = today.getFullYear()
    let month = today.getMonth()
    let date = today.getDate()

    const {data}= await axios.get(`https://www.mdysresort.com/convert_main_slope_191223.asp?g=S&n_date=${year}-${month}-${date}`)
    this.setState({data, isLoading : false})
    console.log({data})
  }
  componentDidMount() {
    this.muju()
  }
  
  render(){
    const {isLoading, data} = this.state
    return (
      <div className="container">
      { isLoading ? (
      <div className="loader"><span className="loader__text">Loading...</span> </div> 
      ) : (
      <div className="slope">
        {data}
      </div>
      )}
  </div>)
  }
}

export default App;
