import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/" className="title">TaskTracker</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Sign Out</Link>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar