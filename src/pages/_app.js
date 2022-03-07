import './index.css'
import { SessionProvider } from 'next-auth/react'
import AlertState from '../context/alerts/alertState'
import AuthState from '../context/auth/authState'
import ProjectState from '../context/projects/projectState'
import TaskState from '../context/tasks/tasksState'
import Head from 'next/head'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta name="title" content="Minity" />
        <meta name="description" content="Manage your whole life in one place" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minity.vercel.app/" />
        <meta property="og:title" content="Minity" />
        <meta property="og:description" content="Manage your whole life in one place" />
        <meta property="og:image" content="https://minity.vercel.app/images/SocialCover.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://minity.vercel.app/" />
        <meta name="twitter:title" content="Minity" />
        <meta name="twitter:creator" content="@tzivigelstein" />
        <meta name="twitter:description" content="Manage your whole life in one place" />
        <meta name="twitter:image" content="https://minity.vercel.app/images/SocialCover.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <SessionProvider session={session}>
        <AuthState>
          <AlertState>
            <ProjectState>
              <TaskState>
                <Component {...pageProps} />
              </TaskState>
            </ProjectState>
          </AlertState>
        </AuthState>
      </SessionProvider>
    </>
  )
}
