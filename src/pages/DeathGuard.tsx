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
      "Enemy Command": 4,
      "Movement": 5,
      "Enemy Movement": 6,
      "Psychic": 7,
      "Enemy Psychic": 8,
      "Shooting": 9,
      "Enemy Shooting": 10,
      "Shooting / Fight": 11,
      "Charge": 12,
      "Enemy Charge": 13,
      "Fight": 14,
      "Morale": 15,
      "Enemy Morale": 16
  };
  
  const sortedDGstrats = DGstrats.sort((a, b) => {
      const aPhase = phaseOrder[a.phase];
      const bPhase = phaseOrder[b.phase];
      return aPhase - bPhase;
  });

  const groupedStrats = sortedDGstrats.reduce((acc, curr) => {
    const { phase } = curr;
    if (!acc[phase]) {
      acc[phase] = [];
    }
    acc[phase].push(curr);
    return acc;
  }, {} as { [key: string]: typeof sortedDGstrats });

  return (
    <>
      <h1>Death Guard</h1>
      {Object.keys(groupedStrats).map((phase) => (
        <div key={phase}>
          <h2>{phase}</h2>
          <Row md={2} xs={1} lg={3} className="g-3">
            {groupedStrats[phase].map((item) => (
              <Col key={item.name}>
                <StratItem {...item} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
  }