import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'

export default function PetCard({el}) {
  const [adobtedText, setAdobtedText] = useState("Not Adobted");

  const changeText = () =>{
    if(adobtedText.toUpperCase() === 'ADOBTED' ){
      setAdobtedText('Not Adobted');
    }
    else {
      setAdobtedText('Adobted');
    }
  };
    return (
        <div className="PetCard">
            <Card style={{ width: '20rem' }} className="Card-body">
  <Card.Img variant="top" src={el.Img} />
  <Card.Body >
    <Card.Title><h2>Info card</h2></Card.Title>
    <Card.Text>
    <h4>Name:</h4>
    <h5>{el.Name} </h5>
    <h4>Race:</h4>
    <h5>{el.Race} </h5>
    <h4>Type:</h4>
    <h5>{el.Type}</h5>
    <h4>Location:</h4>
    <h5>{el.Location}</h5>
      
      <label className="adobted"><h4>Satus: {adobtedText} !</h4></label>

    </Card.Text>
    <Button variant="primary" onClick={changeText}>Adobt me!</Button>
  </Card.Body>
</Card>
        </div>
    );
}
