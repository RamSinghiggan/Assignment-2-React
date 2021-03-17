import React,{Component} from "react";
import { render } from "react-dom";
import MyComponent from "./myComponent/myComponent";
import UserForm from "./myComponent/UserForm";
import FormUser from "./myComponent/FormUser";
import FormPersonal from "./myComponent/FormPersonal";

class App extends Component{
  render(){
    return(
      <div className="App">

      <MyComponent/>
      {/* <UserForm/> */}
    
        </div>
    )
  }
}

export default  App;
