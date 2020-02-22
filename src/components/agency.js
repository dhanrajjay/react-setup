import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, TextField, 
	FormControl, FormControlLabel, FormLabel,
	Radio, RadioGroup, Grid, TextareaAutosize, FormGroup, MenuItem } from '@material-ui/core';

export default function Agency() {	
	const useStyles = makeStyles(theme => ({
	  root: {
	    flexGrow: 1,
	    padding: "30px"
	  },
	  paper: {
	    padding: theme.spacing(2),
	    textAlign: 'center',
	    color: theme.palette.text.primary,
	  },
	}));	
	const classes = useStyles();
	return (
		<div className={classes.root}>
	      <Grid container spacing={3}>
	        <Grid item xs={12} sm={6}>          
				<div>        		
	        		<FormLabel component="legend">EMAIL ADDRESSES</FormLabel>
					<TextField id="standard-basic" style={{width: "70%"}} />
				</div>
	        </Grid>
	        <Grid item xs={12} sm={6}>          	
	        	<div>        		
	        		<FormLabel component="legend">POSTAL CODE</FormLabel>
					<TextField id="standard-basic" style={{width: "70%"}} />
				</div>
        	</Grid>        
        	<Grid item xs={12} sm={6}>
	        	<div>
					<Button variant="contained">SUBMIT</Button>
				</div>
	        </Grid>
        	<Grid item xs={12} sm={6}>          	
	        	<div>        		
	        		<FormLabel component="legend">PHONE NUMBER</FormLabel>
					<TextField id="standard-basic" style={{width: "70%"}} />
				</div>
        	</Grid>        	        	
	       </Grid>
		</div>
	)	
}