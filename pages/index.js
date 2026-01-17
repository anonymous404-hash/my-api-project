import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState('');
  const [key, setKey] = useState('');

  // ===== NEW: PRICE SYSTEM =====
  const [days, setDays] = useState(1);
  const prices = {
    1: 50,
    7: 250,
    30: 800
  };

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
        maxWidth: '750px',
        width: '100%',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '2.2rem', letterSpacing: '3px', marginBottom: '10px' }}>
          ⚡ NUMBER INFO SYSTEM
        </h1>

        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '30px' }}>
          ADVANCED TELECOM DATA EXTRACTOR BY <b>AKASHHACKER</b>
        </p>

        {/* INPUT SECTION */}
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

        {/* API STATUS */}
        <div style={{
          backgroundColor: '#111',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'left',
          borderLeft: '4px solid #00d4ff',
          wordBreak: 'break-all'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>
            📡 <b>API STATUS:</b> <span style={{ color: '#00ff41' }}>OPERATIONAL</span>
          </p>

          <p style={{ margin: '10px 0', color: '#fff' }}>
            🔗 <b>YOUR ENDPOINT:</b><br />
            <code style={{ color: '#00d4ff', fontSize: '0.8rem' }}>
              {number && key ? apiUrl : '/api/number?num=...&key=...'}
            </code>
          </p>
        </div>

        {/* EXECUTE BUTTON */}
        <div style={{ marginTop: '35px' }}>
          <a
            href={number && key ? apiUrl : "#"}
            onClick={(e) => {
              if (!number || !key) {
                e.preventDefault();
                alert("Bhai, Number aur Key dono daalo!");
              }
            }}
            style={{
              textDecoration: 'none',
              color: '#000',
              backgroundColor: number && key ? '#00d4ff' : '#555',
              padding: '12px 30px',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 5px 15px rgba(0, 212, 255, 0.4)',
              cursor: number && key ? 'pointer' : 'not-allowed'
            }}
          >
            EXECUTE DATA QUERY
          </a>
        </div>

        {/* ===== NEW: PRICE + GENERATE KEY ===== */}
        <div style={{
          marginTop: '45px',
          padding: '30px',
          border: '1px dashed #00d4ff',
          borderRadius: '18px',
          backgroundColor: '#0b0b0b'
        }}>
          <h2 style={{ letterSpacing: '2px' }}>🔑 GET API ACCESS</h2>

          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '15px',
              backgroundColor: '#111',
              color: '#00d4ff',
              border: '1px solid #00d4ff',
              borderRadius: '8px',
              fontFamily: 'Orbitron',
              textAlign: 'center'
            }}
          >
            <option value="1">1 Day Access</option>
            <option value="7">7 Days Access</option>
            <option value="30">30 Days Access</option>
          </select>

          <p style={{ marginTop: '15px', fontSize: '1.1rem', color: '#fff' }}>
            💰 Price: <b>₹{prices[days]}</b>
          </p>

          <a
            href={`https://t.me/AkashExploits1?text=Hi%20I%20want%20API%20Key%20for%20${days}%20days.%20Price:%20₹${prices[days]}`}
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '14px 40px',
              borderRadius: '50px',
              backgroundColor: '#00d4ff',
              color: '#000',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(0,212,255,0.6)'
            }}
          >
            🚀 GENERATE API KEY
          </a>
        </div>
      </main>

      <footer style={{ marginTop: '30px', fontSize: '0.7rem', color: '#555', letterSpacing: '1px' }}>
        &copy; 2026 AKASHHACKER // SECURE TERMINAL ACCESS
      </footer>
    </div>
  );
}
