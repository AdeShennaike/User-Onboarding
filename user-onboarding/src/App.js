import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Form from './components/Form';

// Information and initial states
const initialInfoValues = {
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
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  const initialSubmitValue = true

function App() {
  const [users, setUsers] = useState([])
  const [disable, setDisable] = useState(initialSubmitValue)
  const [errors, setErrors] = useState(initialInfoErrors)
  const [infoValue, setInfoValue] = useState(initialInfoValues)

  useEffect(() =>{axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data.data)
    console.log(res.data.data)
  })
  .catch(err => {
    console.error(err)
  })
},[])

// Event handlers
const onChange = (name, value) =>{
  setInfoValue({
    ...infoValue,
    [name]:value
  })
}

  return (
    <div className="App">
      <Form>
      errors = {errors}
      value = {infoValue}
      disable = {disable}
      change = {onChange}
      </Form>
    </div>
  );
}

export default App;