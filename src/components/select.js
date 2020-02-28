import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select,
 NativeSelect, InputBase, FormLabel } from '@material-ui/core';

const BootstrapInput = withStyles(theme => ({  
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SelectComp() {
  const minOffset = 0;
  const maxOffset = 60;
  const classes = useStyles();
  const [day, setDay] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const handleDay = event => {
    setDay(event.target.value);
  };
  const handleMonth = event => {
    setMonth(event.target.value);
  };
  const handleYear = event => {
    setYear(event.target.value);
  };
  const yearOptions = [];
  for (let i = minOffset; i <= maxOffset; i++) {
    const year = (new Date()).getFullYear() - i;
    yearOptions.push(<option value={year} key={i}>{year}</option>);
  };
  const monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthOptions = [];
  for (let i = 0; i < monthList.length; i++) {
    monthOptions.push(<option value={monthList[i]} key={i}>{monthList[i]}</option>);
  };
  const dayOptions = [];
  for (let i = 1; i <= 30; i++) {
    dayOptions.push(<option value={i} key={i}>{i}</option>);
  };

  return (
    <div>
      <FormLabel component="legend">EFFECTIVE DATE</FormLabel>
      <FormControl className={classes.margin}>        
        <NativeSelect
          labelid="customized-select-label-date"
          id="customized-select-label-date"
          value={day}
          onChange={handleDay}
          input={<BootstrapInput />}
        >
          {dayOptions}
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>        
        <NativeSelect
          labelid="customized-select-label-month"
          id="customized-select-label-month"
          value={month}
          onChange={handleMonth}
          input={<BootstrapInput />}
        >
          {monthOptions}
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>        
        <NativeSelect
          labelid="customized-select-label-year"
          id="customized-select-label-year"
          value={year}
          onChange={handleYear}
          input={<BootstrapInput />}
        >
          {yearOptions}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
