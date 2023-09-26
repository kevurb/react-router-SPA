import { useParams } from "react-router-dom";
import ListPost from "../components/ListPost";

const SubCategoria = () =>{


    const {subcategoria} = useParams ()
    console.log(subcategoria)
    return (
        <ListPost url={`/posts?subcategoria=${subcategoria}`}></ListPost>
    )
}
export default SubCategoria