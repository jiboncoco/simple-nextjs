import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex justify-start space-x-4">
            <Link href="/">
                <a className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
                <a className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">About</a>
            </Link>
            <Link href="/contact">
                <a className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Contact</a>
            </Link>
            <Link href="/users/detail">
                <a className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Others</a>
            </Link>
        </nav>
    );
}
