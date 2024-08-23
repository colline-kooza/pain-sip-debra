"use client"
import Link from "next/link"
import {
  Bell,
  BetweenVerticalEnd,
  BringToFront,
  LogOut,
  Package2,
  Settings,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react"
import { CgMenuGridR } from "react-icons/cg";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { PiHouse } from "react-icons/pi";


export default function SideBar({role , notifications}:{role:string , notifications:any}) {
  const pathName=usePathname()
  const [active, setActive] = useState(null);
//  console.log(active)
  const handleSetActive = (link:any) => {
    setActive(link);
  };
  const hasNotifications = notifications && notifications.length > 0;

  return (
    <div className="grid min-h-screen w-full">
      <div className="hidden border-r bg-muted/40 md:block min-h-screen">
        <div className="flex h-full max-h-screen flex-col gap-2">

          <div className="flex h-14 items-center border-b px-4 lg:h-[73px] lg:px-6 justify-between">
         <div className="w-10 h-10 ">
           <img src="https://paintandsipuganda.com/wp-content/uploads/2023/12/paintandsiplogo1.jpg" alt="" className="h-full w-full "/> 
         </div>

         <Link href="/dashboard/notifications">
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8 relative">
                <Bell className="h-4 w-4" />
                {hasNotifications && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                )}
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </Link>
          </div>


          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
   role === "USER" && (
<Link
  onClick={() => handleSetActive("/")}
  href="/"
  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
    pathName === "/" ? "text-primary bg-muted" : ""
  }`}
>
<PiHouse className="h-5 w-5" />
  Home
</Link>

   )
 }


              {
                role === "ADMIN" && (
                  <Link
                  onClick={() => handleSetActive("/dashboard")}
                  href="/dashboard"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    pathName === "/dashboard" ? "text-primary bg-muted" : ""
                  }`}
                >
                  <CgMenuGridR className="h-5 w-5" />
                  Dashboard
                </Link>
                )
              }
          
          {
             role === "ADMIN" && (
              <Link
              onClick={() => handleSetActive("/dashboard/manage-table")}
                 href="/dashboard/manage-table"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === "/dashboard/manage-table" ? "text-primary bg-muted " : ""
                }`}
                  >
                  <BetweenVerticalEnd className="h-4 w-4" />
                   Manage Orders
                  </Link>
             )
          }
             


             <Link
  onClick={() => handleSetActive("/dashboard/order-line")}
  href="/dashboard/order-line"
  className={`flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary ${
    pathName === "/dashboard/order-line" ? "text-primary bg-muted" : ""
  }`}
>
  <BringToFront className="h-4 w-4" />
  Order Line
  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
    6
  </Badge>
            </Link>


           { role === "ADMIN" &&
           (
            <Link
  onClick={() => handleSetActive("/dashboard/manage-dishes")}
  href="/dashboard/manage-dishes"
  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
    pathName === "/dashboard/manage-dishes" ? "text-primary bg-muted" : ""
  }`}
>
  <UtensilsCrossed className="h-4 w-4" />
  Manage 
</Link>
           )
           }

{
             role === "ADMIN" && (
              <Link
              onClick={() => handleSetActive("/dashboard/ingredients")}
                 href="/dashboard/ingredients"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === "/dashboard/ingredients" ? "text-primary bg-muted " : ""
                }`}
                  >
                  <BetweenVerticalEnd className="h-4 w-4" />
                  Ingredients
                  </Link>
             )
          }
 {
   role === "ADMIN" && (
<Link
  onClick={() => handleSetActive("/dashboard/customer")}
  href="/dashboard"
  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
    pathName === "/dashboard/customer" ? "text-primary bg-muted" : ""
  }`}
>
  <UsersRound className="h-4 w-4" />
  Customers
</Link>

   )
 }

            </nav>
          </div>
          <div className=" ">
          <nav className="grid items-start px-2 text-sm font-medium ">
           
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LifeBuoy className="h-4 w-4"/>
               Help Center
              </Link> */}
              <Link
              onClick={() => handleSetActive("/dashboard/settings")}
                href="/dashboard/settings"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
              pathName === "/dashboard/settings" ? "text-primary bg-muted" : ""
              }`}
              >
               <Settings className="h-4 w-4" /> 
               Settings
              </Link>
              <button
              onSelect={(event) => {
                event.preventDefault();
                signOut({
                  callbackUrl: "/register",
                });
              }}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
              <LogOut className="h-4 w-4" />
              Logout
              </button>
            </nav>
          </div>
        </div>
      </div>
      
    </div>
  )
}
