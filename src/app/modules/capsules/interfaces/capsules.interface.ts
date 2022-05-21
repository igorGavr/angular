export interface ICapsules {
  capsule_serial: string,
  capsule_id: string,
  status: string,
  original_launch: string,
  original_launch_unix: string,
  missions: [
    {
      name: string,
      flight: number
    }
  ],
  landings: number,
  type: string,
  details: string,
  reuse_count: number
}
