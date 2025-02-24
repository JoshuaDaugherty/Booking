"use client"
import { Tabs } from "flowbite-react";
import { Crown, Hammer, ShieldAlert } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Specialties/LinkCards";
{/*import { MdDashboard } from "react-icons/md"; */}

export default function TabbedItems() {
  const services =[
    {
    title: "Maintenance Repairs",
    image: "/BlackmanHVAC.jpg",
    slug: "maintenance repairs"
    
    },
    {
      title: "Plumbing Issues",
      image: "/BlackmanHVAC.jpg",
      slug: "plumbing issues"
      
      },
      {
        title: "Heating Problems",
        image: "/BlackmanHVAC.jpg",
        slug: "heating problems"
        
        },
        {
          title: "Cooling Problems",
          image: "/BlackmanHVAC.jpg",
          slug: "cooling problems"
          
          },
          {
            title: "Electrical Wiring ",
            image: "/BlackmanHVAC.jpg",
            slug: "electrical wiring"
            
            }
           

  ]
  const tabs = [
    {
    title: "Popular Services",
    icon: Hammer,
    component: <ServiceList data={services}/>,
    content:[]
    },
    {
    title: "Specialties",
    icon: Crown,
    component: <ServiceList data={services}/>,
    content:[]
    },
    {
    title: "Common Problems",
    icon: ShieldAlert,
    component: <LinkCards className="bg-blue-900"/>,
    content:[]
    }


  ]
  return (
    <Tabs aria-label="Tabs with icons" variant="underline">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
          {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
