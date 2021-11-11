import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Information and initial states
const intialInfoValues = {
  // Text Inputs
      name: '',
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
    setUsers(res.data)
    console.log(res.data)
  })
  .catch(err => {
    console.error(err)
  })
},[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;