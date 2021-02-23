import React from 'react';
import './App.css'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import StarRateIcon from '@material-ui/icons/StarRate';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      
      
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
       
        
        
        
      />
      <div className="topside">
      <StarRateIcon className="star"/><StarRateIcon className="star"/><StarRateIcon className="star"/><StarRateIcon className="star"/><StarRateIcon className="star"/>
      </div>
    
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
       
      />
      <div className="topside">
      <StarRateIcon className="star"/><StarRateIcon className="star"/><StarRateIcon className="star"/>
      </div>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
       
      />
      <div className="topside1">
      <StarRateIcon className="star"/><StarRateIcon className="star"/><StarRateIcon className="star"/>
      </div>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
       
      />
      <div className="topside">
      <StarRateIcon className="star"/><StarRateIcon className="star"/>
      </div>
      
    </FormGroup>
    
  );
}
