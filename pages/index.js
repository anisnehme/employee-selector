 import Head from 'next/head'
export default function Home() {
  return (
        <>
        <Head>
          <meta name="description" content="Select the next best employee for your needs."/>
          <title>Employee Selector</title>
        </Head>
          <header className='text-center py-[10rem] bg-zinc-500'>
            <img className="w-[98px] mx-auto" src="myfavicon.svg" alt="next best employee"/>
             <h1 className='text-6xl text-red-500'>Employee Selector</h1>
             <p>Select the best employee for your desired needs!</p>
          </header>
          
        </>
  )
}
