import React,{useState,useEffect} from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles,IconButton} from '@material-ui/core';

import { useDispatch } from 'react-redux';
 import axios from "axios";
import {getInfo} from '../Actions/info.action';
import {useSelector,connect} from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import{useParams} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
   heading:{
     fontFamily:'Lucida Console,Monospace'
   }
   
  });

const Inflight = () => {

    const [userDetails,setuserDetails ]= useState();
    const classes = useStyles();
    
    let dispatch = useDispatch();
    var obj = useParams();
    const myJSON = JSON. stringify(obj); 
    var flightnodata = JSON.parse(myJSON);

    useEffect(() => {
        
        axios.get('http://localhost:9000/PassengerDetails')
            .then((response) =>{
                console.log(response);
                setuserDetails(response.data);
            })
            .catch((error) =>{
                console.log(error);
            })
      
          },[dispatch]);
    return <div>
          <h1 className={classes.heading}>INFLIGHT DETAILS - {flightnodata.id}</h1>
          <hr/>
       <MDBTable striped>
      <MDBTableHead>
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Seat.no</th>  
            </tr>  
            </MDBTableHead>
            <MDBTableBody>
             {userDetails && userDetails.filter(data=>data.flightNo==flightnodata.id).map((row, index) => ( 
              <tr data-index={index}>  
                <td>{row.id}</td>  
                <td>{row.name}</td>  
                <td>{row.seatno}</td>  
                 
                
              </tr>  
            ))}   
    </MDBTableBody>
        </MDBTable>

    </div>;
}


export default Inflight;