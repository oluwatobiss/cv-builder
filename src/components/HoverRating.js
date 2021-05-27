import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Unskilled',
  1: 'Unskilled+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#ffffff',
  }
})(Rating);

function HoverRating(props) {
  const [value, setValue] = React.useState(props.defaultRating);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root} onDoubleClick={props.handleDoubleClick} onBlur={props.handleBlur}>
      <StyledRating
        name="hover-feedback"
        value={value}
        precision={0.5}
        icon="▰"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        readOnly={props.readOnly}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}

export default HoverRating;