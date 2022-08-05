import Navbar from "../components/Navbar";
import { getInvoices } from '../data/invoices-data';
import { Outlet, useSearchParams } from "react-router-dom";
import QueryNavLink from '../components/QueryNavLink'; // To retain filter(Replace Navlink)

const About = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: 75 }}>
        <h1>React Router Page</h1>
        <p>Sample on using filter and passing the props to the individual page that has been selected</p>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <div style={{ width: 400, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly" }}>
            <label name="search">Search : </label>
            <input
              name="search"
              value={searchParams.get("filter") || ""}
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
            />
          </div>

          <br />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <QueryNavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/about/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
            ))}
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default About;