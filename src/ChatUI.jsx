import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flexbox: {
    display: 'flex'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  }
}));

const ChatUI = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Hello World
        </Typography>
        <Typography variant="h5" component="h5">
          This is a test for material-ui with react!
        </Typography>
        <div className={classes.flexbox}>
          <div className={classes.topicsWindow}>
            <List>
              {['topic'].map(topic => {
                return (
                  <ListItem key={topic} button>
                    <ListItemText primary={topic} />
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {[{ from: 'user', msg: 'hello' }].map(chat => {
              return (
                <div className={classes.flex}>
                  <Chip label="Basic Chip" className={classes.chip} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.flexbox} />
      </Paper>
    </div>
  );
};

export default ChatUI;
