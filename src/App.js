import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPage from './screens/FirstPage';
import { SecondPage } from './screens/SecondPage';
import {ThirdPage} from './screens/ThirdPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;