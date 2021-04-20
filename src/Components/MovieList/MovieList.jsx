import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList(props) {
    return (
        <div className="movieList">
            {props.movies
                .filter(
                    (movie) =>
                        movie.rate >= props.searchRate &&
                        movie.title
                            .toLowerCase()
                            .includes(props.searchTitle.toLowerCase())

                    // movie.title.includes(props.searchTitle)
                )
                .map((element) => (
                    <MovieCard movie={element} testvalue="nothing" />
                ))}
        </div>
    );
}

export default MovieList;
