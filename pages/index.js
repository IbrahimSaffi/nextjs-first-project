import Head from 'next/head'
import Container from '../components/Container'
let apiKey = "66744fff52a2b0b6cdc47cb0be4ffe35"

export default function Home(movies) {
  return (
    <div>
      <Head>
        <title>Week in Movies</title>
        <meta />
      </Head>
    <Container movies={movies}/>   
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`, {
    method: "GET"
})
 const movies = await res.json()
 return{
  props:{
    movies
  }
 }
}