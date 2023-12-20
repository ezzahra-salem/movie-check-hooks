import React from "react";
import Card from "react-bootstrap/Card";

const Movie = ({ movies }) => {
  return (
    //movies card
    <div>
        <Card style={{width: '20em'}}>
          <Card.Body>
            <Card.Img src={movies.Imag}></Card.Img>
            <Card.Text>
            <h4>{movies.name}</h4>
            <h4>{movies.rate}</h4>
            <h4>{movies.Des}</h4>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
  );
};

export default Movie;
