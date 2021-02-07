import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'データの取得に失敗しました',
        post: {},
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [num, setNum] = useState(Math.floor(Math.random() * 11))
  const onClick = () => setNum(Math.floor(Math.random() * 11));

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${num}`)
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [num]);

  return (
    <div className="App">
      <h1>{state.loading ? 'Loading...' : state.post.title}</h1>
      <p>{state.loading ? 'Loading...' : state.post.body}</p>
      <h2>{state.error ? state.error : null}</h2>
      <p>{num}</p>
      <button onClick={onClick}>ガチャガチャ</button>
    </div>
  );
}

export default App;
