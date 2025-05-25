import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const Hero = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies to display.</div>; // Optional fallback UI
  }
const navigate = useNavigate();

   function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies.map((movie) => (
          <Paper key={movie.id}>
            <div className="movie-card-container">
              <div
                className="movie-card"
                style={{
                  "--img": `url(${
                    movie.backdrops[
                      Math.floor(Math.random() * movie.backdrops.length)
                    ]
                  })`,
                }}
              >
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt="" />
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                  <div className="movie-buttons-container">
                    <Link
                      to={`/Trailer/${movie.trailerLink.substring(
                        movie.trailerLink.length - 11
                      )}`}
                    >
                      <div className="play-button-icon-container">
                        <FontAwesomeIcon
                          className="play-button-icon"
                          icon={faCirclePlay}
                        />
                      </div>
                    </Link>

                    <div className="movie-review-button-container">
                      <Button
                        variant="info"
                        onClick={() => reviews(movie.imdbId)}
                      >
                        Reviews
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};
export default Hero;
