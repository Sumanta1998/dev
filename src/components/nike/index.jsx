import React from "react";
import Hero from "./sections/Hero";
import Nav from "./ui/Nav";
import PopularProducts from "./sections/PopularProducts";

const NikeLandingPage = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
    </main>
  );
};

export default NikeLandingPage;
