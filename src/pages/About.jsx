import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden mb-16 shadow-lg"
      >
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80"
          alt="Jewelry craftsmanship"
          className="w-full h-[400px] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-3xl mx-auto text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl font-light">
              Crafting timeless elegance since 1990
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Heritage Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Our Heritage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 1990, Moonlight Gem & Jewelry has been a beacon of
              excellence in the world of fine jewelry. Our journey began with a
              simple yet powerful vision: to create pieces that transcend time
              and tell unique stories.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to uphold the traditions of exceptional
              craftsmanship while embracing modern innovation, ensuring each
              piece we create is a masterpiece in its own right.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80"
            alt="Jewelry workshop"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.section>

        {/* Craft Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80"
            alt="Gemstone selection"
            className="rounded-lg shadow-lg md:order-2"
            loading="lazy"
          />
          <div className="md:order-1">
            <h2 className="text-3xl font-serif font-semibold mb-6">Our Craft</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every piece of jewelry at Moonlight is a testament to our
              dedication to excellence. Our master craftsmen combine traditional
              techniques with cutting-edge technology to create pieces that are
              both timeless and contemporary.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We source only the finest materials and gemstones, ensuring each
              piece meets our exacting standards for quality and beauty.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl font-serif font-semibold mb-6">
            Experience Our Collection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover our curated selection of fine jewelry, each piece telling
            its own unique story of elegance and craftsmanship.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-lg text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 rounded-md shadow-md"
          >
            View Collection
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};
export default About;
