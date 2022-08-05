import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginBottom:10}}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Register Formik Sample</Link>
        <Link to="/styled">Styled Component Sample</Link>
    </div>
  );
}

export default Navbar;
