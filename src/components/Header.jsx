import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Blog</a>
            <Link to= "/" className="navbar-brand">My Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Header;