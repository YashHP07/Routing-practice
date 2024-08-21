import { GuestGreeting, UserGreeting } from "./Greet1";

export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting/>;
    }
    return <GuestGreeting/>;
  }