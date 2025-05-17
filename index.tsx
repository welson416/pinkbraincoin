import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <Head>
        <title>Brainy & Pink Coin ($BPC)</title>
        <meta name="description" content="Meme coin on Solana - Brainy & Pink Coin" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">Brainy & Pink Coin ($BPC)</h1>
      <p className="text-lg text-center max-w-xl">
        A Solana meme coin created by a genius lab rat and his chaotic friend.
        Together, they plan to take over the blockchain… and then the world.
      </p>
    </div>
  )
}
