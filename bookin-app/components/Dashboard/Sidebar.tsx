"use client"
import 
{  Bell, Folder, Globe, Grid2X2, Home, LineChart, Package2, Settings, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// import LogoutButton from "./LogoutButton";
import { Card } from "flowbite-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default  function Sidebar() {
  const pathname = usePathname();
  const sideBarLinks = [
    {
      name: "Dashboard",
      path: "/Dashboard",
      icon: Home,
    },
    {
      name: "Clients",
      path: "/Dashboard/orders",
      icon: Folder,
      badgeCount: 6
    },
    {
      name: "Appointments",
      path: "/Dashboard/products",
      icon: Grid2X2,
    },
    {
      name: "Reports",
      path: "/dashboard/reports",
      icon: LineChart,
    },
    {
      name: "Settings",
      path: "/Dashboard/settings",
      icon: Settings
    },
    {
      name: "Online",
      path: "/",
      icon: Globe
    }
   
  ]
  return (
    <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {
                sideBarLinks.map((item, i)=> {
                  const Icon = item.icon;
                  return (
                    <Link
                    key={i}
                href={item.path}
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname === item.path ? " bg-muted text-primary " : ""
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
                {item.badgeCount && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {item.badgeCount}
                </Badge>}
              </Link>
                  )
                })
              }
              
              
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="A card with a call to action">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}