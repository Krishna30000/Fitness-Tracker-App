import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-200">
      <Link href="/">
        <span className="text-blue-500 hover:underline cursor-pointer">My Progress</span>
      </Link>
      <Link href="/friends">
        <span className="text-blue-500 hover:underline cursor-pointer">Friends</span>
      </Link>
    </nav>
  );
};

export default Navbar;
