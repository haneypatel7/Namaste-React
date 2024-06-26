import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="header">        <nav className="navbar navbar-expand-lg navbar-light bg-">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SWIGGY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="a1" to={"/"}>Home</Link>
        </li>

        <li className="nav-item2">
          <Link className="a1" to={"/about"}>About Us</Link>
        </li>

        <li className="nav-item3">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>   
      </ul> 
    </div>
  </div>
</nav>   
</div>


    );};



export default Header;