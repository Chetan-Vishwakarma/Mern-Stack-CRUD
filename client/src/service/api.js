import axios from "axios";

const URL = 'http://localhost:8000';

export  const addUser = async(data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('Error while calling add User api ',error);
    }
}

export const getUsers=async()=>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('error while calling getUsers Api');
    }
}

export const getUser=async(id)=>{
    console.log(id);
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log('Error while load a particular user information',error);
    }
}

export const editUser = async (user, id) => {
    try{
        return await axios.put(`${URL}/${id}`,user);
    }catch(error){
        console.log('error while edit data through editUser api ',error);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while delete data through deleteUser Api ',error);
    }
}