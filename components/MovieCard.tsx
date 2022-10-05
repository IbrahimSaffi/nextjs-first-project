import React from 'react'
import Link from 'next/link'
import styles from "../styles/Home.module.css"

interface Props {
  title: string;
  movieDetail:object,
  poster:string,
  desc:string,
  className:string
  id:number
}
function MovieCard(props:Props) {
  return (
    <Link href={{pathname:`/movie/${props.title.split(" ").join("-")}`,query:{movie:JSON.stringify(props.movieDetail)}}}>
      <div className={styles.item}  >
        <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="" />
        <div className={styles.temp_container}>
          <div className={styles.details}>
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