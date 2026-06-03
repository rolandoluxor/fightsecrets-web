import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Fight Secrets" };

export default function PrivacyPage() {
  return (
    <section style={{ padding: "156px 24px 120px", background: "var(--black)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "56px",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#fff",
            marginBottom: "40px",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "20px" }}>
          Fight Secrets / James Wilks collects only the information you
          voluntarily submit through our contact form. This information is used
          solely to respond to your inquiry and is never sold, rented, or shared
          with third parties.
        </p>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
          For questions about your data, contact us via the{" "}
          <a href="/contact" style={{ color: "var(--red-bright)" }}>contact page</a>.
        </p>
      </div>
    </section>
  );
}
