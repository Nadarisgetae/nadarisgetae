export default function ContactPage() {
  const contacts = [
    { label: 'Email', value: 'nadarisgetae@gmail.com', href: 'mailto:nadarisgeate@gmail.com', a: '#FFD700' },
    { label: 'Contact No.', value: '+91 9205964091',  a: '#6D5D9B' },
    { label: 'LinkedIn', value: 'linkedin.com/in/nadarisgetae', href: 'https://linkedin.com/in/nadarisgetae', a: '#FF0055' },
  ];

  return (
    <div style={{ backgroundColor: '#0D0D0D', paddingTop: '120px' }}>
      <section style={{ padding: '80px 40px 120px', maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: '#FFD700', textTransform: 'uppercase', marginBottom: '40px' }}>Get in touch</p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(64px, 12vw, 160px)', lineHeight: 0.88, color: '#fff', marginBottom: '120px' }}>
          Let's build<br />something<br /><span style={{ color: '#FFD700' }}>great.</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', alignItems: 'center', gap: '40px', padding: '40px 0', borderTop: '1px solid #1a1a1a', textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: c.a }}>{c.label}</span>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(24px, 4vw, 48px)', color: '#fff', letterSpacing: '0.02em' }}>{c.value}</span>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#444', letterSpacing: '0.1em' }}>OPEN</span>
            </a>
          ))}
          <div style={{ borderTop: '1px solid #1a1a1a' }} />
        </div>
      </section>

      <section style={{ padding: '0 40px 160px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', borderRadius: '4px', padding: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase', marginBottom: '16px' }}>Formal inquiry</p>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 0.9 }}>Use the<br />booking form.</h2>
          </div>
          <a href="/book" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: '#fff', backgroundColor: '#FF0055', padding: '18px 40px', borderRadius: '2px', display: 'inline-block' }}>
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
