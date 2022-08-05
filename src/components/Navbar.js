import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "React Router Dom Implementation", url: "/about" },
  { name: "Formik Sample", url: "/login" },
  { name: "Styled Components Sample", url: "/styled" },
]

const Navbar = () => {
  return (
    <div className="nav" style={{display: "flex", flexDirection: "row",alignItems:"center",  justifyContent: "space-evenly", width: "100%", marginBottom:10, padding:10, paddingTop:15, paddingBottom:15, backgroundColor:"#000"}}>
      {links.map((link, index) => (
        <NavLink 
          key={index} 
          to={link.url}
          className="navbar-link" 
          style={props => (props.isActive? {color: "blue"} : {color: "#fff", textDecoration: "none"})}>
            {link.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
