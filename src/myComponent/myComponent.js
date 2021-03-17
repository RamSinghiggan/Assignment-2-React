import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { useForm } from 'react-hook-form'






function SampleForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="Ram" ref={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="Singh" ref={register} />
        </div>


        <div>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="rschakar21@gmail.com" type="email" ref={register} />
        </div>


        <div>
          <label htmlFor="Address"> Address</label>
          <input name="Address" placeholder="Address" ref={register} />
        </div>

        <div>
          <label htmlFor="Phone"> Phone</label>
          <input name="Phone" placeholder="2134567856" ref={register} />
        </div>

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

class MyComponent extends Component {


constructor(props) {
  super(props);
}

render() {
  return <SampleForm />;
}
}




 ReactDOM.render(<MyComponent />, document.getElementById('root'));


 export default MyComponent;
