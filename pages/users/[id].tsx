import MainContainer from "../../components/MainContainer"

const User = ({ user, posts }: any) => {


    return (
        <MainContainer>
            <section>
                <h2>
                    { user.name }
                </h2>
                <h3>Post</h3>
                <ul>
                    {
                        posts.map((elem: any) => {
                            return (
                                <li>
                                    {
                                        elem.body
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </MainContainer>
    )
}

export default User

export async function getServerSideProps({ params }: any) {
    const userRequest =
        await fetch(`https://jsonplaceholder.typicode.com/users/${ params.id }`)
    const postsRequest = await fetch('http://localhost:3000/api/posts')

    const user = await userRequest.json()
    const posts = await postsRequest.json()

    return {
      props: { user, posts },
    }
}