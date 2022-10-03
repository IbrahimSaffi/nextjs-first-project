import { useRouter } from "next/router"

export default function MoviesPage({trailer,genres}) {
  let router = useRouter()
  let {movie} = router.query
  movie = JSON.parse(movie)
  return (
    <div>
      <img className='backdrop' src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
      <div className='poster-details' >
      <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />      
      <div className='movie-details' >
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className='genres' >
           {movie.genre_ids.map(ele=>{
            return <h1> {genres.find(gen=>gen["id"]===ele)["name"]}</h1>
          })} 
        </div>
        <button className='trailer'>
           <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target ="_blank">
          <p>Watch Trailer </p>
          <img className='play' src="../play.png" alt="" srcset="" />
          </a> 
          </button>
      </div>
      </div>
    </div>
  )
}
export async function getServerSideProps (context) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${JSON.parse(context.query.movie).id}/videos?api_key=${"66744fff52a2b0b6cdc47cb0be4ffe35"}`, {
    method: "GET"
})
 const videos = await res.json()
 let trailer = videos.results.find(video=>video.name.includes("Trailer"))
 const genResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${"66744fff52a2b0b6cdc47cb0be4ffe35"}`, {
  method: "GET"
})
const data = await genResponse.json()
console.log(data.genres)
 return{
  props:{
    trailer,genres:data.genres
  }
 }
}
