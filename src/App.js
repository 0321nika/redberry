import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPage from './screens/FirstPage';
import { SecondPage } from './screens/SecondPage';
import { ThirdPage } from './screens/ThirdPage'
import FourthPage from "./screens/FourthPage";
import FifthPage from "./screens/FifthPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage/>}/>
        <Route path="/FourthPage" element={<FourthPage/>} />
        <Route path="/FifthPage" element={<FifthPage/>} />
      </Routes>
    </Router>
  );
}

export default App;