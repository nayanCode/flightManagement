import React,{useState,useEffect} from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles,IconButton} from '@material-ui/core';

import { useDispatch } from 'react-redux';
 import axios from "axios";
import {getInfo} from '../Actions/info.action';
import {useSelector,connect} from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import{useParams} from 'react-router-dom';

// import rootReducer from '../reducers/index.reducer'

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
   heading:{
     fontFamily:'Lucida Console,Monospace'
   }
   
  });

const Checkin = ({match}) => {
  
    const [seatno, setseatno] = useState('');
    const [userDetails,setuserDetails ]= useState();
    const [readonly, setreadonly] = useState(true);
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
  
    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    };

    const classes = useStyles();
    
    let dispatch = useDispatch();
    var obj = useParams();
    const myJSON = JSON. stringify(obj); 
    var flightnodata = JSON.parse(myJSON);
    // console.log(obj.id);
 

    const userData = useSelector(state=> state.info.passengerDetails);

    useEffect(() => {

    dispatch(getInfo());
    setuserDetails(userData.data);
    // setSelectedFile()
    // console.log("file:",uploadfileref.current.files[0]);
  
      },[dispatch]);
      // console.log(userDetails);
      

   const ChangeSeatno=(e)=>{
           setreadonly(false);

            setseatno(e.target.value);
            
axios.put('http://localhost:3000/PassengerDetails/1019101/', {
  first_name: 'Fred',
  last_name: 'Blair',
  email: 'freddyb34@yahoo.com'
}).then(resp => {

  console.log(resp.data);
}).catch(error => {

  console.log(error);
});  
           
   }

    
    return <div>
        <h1 className={classes.heading}>CHECKIN DETAILS - {flightnodata.id} </h1>
    <hr/>
       <MDBTable striped>
      <MDBTableHead>
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Seat.no</th> 
                <th>Passport</th> 
                <th>Date Of Birth</th>  

                 
            </tr>  
            </MDBTableHead>
            <MDBTableBody>
             {userDetails && userDetails.filter(data=>data.flightNo==flightnodata.id).map((row, index) => ( 
              <tr data-index={index}>  
                <td>{row.id}</td>  
                <td>{row.name}</td>  
                <td><input type="text" readOnly= {false} defaultValue={row.seatno}/> 
                <button onclick={ChangeSeatno}>Update</button></td>  
               <td>	
                 <input type="file" name="file" onChange={changeHandler} />
			
        {row.passport && row.passport ? (
<div>
<p>Filename: {row.passport}</p>
</div>
) : (
<p>Select a file to show details</p>
)}
      </td>
      <td><input type="date" /></td>
                
              </tr>  
            ))}   
    </MDBTableBody>
        </MDBTable>  
    
     </div>;
}

export default Checkin



   
   
    
// <td>	
// <input type="file" name="file" onChange={changeHandler} />
// {isFilePicked && isFilePicked ? (
// <div>
// <p>Filename: {row.name}</p>
// </div>
// ) : (
// <p>Select a file to show details</p>
// )}
// </td>
// <td><input type="date" /></td>