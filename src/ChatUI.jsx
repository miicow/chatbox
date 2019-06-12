import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { CTX } from './Store.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2),
    textAlign: 'center'
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

  //CTX store
  const { allChats, sendChatAction, user } = React.useContext(CTX);
  const topics = Object.keys(allChats); //retrieves the topic keys in allChats

  //local state
  const [currentTopic, setCurrentTopic] = useState(topics[0]); // useState hook for current topic, default to first topic
  const [textValue, setTextValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat Box
        </Typography>
        <Typography variant="h5" component="h5">
          {currentTopic}
        </Typography>
        <div className={classes.flexbox}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map(topic => {
                return (
                  <ListItem
                    onClick={event => setCurrentTopic(event.target.innerText)}
                    key={topic}
                    button
                  >
                    <ListItemText primary={topic} />
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChats[currentTopic].map((chat, i) => {
              return (
                <div className={classes.flexbox} key={i}>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography variant="body1" gutterBottom>
                    {chat.msg}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.flexbox}>
          {/* <TextField
            label="Username"
            className={classes.chatBox}
            value={usernameValue}
            onChange={event => setUsernameValue(event.target.value)}
          /> */}
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
            onClick={() => {
              sendChatAction({
                from: user,
                msg: textValue,
                topic: currentTopic
              });
              setTextValue('');
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ChatUI;
