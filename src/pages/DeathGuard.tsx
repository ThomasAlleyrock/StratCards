import { Col, Row } from "react-bootstrap"
import { StratItem } from "../components/StratItem"
import DGstrats from "../data/deathguard.json"

export function DeathGuard() {

    type PhasesOrder = {
        [key: string]: number
      }

    const phaseOrder: PhasesOrder = {
        "Before battle": 1,
        "Any": 2,
        "Command": 3,
        "Movement": 4,
        "Psychic": 5,
        "Shooting": 6,
        "Shooting / Fight": 7,
        "Charge": 8,
        "Fight": 9,
        "Morale": 10
    };
    
    const sortedDGstrats = DGstrats.sort((a, b) => {
        const aPhase = phaseOrder[a.phase];
        const bPhase = phaseOrder[b.phase];
        return aPhase - bPhase;
    });

    return ( 
        <>
        <h1>Death Guard</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {sortedDGstrats.map(item => (
            <Col key={item.name}>
              <StratItem {...item} />
            </Col>
          ))}
        </Row>
      </>
    )
}
