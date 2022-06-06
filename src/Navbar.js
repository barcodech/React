const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The website app</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '10px'
                }}>Create</a>
            </div>
        </nav>
     );
}
 
export default Navbar;