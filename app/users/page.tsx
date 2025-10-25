import Link from "next/link";

export default async function Users() {
    let users: { id: number; name: string }[] = [];


    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await response.json();
    }

    await fetchUsers()

    return <div>
        <h1 style={{ color: 'red' }}>Users Page</h1>

        <ul>
            {users.map((user: { id: number; name: string }) =>
            (
                <Link href={`/users/${user.id}`}>
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                </Link>
            )
            )}
        </ul>
    </div>
}