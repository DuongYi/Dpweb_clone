import jwtDecode from 'jwt-decode';

import axios from 'src/utils/axios';

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
    axios.post(`${process.env.REACT_APP_API}/api/users/login`, { username, password })
      .then((response) => {
        if (response.data.data) {
          this.setSession(response.data.data.accessToken);
          resolve(response.data.data);
        }
        reject(response);
      })
      .catch((error) => {
        if (error.response.data.status) {
          reject(error.response.data.status);
        }
        reject(error);
      });
  })

  loginWithToken = () => new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_API}/api/users/login`)
      .then((response) => {
        if (response.data.user) {
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })

  logout = () => {
    this.setSession(null);
  }

  register = (userData) => new Promise((resolve, reject) => {
    axios.post(`${process.env.REACT_APP_API}/api/users/register`, userData)
      .then((response) => {
        if (response.data.data) {
          resolve(response.data.data);
        }
        reject(response);
      })
      .catch((error) => {
        if (error.response.data) {
          reject(error.response.data);
        }
        reject(error);
      });
  })

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken = () => localStorage.getItem('accessToken');

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const authService = new AuthService();

export default authService;
