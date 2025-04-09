import "./App.css";
import cars from "./practice"; // Import the cars array
import Table from "./Table";
import Table3 from "./Table3";
// import Table2 from "./Table2";
function App() {
  let [honda, testla] = cars;
  return (
    <>
    <h1>Car Details</h1><br />
    
      <Table
        hondaModel={honda.model}
        hondaTopSpeed={honda.speedStats.topSpeed}
        hondaZeroToSixty={honda.speedStats.zeroToSixty}
        hondaTopColour={honda.coloursByPopularity[0]}
        testlaModel={testla.model}
        testlaTopSpeed={testla.speedStats.topSpeed}
        testlaZeroToSixty={testla.speedStats.zeroToSixty}
        testlaTopColour={testla.coloursByPopularity[0]}
      />
      <br />
      <br />
      {/* <Table2 /> */}
      <Table3 />
    </>
  );
}

export default App;
