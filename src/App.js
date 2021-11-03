import React from 'react';
import './App.css';
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      alert('SUCCESS!! \n\n' )
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      if(!values.password) errors.password = 'Field required';
      var re = /\S+@\S+\.\S+/;
      if(!re.test(values.email)) errors.email = 'Username should be an email';

      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError'style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input id='pswField' type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id='pswError' style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id='submitBtn' type="submit" >Submit</button>
      </form>      
    </div>
  );
}

export default App;
