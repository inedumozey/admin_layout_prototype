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
import { SessionProvider } from "next-auth/react"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
axios.defaults.withCredentials = true

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    // remove email and verification token from local storage if route is not auth/email-verification-required
    if (router.asPath != 'auth/email-verification-required') {
      localStorage.removeItem('email')
      localStorage.removeItem('token')
    }

    // remove provider and type from local storage if route is not auth/oauth
    if (!router.asPath.includes('auth/oauth')) {
      localStorage.removeItem('type')
      localStorage.removeItem('provider')
    }

  }, [])

  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  )
}

export default MyApp
