import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #1a1a1a', padding: '80px 40px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '60px', marginBottom: '80px' }}>
          <div>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '72px', color: '#1a1a1a', lineHeight: 1, letterSpacing: '0.02em', userSelect: 'none' }}>
              NADARISGETAE
            </p>
          </div>
          <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase', marginBottom: '20px' }}>Pages</p>
              {[['/', 'Home'], ['/workflow', 'Workflow'], ['/services', 'Services'], ['/contact', 'Contact'], ['/book', 'Book']].map(([href, label]) => (
                <div key={href} style={{ marginBottom: '12px' }}>
                  <Link href={href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', textDecoration: 'none' }}>{label}</Link>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', marginBottom: '12px' }}>hello@nadarisgetae.com</p>
              <a href="tel:+919205964091" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>+91 92059 64091</a>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666' }}>linkedin.com/in/nadarisgetae</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1a1a1a', paddingTop: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#333' }}>© {new Date().getFullYear()} NADARISGETAE</p>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#333' }}>Full-Stack Developer & AI Solutions Builder</p>
        </div>
      </div>
    </footer>
  );
}
