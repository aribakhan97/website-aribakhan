import logo from './logo.svg';
import './App.css';
import ProjectContainer from './Containers/ProjectContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Jumbotron, Container, Image} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Ariba Khan</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="https://www.linkedin.com/in/ariba-khan/">LinkedIn</Nav.Link>
      <Nav.Link href="https://github.com/aribakhan97">Github</Nav.Link>
      <Nav.Link href="https://medium.com/@aribakhann97">Medium</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
      <Nav.Link href="mailto:akhan41@binghamton.edu">Contact</Nav.Link>
    </Nav>
  </Navbar>

  <Jumbotron>
  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQGLi5deSpcrpQ/profile-displayphoto-shrink_400_400/0/1607455654305?e=1616025600&v=beta&t=ssbXbLLN_LbT7vJ7UmWYB37WXaovmB-8zjqahOZKB4k" rounded />
  <Container>
    <h1> Full-Stack Software Engineer</h1>
    <p>
    I am a full stack software engineer looking to design technologies that can help mankind. I am experienced in Javascript, React, Ruby, SQL, HTML, and CSS. I love to build projects that incorporate my background in biology and healthcare. My experiences have equipped me with strong social skills, quick problem solving abilities, ambitious goals, and a very focused work ethic.  
    </p>
  </Container>
</Jumbotron>

    <ProjectContainer/>
    </div>
  );
}

export default App;
