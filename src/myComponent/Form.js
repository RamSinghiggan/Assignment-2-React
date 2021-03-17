import React,{Component} from "./node_modules/react";
import { render } from "./node_modules/react-dom";

class Form extends Component{
  render(){
    return(
      <div>

       <h1>Form Component</h1> 
        </div>
    )
  }
}

export default  Form;
class MyComponent extends Component {


  //     this.state = {
  //       customer: {
  //         firstName: props.firstName,
  //         lastName: props.lastName,
  //         status: props.status
  //       }
  //     }
  //   }
  
  //   handleFirstNameChanged(event) {
  //     var customer        = this.state.customer;
  //     customer.firstName  = event.target.value;
  
  //     this.setState({ customer: customer });
  //   }
  
  //   handleLastNameChanged(event) {
  //     var customer      = this.state.customer;
  //     customer.lastName = event.target.value;
  
  //     this.setState({ customer: customer });
  //   }
  
  //   handleStatusChanged(event) {
  //     var customer    = this.state.customer;
  //     customer.status = event.target.value;
  
  //     this.setState({ customer: customer });
  //   }
  
  //   handleButtonClicked() {
  //     console.log(this.state.customer);
  //     alert('A name was submitted: ' + this.state.customer);
      
  //   }
  
  //   render() {
  //     return (
  //       <div>
  //         <label>
  //           First Name: 
  //         </label>
  //         <input type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
  //         <br/>
  //         <label>
  //           Last Name:
  //         </label>
  //         <input type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
  //         <br/>
  //         <label>
  //           Status:
  //         </label>
  //         <select value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
  //           <option value="PENDING">
  //             Pending
  //           </option>
  //           <option value="APPROVED">
  //             Approved
  //           </option>
  //         </select>
  //         <hr/>
  //         <button onClick={this.handleButtonClicked.bind(this)}>
  //           Save Record
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return <SampleForm />;
  }
  }
  
  
  
  
   ReactDOM.render(<MyComponent />, document.getElementById('root'));
  
  
   export default MyComponent;