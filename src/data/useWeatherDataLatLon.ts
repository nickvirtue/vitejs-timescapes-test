import { useQuery } from "@tanstack/react-query";
import { OpenWeatherReportData } from "./openWeatherReportData.ts";

export type Location = {
  lat: number;
  lon: number;
};

export const useWeatherDataLatLon = ({ lat, lon }: Location) =>
  useQuery<OpenWeatherReportData>({
    queryKey: ["weatherDataLatLon"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=b74fea3b143484ad8d0cd437859da7f1`,
      );
      return await response.json();
    },
  });
