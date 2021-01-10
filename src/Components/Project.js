import React from 'react';
import {Card, Button, Badge} from 'react-bootstrap'
import './project.css'

class Project extends React.Component {
    render(){
        return(
            <Card style={{ height: '550px' ,width: '30rem', margin:'25px' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.Name} </Card.Title>
    <Card.Text>
      {this.props.text}
    </Card.Text>
    <Button href={this.props.demo} target="_blank" rel="noopener noreferrer" variant="light"> <img src="https://img.icons8.com/metro/26/000000/youtube.png" alt='Demo' /> </Button>
    <Button href={this.props.github} target="_blank" rel="noopener noreferrer" variant="light"> <img src="https://img.icons8.com/material-sharp/24/000000/github.png" alt='GitHub'/></Button>
    <br>
    </br>
    <h4>
    {this.props.technologies.map(t => {
      return(
        <Badge className='badge-color' pill>
          {t}
        </Badge>
      )
    })}
    </h4>
    
  </Card.Body>
</Card>
        )
    }
}

export default Project;