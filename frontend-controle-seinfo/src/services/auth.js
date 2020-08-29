const token = 'usertoken';
const dataUser = {};


const getToken = async () => {
  try {
    const value = await localStorage.getItem(token);
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
    const value = await localStorage.getItem(dataUser);
    if (value !== undefined) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const login = async (newToken, newDataUser) => {
  console.log(newToken, newDataUser)
  try {
    await localStorage.setItem(token, newToken);
    await localStorage.setItem(dataUser, JSON.stringify(newDataUser));
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
  console.log("Hello", infos)
  if (infos.token === null || infos.dataUser) {
    return false
  }
  console.log(infos);

  return true
}


export default { login, logout, getToken, isLogged, getUser };