import {useState, useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import {State} from "../context/context"
import '../styles/globals.css';

// function LoadingNewPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>  setLoading(false);
//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);
//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });
//   return (
//     loading && (
//       <div className={loading ? "pageLoader" : "pageLoaderInactive"}> </div>
//     )
//   );
// }

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="shortcut icon" href="/logo/slumtechLogo.png" sizes='32x32' />
      </Head>
    <State>
    <div>
    {/* <LoadingNewPage /> */}
    <Component {...pageProps} />
    </div>
    </State>
    </div>
  )
}

export default MyApp;