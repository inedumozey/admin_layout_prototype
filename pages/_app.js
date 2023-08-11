import Context from "../context/Context";
import Layouts from "../layouts/Layouts";
import "../styles/globals.css";
import axios from 'axios'
import { WhatsAppBtn } from '@mozeyinedu/react-lab'
import ScrollToTop from "react-scroll-to-top";
import NextProgress from 'nextjs-progressbar';
import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from "next/router";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
axios.defaults.withCredentials = true

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // remove email and verification token from local storage if route is not auth/email-verification-required
  useEffect(() => {
    if (router.asPath != 'auth/email-verification-required') {
      localStorage.removeItem('email')
      localStorage.removeItem('token')
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>ABC</title>
      </Head>
      <ScrollToTop smooth color="var(--major-color-purest)" style={{ background: 'rgba(0,0,0,.2)' }} />

      <WhatsAppBtn mobile="08036000347" size="50px" />

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
