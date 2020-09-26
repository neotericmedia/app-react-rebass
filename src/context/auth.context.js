import { createContext } from 'react';

const AuthContext = createContext(null);

// const AuthContext = createContext({
//   authenticated: false,
//   login: () => { }
// });

export default AuthContext;
