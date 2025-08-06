// File: /api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { messages } = req.body;

  try {
    const openRouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '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',
        'HTTP-Referer': 'https://sakshamverse-neon.vercel.app', // your actual site domain
      },
      body: JSON.stringify({
        model: "openchat/openchat-7b:free",
        messages,
      }),
    });

    const data = await openRouterRes.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
