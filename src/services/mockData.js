const MockData = {
  persons: [
    {
      name: "John",
      lname: "Baskins",
      id: 1
    },
    {
      name: "Bob",
      lname: "Barker",
      id: 2
    },
  ],
  showPersons: false,
  authenticated: false
};


export const MyPromise = () =>
  new Promise(resolve => resolve(MockData));
  // new Promise(resolve => setTimeout(() => resolve(MockData), 200));




  // const [person, setPerson] = useState({
  //   persons: [
  //     {
  //       name: "John",
  //       lname: "Baskins",
  //       id: 1
  //     },
  //     {
  //       name: "Bob",
  //       lname: "Barker",
  //       id: 2
  //     },
  //   ],
  //   showPersons: false
  // });