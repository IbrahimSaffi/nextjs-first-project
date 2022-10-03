import MovieCard from "./MovieCard"

export default function Container({movies}) {
    return (
        <div className="container">
             {movies.movies.results.map((ele,i) =><MovieCard movieDetail = {ele} className="item" key={ele["title"]} poster={ele["poster_path"]} title={ele["title"]} desc={ele["overview"]} id={i} />
            
            )} 

        </div>
    )
}
// handleClick={props.handleClick} 