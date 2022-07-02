import React from "react";

const Bookings = ()=>{
    const [Bookings, setBookings] = React.useState([])

    const getBookings = async()=>{
        try {
            let res = await fetch(`http://localhost:8080/moviesBooked`)
            let data = await res.json();
            setBookings(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id)=> {
        try {
            let res = await fetch(`http://localhost:8080/moviesBooked/${id}`,{
                "method" : "DELETE"
            })
            let data = await res.json();
            // setBookings(data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getBookings();
    }, [])

    return (
        <>
        <div>
        {Bookings?.map((movie)=> (
            <div key = {movie.id}>
                <h4>MOVIE ID: {movie.movie_id}</h4>
                <h4>NAME: {movie.name}</h4>
                <h4>SEAT NO: {movie.seat}</h4>
                <button onClick={handleDelete(movie.id)}>Cancel Booking</button>
                
            </div>
        ))}
        </div>
        </>
    );
}

export default Bookings;
