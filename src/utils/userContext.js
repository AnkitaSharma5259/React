import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;

/*
u can make react track the display name for ur context otherwise it does not track it and gives default name
i.e Context.Provider. It helps in debugging. After giving display Name, it will show
UserContext.Provider.
createContext is a function at the end of the day.
We can have multiple contexts in our app.
React router dom using context behind the scenes.
*/
