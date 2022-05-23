export interface IRocket {
  rocket_id: string
  rocket_name: string;
  description: string;
  wikipedia: string;
  cost_per_launch: number;
  first_flight: string;
  country: string;
  company: string;
  height: {
    meters: number;
    feet: number;
  }
}
