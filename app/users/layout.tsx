export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <h1 style={{ color: "red" }}>I am Layout of Users page</h1>
        {children}
    </div>
}