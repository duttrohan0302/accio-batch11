import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
const CityContext = createContext();

const ContextComp = () => {
  const [user, setUser] = useState("Rohan Dutt");
  const [city, setCity] = useState("Agra");

  return (
    <UserContext.Provider value={user}>
      <CityContext.Provider value={city}>
        <h1>Hello {user}</h1>
        <Component2 user={user} />
      </CityContext.Provider>
    </UserContext.Provider>
  );
};

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
};

const Component4 = () => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
};

// const Component5 = () => {
//     // using React.Context
//   return (
//     <>
//       <h1>Component 5</h1>
//       <UserContext.Consumer>
//         {(user) => (
//           <CityContext.Consumer>
//             {(city) => <h2>Hi {user} again, are you in {city} ?</h2>}
//           </CityContext.Consumer>
//         )}
//       </UserContext.Consumer>
//     </>
//   );
// };
const Component5 = () => {
    // using useContext
    const user = useContext(UserContext)
    const city = useContext(CityContext)
  return (
    <>
      <h1>Component 5</h1>
        <h2>Hi {user} again, are you in {city} ?</h2>
    </>
  );
};

export default ContextComp;
