export default function ServicesPage() {
  const services = [
    { n: '01', t: 'Website Development', a: '#FFD700', items: ['Business websites', 'Landing pages', 'Dashboards & admin panels', 'E-commerce stores', 'Portfolio & brand sites'] },
    { n: '02', t: 'AI Solutions', a: '#FF0055', items: ['AI chatbots', 'GPT-powered assistants', 'AI integrations & APIs', 'Automated AI workflows', 'AI-powered business tools'] },
    { n: '03', t: 'Mobile App Development', a: '#6D5D9B', items: ['Android apps', 'Productivity apps', 'Booking & scheduling apps', 'Business utility apps', 'Custom client apps'] },
    { n: '04', t: 'Automation Systems', a: '#FFD700', items: ['Email automation', 'CRM automation', 'Workflow systems', 'AI-powered pipelines', 'Business process automation'] },
    { n: '05', t: 'Backend & Database', a: '#FF0055', items: ['REST & GraphQL APIs', 'Authentication systems', 'Database architecture', 'Admin systems', 'Booking backends'] },
  ];

  return (
    <div style={{ backgroundColor: '#0D0D0D', paddingTop: '120px' }}>

      <section style={{ padding: '80px 40px 120px', maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: '#FFD700', textTransform: 'uppercase', marginBottom: '40px' }}>What I offer</p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(64px, 12vw, 160px)', lineHeight: 0.88, color: '#fff', marginBottom: '80px' }}>
          Services<br />built for<br /><span style={{ color: '#FFD700' }}>impact.</span>
        </h1>
      </section>

      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px 160px' }}>
        {services.map((s, i) => (
          <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '40px', padding: '64px 0', borderTop: '1px solid #1a1a1a', alignItems: 'start' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: s.a, paddingTop: '8px' }}>{s.n}</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '0.02em', color: '#fff', lineHeight: 1 }}>{s.t}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
              {s.items.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: s.a, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#888' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #1a1a1a' }} />
      </section>

      <section style={{ padding: '0 40px 160px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 8vw, 100px)', color: '#fff', lineHeight: 0.9, marginBottom: '40px' }}>
            Need something<br /><span style={{ WebkitTextStroke: '1px #FFD700', color: 'transparent' }}>custom?</span>
          </h2>
          <a href="/book" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: '#000', backgroundColor: '#FFD700', padding: '18px 40px', borderRadius: '2px', display: 'inline-block' }}>
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
