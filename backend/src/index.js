const port = process.env.PORT || 5000;

Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/api/health") {
      return Response.json({
        status: "ok",
        message: "Ever Green Model School (E.G.M.S) Backend API is running",
        timestamp: new Date().toISOString(),
      });
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 EGMS Backend API server running on http://localhost:${port}`);
