import { FC } from "react";

export const WeatherIcon: FC<{ icon: string; description: string }> = ({
  icon,
  description,
}) => (
  <img
    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
    alt={description}
  />
);
