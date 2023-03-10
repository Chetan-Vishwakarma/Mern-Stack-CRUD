import React, { useEffect, useState } from 'react'
import {Table, TableRow, TableCell, TableHead, TableBody, styled, Button} from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
 width:90%;
 margin:50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background:#000000;
  & > th{
    color:#fff;
    font-size:20px;
  }
`;

const TBody = styled(TableRow)`
  & > td{
    font-size: 20px;
  }
`;

function AllUsers() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
    },[]);

  const getAllUsers=async()=>{
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }
  // console.log(users);

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PHONE</TableCell>
          <TableCell>ACTIONS</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map((user,i)=>(
            <TBody key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{ marginRight:10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>  
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers