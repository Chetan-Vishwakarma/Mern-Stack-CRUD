import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
  margin-top:20px;
}
`;

const defaultValue = {
  name:'',
  username:'',
  email:'',
  phone:''
}



function AddUser() {
  const [user,setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const onChangeHandle=(e)=>{
    setUser({ ...user, [e.target.name]: e.target.value});
  }

  const AddUserDetails=async()=>{
   await addUser(user);
   navigate('/all');
  }

  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='username'/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='phone'/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>AddUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser