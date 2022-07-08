import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

export default function Headers()  {
    return (
        <header>
            <Navbar bg="danger">
                <Container>
                    <Navbar.Brand > React Test App</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
}
