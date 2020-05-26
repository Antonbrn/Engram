import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, NotificationsActive, PhotoAlbum } from "@material-ui/icons";
import { Link } from "react-router-dom";




const useStyles = makeStyles({
  bottomIcons: {
    color: "#519657",
    fontSize: "30px",
    
  },
  bottomNav: {
    background: "#ffb04c",
    height: "12vh",
    
  },
 
  '@media (min-width: 601px)': {
    bottomNav: {
      background: "#bc5100"
    },
  }
});


const BottomBar = () => {

  
   
  const classes = useStyles();

  const [value, setValue] = React.useState("feed");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  
  
  };

  return (
      
        <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.bottomNav}
        
      >
        <BottomNavigationAction
          component={Link}
          to="/myalbums"
          label="Albums"
          value="myalbums"
          icon={<PhotoAlbum className={classes.bottomIcons} 
          />}
        />
  
        <BottomNavigationAction
          component={Link}
          to="/feed"
          label="Feed"
          value="feed"
          icon={<Home className={classes.bottomIcons} 
          />}
        />
  
        <BottomNavigationAction
          component={Link}
          to="/notifications"
          label="Notifications"
          value="notifications"
          icon={<NotificationsActive className={classes.bottomIcons} />}
        />
      </BottomNavigation>
      
        
     
    
    
   

    
  );
};

export default BottomBar;
