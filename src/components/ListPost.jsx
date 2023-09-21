import "../assets/css/componentes/card.css"
import {buscar} from "../API/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const ListPost = ( {url} ) =>{
    const [posts, setposts] = useState([])

    useEffect (()=>{
        buscar(url, setposts)
    },[url])

    return (
        <section className="posts containers" >
            {
            posts.map( post => {
                const {id, title, metadescription, categoria } = post;
                return <Link to={`/posts/${id}`} className ={`post__card post-card--${categoria}`} key={id}>

                <article>
                    <h3 className="post-card__meta">{title}</h3>
                    <p className="post-card__meta">{metadescription}</p>
                </article>
                </Link>
            })
        }
        </section>
    )
}

export default ListPost