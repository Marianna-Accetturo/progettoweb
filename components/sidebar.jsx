export default function Sidebar() {
    
    return (
        <aside id="side-menu">
            <h1>WEB APP</h1>
            <ul>
                <li>Area Personale</li>
                <li>Home</li>
                <li><button>Cerca</button>
                    <div><form id="search-bar">
                            <input type="text" id="search-input" hidden/>
                        </form>
                    </div>
                </li>
                <li>I Tuoi Eventi</li>
                <li>Impostazioni</li>
                <li>Novità</li>
            </ul>
        </aside>
    )
}
