'use client';
import { useState } from 'react';

export default function BookPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', description: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || !form.service || !form.description) {
      setErrorMsg('Please fill all required fields.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) setStatus('success');
      else { setStatus('error'); setErrorMsg(data.error || 'Something went wrong.'); }
    } catch { setStatus('error'); setErrorMsg('Network error. Please try again.'); }
  };

  const field = {
    width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #222',
    padding: '16px 0', fontSize: '15px', color: '#fff', outline: 'none',
    fontFamily: 'DM Sans, sans-serif', transition: 'border-color 0.2s',
  };
  const label = {
    display: 'block', fontFamily: 'Space Mono, monospace', fontSize: '10px',
    letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase', marginBottom: '8px',
  };

  if (status === 'success') return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: '#FFD700', marginBottom: '32px', textTransform: 'uppercase' }}>Success</p>
      <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(56px, 10vw, 120px)', color: '#fff', lineHeight: 0.9, marginBottom: '32px' }}>
        Booking<br />Received.
      </h1>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666', maxWidth: '440px', lineHeight: 1.7, marginBottom: '48px' }}>
        Your inquiry has been submitted. I will review it and respond within 24 to 48 hours. Check your email for a confirmation.
      </p>
      <a href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: '#000', backgroundColor: '#FFD700', padding: '16px 36px', borderRadius: '2px', display: 'inline-block' }}>Back to Home</a>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#0D0D0D', paddingTop: '120px' }}>
      <section style={{ padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: '#FFD700', textTransform: 'uppercase', marginBottom: '40px' }}>Start a project</p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(64px, 10vw, 130px)', lineHeight: 0.88, color: '#fff', marginBottom: '80px' }}>
          Book a<br /><span style={{ color: '#FFD700' }}>Service.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
              <label style={label}>Full Name *</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Your full name" style={field} />
            </div>
            <div>
              <label style={label}>Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" style={field} />
            </div>
            <div>
              <label style={label}>Company Name</label>
              <input name="company" value={form.company} onChange={handle} placeholder="Optional" style={field} />
            </div>
            <div>
              <label style={label}>Service Required *</label>
              <select name="service" value={form.service} onChange={handle} style={{ ...field, cursor: 'pointer' }}>
                <option value="" style={{ background: '#111' }}>Select a service</option>
                <option value="Website Development" style={{ background: '#111' }}>Website Development</option>
                <option value="AI Solutions" style={{ background: '#111' }}>AI Solutions</option>
                <option value="Mobile App Development" style={{ background: '#111' }}>Mobile App Development</option>
                <option value="Automation Systems" style={{ background: '#111' }}>Automation Systems</option>
                <option value="Backend and Database" style={{ background: '#111' }}>Backend and Database</option>
                <option value="Custom Project" style={{ background: '#111' }}>Custom Project</option>
              </select>
            </div>
            <div>
              <label style={label}>Budget (in Indian Rupees ₹)</label>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#FFD700', pointerEvents: 'none',
                }}>₹</span>
                <input
                  name="budget"
                  type="text"
                  value={form.budget}
                  onChange={handle}
                  placeholder="e.g. 25,000"
                  style={{ ...field, paddingLeft: '20px' }}
                />
              </div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#333', marginTop: '8px', letterSpacing: '0.08em' }}>
                ENTER YOUR ESTIMATED BUDGET IN INR
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ flex: 1 }}>
              <label style={label}>Project Description *</label>
              <textarea name="description" value={form.description} onChange={handle} placeholder="Describe your project in detail. What do you need built? What problem does it solve?" style={{ ...field, minHeight: '320px', resize: 'vertical' }} />
            </div>

            {errorMsg && (
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#FF0055', padding: '12px 0', borderTop: '1px solid rgba(255,0,85,0.2)' }}>{errorMsg}</p>
            )}

            <button onClick={submit} disabled={status === 'loading'} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#000', backgroundColor: status === 'loading' ? '#888' : '#FFD700',
              border: 'none', padding: '20px 40px', borderRadius: '2px',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer', width: '100%',
              transition: 'background 0.2s',
            }}>
              {status === 'loading' ? 'Submitting...' : 'Submit Request'}
            </button>

            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#333', lineHeight: 1.8, letterSpacing: '0.05em' }}>
              By submitting you agree to be contacted about your inquiry. No spam, ever.
            </p>
          </div>
        </div>
      </section>
      <div style={{ height: '160px' }} />
    </div>
  );
}
