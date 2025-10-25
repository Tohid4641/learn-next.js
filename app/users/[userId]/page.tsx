import Link from "next/link";
import { notFound } from "next/navigation";

async function fetchUser(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        return null;
    }
    return await response.json();
}

export default async function UserPage({ params, }: { params: Promise<{ userId: string }> }) {


    const { userId } = await params;

    const user = await fetchUser(userId);

    if (!user) {
        notFound()
    };

    return <div>
        <h1 style={{ color: 'red' }}>Users Page</h1>

        <div style={{ border: '2px solid white' }}>
            <h1>{user.name}</h1>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Phone: </strong>{user.phone}</p>
            <p><strong>Webiste: </strong>{user.website}</p>
        </div>


        <Link href={"/users"}>

            <p>{`<= Back`}</p>
        </Link>
    </div>
}