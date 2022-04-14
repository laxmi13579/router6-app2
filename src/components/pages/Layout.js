import { Outlet, NavLink } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <h1>router v6</h1>
        <ul>
            <li><NavLink to='/' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Home</NavLink></li>
            <li><NavLink to='/about' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>About</NavLink></li>
            <li><NavLink to='/contact' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Contact</NavLink></li>
            <li><NavLink to='/product' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Product</NavLink></li>
        </ul>
        <Outlet/>
        </> 
    )
}
export default Layout;