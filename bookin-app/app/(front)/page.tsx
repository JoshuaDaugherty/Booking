import Brands from '@/components/Frontend/Brands';
import Hero from '@/components/Frontend/Hero';
import TabbedSection from '@/components/Frontend/TabbedSection';
import TechnicianList from '@/components/TechnicianList';
import React from 'react';

export default function Home() {
  return (
    <section className="">
      
      <Hero/> 
      <Brands/>
      <TabbedSection/>
      <TechnicianList/>
    </section>
  );
}
