import { Navigate } from "react-router";
import { Link } from "react-router-dom";
function Dashboard({ SignedIn }) {
  return (
    <>
      {!SignedIn ? (
        <Navigate to="/admin-panelN3553/login/" />
      ) : (
        <div>
          <ul>
            <li>
              <Link to="/admin-panelN3553/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/admin-panelN3553/wine-memory">Wine Memory</Link>
            </li>
            <li>
              <Link to="/admin-panelN3553/news">news</Link>
            </li>
            <li>
              <Link>About-Us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Dashboard;
