export const login = () => {
  return {
    id: 4,
    username: "Bob",
    email: "bob@bob.com"
  };
};




export async function loginCreds({ username, password }) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (username === 'Bob' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000)
  )
};
