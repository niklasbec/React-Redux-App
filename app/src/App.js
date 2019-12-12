import React from 'react';
import './App.css';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { increment } from './state/actionCreators'

const Button = styled.a`

  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: black;
  color: white;
  border: 2px solid white;
  cursor: pointer;
`


function App({increment, count}) {
  return (
    <div className="App">
      <h2>Kanye says:</h2>
      <div className='kanye-quote'>
      <p>Quote here! {count}</p>
      </div>
      <button onClick={increment}>Hi</button>
      <Button onClick={increment}>Kanye, tell me more!</Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
export default connect(
  mapStateToProps, 
  { increment } 
)(App);


