import Registration from "./pages/registration/Registration";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
