import React from "react";
import "../App.css";

class Form extends React.Component{
    render(){
        return(
                                <form onSubmit={this.props.getWeather} className="form">
                                    <div>
                                    <input  type="text" name="city" placeholder="city....."  className="form-group w-25"/>
                                    </div>

                                    <div>
                                    <input type="text" name="country" placeholder="country...."  className="form-group w-25"/>
                                    </div>
                                   <button  className="mb-3" type="submit" className="btn btn-primary">Get Weather</button>
                                </form>
                );
    }
};

export default Form;