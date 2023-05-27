import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Ejemplo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#products'>Productos</Nav.Link>
            <Nav.Link href='#services'>Servicios</Nav.Link>
            <Nav.Link href='#about'>Nosotros</Nav.Link>
            <Nav.Link href='#contact'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
