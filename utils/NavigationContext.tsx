import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface NavigationContextProps {
  navigator: boolean;
  setNavigator: Dispatch<SetStateAction<boolean>>;
  act: boolean;
  setAct: Dispatch<SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextProps>({
  navigator: false,
  setNavigator: () => {},
  act: true,
  setAct: () => {},
});

interface NavigatorContextProviderProps {
  children: ReactNode;
}

const NavigatorContextProvider = ({
  children,
}: NavigatorContextProviderProps) => {
  const [navigator, setNavigator] = useState(false);
  const [act, setAct] = useState(true);
  return (
    <NavigationContext.Provider
      value={{ navigator, setNavigator, act, setAct }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigatorContextProvider };
