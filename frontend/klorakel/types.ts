import { NoSubstitutionTemplateLiteral } from "typescript";

export type Toilet = {
  id: number;
  lat: number;
  long: number;
  name: string;
  requested: boolean;
};

var mockToilets: Array<Toilet> = [
    {id: 1, lat: 48.13714, long: 11.57611, name: "Klo", requested: false},
    {id: 2, lat: 48.13738, long: 11.57670, name: "Klo", requested: false}
];

export {mockToilets};
