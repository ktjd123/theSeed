import { observable, action, runInAction, makeAutoObservable } from 'mobx';
import axios from 'axios';

const API = '/api/auth';

enum roleEnum {
  Admin,
  User,
}

interface authInterface {
  _id: string;
  id: string;
  role: roleEnum;
}

export default class auth {
  constructor() {
    makeAutoObservable(this);
  }

  a = 1;

  auth: authInterface | undefined;

  check = async (renew = false) => {
    if (renew === false && typeof this.auth !== 'undefined') return this.auth;

    const result = await axios.get(`${API}/check`);

    if (result.data.code) throw result.data.code;

    runInAction(() => {
      this.auth = result.data;
    });

    return this.auth;
  };

  login = async (id: string, pw: string) => {
    const result = await axios.post(`${API}/login`, { id, pw });
    if (result.data.code) throw result.data.code;

    this.check(true);

    return true;
  };

  register = async (id: string, pw: string) => {
    const result = await axios.post(`${API}/register`, { id, pw });
    if (result.data.code) throw result.data.code;

    return true;
  };
}
