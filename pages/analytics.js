import Head from 'next/head'
import Link from 'next/link'

const NavItem = props => (
    <li className="block">
        <Link href={props.href}>
            <a className="text-lg font-bold text-off-white px-2 py-1 hover:bg-dark-blue rounded">
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
                <div className="bg-ruby group inline-block relative">
                    <nav className="flex px-3 py-2 dropdown-menu group inline-flex items-center">
                        <ul className="space-y-2 hidden group-hover:block bg-ruby">
                            <NavItem href="/analytics" text="Analytics" />
                            <NavItem href="/feed" text="Feed" />
                            <NavItem href="/recipes" text="Recipes" />
                        </ul>
                    </nav>
                </div>
                <div className="col-span-4"></div>
            </div>
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <p>Analytics</p>
            </main>
        </div>
    )
}

