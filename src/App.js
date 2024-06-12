import { DatePicker } from "antd";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="text-[red] text-[50px] font-bold">
        <p>HELLO WORLD</p>
        <DatePicker />
      </div>
      <Routes>
      {routes.map((route, index) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))} 
      </Routes>
    </div>
  );
}

export default App;
