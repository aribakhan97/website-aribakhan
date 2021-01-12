import logo from './logo.svg';
import './App.css';
import ProjectContainer from './Containers/ProjectContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Jumbotron, Container, Image} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Ariba Khan </Navbar.Brand>
    <Nav className="mr-auto nav-bar-right">
      <Nav.Link href="https://www.linkedin.com/in/ariba-khan/" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
      <Nav.Link href="https://github.com/aribakhan97" target="_blank" rel="noopener noreferrer">Github</Nav.Link>
      <Nav.Link href="https://medium.com/@aribakhann97" target="_blank" rel="noopener noreferrer">Medium</Nav.Link>
      <Nav.Link href="https://drive.google.com/file/d/17MEM0bWGcecMZKjgDatjcxhu5rYn5Ja-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume </Nav.Link>
      <Nav.Link href="mailto:akhan41@binghamton.edu" target="_blank" rel="noopener noreferrer">Contact</Nav.Link>
    </Nav>
  </Navbar>
  <div className='lining'>
        <Jumbotron className = 'jumbo'>
        <Image className='profile-image' src="https://media-exp1.licdn.com/dms/image/C4E03AQGLi5deSpcrpQ/profile-displayphoto-shrink_400_400/0/1607455654305?e=1616025600&v=beta&t=ssbXbLLN_LbT7vJ7UmWYB37WXaovmB-8zjqahOZKB4k" rounded />

  <Container>
    <h1> Ariba Khan - Software Engineer</h1>
    <p>
    I am a full-stack software engineer looking to design technologies that can help mankind. I am experienced in Javascript, React, Ruby, SQL, HTML, and CSS. I love to build projects that incorporate my background in biology and healthcare. My experiences have equipped me with strong social skills, quick problem-solving abilities, ambitious goals, and a very focused work ethic.  
    </p>
  </Container>
</Jumbotron>

</div>
    <ProjectContainer/>
    </div>
  );
}

export default App;
