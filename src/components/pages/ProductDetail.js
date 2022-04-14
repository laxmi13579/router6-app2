import { useParams } from "react-router-dom";


const ProductDetail = () => {
    let {category} = useParams();
  
    return (
        <h1>welcome to ProductDetail - {category}</h1>
    )
}
export default ProductDetail;