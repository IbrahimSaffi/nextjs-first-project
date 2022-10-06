import React from "react"
import MovieCard from "./MovieCard"
interface Props {
   movies:any
}
export default function Container(props:Props) {
    return (
        <div className='flex flex-row flex-wrap justify-around gap-2 p-10 '>
             {props.movies.results.map((ele:object,i:number) =><MovieCard movieDetail = {ele} key={ele["title"]} poster={ele["poster_path"]} title={ele["title"]} desc={ele["overview"]} id={i} />
            
            )} 

        </div>
    )
}
// handleClick={props.handleClick} 