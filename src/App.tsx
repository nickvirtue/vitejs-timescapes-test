import "./App.css";
import { useQuery } from "@tanstack/react-query";

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
  if (!data) {
    return <h1>No Data</h1>;
  }
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
