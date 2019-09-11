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
      statInfo: [
        {
          id: 1,
          type: 'Happiness',
          level: 50
        },

        {
          id: 2,
          type: 'Hunger',
          level: 50
        },

        {
          id: 3,
          type: 'Enery',
          level: 50
        }
      ]
    }
  }


  // handleUpdateStats ()
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
            <StatContainer statInfo={this.state.statInfo} />
          </Col>
        </Row>

        <Row>
          <Col md={12} className='frame'>
            <ButtonContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
