import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <div className="h-16" /> {/* Spacer to separate content from footer */}
      <Footer />
    </div>
  );
}