import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "React Router Dom Implementation", url: "/about" },
  { name: "Formik Sample", url: "/login" },
  { name: "Styled Components Sample", url: "/styled" },
]

const Navbar = () => {

  const toggleNav = () => {
    let links = document.querySelectorAll(".navItem")

    links.forEach(element => {
      if (element.classList.contains("links")) {
        element.classList.remove("links")
      }
      else {
        element.classList.add("links")
      }
    });
  }

  return (
    <div className="navStyle" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "100%", marginBottom: 10, padding: 10, paddingTop: 15, paddingBottom: 15, backgroundColor: "#000", position: "absolute", zIndex: 100 }}>
      <div className="burgerNav">
        <div style={{paddingRight: 25}}>
          <h2 style={{ color: "white" }}>React References</h2>
        </div>

        <svg onClick={toggleNav} style={{ width: 48 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.url}
          className={`links navItem`}
          style={props => (props.isActive ? { color: "blue" } : { color: "#fff", textDecoration: "none" })}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
