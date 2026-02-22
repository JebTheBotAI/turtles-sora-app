export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial, sans-serif", padding: "0 16px" }}>
      <h1>Turtles in the Reef (Sora Demo)</h1>
      <p>Sora-generated turtle clip embedded below.</p>
      <video
        src="https://raw.githubusercontent.com/JebTheBotAI/turtles-sora-app/main/public/turtles.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", borderRadius: 12, background: "#000" }}
      />
    </main>
  );
}
