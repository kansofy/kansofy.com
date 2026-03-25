export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { email } = await request.json();

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!email || !emailRegex.test(email)) {
        return Response.json({ error: "Invalid email" }, { status: 400, headers: corsHeaders });
      }

      // Insert into D1
      await env.DB.prepare(
        "INSERT INTO waitlist (email, created_at, source) VALUES (?, datetime('now'), ?)"
      ).bind(email, request.headers.get("Referer") || "direct").run();

      return Response.json({ ok: true }, { headers: corsHeaders });
    } catch (err) {
      // Duplicate email
      if (err.message?.includes("UNIQUE")) {
        return Response.json({ ok: true, message: "Already registered" }, { headers: corsHeaders });
      }
      return Response.json({ error: "Server error" }, { status: 500, headers: corsHeaders });
    }
  },
};
