import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {LinearProgress} from "@material-ui/core";
import "./NoMatch.css";
const NoMatch = () => {
  const navigate = useNavigate();
  useEffect( () => {
    setTimeout( () =>{
      navigate("/");
    },2000);
  },[])

    return (
      <div className="mains">
        <div className="center">
          <p>
          Loading...
          </p>
          <LinearProgress color="secondary" />
      </div>
      </div>
      
    );
  };
  
  export default NoMatch;