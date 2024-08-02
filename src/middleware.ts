import { NextRequest, NextResponse } from "next/server";
import  PATHROUTES  from "./helpers/PathRoutes";
import { NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async (request) => {
  //obtenemos el path
  const { pathname } = request.nextUrl;
 
  //chequeamos si está autenticado
  const isAuthenticated = checkUserAuthentication(request);
  // console.log("isAuthenticated", isAuthenticated);
  // Redirigimos a la página del home si el usuario no está autenticado
  if (pathname.startsWith(PATHROUTES.DASHBOARD || PATHROUTES.CART) && !isAuthenticated) {
    const url = new URL(PATHROUTES.LOGIN, request.url);
    return NextResponse.redirect(url);
  }

 

  return NextResponse.next();
};

//funcion para chequear si el usuario esta autenticado mediante cookies
function checkUserAuthentication(request: NextRequest) {
  const authToken = request.cookies.get("user");
  return !!authToken;
}


// export function middleware(request: NextRequest): NextResponse {
//   const user = request.cookies.get("user")?.value;

//   if (user !== "admin") {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   console.log("running middleware");
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard", "/dashboard/cart"],
// };
