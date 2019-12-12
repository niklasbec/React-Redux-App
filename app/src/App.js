import React, {useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { increment, getKanyeWisdom } from './state/actionCreators'
import kanye1 from './images/kanye1.png'
import kanye2 from './images/kanye2.png'

const Button = styled.a`

  display: inline-block;
  border-radius: 3px;
  padding: 0.8rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: black;
  color: white;
  border: 2px solid white;
  cursor: pointer;
`


function App({increment, count, getKanyeWisdom, wisdom}) {

  useEffect(() => {
    getKanyeWisdom()
  }, [])

  return (
    <div className="App">
      <div className='header-block'>
      <h2>Kanye Wisdom</h2>
      <img className='kanye-img' src={kanye1} width='200px'/>
      </div>
      <div className='kanye-quote'>
      <p className='wisdom'>{wisdom}</p>
      </div>
      <Button onClick={getKanyeWisdom}>Kanye, tell me more!</Button>
      <img className='kanye-img2' src={kanye2} width='200px'/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    wisdom: state.wisdom
  };
}
export default connect(
  mapStateToProps, 
  { increment, getKanyeWisdom } 
)(App);


