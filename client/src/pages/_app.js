import { UsersProvider } from "../context/users";

function MyApp({ Component, pageProps }) {
  return (
    <UsersProvider>
      <Component {...pageProps} />
    </UsersProvider>
  );
}

export default MyApp;
