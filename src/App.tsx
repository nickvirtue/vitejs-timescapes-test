import { useQuery } from "@tanstack/react-query";

import "./App.css";

function App() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/3.0/onecall?lat=-40.0013&lon=175.06952&units=metric&appid=b74fea3b143484ad8d0cd437859da7f1",
      );
      return await response.json();
    },
  });
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
