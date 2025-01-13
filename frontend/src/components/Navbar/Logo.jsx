import './Logo.css'
import { Link } from "react-router-dom"
export default function Logo () {
    return (
        <Link to='/'><a className="logo">PC Forge</a></Link>
    )
}