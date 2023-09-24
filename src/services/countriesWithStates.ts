type TCountriesWithStates = {
    id: number;
    country: string;
    states: string[];
}[];

export const countriesWithStates: TCountriesWithStates = [
    {
      id: 1,
      country: "United States",
      states: ["California", "New York", "Texas", "Florida"],
    },
    {
      id: 2,
      country: "Canada",
      states: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    },
    {
      id: 3,
      country: "United Kingdom",
      states: ["England", "Scotland", "Wales", "Northern Ireland"],
    },
    {
      id: 4,
      country: "Australia",
      states: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
    },
];