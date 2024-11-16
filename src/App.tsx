import { useWeatherDataLatLon } from "./data";

import "./App.css";
import { Weather } from "./components/Weather.tsx";

function App() {
  const { isPending, error, data, isFetching } = useWeatherDataLatLon();

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
