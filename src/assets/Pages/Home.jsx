import { Container, Row } from "react-bootstrap";
import '../App.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login', {replace:true});
    }
    return (
        <Container className="align-content-center align-items-center" style={{height:'100vh'}}>
            <Row className="my-3">
                <h1 className="col text-center jump">Welcome</h1>
            </Row>
            <Row className="my-3 d-flex justify-content-center">
                <button onClick={handleClick} className=" col text-center invited rounded" style={{maxWidth:'max-content', backgroundColor:'transparent'}}>Are you invited?</button>
            </Row>
        </Container>
    );
}
