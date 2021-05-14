import Head from 'next/head'
import Link from 'next/link'

const userName = 'Isaac'
const timeSinceLastFeed = '5 Hours'
const strength = 'Medium'
const hydration = '100'
const temp = '72F'
const humidity = '54%'
const co2 = '1200 ppm'
const height = '52 mm'

const NavItem = props => (
    <li className="block">
        <Link href={props.href}>
            <a className="text-lg font-bold text-off-white px-2 py-1 hover:bg-dim-gray hover:bg-opacity-75 rounded">
                {props.text}
            </a>
        </Link>
    </li>
)
export default function Analytics() {
    return (
        <div className="flex flex-col min-h-screen bg-off-white">
            <Head>
                <title>Masa Madre</title>
                <link rel="icon" href="/sourdough.png" />
            </Head>
            <div className="grid grid-cols-5">
                <div className="bg-ruby group inline-block fixed w-80">
                    <nav className="flex px-3 py-2 dropdown-menu group inline-flex items-center">
                        <ul className="space-y-2 hidden group-hover:block bg-ruby">
                            <NavItem href="/overview" text="Overview" />
                            <NavItem href="/analytics" text="Analytics" />
                            <NavItem href="/feed" text="Feed" />
                            <NavItem href="/recipes" text="Recipes" />
                            <NavItem href="/recipes" text="Profile" />
                            <NavItem href="/recipes" text="Settings" />
                        </ul>
                    </nav>
                </div>
                <div className="col-span-4"></div>
            </div>
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <div>
                    <p className="text-8xl text-dark-blue font-extrabold text-left">Welcome Back {userName}!
                    It has been <span className="italic underline bold font-medium hover:bg-ruby">{timeSinceLastFeed}</span> since you last fed your starter.
                    Currently it's at <span className="italic underline bold font-medium hover:bg-ruby">{strength}</span> strength.
                    Your current starter is <span className="italic underline bold font-medium hover:bg-ruby">{hydration}%</span> hydration.</p>
                </div>
            </main>
            <footer className="flex flex-col px-5">
                <div className="grid grid-cols-10">
                    <div className="col-span-3 bg-ruby group inline-block w-56 sticky bottom-0">
                        <div className="flex px-3 py-2 dropdown-menu group inline-flex items-center">
                            <div className="space-y-2 hidden group-hover:block bg-ruby">
                                <p>eCO2: <span>{co2}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 bg-dim-gray group inline-block w-36 sticky bottom-0">
                        <div className="flex px-3 py-2 dropdown-menu group inline-flex items-center">
                            <div className="space-y-2 hidden group-hover:block dim-gray">
                                <p>Height: <span>{height}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-dark-blue group inline-block w-80">
                        <div className="flex px-3 py-2 dropdown-menu group inline-flex items-center">
                            <div className="space-y-2 hidden group-hover:block bg-dark-blue">
                                <p className="text-off-white">Temperature: <span>{temp}</span></p>
                                <p className="text-off-white">Humidity: <span>{humidity}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

