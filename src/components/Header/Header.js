import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
           <Link to="/" className="Title">Customisable Quiz</Link>
        </div>
    )
}

export default Header 