"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  //import from next navigation
  const router = useRouter();
  const links = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },

    {
      title: "Categories",
      href: "/categories",
    },
  ];

  return (
    <div>
      <nav className="bg-red-500 px-6 py-2 h-16 flex gap-5 justify-between items-center">
        <Link href="/">
          <h6 className="text-white text-2xl font-bold">
            Next <span className="text-orange-400">Hero</span>
          </h6>
        </Link>

        <ul className="flex justify-between items-center gap-4">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                key={link.title}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-orange-400" : "text-white"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => router.push("/login")}
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
