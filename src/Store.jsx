import React from 'react';

const CTX = React.createContext(); //initializes a react context object

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

export default function Store(props) {
  const reducerHook = React.useReducer(reducerFn, initialState); //takes two arguments, reducer function and initial state
  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
