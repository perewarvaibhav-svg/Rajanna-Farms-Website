import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 1. Header (logo + menu) */}
      <header className="top-nav animate-fade-up">
        <a href="#" className="brand-logo">Rajanna Farms</a>
        <nav className="nav-actions">
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#products" className="nav-link">Shop</a>
          <a href="#best-sellers" className="nav-link">Best Sellers</a>
          <a href="#why-choose-us" className="nav-link">Why Choose Us</a>
          <a href="#about-us" className="nav-link">About Us</a>
          <button className="btn btn-sm" style={{ marginLeft: '10px' }}>Cart (0)</button>
        </nav>
      </header>

      {/* 2. Offer scrolling bar (Marquee) */}
      <div className="marquee-wrapper animate-fade-up">
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
      </div>

      {/* 3. Hero Section */}
      <section className="hero animate-fade-up delay-1" style={{ backgroundImage: "url('/images/hero_farm_bg.png')" }}>
        <div className="hero-overlay"></div>
        <div className="watermark watermark-hero">Rajanna Farms</div>
        <div className="hero-content">
          <h1>Purity Delivered.<br/>Direct from Farm.</h1>
          <p>Experience the finest A2 milk, rich ghee, honey, millets, and spices harvested straight from the heart of our lush farms.</p>
          <button className="btn">Shop the Collection</button>
        </div>
      </section>

      {/* 4. Categories Section (Cow milk, Ghee, Honey, Millets, Spices) */}
      <section id="categories" className="container categories-section animate-fade-up delay-2">
        <h2 className="section-header">Collections</h2>
        <div className="categories">
          {[ 
            { title: 'Cow Milk', img: '/images/cow_milk_product.png', link: '/product/cow-milk' },
            { title: 'Ghee', img: '/images/desi_ghee_product.png', link: '/product/desi-ghee' },
            { title: 'Honey', img: '/images/wild_honey_product.png', link: '/product/wild-honey' },
            { title: 'Millets', img: '/images/hero_farm_bg.png', link: '/product/millets' },
            { title: 'Spices', img: '/images/hero_farm_bg.png', link: '/product/spices' }
          ].map((cat, i) => (
            <Link href={cat.link} key={i}>
              <div className="category-card">
                <div className="watermark">Rajanna Farms</div>
                <img src={cat.img} alt={cat.title} />
                <div className="hero-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)' }}></div>
                <h3 className="category-title">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Products Grid */}
      <section id="products" className="container products-section animate-fade-up delay-3">
        <div className="products-grid">
          {/* Column 1: Fresh Milk */}
          <div className="product-group">
            <h2>Fresh Milk</h2>
            <div className="product-item">
              <Link href="/product/cow-milk">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/cow_milk_product.png" alt="Fresh Cow Milk" />
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
            </div>
            
            <div className="product-item">
              <Link href="/product/buffalo-milk">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/buffalo_milk_product.png" alt="Fresh Buffalo Milk" />
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
            </div>
          </div>

          {/* Column 2: Pantry Essentials */}
          <div className="product-group">
            <h2>Pantry</h2>
            <div className="product-item">
              <Link href="/product/desi-ghee">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/desi_ghee_product.png" alt="A2 Cow Ghee" />
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
            </div>
            
            <div className="product-item">
              <Link href="/product/wild-honey">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/wild_honey_product.png" alt="Wild Forest Honey" />
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
            </div>
          </div>

          {/* Column 3: Farm Additions (Millets & Spices) */}
          <div className="product-group">
            <h2>Farm Staples</h2>
            <div className="product-item">
              <Link href="/product/millets">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/hero_farm_bg.png" alt="Organic Pearl Millet" />
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
            </div>
            
            <div className="product-item">
              <Link href="/product/spices">
                <div className="product-image-container" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/hero_farm_bg.png" alt="Fresh Turmeric Powder" />
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
            </div>
          </div>
        </div>
      </section>

      {/* 6. Best Sellers */}
      <section id="best-sellers" className="best-sellers-section animate-fade-up delay-4">
        <h2 className="section-header" style={{ marginBottom: '50px' }}>Best Sellers</h2>
        <div className="best-sellers-card">
          <div className="features-list">
            <h2>Highest Quality.<br/>Every Day.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
              Our best sellers are chosen by hundreds of families for their uncompromised purity and organic origins. Discover what makes them the everyday favorite.
            </p>
            <button className="btn btn-lg">View All Best Sellers</button>
          </div>

          <div className="best-products">
            <div className="best-product-card">
              <Link href="/product/desi-ghee">
                <div className="best-product-img-wrapper" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/desi_ghee_product.png" alt="Desi Ghee" />
                  <div className="discount-badge">Sale 38%</div>
                </div>
              </Link>
              <div className="product-details" style={{ padding: '0px', flexDirection: 'column', gap: '15px' }}>
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
            </div>
            
            <div className="best-product-card">
              <Link href="/product/wild-honey">
                <div className="best-product-img-wrapper" style={{ cursor: 'pointer' }}>
                  <div className="watermark">Rajanna Farms</div>
                  <img src="/images/wild_honey_product.png" alt="Wild Honey" />
                  <div className="discount-badge">₹349</div>
                </div>
              </Link>
              <div className="product-details" style={{ padding: '0px', flexDirection: 'column', gap: '15px' }}>
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
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why choose us */}
      <section id="why-choose-us" className="container why-choose-us-section animate-fade-up delay-4">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-large">✿</div>
            <div className="feature-text">
              <h4>Farm Fresh & Direct</h4>
              <p>Sourced locally directly from our own A2 Desi Cows and delivered to you absolutely fresh within hours.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-large">✦</div>
            <div className="feature-text">
              <h4>100% Pure & Untouched</h4>
              <p>No chemicals, no preservatives, and no adulteration. Experience the natural richness of authentic organic farming.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-large">✧</div>
            <div className="feature-text">
              <h4>Sustainable Practices</h4>
              <p>From ethical farming to eco-friendly glass packaging, every step is calculated to respect our planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. About us */}
      <section id="about-us" className="about-us-section animate-fade-up delay-4">
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
      </section>
    </main>
  );
}
