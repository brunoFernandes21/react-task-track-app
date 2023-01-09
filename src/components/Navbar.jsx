import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title">TaskTracker</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Task</Link>
      </div>
    </nav>
  )
}

export default Navbar