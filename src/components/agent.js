import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, TextField, NativeSelect,
	FormControl, FormControlLabel, FormLabel,
	Radio, RadioGroup, Grid, TextareaAutosize, FormGroup, MenuItem } from '@material-ui/core';
import SimpleTable from './grid';
import SelectComp from './select';

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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
const currencyOptions = [];
for (let i = 1; i <= currencies.length; i++) {
  currencyOptions.push(<option value={currencies[i]} key={i}>{currencies[i]}</option>);
};

export default function Agent() {
  const classes = useStyles();
  const [ agentLabel, setAgentLabel ] = useState('agent');
  const [ checked, setChecked ] = useState(false);
  const [ agentList, setAgentList ] = useState({
  	checkedAgent: true,
  	checkedAgency: false,
  	checkedAgencies: false
  })
  const [currency, setCurrency] = useState('EUR');
  const handleCurrencyChange = event => {
    setCurrency(event.target.value);
  };
  const setAgent = (event) => {
  	setAgentLabel(event.target.value);
  } 
  const handleChange = (event) => {
  	setChecked(event.target.checked);
  }
  const handleAgencyList = (name) => (event) => {
  	setAgentList({...agentList, [name]: event.target.checked });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>          
				<FormControl component="fieldset">
			        <FormLabel component="legend">LABEL NAME</FormLabel>
			        <RadioGroup row aria-label="agentSelection" name="agentSelection" value={agentLabel} onChange={setAgent}>
			          <FormControlLabel value="agent" control={<Radio />} label="Agent" />
			          <FormControlLabel value="agency" control={<Radio />} label="Agency" />			          			          
			        </RadioGroup>
			    </FormControl>					
        </Grid>
        <Grid item xs={12} sm={6}>          	
        	<FormLabel component="legend">LABEL NAME</FormLabel>
			<FormGroup row>
				<FormControlLabel
			        control={
			          <Checkbox
			            checked={agentList.checkedAgent}
			            onChange={handleAgencyList('checkedAgent')}
			            value="checkedAgent"
			            color="primary"
			          />
			        }
			        label="Agents"
			      />
			      <FormControlLabel control={
			          <Checkbox
			            checked={agentList.checkedAgency}
			            onChange={handleAgencyList('checkedAgency')}
			            value="checkedAgency"
			            color="primary"
			          />
			        } label="Agency Manager" />
			      <FormControlLabel control={
			          <Checkbox
			            checked={agentList.checkedAgencies}
			            onChange={handleAgencyList('checkedAgencies')}
			            value="checkedAgencies"
			            color="primary"
			          />
			        } label="Agency Assistant" />
			</FormGroup>			
        </Grid>
        <Grid item xs={12} sm={6}>
        	<div>        		
        		<FormLabel component="legend">AGENT NAME OR NUMBER</FormLabel>
				<TextField id="standard-basic" style={{width: "70%"}} />
			</div>
			<div style={{margin: "50px 0 0 0"}}>
			<FormLabel component="legend">DROP DOWN MENU</FormLabel>
      <NativeSelect
          labelid="customized-select-label-date"
          id="customized-select-label-date"
          value={currency}
          onChange={handleCurrencyChange} style={{width: "70%"}}
        >
	          {currencies.map(option => (
	            <option key={option.value} value={option.value}>
	              {option.label}
	            </option>
	          ))}
	        </NativeSelect>
			</div>
        </Grid>     
        <Grid item xs={12} sm={6}>
        	<div>
        		<SelectComp />
        	</div>
          <div style={{margin: "10px 0 0 0"}}>
        		<FormLabel component="legend">TEXT AREA</FormLabel>
            <TextareaAutosize style={{height: "100px", width: "70%", margin: "5px 0 0 0"}} aria-label="empty textarea" placeholder="Empty" />
          </div>
        </Grid>  
        <Grid item xs={12} sm={6} style={{margin: "-30px 0 10px 0"}}>
          <div>
            <FormLabel component="legend">FILE UPLOAD</FormLabel>
            <input type="file" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>

        </Grid>
        <Grid item xs={12} sm={6}>
        	<div>
				<Button variant="contained">SEARCH</Button>
			</div>
        </Grid>
      </Grid>     
      <SimpleTable />
    </div>
  );
}
