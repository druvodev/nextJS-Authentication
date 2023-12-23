import Link from "next/link";

const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-30 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/createUser">Create User</Link>
          <Link href="/clientMember">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/public">Public</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
