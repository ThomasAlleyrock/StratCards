import { Col, Row } from "react-bootstrap"
import { StratItem } from "../components/StratItem"
import DGstrats from "../data/deathguard.json"

export function DeathGuard() {
    
    return ( 
        <>
            <h1>Death Guard</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {DGstrats.map(item => (
                    <Col key={item.name}>
                        <StratItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
