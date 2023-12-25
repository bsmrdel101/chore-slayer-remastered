import axios from 'axios';
const url = process.env.NEXT_PUBLIC_URL;

interface NewUser {
  username: string
  password: string
}

// === GET routes === //

export const getUser = async () => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const res = await axios.get(`${url}/api/user`, config);
    return res.data;
  } catch(err) {
    console.log();
  }
};

// === POST routes === //

export const registerUser = async (user: NewUser) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    await axios.post(`${url}/api/user/register`, user, config);
  } catch(err) {
    console.log(err);
  }
};

export const loginUser = async (user: NewUser) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    await axios.post(`${url}/api/user/login`, user, config);
  } catch(err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    await axios.post(`${url}/api/user/logout`);
  } catch(err) {
    console.log(err);
  }
};

// === PUT routes === //

export const changeNewUser = async (user: boolean) => {
  try {
    await axios.put(`${url}/api/user`, { newStatus: user });
  } catch(err) {
    console.log(err);
  }
};
