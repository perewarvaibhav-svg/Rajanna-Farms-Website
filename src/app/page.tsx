"use client";

import React from 'react';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import { motion, useScroll, useTransform } from 'framer-motion';

// ═══════════════════════════════════════════════════════════
// KNITKNOTS-STYLE ANIMATION SYSTEM
// ═══════════════════════════════════════════════════════════

// 1. HERO OPENING — Image zooms from 1.15x down to 1.0x (like the girl picture on KnitKnots)
const heroImageVariant = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

// 2. HERO TEXT — Slides up with fade, staggered after image
const heroTextVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 }
  }
};

// 3. ROTATING PANEL FROM LEFT — Sections swing in from left with 3D rotation
const panelFromLeft = {
  hidden: { opacity: 0, x: -120, rotateY: 15 },
  visible: { 
    opacity: 1, x: 0, rotateY: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 18, mass: 1 }
  }
};

// 4. ROTATING PANEL FROM RIGHT — Sections swing in from right with 3D rotation
const panelFromRight = {
  hidden: { opacity: 0, x: 120, rotateY: -15 },
  visible: { 
    opacity: 1, x: 0, rotateY: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 18, mass: 1 }
  }
};

// 5. SCROLL FADE UP — Standard content reveal (like KnitKnots product cards)
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

// 6. HOVER TILT — tilt + scale + rounded edges on hover
const hoverTilt = {
  scale: 1.04,
  rotateX: 3,
  rotateY: 3,
  borderRadius: "32px",
  boxShadow: "0px 12px 35px rgba(0,0,0,0.18)",
  transition: { type: "spring" as const, stiffness: 300, damping: 15 }
};

// 7. STAGGER CONTAINER — Children animate one-by-one
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax: hero bg moves at 20% scroll speed for depth
  const backgroundY = useTransform(scrollY, [0, 1200], ['0%', '25%']);

  return (
    <main>
      {/* 1. Header (logo + menu) */}
      <motion.header 
        className="top-nav"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <a href="/" className="brand-logo">Rajanna Farms</a>
        <nav className="nav-actions">
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#products" className="nav-link">Shop</a>
          <a href="#best-sellers" className="nav-link">Best Sellers</a>
          <a href="#why-choose-us" className="nav-link">Why Choose Us</a>
          <a href="#about-us" className="nav-link">About Us</a>
          <button className="btn btn-sm" style={{ marginLeft: '10px' }}>Cart (0)</button>
        </nav>
        <MobileNav />
      </motion.header>

      {/* 2. Offer scrolling bar (Marquee) */}
      <motion.div 
        className="marquee-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="marquee-content">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">Limited Time: Free Delivery on orders over ₹499!</span>
              <span className="marquee-item">•</span>
              <span className="marquee-item">100% Pure Organic Assured</span>
              <span className="marquee-item">•</span>
              <span className="marquee-item">New Arrival: Premium A2 Desi Ghee</span>
              <span className="marquee-item">•</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* 3. Hero Section — KnitKnots opening: image zooms in, text slides up after */}
      <section className="hero" style={{ perspective: '1200px' }}>
        {/* PARALLAX BACKGROUND — zooms from 1.15x to 1.0x on load */}
        <motion.div 
          className="hero-background" 
          style={{ y: backgroundY }}
          initial="hidden"
          animate="visible"
          variants={heroImageVariant}
        />
        <div className="hero-overlay"></div>
        <div className="watermark watermark-hero">Rajanna Farms</div>
        <div className="hero-content">
          <motion.h1 initial="hidden" animate="visible" variants={heroTextVariant}>Purity Delivered.<br/>Direct from Farm.</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={heroTextVariant}>
            Experience the finest A2 milk, rich ghee, honey, millets, and spices harvested straight from the heart of our lush farms.
          </motion.p>
          <motion.a initial="hidden" animate="visible" variants={heroTextVariant} href="#products">
            <button className="btn">Shop the Collection</button>
          </motion.a>
        </div>
      </section>

      {/* 4. Categories — ROTATES IN FROM LEFT */}
      <motion.section 
        id="categories" 
        className="container categories-section"
        style={{ perspective: '1200px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={panelFromLeft}
      >
        <h2 className="section-header">Collections</h2>
        <motion.div className="categories categories-carousel" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {[ 
            { title: 'Cow Milk', img: '/images/cow_milk_product.jpg', link: '/product/cow-milk' },
            { title: 'Ghee', img: '/images/desi_ghee_product.jpg', link: '/product/desi-ghee' },
            { title: 'Honey', img: '/images/wild_honey_product.jpg', link: '/product/wild-honey' },
            { title: 'Millets', img: '/images/hero_farm_bg.jpg', link: '/product/millets' },
            { title: 'Spices', img: '/images/hero_farm_bg.jpg', link: '/product/spices' }
          ].map((cat, i) => (
            <Link href={cat.link} key={i}>
              <motion.div 
                className="category-card" 
                variants={fadeUp}
                whileHover={hoverTilt}
              >
                <div className="watermark">Rajanna Farms</div>
                <img src={cat.img} alt={cat.title} />
                <div className="hero-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)' }}></div>
                <h3 className="category-title">{cat.title}</h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.section>

      {/* 5. Products Grid — ROTATES IN FROM RIGHT */}
      <motion.section 
        id="products" 
        className="container products-section"
        style={{ perspective: '1200px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={panelFromRight}
      >
        <div className="products-grid">
          
          {/* Column 1: Fresh Milk */}
          <motion.div className="product-group" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp}>Fresh Milk</motion.h2>
            
            <motion.div className="product-item" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/cow-milk">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/cow_milk_product.jpg" alt="Fresh Cow Milk" />
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/cow-milk" style={{ textDecoration: 'none' }}><h3>Fresh Cow Milk</h3></Link>
                  <span className="product-price">₹60 / L</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add</button>
                  <Link href="/product/cow-milk" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="product-item" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/buffalo-milk">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/buffalo_milk_product.jpg" alt="Fresh Buffalo Milk" />
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/buffalo-milk" style={{ textDecoration: 'none' }}><h3>Fresh Buffalo Milk</h3></Link>
                  <span className="product-price">₹90 / L</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add</button>
                  <Link href="/product/buffalo-milk" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 2: Pantry Essentials */}
          <motion.div className="product-group" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp}>Pantry</motion.h2>
            <motion.div className="product-item" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/desi-ghee">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/desi_ghee_product.jpg" alt="A2 Cow Ghee" />
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/desi-ghee" style={{ textDecoration: 'none' }}><h3>A2 Cow Ghee</h3></Link>
                  <span className="product-price">₹295</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add</button>
                  <Link href="/product/desi-ghee" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="product-item" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/wild-honey">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/wild_honey_product.jpg" alt="Wild Forest Honey" />
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/wild-honey" style={{ textDecoration: 'none' }}><h3>Wild Forest Honey</h3></Link>
                  <span className="product-price">₹280</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add</button>
                  <Link href="/product/wild-honey" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3: Farm Additions */}
          <motion.div className="product-group" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp}>Farm Staples</motion.h2>
            <motion.div className="product-item" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/millets">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/hero_farm_bg.jpg" alt="Organic Pearl Millet" />
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/millets" style={{ textDecoration: 'none' }}><h3>Organic Pearl Millet</h3></Link>
                  <span className="product-price">₹120 / kg</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add</button>
                  <Link href="/product/millets" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="product-item" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/spices">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/hero_farm_bg.jpg" alt="Fresh Turmeric Powder" />
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/spices" style={{ textDecoration: 'none' }}><h3>Pure Turmeric Powder</h3></Link>
                  <span className="product-price">₹150 / 250g</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add</button>
                  <Link href="/product/spices" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 6. Best Sellers — ROTATES IN FROM LEFT */}
      <motion.section 
        id="best-sellers" 
        className="best-sellers-section"
        style={{ perspective: '1200px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={panelFromLeft}
      >
        <motion.h2 className="section-header" style={{ marginBottom: '50px' }} variants={fadeUp}>Best Sellers</motion.h2>
        <div className="best-sellers-card">
          <motion.div className="features-list" variants={fadeUp}>
            <h2>Highest Quality.<br/>Every Day.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
              Our best sellers are chosen by hundreds of families for their uncompromised purity and organic origins. Discover what makes them the everyday favorite.
            </p>
            <button className="btn btn-lg">View All Best Sellers</button>
          </motion.div>

          <div className="best-products">
            <motion.div className="best-product-card" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/desi-ghee">
                <div className="best-product-img-wrapper" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/desi_ghee_product.jpg" alt="Desi Ghee" />
                  <div className="discount-badge">Sale 38%</div>
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/desi-ghee" style={{ textDecoration: 'none' }}>
                    <h3>Reserve A2 Ghee</h3>
                  </Link>
                  <span className="product-price">₹770</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add to Cart</button>
                  <Link href="/product/desi-ghee" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="best-product-card" variants={fadeUp} whileHover={hoverTilt}>
              <Link href="/product/wild-honey">
                <div className="best-product-img-wrapper" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/wild_honey_product.jpg" alt="Wild Honey" />
                  <div className="discount-badge">₹349</div>
                </div>
              </Link>
              <div className="product-details" style={{ flexDirection: 'column', gap: '15px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Link href="/product/wild-honey" style={{ textDecoration: 'none' }}>
                    <h3>Wild Forest Honey</h3>
                  </Link>
                  <span className="product-price">₹749</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button className="btn btn-sm" style={{ flex: 1 }}>Add to Cart</button>
                  <Link href="/product/wild-honey" style={{ flex: 1 }}>
                    <button className="btn btn-sm" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>View Product</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 7. Why choose us — ROTATES IN FROM RIGHT */}
      <motion.section 
        id="why-choose-us" 
        className="container why-choose-us-section"
        style={{ perspective: '1200px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={panelFromRight}
      >
        <motion.h2 variants={fadeUp}>Why Choose Us</motion.h2>
        <motion.div className="features-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div className="feature-card" variants={fadeUp}>
            <div className="feature-icon-large">✿</div>
            <div className="feature-text">
              <h4>Farm Fresh & Direct</h4>
              <p>Sourced locally directly from our own A2 Desi Cows and delivered to you absolutely fresh within hours.</p>
            </div>
          </motion.div>
          <motion.div className="feature-card" variants={fadeUp}>
            <div className="feature-icon-large">✦</div>
            <div className="feature-text">
              <h4>100% Pure & Untouched</h4>
              <p>No chemicals, no preservatives, and no adulteration. Experience the natural richness of authentic organic farming.</p>
            </div>
          </motion.div>
          <motion.div className="feature-card" variants={fadeUp}>
            <div className="feature-icon-large">✧</div>
            <div className="feature-text">
              <h4>Sustainable Practices</h4>
              <p>From ethical farming to eco-friendly glass packaging, every step is calculated to respect our planet.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 8. About us — ROTATES IN FROM LEFT */}
      <motion.section 
        id="about-us" 
        className="about-us-section"
        style={{ perspective: '1200px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={panelFromLeft}
      >
        <div className="about-us-content">
          <h2>Our Story</h2>
          <p>
            Rajanna Farms began with a simple yet profound vision: returning to the roots of pure, authentic agriculture. 
            Nestled in lush green landscapes, our mission is to resurrect the traditional joy of fresh, unadulterated farm products. 
            Every bottle of milk, jar of ghee, and sprinkle of spices embodies our unwavering commitment to quality, nature, and the families we serve. 
            We are more than a farm; we are a promise of wellness and honesty.
          </p>
          <button className="btn" style={{ marginTop: '40px', backgroundColor: 'var(--bg-color)', color: 'var(--primary)' }}>Read More</button>
        </div>
      </motion.section>
    </main>
  );
}
