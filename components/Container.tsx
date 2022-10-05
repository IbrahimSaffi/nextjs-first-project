import React from "react"
import styles from "../styles/Home.module.css"
import MovieCard from "./MovieCard"
interface Props {
   movies:any
}
export default function Container(props:Props) {
    return (
        <div className={styles.container}>
             {props.movies.results.map((ele:object,i:number) =><MovieCard className={styles.item} movieDetail = {ele} key={ele["title"]} poster={ele["poster_path"]} title={ele["title"]} desc={ele["overview"]} id={i} />
            
            )} 

        </div>
    )
}
// handleClick={props.handleClick} 