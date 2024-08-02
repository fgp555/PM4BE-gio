import PATHROUTES from "./PathRoutes";


export const navItems = [
    {
        title: "Home",
        href: PATHROUTES.HOME,
        icon: "home",
    },
    {
        title: "Products",
        href: PATHROUTES.PRODUCTS,
        icon: "products"
    },
    {
        title: "Login",
        href: PATHROUTES.LOGIN,
        icon: "login"
    },
    {
        title: "Register",
        href: PATHROUTES.REGISTER,
        icon: "register"
    },

];

const socialMedia = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: "facebook",
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: "instagram",
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: "twitter",
    },
];

export const navItemsLogged = [
    {

        name: "Profile",
        path: PATHROUTES.DASHBOARD,
    },
    {
        name: "Cart",
        path: PATHROUTES.CART,

   }
]