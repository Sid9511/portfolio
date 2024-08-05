"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip ">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems} />
        <Hero/>
        <Grid/>
        <TechStack/>
        <Experience/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
