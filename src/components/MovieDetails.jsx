import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const MovieDetails = () => {
    const { id } = useParams();
    const [MovieDetails, setMovieDetails] = React.useState({})
    const [Bookings, setBookings] = React.useState([])
    const { isAuth } = React.useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate

    const getMovieDetails = async () => {
        try {
            let res = await fetch(`http://localhost:8080/movies/${id}`)
            let data = await res.json();
            console.log(data)
            setMovieDetails(data);
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        getMovieDetails();
        getBookings();
    }, [id])
    const homepage = () => {
        navigate("/")
    }

    const getBookings = async()=>{
        try {
            let res = await fetch(`http://localhost:8080/moviesBooked`)
            let data = await res.json();
            setBookings(data)
        } catch (error) {
            console.log(error)
        }
    }

    
    console.log(Bookings)
    return (
        <div>
            <div key={MovieDetails.id}>
                <h3>TITLE:{MovieDetails.title}</h3>
                <img src={MovieDetails.poster_path} />
                <p>ORIGINAL LANGUAGE:{MovieDetails.original_language}</p>
                <p>ORIGINAL TITLE:{MovieDetails.original_title}</p>
                <p>OVERVIEW:{MovieDetails.overview}</p>
                <p>POPULARITY:{MovieDetails.popularity}</p>
                <p>RELEASE DATE:{MovieDetails.release_date}</p>
                <p>VOTING AVERAGE:{MovieDetails.vote_average}</p>
                <p>VOTE COUNT:{MovieDetails.vote_cout}</p>
                <button>BOOK TICKETS</button>
                <button>Show Booking Details</button>
                <button onClick={() => ( homepage()) }>Go To Homepage</button>


            </div>
        </div>);
}

export default MovieDetails;
