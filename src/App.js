import './App.css';
import InfoBox from './Components/InfoBox/InfoBox';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Views/Dashboard/Dashboard';
import MapContainer from './Views/MapContainer/MapContainer';
import Nairobi from './data/Nairobi.json';
import { useEffect, useState } from 'react';
// import MultiAxe from './Components/MultiAxe';

function App() {



  const [totalMombassa, setTotalMonbassa] = useState(0);
  const [totalNairobiCentral, setTotalNairobiCentral] = useState(0);
  const [totalTestSensor3, setTotalTestSensor3] = useState(0);


  useEffect(() => {
    Nairobi.forEach((data) => {
      setTotalMonbassa(data.averageMombassa);
    });

    Nairobi.forEach((data) => {
      setTotalNairobiCentral(data.averageNairobiCentral);
    })
    Nairobi.forEach((data) => {
      setTotalTestSensor3(data.averageTestSensor3);
    })
  })
  return (
    <div className="app">
      <Navbar />
      <div className="app__stats">
        <InfoBox active title="Mombasa Road(Sensor 1)" total={totalMombassa} />
        <InfoBox active title="Nairobi central (Sensor 2)" total={totalNairobiCentral} />
        <InfoBox active title="Test Lopy (Sensor 3)" total={totalTestSensor3} />
      </div>
      <div className="app__container">
        <div className="app__left">
          <h1 style={{ fontSize: 20, fontWeight: "bold", color: "#843f09" }}>People counting solution based on smartphone Wi-fi Device</h1>
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
