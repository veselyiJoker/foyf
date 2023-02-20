import MainContainer from "../../components/MainContainer"

const User = ({ user }: any) => {    
    return (
        <MainContainer>
            <section>
                <h2>
                    { user.name }
                </h2>
            </section>
        </MainContainer>
    )
}

export default User

export async function getServerSideProps({ params }: any) {
    const res =
        await fetch(`https://jsonplaceholder.typicode.com/users/${ params.id }`)
    const user = await res.json()

    return {
      props: { user },
    }
}