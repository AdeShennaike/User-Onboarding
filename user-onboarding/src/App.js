import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Form from './components/Form';

// Information and initial states
const intialInfoValues = {
  // Text Inputs
      first_name: '',
      last_name: '',
      email: '',
      password: '',
  // Checkbox Inputs
      terms_of_service: false,
  // Submit Inputs
      submit: ''
  }
  
  const initialInfoErrors = {
      name: '',
      email: '',
      password: '',
  }

function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>{axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data.data)
    console.log(res.data.data)
  })
  .catch(err => {
    console.error(err)
  })
},[])
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;