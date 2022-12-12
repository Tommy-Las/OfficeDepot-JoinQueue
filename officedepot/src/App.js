import './assets/App.css';
import Home from "./components/Home";
import JoinQueueForm from "./components/JoinQueueForm";
import SuccessfulJoin from './components/SuccessfulJoin';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="join" element={<JoinQueueForm />} />
          <Route path="success" element={<SuccessfulJoin />} />
          {/* <Route path="*" element={<NoPage />} />  Create a not found page */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
