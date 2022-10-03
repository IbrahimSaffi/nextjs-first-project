import React from 'react'
import Link from 'next/link'
function MovieCard(props) {
  return (
    <Link href={{pathname:`/movie/${props.title.split(" ").join("-")}`,query:{movie:JSON.stringify(props.movieDetail)}}}>
      <div className="item"  >
        <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="" />
        <div className="temp-container">
          <div className="details">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
       </Link>
  )
}
export default MovieCard
// onClick={()=>props.handleClick(props.movieDetail)}