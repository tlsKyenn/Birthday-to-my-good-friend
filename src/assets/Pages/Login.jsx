import{ useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = username.toLowerCase() === "maple";
        const isCorrectPassword = password === "Grownupchild";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("7777");
            navigate("/Gift");
        }
    }

    return (
        <Container className="container d-flex flex-column justify-content-center align-items-center" style={{height:'100vh'}}>
            <h1 className="row"> Enter your account</h1>
            <Form className="row">
                <Form.Group className="mb-3 row">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Your information is safe!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 row" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={login} style={{width:'max-content'}}>Login</Button>
            </Form>
        </Container>
    )
}