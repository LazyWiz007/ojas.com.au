import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-white block">
                OJAS <span className="text-accent">GROUP</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-white/70">
                Industrial Excellence
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Australia&apos;s premier partner in precision engineering, industrial manufacturing, and critical cable infrastructure.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-accent transition-colors font-medium text-sm">
                LinkedIn
              </Link>
              <Link href="#" className="text-white/60 hover:text-accent transition-colors font-medium text-sm">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About & Sustainability", href: "/about" },
                { name: "Our Businesses", href: "/businesses" },
                { name: "Industries Served", href: "/industries" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Lifecycle Support</h4>
            <ul className="space-y-3">
              {[
                { name: "Local Cable Supply", href: "/businesses#cable-australia" },
                { name: "NATA Accredited Testing", href: "/businesses#cablab" },
                { name: "EL Drone Inspections", href: "/businesses#cablab" },
                { name: "Solar Panel Recycling", href: "/businesses#elecsome" },
                { name: "Circular Economy Solutions", href: "/businesses#elecsome" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/70 text-sm hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/70 text-sm">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Naxos Way<br />
                  Melbourne, VIC<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:sales@ojas.com.au" className="hover:text-white transition-colors">sales@ojas.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Logos */}
        <div className="border-t border-white/10 pt-12 pb-8 flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
          <Image src="/images/cable-australia.png" alt="Cable Australia" width={140} height={60} className="h-12 w-auto object-contain" />
          <Image src="/images/cablab.png" alt="CabLab" width={140} height={60} className="h-12 w-auto object-contain" />
          <Image src="/images/elecsome.png" alt="ElecSome" width={140} height={60} className="h-12 w-auto object-contain" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Ojas Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
