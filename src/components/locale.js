import React, { Component } from 'react';
import i18n from '../i18n';
import { Button, ButtonGroup }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Locale() {	
	const changeLanguage = lang =>	i18n.changeLanguage(lang);
	const useStyles = makeStyles(theme => ({
	  root: {
	    display: 'flex',
	    flexDirection: 'row',	    	   
	  },
	  buttonClass: {
	  	color: 'white'
	  }
	}));
	const classes = useStyles();
	return(						
	    <div className={classes.root}>	    	
	    	<ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
		        <Button onClick={() => changeLanguage('en')} className={classes.buttonClass} style={{color: ''}}>EN</Button>
	    		<Button onClick={() => changeLanguage('fr')} className={classes.buttonClass}>FR</Button>
		    </ButtonGroup>
	    </div>		    
	)	
}

export default Locale;