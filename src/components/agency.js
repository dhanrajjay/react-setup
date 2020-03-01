import React, { useState, Component } from 'react';
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

	// Email Validation
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const handleEmail = (event) => {
		setEmail(event.currentTarget.value);
		setEmailEmpty('');
		validateEmail(event.currentTarget.value);
	};
	const validateEmail = (value) => {
	  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  const error = regEx.test(value) ? "" : "You must enter a valid email address";
	  setEmailError(error);
	  return error;
	};

	// Phone Validation
	const [phoneNumber, setPhoneNumber] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');
	const hanldePhoneNumber = (event) => {
		setPhoneNumber(event.currentTarget.value);
		setPhoneNumberEmpty('');
		validatePhoneNumber(event.currentTarget.value);
	};
	const validatePhoneNumber = (value) => {
		const error = value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? "Invalid phone number, must be 10 digits" : "";
		setPhoneNumberError(error);
		return error;
	};

	// Postal code Validation
	const [postalCode, setPostalCode] = useState('');
	const [postalCodeError, setPostalCodeError] = useState('');
	const hanldePostalCode = (event) => {
		setPostalCode(event.currentTarget.value);
		setPostalCodeEmpty('');
		validatePostalCode(event.currentTarget.value);
	};
	const validatePostalCode = (value) => {
		const error = value ? "" : "Enter a postal code";
		setPostalCodeError(error);
		return error;
	};

	// Empty Form Error
	const [emailEmpty, setEmailEmpty] = useState('');
	const [phoneNumberEmpty, setPhoneNumberEmpty] = useState('');
	const [postalCodeEmpty, setPostalCodeEmpty] = useState('');
	const handleEmptyError = (fn, event) => {
		if (!event.target.value ) {
			fn('Field cannot be empty');
		} else {
			fn('');
		}
	}

	return (
		<div className={classes.root}>
	      <Grid container spacing={3}>	      		
		        <Grid item xs={12} sm={6}>          
					<div>        		
		        		<FormLabel component="legend">EMAIL ADDRESS</FormLabel>
						<TextField id="standard-basic" style={{width: "70%"}} name="email" value={email} onChange={handleEmail} 
						onBlur={() => handleEmptyError(setEmailEmpty, event)} />
						<span className="error">{emailError}</span>
						<span className="error">{emailEmpty}</span>
					</div>
		        </Grid>
		        <Grid item xs={12} sm={6}>          	
		        	<div>        		
		        		<FormLabel component="legend">POSTAL CODE</FormLabel>
						<TextField id="standard-basic" style={{width: "70%"}} name="postalCode" value={postalCode} onChange={hanldePostalCode} 
						onBlur={() => handleEmptyError(setPostalCodeEmpty, event)} />
						<span className="error">{postalCodeError}</span>
						<span className="error">{postalCodeEmpty}</span>
					</div>
					<div style={{margin: "25px 0 0 0"}}>
						<FormLabel component="legend">PHONE NUMBER</FormLabel>
						<TextField id="standard-basic" style={{width: "70%"}} name="phoneNumber" value={phoneNumber} onChange={hanldePhoneNumber} 
						onBlur={() => handleEmptyError(setPhoneNumberEmpty, event)} />
						<span className="error">{phoneNumberError}</span>
						<span className="error">{phoneNumberEmpty}</span>
					</div>
	        	</Grid>
	        	<Grid item xs={12} sm={6}>
		        	<div>
						<Button variant="contained">SUBMIT</Button>
					</div>
		        </Grid>
	       </Grid>
		</div>
	)	
}