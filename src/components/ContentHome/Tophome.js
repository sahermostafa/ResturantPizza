import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/bg.jpg";
import Button from '@mui/material/Button';
import "./Tophome.css";

function Tophome() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Button variant="contained" size="small" color="error" >
          <Link to="/menu" style={{textDecoration:`none`,color:`white`}}>
            ORDER NOW 
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default Tophome;