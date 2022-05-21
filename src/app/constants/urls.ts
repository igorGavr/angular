import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  capsules: `${API}/capsules`,
  cores: `${API}/cores`,
  dragons: `${API}/dragons`,
  history: `${API}/history`,
  info: `${API}/info`
}
