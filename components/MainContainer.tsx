import Link from "next/link"

const MainContainer = ({ children }: any) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/users'>
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {
                    children
                }
            </main>
        </div>
    )
}

export default MainContainer