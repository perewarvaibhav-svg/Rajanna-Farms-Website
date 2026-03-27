"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import MobileNav from '@/components/MobileNav';
import GlobalScrollObserver from '@/components/GlobalScrollObserver';

const productsDB: Record<string, any> = {
  "desi-ghee": {
    title: "Reserve A2 Desi Cow Ghee",
    price: "₹770",
    unit: "1 Litre",
    image: "/images/desi_ghee_product.jpg",
    description: "Our Reserve A2 Desi Cow Ghee is the crown jewel of Rajanna Farms. Made using the ancient Vedic Bilona method, we culture farm-fresh A2 milk into curd, then hand-churn it into makhan before slowly simmering it over an open wood fire. The result is a vibrant golden ghee with a rich, nutty aroma—completely untouched by chemicals or preservatives. Packed with Omega-3 and essential vitamins, it’s a pure spoonful of wellness for your family.",
    reviews: [
      { name: "Sita Sharma", rating: 5, comment: "Absolutely pure! The aroma takes me back to my village. You can smell the authenticity the moment you open the jar." },
      { name: "Rahul Verma", rating: 5, comment: "I've tried many organic brands, but Rajanna Farms' ghee is by far the best simply because of its texture and taste." },
      { name: "Priya M.", rating: 4, comment: "Great quality and fast delivery. A bit pricey but 100% worth it for pure A2 ghee." }
    ]
  },
  "wild-honey": {
    title: "Wild Forest Honey",
    price: "₹749",
    unit: "500g",
    image: "/images/wild_honey_product.jpg",
    description: "Harvested directly from deep natural forests, our Wild Forest Honey is raw, unfiltered, and unpasteurized. It retains all the natural enzymes, pollen, and floral nectar that commercial processing destroys. Its dark amber color and complex, robust flavor profile make it a perfect natural sweetener for your morning tea, pancakes, or health remedies.",
    reviews: [
      { name: "Kunal D.", rating: 5, comment: "The thickness and taste are unmatched. Pure magic." },
      { name: "Anjali", rating: 5, comment: "My kids love it, and I am glad they are having something completely natural rather than processed sugar." },
      { name: "Dev J.", rating: 5, comment: "I use this honey for my herbal remedies and it works wonders. Authentic product!" }
    ]
  },
  "cow-milk": {
    title: "Fresh Farm Cow Milk",
    price: "₹60",
    unit: "1 Litre",
    image: "/images/cow_milk_product.jpg",
    description: "Experience milk the way nature intended. Sourced entirely from our own free-grazing cows, this milk is delivered to your doorstep within hours of milking. It undergoes strict quality checks to ensure zero adulteration—no hormones, no antibiotics, just rich, creamy, and highly nutritious pure milk for your daily needs.",
    reviews: [
      { name: "Meera T.", rating: 5, comment: "Reminds me of the milk we used to get decades ago. So thick and pure." },
      { name: "Ravi S.", rating: 5, comment: "The cream layer on top is fantastic! Delivery is always on time every morning." },
      { name: "Jyoti K.", rating: 4, comment: "Quality is good and my child digests it well comparing to packet milk." }
    ]
  }
};

export default function ProductPage() {
  const params = useParams();
  const id = (params?.id as string) || "desi-ghee";
  const product = productsDB[id] || productsDB["desi-ghee"];

  return (
    <main>
      <header className="top-nav">
        <Link href="/" className="brand-logo">Rajanna Farms</Link>
        <nav className="nav-actions">
          <Link href="/#categories" className="nav-link">Categories</Link>
          <Link href="/#products" className="nav-link">Shop</Link>
          <button className="btn btn-sm" style={{ marginLeft: '10px' }}>Cart (0)</button>
        </nav>
        <MobileNav />
      </header>
      <GlobalScrollObserver />

      <div className="container product-page-container animate-fade-up delay-1">
        <div className="breadcrumb">
          <Link href="/">Home</Link> &gt; <Link href="/#products">Shop</Link> &gt; <span>{product.title}</span>
        </div>

        <div className="product-page-grid">
          <div className="product-page-image">
            <div className="watermark">Rajanna Farms</div>
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-page-details">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-price-large">
              {product.price} <span className="product-unit">/ {product.unit}</span>
            </div>
            
            <p className="product-description">{product.description}</p>
            
            <div className="product-actions">
              <div className="quantity-selector">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="btn btn-large add-to-cart-btn">Add to Cart</button>
            </div>

            <div className="product-meta">
              <div className="meta-item"><span>✓</span> Farm Fresh & Direct</div>
              <div className="meta-item"><span>✓</span> 100% Pure & Untouched</div>
              <div className="meta-item"><span>✓</span> Sustainable Glass Packaging</div>
            </div>
          </div>
        </div>

        <div className="product-reviews-section animate-fade-up delay-2">
          <h2>Customer Reviews</h2>
          <div className="reviews-grid">
            {product.reviews.map((review: any, i: number) => (
              <div className="review-card" key={i}>
                <div className="review-header">
                  <div className="review-author">{review.name}</div>
                  <div className="review-rating">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className={idx < review.rating ? "star filled" : "star"}>★</span>
                    ))}
                  </div>
                </div>
                <p className="review-text">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
