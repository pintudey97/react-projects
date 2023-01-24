import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Details = () => {

    const [movie, setMovie] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const moviedetailsAPI_URL = `https://api.themoviedb.org/3/movie/5?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    // const {id} = useParams();
    
    const movieDetails=()=>{
        axios.get(moviedetailsAPI_URL)
        .then(function (response) {
            setMovie(response.data);
        })
        .catch(function (error) {
            setErrorMsg(error.message);
        })

    }

    useEffect(()=>{
        movieDetails();
    },[0]);

    // console.log(movie , 'm');
    console.log(errorMsg, 'errormsg');
    // console.log(movie.original_title, 'title');

    // movie.spoken_languages.map((number) => 
    //     console.log(number.english_name, 'lang')
    // )


    return (
        <React.Fragment>
            <section className="videodetails-banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 m-0">
                    <div className="video-players">
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="c"  />
                    </div>
                </div>  
                <div className="col-12">
                    <div className="plr-30">
                        <div className="single-movie-info">
                            <h4 className="heading-title">{movie.original_title}</h4>
                            <div className="single-meta-holder">
                                <ul>
                                    <li className="sen-rating">Movie ID : {movie.imdb_id}</li>
                                    <li>
                                        <i className="fas fa-eye">
                                        </i>
                                        <span>Popularity : {movie.popularity}</span>
                                    </li>
                                </ul>
                            </div>
                            <p>{movie.overview}</p>
                            <Row>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="after-excerpt">
                                <div className="extra-data">
                                    <ul>
                                        <li>
                                            <span>Language :</span>
                                            <span>
                                            {movie ? movie.spoken_languages.map((item, key) => 
                                                item.name + key.key
                                            ) : " "}
                                            </span>
                                        </li>
                                        <li>
                                            <span>Subtitles :</span>
                                            {movie ? movie.spoken_languages.map((item) => 
                                                item.english_name
                                            ): " "}
                                        </li>
                                        <li>
                                            <span>Audio Languages :</span>
                                            {movie ? movie.spoken_languages.map((item) => 
                                                item.name
                                            ): " "}
                                        </li>
                                        <li><span>Genre :</span>
                                            <span>
                                                {movie ? movie.genres.map((item) => 
                                                    `${item.name}, `
                                                ) : " "}
                                            </span>
                                        </li>
                                        <li><span>Run Time :</span>
                                            <span>{movie.runtime}</span>
                                        </li>
                                        <li>
                                            <span>Release Date :</span>
                                            <span>{movie ? movie.release_date : " "}</span>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                    11
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                    22
                                </Col>
                            </Row>
                            
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    </section>
    
    <div style={{marginBottom:'50px'}}></div>
    
        </React.Fragment>
    );
}
 
export default Details;