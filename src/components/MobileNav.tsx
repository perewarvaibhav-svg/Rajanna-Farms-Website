"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`ham-line ${open ? 'open-1' : ''}`}></span>
        <span className={`ham-line ${open ? 'open-2' : ''}`}></span>
        <span className={`ham-line ${open ? 'open-3' : ''}`}></span>
      </button>

      {open && (
        <div className="mobile-drawer" onClick={() => setOpen(false)}>
          <div className="mobile-drawer-inner" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-logo">Rajanna Farms</div>
            <nav className="mobile-nav-links">
              <a href="/#categories" className="mobile-nav-link" onClick={() => setOpen(false)}>Categories</a>
              <a href="/#products" className="mobile-nav-link" onClick={() => setOpen(false)}>Shop</a>
              <a href="/#best-sellers" className="mobile-nav-link" onClick={() => setOpen(false)}>Best Sellers</a>
              <a href="/#why-choose-us" className="mobile-nav-link" onClick={() => setOpen(false)}>Why Choose Us</a>
              <a href="/#about-us" className="mobile-nav-link" onClick={() => setOpen(false)}>About Us</a>
            </nav>
            <button className="btn" style={{ width: '100%', textAlign: 'center' }}>Cart (0)</button>
          </div>
        </div>
      )}
    </>
  );
}
