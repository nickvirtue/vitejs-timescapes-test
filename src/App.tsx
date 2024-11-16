import { useWeatherDataLatLon } from "./data";
import { Weather } from "./components";

import "./App.css";

const AUCKLAND = {
  lat: -36.98162252922073,
  lon: 174.8792538058189,
};

function App() {
  const { isPending, error, data, isFetching } = useWeatherDataLatLon(AUCKLAND);

  if (isPending) {
    return <h1>Pending</h1>;
  }

  if (isFetching) {
    return <h1>Fetching</h1>;
  }

  if (error || !data) {
    return <h1>Error</h1>;
  }

  return <Weather data={data} />;
}

export default App;
