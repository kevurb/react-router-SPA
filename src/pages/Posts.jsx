import "../assets/css/componentes/card.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../API/api"

const Post = ({url}) => {
    const [post, setPost]=useState ("")
    const {id}=useParams()

    const navigate = useNavigate({})

    useEffect(() => {

        buscar(`/posts/${id}`,setPost).catch(()=>{
            navigate("/non-found")
        })
    }) 
    
    return (
        <main className="container flex flex--ceneter">
            <articule className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </articule>
        </main>
    )
}
export default Post