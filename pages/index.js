import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-dark-blue">
      <Head>
        <title>Masa Madre</title>
        <link rel="icon" href="/sourdough.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="grid grid-cols-3 divide-x-8 divide-ruby">
          <div className="col-span-2"></div>
          <div className="text-off-white relative h-20 w-96">
            <div className="absolute top-0 right-0 h-20 w-96">
              <button className="btn bg-dim-gray font-bold text-off-white py-3 px-6 inline-flex items-center rounded">
                {/* <svg class="fill-current text-off-white w-4 h-4 mr-2" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                  <path d="M58.0221182,5048.95372 C55.8242503,5048.95372 54.0368636,5047.16802 54.0368636,5044.97223 C54.0368636,5042.77644 55.8242503,5040.99074 58.0221182,5040.99074 C60.2199861,5040.99074 62.0073727,5042.77644 62.0073727,5044.97223 C62.0073727,5047.16802 60.2199861,5048.95372 58.0221182,5048.95372 M58.0221182,5039 C54.7203348,5039 52.0442363,5041.67357 52.0442363,5044.97223 C52.0442363,5046.26621 52.4606954,5047.46165 53.1611039,5048.4401 L44,5057.59254 L45.4087875,5059 L46.8295307,5057.5806 L48.2104214,5058.96019 L49.6202052,5057.55273 L48.2383182,5056.17314 L50.2100229,5054.2033 L51.6108399,5055.6028 L53.0196274,5054.19534 L51.6188104,5052.79585 L54.5728803,5049.84457 C55.5482714,5050.53536 56.7358773,5050.94446 58.0221182,5050.94446 C61.3239016,5050.94446 64,5048.27089 64,5044.97223 C64,5041.67357 61.3239016,5039 58.0221182,5039"/>
                </svg> */}
                <Link href="/analytics">
                  <a><span>Login</span></a>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-right">
          <p className="text-off-white font-bold text-9xl relative w-96">Masa</p>
          <div></div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img className="object-scale-down h-72 w-full" src="/folding.jpg" alt="Folding Bread"></img>
            <p className="text-off-white font-bold text-9xl">Madre</p>
          </div>
          <div className="border-solid border-12 border-r-0">
            <img src="/overview.jpg" alt="Top Down Shot of Sourdough Starter"></img>
          </div>
        </div>
        <div className="grid grid-cols-4 divide-x-64 divide-ruby">
          <div className="relative h-20 w-96">
            <p className="text-off-white text-left text-xl left-0">We'll help you get the most out </p>
            <p className="text-off-white text-left text-xl left-0">of your starter by suggesting</p>
            <p className="text-off-white text-left text-xl left-0">when to feed it and</p>
            <p className="text-off-white text-left text-xl left-0">how best to take care of it.</p>
          </div>
          <div className="col-span-3"></div>
        </div>
      </main>

      <footer>
        <a
          href="https://www.flores-huerta.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-off-white">
          Created By: Isaac
        </a>
      </footer>
    </div>
  )
}
