import { Col, Row } from "react-bootstrap"
import DGstrats from "../data/deathguard.json"

export function DeathGuard() {
    return ( 
        <>
            <h1>Death Guard</h1>
            <Row>
                {DGstrats.map(item => (
                    <Col>{JSON.stringify(item)}</Col>
                ))}
            </Row>
        </>
    )
}