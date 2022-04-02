import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const [state, setState] = useState(false);
  const update = () => {
    setState((state) => !state);
  };
  return (
    <UserContext.Provider value={{ state, update }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
