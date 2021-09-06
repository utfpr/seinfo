const token = '@TOKEN';
const dataUser = '@USER';
const getToken = async () => {
  try {
    const value = localStorage.getItem(token);
    if (value !== undefined) {
      return value;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUser = async () => {
  try {
    const value = localStorage.getItem(dataUser);
    if (value !== undefined) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const login = async (newToken, newDataUser) => {
  try {
    localStorage.setItem(token, newToken);
    localStorage.setItem(dataUser, JSON.stringify(newDataUser));
  }
  catch (error) {
    console.log(error);
  }

};

const logout = () => {
  localStorage.removeItem(token);
  localStorage.removeItem(dataUser);
};

async function isLogged() {
  const infos = {
    token: await getToken(),
    user: await getUser(),
  }
  if (infos.token === null || infos.dataUser) {
    return false
  }

  return true
}


export default { login, logout, getToken, isLogged, getUser };