import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="space-x-2">
            <ul>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            </ul>
        </nav>
    );
}

export default Navbar;