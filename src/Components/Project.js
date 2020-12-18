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
    <Button onClick ={()=> this.props.demo} variant="primary">Demo </Button>
    <Button onClick ={() => this.props.github}> GitHub Link</Button>
  </Card.Body>
</Card>
        )
    }
}

export default Project;