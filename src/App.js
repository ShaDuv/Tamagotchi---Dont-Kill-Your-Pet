import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ButtonContainer from './Components/Buttons/ButtonContainer';
import StatContainer from './Components/Stats/StatContainer';
import Header from './Components/Header/Header'
import Display from './Components/Display/Display'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
          happiness: 50,
          fullness: 50,
          energy: 50
        }
    }

  handleSleep = () => {
    const updateEnergy = this.state.energy + 4;
    this.setState(
      {energy: updateEnergy}
    )
  }

  // happiness: 1,
  // fullness: -2,
  // energy: 4
  //   create a map of the array "this.state"
  //   get the numbers from buttonInfo.statMod.fullness.
  //   mathching key's value with the new number(based on button push).
  //   save new array(map) as this.state

  // handleFeed()
  //   create a map of the array "this.state"
  //   get the numbers from buttonInfo.statMod.fullness.
  //   mathching key's value with the new number(based on button push).
  //   save new array(map) as this.state

  // handlePlay()
  //   create a map of the array "this.state"
  //   get the numbers from buttonInfo.statMod.fullness.
  //   mathching key's value with the new number(based on button push).
  //   save new array(map) as this.state




  render() {
    return (
      <Container className='ourContainer frame'>
        <Row>
          <Col md={12} className='frame' >
            <Header className='header' />
          </Col>
        </Row>

        <Row>
          <Col md={8} className='frame'>
            <Display />
          </Col>

          <Col md={4} className='frame'>
            <StatContainer statInfo={this.state} />
          </Col>
        </Row>

        <Row>
          <Col md={12} className='frame'>
            <ButtonContainer onSleep={this.handleSleep} onFeed={this.handleFeed} onPlay={this.handlePlay}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
