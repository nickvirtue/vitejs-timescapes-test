import { FC } from "react";
import { OpenWeatherReportData } from "../data";

interface Props {
  data: OpenWeatherReportData;
}

export const Weather: FC<Props> = ({ data: { current } }) => {
  const { description } = current.weather[0];

  return <h1>{description}</h1>;
};
