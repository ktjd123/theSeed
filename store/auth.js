import { observable, action, runInAction } from 'mobx';
import axios from 'axios';

const API = '/api/auth';

export default class auth {
  @observable auth = {
    _id: '',
    id: '',
    role: '',
  };

  @action check = async (renew = false) => {
    if (renew === false && this.auth._id.length > 0) return this.auth;

    const result = await axios.get(`${API}/check`);

    if (result.data.code) throw result.data.code;

    runInAction(() => {
      this.auth = result.data;
    });

    return this.auth;
  };

  @action login = async (id, pw) => {
    const result = await axios.post(`${API}/login`, { id, pw });
    if (result.data.code) throw result.data.code;

    this.check(true);

    return true;
  };

  @action register = async (id, pw) => {
    const result = await axios.post(`${API}/register`, { id, pw });
    if (result.data.code) throw result.data.code;

    return true;
  };
}
