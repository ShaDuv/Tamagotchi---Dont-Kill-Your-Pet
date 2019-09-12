import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ButtonContainer from './Components/Buttons/ButtonContainer';
import StatContainer from './Components/Stats/StatContainer';
import Header from './Components/Header/Header';
import Display from './Components/Display/Display';
import bunnyBooty from './img/bunnyBooty.png';
import bunnySleep from './img/bunnySleep.png';
import bunnyEat from './img/bunnyEat.png';
import bunnyPlay from './img/bunnyPlay.png';
import bunnyIdle from './img/bunnyIdle.png';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      happiness: 50,
      fullness: 50,
      energy: 50,
      display: bunnyBooty
    }
  }

  componentDidMount() {
    let updateStats = setInterval(() =>
    this.updateStatsByTime(),
    3000
  );
}

updateStatsByTime = () => {
  const updateEnergy = this.state.energy -(Math.floor(Math.random() * 4));
  const updateHappiness = this.state.happiness -(Math.floor(Math.random() * 4));
  const updateFullness = this.state.fullness -(Math.floor(Math.random() * 4));
  this.setState(
    {
      energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness
    }
  );
}

handleSleep = () => {
  const updateEnergy = this.state.energy +4;
  const updateHappiness = this.state.happiness +1;
  const updateFullness = this.state.fullness -2;
  this.setState(
    {
      energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness,
      display: bunnySleep
    }
  );
}

handleFeed = () => {
  const updateEnergy = this.state.energy +2;
  const updateHappiness = this.state.happiness +2;
  const updateFullness = this.state.fullness +4;
  this.setState(
    {
      energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness,
      display: bunnyEat
    }
  );
}

handlePlay = () => {
  const updateEnergy = this.state.energy -3;
  const updateHappiness = this.state.happiness +4;
  const updateFullness = this.state.fullness -2;
  this.setState(
    {
      energy: updateEnergy,
      happiness: updateHappiness,
      fullness: updateFullness,
      display: bunnyPlay
    }
  );
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
    <Display display={this.state.display} />
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
