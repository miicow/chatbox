import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  }
}));

const ChatUI = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Hello World
        </Typography>
        <Typography component="p">
          This is a test for material-ui with react!
        </Typography>
      </Paper>
    </div>
  );
};

export default ChatUI;
