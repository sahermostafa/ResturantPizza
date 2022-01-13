import React from "react";
import {Card} from 'react-bootstrap';
import MultiplePizzas from "../../assets/pizza.jpeg";
import{Container} from 'react-bootstrap';
import "./Buttomhome.css";

function Buttomhome(){  
  return (
    <Container fluid>
      <div className="about">
       <div className="aboutTop" style={{background:`url(${MultiplePizzas})`,backgroundSize:`cover`,backgroundPosition:`center`,width:`100%`,height: `600px`,}}>
       </div>
      <div className="aboutBottom">
         <Card style={{width:`100%`,padding:`2rem`}}>
                <Card.Body>
                    <Card.Title className='heade'>
                    Who Are We
                    </Card.Title>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione architecto assumenda ducimus consequuntur doloribus rem, a excepturi.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione architecto assumenda ducimus consequuntur doloribus rem, a excepturi.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.

             </Card.Body>
            </Card>
      </div>
    </div>
    </Container>
  );
}
export default Buttomhome;