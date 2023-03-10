import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import { useState,useEffect } from 'react';
import { getUser, editUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';


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


function EditUser() {
  const [user,setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    loadUserDetails();
  },[])

  const loadUserDetails=async()=>{
    const response = await getUser(id);
    // console.log(response.data[0]);
    setUser(response.data[0])
  } 

  const onChangeHandle=(e)=>{
    setUser({ ...user, [e.target.name]: e.target.value});
  }

  const EditUserDetails=async()=>{
   await editUser(user, id);
   navigate('/all');
  }

  return (
    <Container>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='name' value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='username' value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='email' value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onChangeHandle(e)} name='phone' value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={EditUserDetails}>Edit User</Button>
      </FormControl>
    </Container>
  )
}

export default EditUser