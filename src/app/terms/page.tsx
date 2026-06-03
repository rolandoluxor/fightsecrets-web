import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use | Fight Secrets" };

export default function TermsPage() {
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
          Terms of Use
        </h1>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "20px" }}>
          By accessing this website you agree to use it for lawful purposes
          only. All content — including text, images, and training materials —
          is the intellectual property of James Wilks / Fight Secrets and may
          not be reproduced without written permission.
        </p>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
          Questions? Contact us via the{" "}
          <a href="/contact" style={{ color: "var(--red-bright)" }}>contact page</a>.
        </p>
      </div>
    </section>
  );
}
