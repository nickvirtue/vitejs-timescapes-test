import { useWeatherDataLatLon } from "./data";

import "./App.css";

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
  return <h1>{data.current.weather[0].description}</h1>;
}

export default App;
