import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/logo.png";

const useStyles = makeStyles({
  link: {
    marginRight: "2rem",
    marginTop: "0.4rem",
  },
});

const Header = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar color="error">
        <Toolbar>
          <Grid
            container
            direction={matches ? "column" : "row"}
            justifyContent={matches ? "center" : "space-between"}
            alignItems="center"
          >
            <Grid item container xs="auto">
              <Grid item>
                <IconButton color="inherit">
                  <img src={Logo} width="100px" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item container xs="auto">
              <Grid item className={classes.link} sx={{marginRight: "2rem",marginTop: "0.4rem",}}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/"
                  variant="button"
                  underline="none"
                >
                  Home
                </MuiLink>
              </Grid>
              <Grid item className={classes.link} sx={{marginRight: "2rem",marginTop: "0.4rem",}}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/menu"
                  variant="button"
                  underline="none"
                >
                  Menu
                </MuiLink>
              </Grid>
              <Grid item className={classes.link}  sx={{marginRight: "2rem",marginTop: "0.4rem",}}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/about"
                  variant="button"
                  underline="none"
                >
                  About
                </MuiLink>
              </Grid>
              <Grid item className={classes.link}  sx={{marginRight: "2rem",marginTop: "0.4rem",}}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/contact"
                  variant="button"
                  underline="none"
                >
                  Contact
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;