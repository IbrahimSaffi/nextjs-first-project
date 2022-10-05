import React from "react"
import { NextRouter, useRouter } from "next/router"
import { GetServerSideProps } from "next"
import styles from "../../../styles/Home.module.css"
export default function MoviesPage({trailer,genres}) {
  let router:NextRouter = useRouter()
  let {movie}:any  = router.query
  movie = JSON.parse(movie)
  return (
    <div>
      <img className={styles.backdrop} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
      <div className={styles.poster_details} >
      <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />      
      <div className={styles.movie_details} >
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className={styles.genres} >
           {movie.genre_ids.map((ele :string)=>{
            return <h3> {genres.find((gen:any)=>gen["id"]===ele)["name"]}</h3>
          })} 
        </div>
        <button className={styles.trailer}>
           <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target ="_blank">
          <p>Watch Trailer </p>
          <img className={styles.play} src="../play.png" alt=""  />
          </a> 
          </button>
      </div>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${JSON.parse(context.query.movie).id}/videos?api_key=${"66744fff52a2b0b6cdc47cb0be4ffe35"}`, {
    method: "GET"
})
 const videos = await res.json()
 let trailer = videos.results.find((video: any)=>video.name.includes("Trailer"))
 const genResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${"66744fff52a2b0b6cdc47cb0be4ffe35"}`, {
  method: "GET"
})
const data = await genResponse.json()
console.log(data.genres)
 return{
  props:{
    trailer,genres:data.genres
  }
 }}