export const login = () => {
  return {
    id: 4,
    username: "Bob",
    email: "bob@bob.com"
  };
};




export const loginCreds = ({ username, password }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (username === 'Bob' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000)
  )



// export async function loginCreds({ username, password }) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (username === 'Bob' && password === 'password') {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 1000)
//   )
// };


