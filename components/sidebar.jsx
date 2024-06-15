import { Outlet, Link } from "react-router-dom"
import SearchButton from "./SearchButton"
import NewsButton from './newsButton'
export default function Sidebar() {
    
    return (
        <aside id="side-menu">
            <h1>WEB APP</h1>
            <ul>
                <li>Login</li>
                <li><Link to="/">Home</Link></li>
                <li><SearchButton /></li>
                <li><Link to="PersonalEvents">I Tuoi Eventi</Link></li>
                <li><Link to="Settings">Impostazioni</Link></li>
                <li><NewsButton /></li>
            </ul>
        </aside>
    )
}
