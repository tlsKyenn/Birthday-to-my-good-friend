import { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import '../Gift.css';


export default function Gift() {
    const [expanded, setExpanded] = useState(false);
    
    const toggleExpansion = () => {
        setExpanded(!expanded);
    }

    return (
        <Container
            className={'d-flex justify-content-center align-items-center circle-container'}
            onClick={toggleExpansion}
        >
            <div id='cir' className={`circle ${expanded ? 'expanded' : 'pulsing'}`}></div>
            <Card className={`w-50 absolute-center ${expanded ? 'display_block' : ''}`}>
                <Card.Body>
                    <Card.Title>Happy Birthday</Card.Title>
                    <Card.Text>Dear Maple.< br />
                    A year has passed! How does it feel? Do you want the gift I have prepared? It sounds creepy, maybe, but I do not know where to send the gift for years. Do reply after this message TQ<br/><br/> Hope life is good and yes this is the end of the message
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}