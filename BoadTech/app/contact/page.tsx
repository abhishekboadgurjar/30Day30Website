"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}