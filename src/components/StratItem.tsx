import { useState } from "react"
import { Button, Card } from "react-bootstrap"

type StratItemProps = {
    name: string
    price: string
    phase: string
    category: string
    effectTime: string
    targetOwn: string
    targetEnemy: string
    textShort: string
    textLong: string
}

export function StratItem({name, price, phase, category, effectTime, targetOwn, targetEnemy, textShort, textLong}: StratItemProps) {

    const [showLongText, setShowLongText] = useState(false);

    const [style, setStyle] = useState({
        backgroundColor: "#848a66", 
        height: "300px"
    })
    
    const handleMouseEnter = () => {
        setShowLongText(true);
        setStyle({ ...style, height: "auto"})
    };
    
    const handleMouseLeave = () => {
        setShowLongText(false);
    };

    const colorPicker = () => {
        if (category === "Command") {
            
        } 
    };

    return <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
        <Card.Header className="">
        <small className="">Phase: {phase}</small>
        <small className="text-muted ms-3">{category}</small>
        <Card.Title className="fs-2">{name}</Card.Title>
        <Card.Subtitle className="mb-2">{price}</Card.Subtitle>
      </Card.Header>
      <Card.Body className="">
        <div className="mt-auto mb-2">
            {showLongText ? <Card.Text>{textLong}</Card.Text> : <Card.Text>{textShort}</Card.Text>}
        </div>
        {/*
        <div className="mt-auto">
            {shortOrLong === false ? <Button variant="dark" className="w-100">Expand</Button> : <Button variant="secondary" className="w-100">Simplify</Button>}
        </div> */}

      </Card.Body>
      <Card.Footer>
        <small className="">Until: {effectTime}</small>
        <br />
        <small className="">Target: {targetOwn} / {targetEnemy}</small>
      </Card.Footer>
    </Card>
}