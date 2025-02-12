"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu"


const megaMenu = [
  {
    title: "About",
      services: [
    {
      title: "Working with Gas Meters",
      slug: "gas meters",
      description: "A gas meter is a device that measures the volume of fuel gas that passes through it."
    }
  ]
  },
  {
    title: "Most Requested",
    services: [
    {

    
      title: "Plumbing",
      slug: "plumbing",
      description: "Plumbing is a system of pipes and fixtures that move water and waste through a building."
    },
    {

    
      title: "Elctrical",
      slug: "electrical",
      description: "Electrical work involves installing, maintaining, and repairing electrical systems and equipment."
    },
    {

    
      title: "HVAC",
      slug: "hvac",
      description: "It's a system that controls the temperature, humidity, and air quality in a building."
    }
  ]
  },
  {
    title: "Specialties",
    services: [
    {

    
      title: "Working with Gas Meters",
      slug: "gas meters",
      description: "A gas meter is a device that measures the volume of fuel gas that passes through it."
    },
    {

    
      title: "Installation of various products",
      slug: "installation of products",
      description: "The process of setting up and making ready for use a wide range of different goods, which could include anything from appliances like refrigerators and washing machines."
    },
    {

    
      title: "Heating and Cooling ",
      slug: "heating and cooling",
      description: "Using an air conditioner to cool a room, turning on a furnace to heat a house, utilizing a heat pump to both heat and cool a space, adding ice to a drink to cool it down, or warming up food on a stovetop to heat it up."
    }
  ]
  },
  

  
]

export default function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className="space-x-3">
        {
          megaMenu.map((item,i)=> {
            return (
              <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2 lg:w-[460px] ">
                  {item.services.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/services${component.slug}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            )
          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
