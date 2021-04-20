import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
            <footer>
                <Card.Link href={`/MovieDescription/${movie.id}`}>
                    <Button variant="primary">Go Somewhere</Button>
                </Card.Link>
            </footer>
        </Card>
    );
}

export default MovieCard;
