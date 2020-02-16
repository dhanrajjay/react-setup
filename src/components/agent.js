import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, TextField, 
	FormControl, FormControlLabel, FormLabel,
	Radio, RadioGroup, Grid, TextareaAutosize, FormGroup } from '@material-ui/core';
import SimpleTable from './grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function Agent() {
  const classes = useStyles();
  const [ agentLabel, setAgentLabel ] = useState('agent');
  const [ checked, setChecked ] = useState(false);
  const [ agentList, setAgentList ] = useState({
  	checkedAgent: true,
  	checkedAgency: false,
  	checkedAgencies: false
  })
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
        <Grid item xs>
          	<div>
				<FormControl component="fieldset">
			        <FormLabel component="legend">LABEL NAME</FormLabel>
			        <RadioGroup row aria-label="agentSelection" name="agentSelection" value={agentLabel} onChange={setAgent}>
			          <FormControlLabel value="agent" control={<Radio />} label="Agent" />
			          <FormControlLabel value="agency" control={<Radio />} label="Agency" />			          			          
			        </RadioGroup>
			    </FormControl>
			</div>
			<div>
				<TextField id="standard-basic" label="Agent Name" />
			</div>
			<div>
				<Button variant="contained">Default</Button>
			</div>
        </Grid>
        <Grid item xs>
          	<div>
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
				        label="Agent"
				      />
				      <FormControlLabel control={
				          <Checkbox
				            checked={agentList.checkedAgency}
				            onChange={handleAgencyList('checkedAgency')}
				            value="checkedAgency"
				            color="primary"
				          />
				        } label="Agency" />
				      <FormControlLabel control={
				          <Checkbox
				            checked={agentList.checkedAgencies}
				            onChange={handleAgencyList('checkedAgencies')}
				            value="checkedAgencies"
				            color="primary"
				          />
				        } label="Agencies" />
				</FormGroup>
			</div>

			<div>
				<TextareaAutosize style={{height: "200px", width: "400px"}} aria-label="empty textarea" placeholder="Empty" />
			</div>
        </Grid>       
      </Grid>     

      <SimpleTable />
    </div>
  );
}
