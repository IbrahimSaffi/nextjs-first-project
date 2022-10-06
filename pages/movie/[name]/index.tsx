import React from "react"
import { NextRouter, useRouter } from "next/router"
import { GetServerSideProps } from "next"
export default function MoviesPage({trailer,genres}) {
  let router:NextRouter = useRouter()
  let {movie}:any  = router.query
  movie = JSON.parse(movie)
  return (
    <div>
      <img className="h-screen w-screen brightness-50 z-0" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
      <div className=" absolute top-1/4 left-1/4 flex text-white flex-row items-center gap-12" >
      <img className="w-1/4 h-30pt border-black border-4 rounded-10p " src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />      
      <div className=" w-s-1/5 my-5 " >
        <h1 className=" text-3xl font-bold" >{movie.title}</h1>
        <p className=" my-2">{movie.overview}</p>
        <div className="flex gap-2" >
           {movie.genre_ids.map((ele :string)=>{
            return <h3 className="text-black rounded-10p bg-white p-10p"> {genres.find((gen:any)=>gen["id"]===ele)["name"]}</h3>
          })} 
        </div>
        <div className="flex items-center justify-start gap-1" >
        <button className=" w-s-15 h-s-6 border-none rounded-15p">
           <a className="text-black no-underline flex flex-row justify-center items-center text-sm gap-3 bg-white rounded-lg font-bold h-11 mt-5" href={`https://www.youtube.com/watch?v=${trailer.key}`} target ="_blank">
          <p>Watch Trailer </p>
          <img className=" h-3/4" src="../play.png" alt=""  />
          </a> 
          </button>
          {/* <button className="text-black flex flex-row justify-center items-center text-sm gap-3 bg-white font-bold h-11 my-3 w-s-15 border-none rounded-lg" >Add to Watchlist</button> */}

        </div>
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