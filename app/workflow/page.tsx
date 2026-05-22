export default function WorkflowPage() {
  const steps = [
    { n: '01', t: 'Discovery', d: 'Deep-dive consultation. We align on goals, audience, scope, and technical requirements before a single line of code is written.', a: '#FFD700' },
    { n: '02', t: 'Planning', d: 'A written project plan: scope, timeline, deliverables, tech stack, cost. Full transparency before we begin.', a: '#FF0055' },
    { n: '03', t: 'Development', d: 'Structured sprint-based development with progress updates at every milestone. You review and approve as we build.', a: '#6D5D9B' },
    { n: '04', t: 'Testing', d: 'Rigorous cross-device, cross-browser testing. Bugs, performance, security — all checked before handover.', a: '#FFD700' },
    { n: '05', t: 'Delivery', d: 'Deployed to your platform with full documentation, credentials, and a complete walkthrough.', a: '#FF0055' },
    { n: '06', t: 'Support', d: 'Post-delivery support for fixes, updates, and improvements. Long-term maintenance packages available.', a: '#6D5D9B' },
  ];

  return (
    <div style={{ backgroundColor: '#0D0D0D', paddingTop: '120px' }}>

      <section style={{ padding: '80px 40px 160px', maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: '#FFD700', textTransform: 'uppercase', marginBottom: '40px' }}>How I work</p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(64px, 12vw, 160px)', lineHeight: 0.88, color: '#fff', marginBottom: '120px' }}>
          A process<br />built for<br /><span style={{ color: '#FFD700' }}>results.</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step) => (
            <div key={step.n} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '40px', alignItems: 'start', padding: '56px 0', borderTop: '1px solid #1a1a1a' }}>
              <div>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: step.a }}>{step.n}</span>
              </div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.02em', color: '#fff', lineHeight: 1 }}>{step.t}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#666', lineHeight: 1.75, paddingTop: '8px' }}>{step.d}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #1a1a1a' }} />
        </div>
      </section>

      <section style={{ padding: '0 40px 160px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', backgroundColor: '#111', borderRadius: '4px', padding: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', color: '#fff', lineHeight: 0.9 }}>
            Ready to<br /><span style={{ color: '#FFD700' }}>start?</span>
          </h2>
          <a href="/book" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: '#000', backgroundColor: '#FF0055', padding: '18px 40px', borderRadius: '2px', display: 'inline-block', color: '#fff' }}>
            Book a Service
          </a>
        </div>
      </section>
    </div>
  );
}
