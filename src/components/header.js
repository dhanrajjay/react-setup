import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Translation } from 'react-i18next';
import Locale from './locale';
import NavBar from './nav';
import i18n from '../i18n';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },    
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function Header() {
  const classes = useStyles();  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>          
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={"../logo.svg"} className={classes.logo} alt="Company Logo" />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Translation>
              {
                t =>
                <>
                  <div className="app">
                    <span>{t('header')}</span>                    
                  </div>

                  <div className="app">
                    <span>{t('agency')}</span>              
                  </div>
                </>
              }
            </Translation>
          </div>
          <Locale />
        </Toolbar>
        <NavBar />
      </AppBar>
    </div>
  );
}