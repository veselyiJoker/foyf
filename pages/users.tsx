import Link from 'next/link'
import MainContainer from '../components/MainContainer'

const Users = ({ users }: any) => {

    return (
        <MainContainer>
            <section>
                <h2>
                    Users List
                </h2>
                <ul>
                    {
                        users.map(( elem: any ) => {
                            return (
                                <li key={ elem.id }>
                                    <Link href={ `/users/${ elem.id }` }>
                                        {
                                            elem.name
                                        }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}
