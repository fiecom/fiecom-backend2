export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Welcome to Fiecom 🚀</h1>
      <p>Type your prompt here (demo):</p>

      <form method="POST" action="/api/prompt">
        <input
          type="text"
          name="prompt"
          placeholder="e.g. Create a course about dropshipping"
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Send
        </button>
      </form>
    </main>
  );
}

