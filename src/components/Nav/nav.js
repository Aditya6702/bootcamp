import './nav.css'


const Nav =() =>{
    return(<section>
        <div className="nav_left">
            <img className='logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></img>
            <div className="nav-link">
                <a href='#'>Home</a>
                <a href='#'>Tv Shows</a>
                <a href='#'>Movies</a>
                <a href='#'>New & popular</a>
                <a href='#'>My List</a>
                <a href='#'>Browse by Language</a>
            </div>
        </div>
        <div className="nav_right">
            
        </div>
    </section>);
}
export default Nav;
