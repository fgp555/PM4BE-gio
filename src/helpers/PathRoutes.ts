const PATHROUTES ={
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PRODUCTID: (id: number | string) => `/products/${id}`,
    PRODUCTS: "/products",
    DASHBOARD: "/dashboard",
    CART: "/dashboard/cart"
}
export default PATHROUTES