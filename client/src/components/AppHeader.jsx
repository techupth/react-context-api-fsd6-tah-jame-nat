import { UserContext } from "../App";
import { useContext } from "react";
function AppHeader() {
  const { username } = useContext(UserContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {username}</h2>
    </div>
  );
}

export default AppHeader;
