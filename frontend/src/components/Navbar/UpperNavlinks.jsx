import './UpperNavlinks.css'
import './Navlinks.css'
export default function UpperNavlinks () {
    return (
        <div className='upper-nav-bar'>
        <ul className="nav justify-content-end">
            <li className='nav-item upper-nav-item'>
                <a className='nav-link upper-nav-link' href="#">Language</a>
                <a className='nav-link upper-nav-link' href="#">Sign In</a>
                <a className='nav-link upper-nav-link' href="#">Support</a>
                <a className='nav-link upper-nav-link' href="#">About</a>
            </li>
        </ul>
    </div>
    )
}