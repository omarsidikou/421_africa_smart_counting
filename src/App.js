import './App.css';
import InfoBox from './Components/InfoBox/InfoBox';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Views/Dashboard/Dashboard';
import MapContainer from './Views/MapContainer/MapContainer';
// import MultiAxe from './Components/MultiAxe';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__stats">
        <InfoBox active title="Pourcentage de Polution" total={2000} />
        <InfoBox active title="Pourcentage de Polution" total={2000} />
        <InfoBox active title="Pourcentage de Polution" total={2000} />
      </div>
      <div className="app__container">
        <div className="app__left">
          <h1 style={{ fontSize: 17 }}>A Lorem ipsum dolor sit.</h1>
          <MapContainer />
        </div>
        <div className="app__right">
          <Dashboard />
        </div>
      </div>

    </div>
  );
}

export default App;
