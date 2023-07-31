import Context from "../context/Context";
import Layouts from "../layouts/Layouts";
import "../styles/globals.css";
import axios from 'axios'
import ScrollToTop from "react-scroll-to-top";
import NextProgress from 'nextjs-progressbar';
import Head from 'next/head'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
axios.defaults.withCredentials = true


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>VTU</title>
      </Head>
      <ScrollToTop smooth color="var(--major-color-purest)" style={{ background: 'rgba(0,0,0,.2)' }} />

      <NextProgress options={{ showSpinner: false }} />
      <div className="max-w-[var(--xxlg)] m-auto bg-white">
        <Context>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </Context>
      </div>
    </>
  )
}

export default MyApp
