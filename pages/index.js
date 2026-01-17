import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState('');
  const [key, setKey] = useState('');

  // Dynamic URL generate karne ke liye
  const apiUrl = `/api/number?num=${number}&key=${key}`;

  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#00d4ff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Orbitron, sans-serif',
      margin: 0,
      padding: '20px'
    }}>
      <Head>
        <title>AKASHHACKER | NUMBER INFO API</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={{
        border: '1px solid #00d4ff',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
        backgroundColor: 'rgba(0, 212, 255, 0.02)',
        maxWidth: '700px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '2.2rem', letterSpacing: '3px', marginBottom: '10px' }}>
          ⚡ NUMBER INFO SYSTEM
        </h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '30px' }}>
          ADVANCED TELECOM DATA EXTRACTOR BY <b>{ "AKASHHACKER" }</b>
        </p>
        
        {/* Input Section */}
        <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="ENTER PHONE NUMBER" 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #00d4ff',
              backgroundColor: '#111',
              color: '#00d4ff',
              fontFamily: 'Orbitron',
              textAlign: 'center',
              outline: 'none'
            }}
          />
          <input 
            type="text" 
            placeholder="ENTER ACCESS KEY" 
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #00d4ff',
              backgroundColor: '#111',
              color: '#00d4ff',
              fontFamily: 'Orbitron',
              textAlign: 'center',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ 
          backgroundColor: '#111', 
          padding: '20px', 
          borderRadius: '10px', 
          textAlign: 'left',
          borderLeft: '4px solid #00d4ff',
          wordBreak: 'break-all'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>📡 <b>API STATUS:</b> <span style={{color: '#00ff41'}}>OPERATIONAL</span></p>
          <p style={{ margin: '10px 0', color: '#fff' }}>🔗 <b>YOUR ENDPOINT:</b><br/> 
            <code style={{ color: '#00d4ff', fontSize: '0.8rem' }}>
              {number && key ? apiUrl : '/api/number?num=...&key=...'}
            </code>
          </p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <a 
            href={number && key ? apiUrl : "#"} 
            onClick={(e) => { if(!number || !key) { e.preventDefault(); alert("Bhai, Number aur Key dono daalo!"); } }}
            style={{
              textDecoration: 'none',
              color: '#000',
              backgroundColor: number && key ? '#00d4ff' : '#555',
              padding: '12px 30px',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 5px 15px rgba(0, 212, 255, 0.4)',
              transition: '0.4s',
              cursor: number && key ? 'pointer' : 'not-allowed'
            }}
            onMouseOver={(e) => { if(number && key) e.target.style.transform = 'scale(1.05)' }}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            EXECUTE DATA QUERY
          </a>
        </div>
      </main>

      <footer style={{ marginTop: '30px', fontSize: '0.7rem', color: '#555', letterSpacing: '1px' }}>
        &copy; 2026 AKASHHACKER // SECURE TERMINAL ACCESS
      </footer>
    </div>
  );
}
