import React from 'react';
import {Card, Button} from 'react-bootstrap'

class Project extends React.Component {
    render(){
        return(
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.Name} </Card.Title>
    <Card.Text>
      {this.props.text}
    </Card.Text>
    <Button href={this.props.demo} target="_blank" rel="noopener noreferrer" variant="primary">Demo </Button>
    <Button href={this.props.github} target="_blank" rel="noopener noreferrer"> GitHub Link</Button>
  </Card.Body>
</Card>
        )
    }
}

export default Project;