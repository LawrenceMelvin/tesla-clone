import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Feedback.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '70ch',
      },
    },
  }));
export default function FormControlLabelPlacement() {
    const classes = useStyles();
  return (
    <div className="feedBack">
      <div className="formHeading">
        <h1>Renult FeedBack Form</h1>
      </div>
        <div className="feedOne">
        <FormControl component="fieldset">
        <FormLabel component="legend">Website Experience</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Excellent"
            labelPlacement="top"
            />
            <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Good"
            labelPlacement="top"
            />
            <FormControlLabel
            value="bottom"
            control={<Radio color="primary" />}
            label="Average"
            labelPlacement="top"
            />
            <FormControlLabel value="end" control={<Radio color="primary" />} label="Bad" labelPlacement="top"/>
        </RadioGroup>
        </FormControl>
        </div>
        <div className="feedTwo">
        <FormControl component="fieldset">
        <FormLabel component="legend">Video Chat experience</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Excellent"
            labelPlacement="top"
            />
            <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Good"
            labelPlacement="top"
            />
            <FormControlLabel
            value="bottom"
            control={<Radio color="primary" />}
            label="Average"
            labelPlacement="top"
            />
            <FormControlLabel value="end" control={<Radio color="primary" />} label="Bad" labelPlacement="top"/>
        </RadioGroup>
        </FormControl>
        </div>
        <div className="feedThree">
        <FormControl component="fieldset">
        <FormLabel component="legend">3D Model</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Excellent"
            labelPlacement="top"
            />
            <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Good"
            labelPlacement="top"
            />
            <FormControlLabel
            value="bottom"
            control={<Radio color="primary" />}
            label="Average"
            labelPlacement="top"
            />
            <FormControlLabel value="end" control={<Radio color="primary" />} label="Bad" labelPlacement="top"/>
        </RadioGroup>
        </FormControl>
        </div>
        <div className="feedText">
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-static"
                label="Comments"
                multiline
                rows={3}
                variant="outlined"
            />
            </form>
        </div>
        <div className="feedText">
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-static"
                label="Any suggetion for improvement"
                multiline
                rows={3}
                variant="outlined"
            />
            </form>
        </div>
        <div className="submitBtn">
        <Link to='/teslaaccount'>
        <Button variant="contained" color="secondary">
            Submit
        </Button>
        </Link>
        </div>
    </div>
  );
}
