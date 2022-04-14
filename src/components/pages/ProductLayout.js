import { NavLink, Outlet } from "react-router-dom";

const ProductLayout = () => {
  
    return (
        <>
        <h1>welcome to ProductLayout</h1>
        <NavLink to='productdetail' >ProductDetail</NavLink>
        <Outlet/>
        </>
    )
}
export default ProductLayout;