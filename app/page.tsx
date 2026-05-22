import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const services = [
    { n: '01', t: 'Website Development', d: 'Business sites, landing pages, dashboards, e-commerce.', a: '#FFD700' },
    { n: '02', t: 'AI Solutions', d: 'Chatbots, GPT integrations, AI assistants, automations.', a: '#FF0055' },
    { n: '03', t: 'Mobile Apps', d: 'Android apps, productivity tools, booking systems.', a: '#6D5D9B' },
    { n: '04', t: 'Automation', d: 'Email, CRM, workflow systems, AI-powered pipelines.', a: '#FFD700' },
    { n: '05', t: 'Backend & APIs', d: 'REST APIs, authentication, databases, admin systems.', a: '#FF0055' },
    { n: '06', t: 'Custom Software', d: 'Any bespoke digital product for your exact needs.', a: '#6D5D9B' },
  ];

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        paddingTop: '80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 40px 80px 40px', position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at bottom left, rgba(109,93,155,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(72px, 10vw, 160px)', lineHeight: 0.88, letterSpacing: '0.01em', color: '#fff', marginBottom: '60px', position: 'relative', zIndex: 2 }}>
            Building<br />
            <span style={{ color: '#FFD700' }}>Digital</span><br />
            Products.
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666', maxWidth: '380px', lineHeight: 1.7 }}>
              I help businesses build modern digital products — websites, AI solutions, mobile apps, and automation systems.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/book" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: '#000', backgroundColor: '#FFD700', padding: '16px 32px', borderRadius: '2px', display: 'inline-block' }}>
                Start a Project
              </Link>
              <Link href="/services" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: '#fff', border: '1px solid #333', padding: '16px 32px', borderRadius: '2px', display: 'inline-block' }}>
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — Logo, no black box */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, padding: '60px 40px' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(109,93,155,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <Image
            src="/Nadaris.png"
            alt="NADARISGETAE"
            width={460}
            height={460}
            style={{ objectFit: 'contain', position: 'relative', zIndex: 2, mixBlendMode: 'lighten' }}
          />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '20px 0', overflow: 'hidden', backgroundColor: '#0D0D0D' }}>
        <div style={{ display: 'flex', gap: '80px', animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
          {['Website Development', 'AI Solutions', 'Mobile Apps', 'Automation', 'Backend Systems', 'Custom Software', 'Website Development', 'AI Solutions', 'Mobile Apps', 'Automation', 'Backend Systems', 'Custom Software'].map((t, i) => (
            <span key={i} style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px', letterSpacing: '0.08em', color: i % 3 === 0 ? '#FFD700' : '#333', flexShrink: 0 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: '160px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '32px' }}>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.9, color: '#fff' }}>
            What I<br /><span style={{ color: '#FFD700' }}>Build.</span>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', maxWidth: '300px', lineHeight: 1.7 }}>
            End-to-end digital solutions crafted for modern businesses and ambitious founders.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: '40px', padding: '32px 0', borderTop: '1px solid #1a1a1a' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#333', minWidth: '28px' }}>{s.n}</span>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: s.a, flexShrink: 0 }} />
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.02em', color: '#fff', flex: 1 }}>{s.t}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#555', maxWidth: '320px', textAlign: 'right', lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #1a1a1a' }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '160px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: '#FFD700', textTransform: 'uppercase', marginBottom: '32px' }}>Ready to build?</p>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(64px, 12vw, 160px)', lineHeight: 0.88, color: '#fff', marginBottom: '60px' }}>
          Let&apos;s make<br />something<br /><span style={{ WebkitTextStroke: '1px #FFD700', color: 'transparent' }}>great.</span>
        </h2>
        <Link href="/book" style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: '#000', backgroundColor: '#FFD700', padding: '20px 48px', borderRadius: '2px', display: 'inline-block' }}>
          Book a Service
        </Link>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          section:first-of-type { grid-template-columns: 1fr !important; }
          section:first-of-type > div:last-child { display: none !important; }
        }
      `}</style>
    </div>
  );
}
