import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext(); //initializes a react context object

/*
msg {
  from: 'user',
  msg: 'text',
  topic: 'topic' - to know which "channel" or topic the chat message is going to
}

**How the state should look like**
state {
  topic1: [
    {msg}, {msg}, {msg}
  ]
  topic2: []
  topic3: []
}
*/

const initialState = {
  general: [
    { from: 'kevin', msg: 'hello!' },
    { from: 'michael', msg: 'hello!' },
    { from: 'tim', msg: 'hello!' }
  ],
  random: [
    { from: 'jeff', msg: 'LOL' },
    { from: 'sunny', msg: 'LMAO' },
    { from: 'cheney', msg: 'no way!' }
  ]
};

function reducerFn(state, action) {
  //action is an object, that we pass in manually
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        //maintaining older message and be implicitly immutable and make an copy everytime - using spread operator
        ...state, //brings over the old state
        //overwrite a single key, which is whichever the topic the message is in
        //the destructuring pull the topic, and use it as a key in the object
        [topic]: [
          //overwrites the entire key on the state spread and defining it as this new object
          ...state[topic], //keeps the old message of the state
          //new message
          {
            from,
            msg
          }
        ]
      };
    default: {
      return state;
    }
  }
}

let socket; //initializes the socket, declared outside of the so that the socket doesnt get render everytimes the Store reloads

export default function Store(props) {
  //checks for socket
  if (!socket) {
    //if no socket
    socket = io(':3001'); //create a socket with the imported io function, set manually to port 3001
  }
  const reducerHook = React.useReducer(reducerFn, initialState); //takes two arguments, reducer function and initial state
  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
