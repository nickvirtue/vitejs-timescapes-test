import { useQuery } from "@tanstack/react-query";

export const useWeatherDataLatLon = () =>
  useQuery({
    queryKey: ["weatherDataLatLon"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/3.0/onecall?lat=-40.0013&lon=175.06952&units=metric&appid=b74fea3b143484ad8d0cd437859da7f1",
      );
      return await response.json();
    },
  });
