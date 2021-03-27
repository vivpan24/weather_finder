import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"; 
import Footer from "./components/Footer";

import "./App.css"

const  API_KEY ="f6ecb6c4f95ddfa9f89e46124b3b163b";
class App extends React.Component{
  state ={
        temperature : '',
        city : '',
        country : '',
        description : '',
        error : ''
  }
  getWeather = async(e)=> {
    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
   
    const data = await api_call.json();

    if(city && country)
    {
      console.log(data);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
      });
    }
    else{
      this.setState({
      temperature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:"Please enter the data"
    });
    }  
  } 
  render(){
    return(
        <div className="container"> 
         <Titles/>

         <Form getWeather={this.getWeather}/>

         <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
           />
        <Footer/>
        </div>
    );
  }
};

export default App;