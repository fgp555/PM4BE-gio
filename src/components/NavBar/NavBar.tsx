"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { navItems } from "@/helpers/navItems.helper";
import PATHROUTES from "@/helpers/PathRoutes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/helpers/auth.helper";
import IProduct from "@/interfaces/IProduct";

const Navbar = () => {
  const { dataUser, setDataUser, cartItemCount} = useAuth();
  const router = useRouter();
  // const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const items: IProduct[] = JSON.parse(cart);
      // setCartItemCount(items.length);
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // localStorage.removeItem("userSession");
    setDataUser(null);
    router.push(PATHROUTES.HOME);
  };

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex place-items-stretch">
            <Link href={PATHROUTES.HOME}>
              <p>MY LITTLE STORE</p>
            </Link>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <span className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex justify-center md:block">
              <Link href={PATHROUTES.CART}>
                <span className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                  {cartItemCount}
                </span>
              </Link>
            </div>
          </div>

          <ul className="list-none flex items-center space-x-2">
            {!dataUser ? (
              <li key={"sign-in"} className="flex-1">
                <Link
                  href={PATHROUTES.LOGIN}
                  className="inline-flex items-center font-semibold transition-colors duration-200 rounded-lg text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  {" "}
                  Sign In
                </Link>
              </li>
            ) : (
              <>
                <li key={"dashboard"} className="flex-1">
                  <Link
                    href={PATHROUTES.DASHBOARD}
                    className="inline-flex items-center font-semibold transition-colors duration-200 rounded-lg text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    My Profile
                  </Link>
                </li>

                <li key={"logout"} className="flex-1">
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center font-semibold transition-colors duration-200 rounded-lg text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
