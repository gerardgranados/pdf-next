import { AppContext } from "../contexts/App.context";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function App({ Component, pageProps }) {
  const { value } = useLocalStorage("data");
  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
