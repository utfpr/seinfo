import auth from '../services/auth';

var user;

async function userData(){
  await auth.getUser().then(res => {
    user = res; 
  });

  return user;
}

export default { userData };