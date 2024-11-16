import { FC } from "react";
import { OpenWeatherReportData } from "../data";
import { WeatherIcon } from "./WeatherIcon.tsx";

interface Props {
  data: OpenWeatherReportData;
}

export const Weather: FC<Props> = ({ data: { current } }) => {
  const { description, icon } = current.weather[0];

  return (
    <>
      <WeatherIcon icon={icon} description={description} />
      <h1>{description}</h1>
    </>
  );
};
