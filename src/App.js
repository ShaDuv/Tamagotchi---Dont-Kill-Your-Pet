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

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateStatsByTime(),
    3000
  )
}

updateStatsByTime = () => {
  const updateEnergy = this.state.energy -1;
  const updateHappiness = this.state.happiness -1;
  const updateFullness = this.state.fullness -1;
  this.setState(
    {energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness
    }
  )
}

handleSleep = () => {
  const updateEnergy = this.state.energy +4;
  const updateHappiness = this.state.happiness +1;
  const updateFullness = this.state.fullness -2;
  this.setState(
    {energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness
    }
  )
}

handleFeed = () => {
  const updateEnergy = this.state.energy +2;
  const updateHappiness = this.state.happiness +2;
  const updateFullness = this.state.fullness +4;
  this.setState(
    {energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness
    }
  )
}

handlePlay = () => {
  const updateEnergy = this.state.energy -3;
  const updateHappiness = this.state.happiness +4;
  const updateFullness = this.state.fullness -2;
  this.setState(
    {energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness
    }
  )
}

render() {
  return (
    <Container className='ourContainer frame'>
    <Row>
    <Col md={12} className='frame top' >
    <Header className='header' />
    </Col>
    </Row>

    <Row>
    <Col md={8} className='frame left'>
    <Display />
    </Col>

    <Col md={4} className='frame right'>
    <StatContainer statInfo={this.state} />
    </Col>
    </Row>

    <Row>
    <Col md={12} className='frame bottom'>
    <ButtonContainer onSleep={this.handleSleep} onFeed={this.handleFeed} onPlay={this.handlePlay}/>
    </Col>
    </Row>
    </Container>
  );
}
}

export default App;
