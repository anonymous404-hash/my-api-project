// File Path: pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Custom API Wrapper</title>
      </Head>

      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>✅ API Wrapper Is Running</h1>
        <p>
          এই পেজটি ফ্রন্টএন্ড। আপনার API এন্ডপয়েন্টটি হলো: 
          <code>/api/number?num=10</code>
        </p>
        <p>
          এই প্রজেক্টটি Vercel-এ সফলভাবে ডিপ্লয় হয়েছে।
        </p>
      </main>
    </div>
  );
}
