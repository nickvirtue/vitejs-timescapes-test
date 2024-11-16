type Weather = {
  description: string;
  icon: string;
};

type CurrentConditions = { weather: Array<Weather> };

export type OpenWeatherReportData = {
  current: CurrentConditions;
};
