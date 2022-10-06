import React from 'react'
import Link from 'next/link'
import "../styles/Home.module.css"

interface Props {
  title: string;
  movieDetail:object,
  poster:string,
  desc:string,
  className?:string
  id:number
}
function MovieCard(props:Props) {
  return (
    <Link href={{pathname:`/movie/${props.title.split(" ").join("-")}`,query:{movie:JSON.stringify(props.movieDetail)}}}>
      <div className="relative text-white w-17pt cursor-pointer mb-2"  >
        <img className=" border-none border-4 h-[300px] w-full rounded-10p " src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="" />
        <div className=" group absolute h-full w-full bg-transparent z-1 top-0">
          <div style={{display:"-webkit-box", hyphens: "manual",WebkitBoxOrient: "vertical",WebkitLineClamp: "6"}} className="group-hover:h-1/2 group-hover:w-full absolute z-1 bottom-0 px-10p bg-transparent-black h-0 w-full overflow-hidden rounded-bl-10p rounded-br-10p transition-height duration-1000 ">
            <h3 className=' truncate w-full font-bold my-3'>{props.title}</h3>
            <p className=" h-58pt leading-none break-all overflow-ellipsis overflow-hidden " >{props.desc}</p>
          </div>
        </div>
      </div>
       </Link>
  )
}
export default MovieCard
// onClick={()=>props.handleClick(props.movieDetail)}