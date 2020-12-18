import React from 'react'
import Project from '../Components/Project'
import {Container, Row, Col} from 'react-bootstrap'
import Data from '../Data/Data'


class ProjectContainer extends React.Component{
    render() {
        let projectRows = []
        if(Data.length > 0){
            projectRows = Data.reduce((rows, key, index) => {
                return(index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;},[]);
            
        }
        console.log(projectRows)
        return(
        <Container>
            {projectRows.map(r =>  {
                    return(
                        <Row>
                            {r.map(c =>{
                                return(
                                    <Col>
                                    <Project {...c} />
                                    </Col>
                                )
                            })}
                        </Row> 
                    )
            })}

        </Container>

)
    }
}

export default ProjectContainer;

