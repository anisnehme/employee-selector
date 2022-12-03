import Head from 'next/head'
import { LandingPageHeader } from '../components/headers'

export default function Home() {
  return (
        <>
        <Head>
          <meta name="description" content="Select the next best employee for your needs."/>
          <title>Employee Selector</title>
        </Head>
        <LandingPageHeader/>
        <main></main>
        </>
  )
}
