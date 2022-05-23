import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  capsules: `${API}/capsules`,
  history: `${API}/history`,
  rockets: `${API}/rockets`
}
