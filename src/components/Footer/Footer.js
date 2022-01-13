import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@mui/material/Typography";
import "./Footer.css";

function Footer(){  
    return (
        <div className="footer">
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <Typography variant="body1" component="p" sx={{color:'white'}}>
           &copy; 2021 pedrotechpizza.com
        </Typography>
      </div>
    );
}
export default Footer;