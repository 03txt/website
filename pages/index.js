import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> welcome </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="welcome to my website!" />
        <p className="description">
          by <code>dania santiago</code>
        </p>
      </main>
    </div>
  )
}
