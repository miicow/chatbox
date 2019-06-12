import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flexbox: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
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

  const [textValue, setTextValue] = React.useState('');

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
            {[{ from: 'user', msg: 'hello' }].map((chat, i) => {
              return (
                <div className={classes.flexbox} key={i}>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography variant="p">{chat.msg}</Typography>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.flexbox}>
          <TextField
            label="Send a message"
            className={classes.chatBox}
            value={textValue}
            onChange={event => setTextValue(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ChatUI;
