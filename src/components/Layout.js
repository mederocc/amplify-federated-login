import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ signOut }) => {
  return (
    <div className="main-container">
      <Header signOut={signOut} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
