import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WorldCupLanding from './components/WorldCupLanding';
import WorldCupPredictForm from './components/WorldCupPredictForm';
import WorldCupPredict from './components/WorldCupPredict';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                        element={<Home />} />
        <Route path="/world-cup-predict"       element={<WorldCupLanding />} />
        <Route path="/world-cup-predict/form"  element={<WorldCupPredictForm />} />
        <Route path="/world-cup-predict/result" element={<WorldCupPredict />} />
      </Routes>
    </BrowserRouter>
  );
}
