import React,{useEffect,useState} from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles,IconButton} from '@material-ui/core';
import { useHistory ,Link} from "react-router-dom";
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn  } from 'mdbreact';

const useStyle = makeStyles({
    box: {
    padding: '70px',
    fontSize: '25px',
    margin: '10px',
    borderRadius:'10px',
    cursor: 'pointer',
    border: '1px solid black',
    display: 'inline-block',
    "&:hover": {
        background: "#efefef"
      },
    

    },
    container: {
        marginTop: '130px',
        
    },
   
    buttonspace:{
        
            width:'10px',
            height:'auto',
            display:'inline-block'
        
    }
})


const Home = () => {
    const [FlightDetails,setFlightDetails ]= useState();
    const classes = useStyle();
    const history = useHistory();


useEffect(() => {
    
        axios.get('http://localhost:9000/FlightDetails')
        .then((response) =>{
            console.log(response);
            setFlightDetails(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    
}, [])

    const checkinclicked=(id)=>{
        // history.push('/checkin')
         console.log(id);
    }

    const inflightclicked=(id)=>{
        // history.push('/flight/')
        console.log(id);
    }
    return (
        <Box className={classes.container}>
        {/* <Box onClick={checkinclicked}  className={classes.box} >
        CHECKIN
      </Box>

      <Box onClick={inflightclicked} className={classes.box}>
          INFLIGHT
      </Box> */}
      <MDBTable hover bordered>
      <MDBTableHead>
            <tr>  
                <th>Flight ID</th>  
                <th>Flight Name</th>  
                <th>Number of Passenger</th>  
                
            </tr>  
            </MDBTableHead>
            <MDBTableBody>
            {FlightDetails && FlightDetails.map((row, index) => ( 
              <tr data-index={index}>  
                <td>{row.flightNo}</td>  
                <td>{row.flightName}</td>  
                <td>{row.passengerNo}</td>
                <td>
                    <Box className={classes.buttongrp}>
               <Link to={`checkin/${row.flightNo}`}><button onClick={checkinclicked(row.flightNo)} >CHECKIN</button></Link>
                <div  className={classes.buttonspace}></div>
                <Link to={`flight/${row.flightNo}`}> <button onClick={inflightclicked(row.flightNo)}>INFLIGHT</button></Link>
                </Box>
                </td>  
              </tr>  
            ))}  
    </MDBTableBody>
        </MDBTable> 

      </Box>


   
    );
}


export default Home;