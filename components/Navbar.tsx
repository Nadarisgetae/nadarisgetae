'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Workflow', href: '/workflow' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '20px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(13,13,13,0.95)' : 'rgba(13,13,13,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1a1a1a',
      }}>

        {/* LOGO + BRAND */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/Nadaris.png" alt="Logo" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: '#ffffff', textTransform: 'uppercase' }}>
            NADARISGETAE
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: pathname === l.href ? '#FFD700' : '#aaaaaa',
              transition: 'color 0.2s',
            }}>{l.label}</Link>
          ))}
          <Link href="/book" style={{
            fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
            color: '#000', backgroundColor: '#FFD700',
            padding: '10px 22px', borderRadius: '2px',
          }}>Book Now</Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="mobile-menu-btn" style={{
          background: 'none', border: 'none', cursor: 'pointer', display: 'none',
          flexDirection: 'column', gap: '5px', padding: '4px',
        }}>
          <span style={{ width: '24px', height: '1px', background: '#fff', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ width: '24px', height: '1px', background: '#fff', display: 'block', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
          <span style={{ width: '24px', height: '1px', background: '#fff', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99, backgroundColor: '#0D0D0D',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px',
        }}>
          {[...links, { label: 'Book Now', href: '/book' }].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', letterSpacing: '0.05em',
              color: l.href === '/book' ? '#FFD700' : '#fff', textDecoration: 'none',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
