import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../redux/action";

const Home = ()=>{
    const { movies } = useSelector((state)=>state)
    const dispatch = useDispatch()

    React.useEffect(()=> {
        dispatch(getMovies())
    },[])
    return (
        <>
        <div>
        {movies?.map((movie)=> (
            <div key = {movie.id}>
                <h3>{movie.title}</h3>
                <img src={movie.poster_path} />
                <Link to={`/movies/${movie.id}`}>More...</Link>
            </div>
        ))}
        </div>
        </>
    );
}

export default Home;
