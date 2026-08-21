import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import daoLogo from "@/dao-logo-on-dark.png";

export const Route = createFileRoute("/graphic")({
  head: () => ({
    meta: [
      { title: "RBNT Venue Graphics Export" },
      {
        name: "description",
        content:
          "Internal export page for the RBNT venue reference graphics at 1080x1080 and 1200x630.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "RBNT Venue Graphics Export" },
      {
        property: "og:description",
        content:
          "Internal export page for the RBNT venue reference graphics at 1080x1080 and 1200x630.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GraphicPage,
});

const C = {
  bg: "#0f181d",
  card: "#1e2a31",
  nested: "#1b252a",
  hairline: "#27323a",
  border: "#3a4650",
  text: "#e4ebf0",
  secondary: "#b8c4cc",
  muted: "#93a4ae",
  accent: "#ffb3ae",
  brand: "#EF5350",
  ok: "#86EFAC",
  warn: "#FCD34D",
};

const SANS = '"Be Vietnam Pro", ui-sans-serif, system-ui, sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, monospace';

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: 4,
        background: color,
        flex: "0 0 auto",
      }}
    />
  );
}

function Label({ children, size = 12 }: { children: string; size?: number }) {
  return (
    <div
      style={{
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: C.muted,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: C.hairline, width: "100%" }} />;
}

function Row({
  name,
  pairs,
  dot,
  note,
  scale = 1,
}: {
  name: string;
  pairs: string;
  dot: string;
  note?: string;
  scale?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10 * scale,
        padding: `${8 * scale}px 0`,
        borderTop: `1px solid ${C.hairline}`,
      }}
    >
      <div style={{ paddingTop: 7 * scale, lineHeight: 0 }}>
        <Dot color={dot} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 * scale }}>
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 18 * scale,
              letterSpacing: "-0.02em",
              color: C.text,
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 14 * scale,
              color: C.secondary,
            }}
          >
            {pairs}
          </span>
        </div>
        {note ? (
          <div
            style={{
              fontFamily: SANS,
              fontSize: 13 * scale,
              lineHeight: 1.5,
              color: C.muted,
              marginTop: 2 * scale,
            }}
          >
            {note}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Card({
  children,
  fill = C.card,
  pad = 20,
}: {
  children: React.ReactNode;
  fill?: string;
  pad?: number;
}) {
  return (
    <div
      style={{
        background: fill,
        border: `1px solid ${C.hairline}`,
        borderRadius: 8,
        padding: pad,
      }}
    >
      {children}
    </div>
  );
}

function WrappedTag({ scale = 1 }: { scale?: number }) {
  return (
    <div
      style={{
        display: "inline-block",
        background: C.brand,
        color: "#ffffff",
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 12 * scale,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: `${4 * scale}px ${8 * scale}px`,
        borderRadius: 4,
      }}
    >
      Wrapped RBNT (wRBNT) - separate token from native
    </div>
  );
}

function Stamp({ scale = 1 }: { scale?: number }) {
  return (
    <div>
      <div style={{ fontFamily: MONO, fontSize: 14 * scale, color: C.secondary }}>
        Last verified: 2026-08-21
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 12 * scale,
          color: C.muted,
          marginTop: 2 * scale,
        }}
      >
        Re-check before moving funds. Listings change.
      </div>
    </div>
  );
}

function Header({ scale = 1 }: { scale?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img
        src={daoLogo}
        alt="Redbelly DAO"
        style={{ height: 40 * scale, width: "auto", objectFit: "contain" }}
      />
      <div style={{ fontFamily: MONO, fontSize: 13 * scale, color: C.muted }}>TASK-20</div>
    </div>
  );
}

function Derivatives({ scale = 1 }: { scale?: number }) {
  return (
    <Card fill={C.nested} pad={18 * scale}>
      <Label size={12 * scale}>Derivatives / Futures</Label>
      <div style={{ display: "flex", gap: 10 * scale, marginTop: 10 * scale }}>
        <div style={{ paddingTop: 7 * scale, lineHeight: 0 }}>
          <Dot color={C.brand} />
        </div>
        <div>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 19 * scale,
              letterSpacing: "-0.02em",
              color: C.text,
            }}
          >
            No futures or perpetuals market confirmed.
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 13 * scale,
              lineHeight: 1.5,
              color: C.muted,
              marginTop: 6 * scale,
            }}
          >
            Checked directly against CoinGecko's Spot/Perpetuals/Futures tabs. All results sit
            under Spot.
          </div>
        </div>
      </div>
    </Card>
  );
}

function SpotBlocks({ scale = 1, compact = false }: { scale?: number; compact?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: (compact ? 10 : 14) * scale }}>
      <Card pad={(compact ? 14 : 18) * scale}>
        <Label size={12 * scale}>Native RBNT - CEX</Label>
        <div style={{ marginTop: 6 * scale }}>
          <Row scale={scale} dot={C.ok} name="Gate" pairs="RBNT/USDT" />
          <Row
            scale={scale}
            dot={C.ok}
            name="MEXC"
            pairs="RBNT/USDT, RBNT/USDC"
            note="Highest volume of the four."
          />
          <Row scale={scale} dot={C.ok} name="BYDFi" pairs="RBNT/USDT" />
          <Row
            scale={scale}
            dot={C.warn}
            name="WhiteBIT"
            pairs="RBNT/USDT"
            note={
              compact
                ? "Thin. No trades seen for hours."
                : "Thin. No trades seen in hours before verification."
            }
          />
        </div>
      </Card>

      <Card pad={(compact ? 14 : 18) * scale}>
        <Label size={12 * scale}>Native RBNT - On-chain</Label>
        <div style={{ marginTop: 6 * scale }}>
          <Row scale={scale} dot={C.ok} name="Reddex" pairs="RBNT/USDC.e" />
          <Row scale={scale} dot={C.ok} name="Reddex" pairs="WRBNT/USDC.e" />
        </div>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 13 * scale,
            lineHeight: 1.5,
            color: C.muted,
            marginTop: 8 * scale,
          }}
        >
          {compact
            ? "Only venue trading RBNT and wRBNT on Redbelly Network without bridging."
            : "Reddex is the only venue trading RBNT and wRBNT directly on Redbelly Network without bridging."}
        </div>
      </Card>

      <Card pad={(compact ? 14 : 18) * scale}>
        <WrappedTag scale={scale} />
        <div style={{ marginTop: 8 * scale }}>
          <Row
            scale={scale}
            dot={C.warn}
            name="Ethereum"
            pairs="1inch, OKX DEX, Bitget"
            note={compact ? undefined : "Thin."}
          />
          <Row
            scale={scale}
            dot={C.warn}
            name="Base"
            pairs="KyberSwap, 1inch, OKX DEX, Bitget"
            note={compact ? undefined : "Thin."}
          />
          <Row
            scale={scale}
            dot={C.warn}
            name="Solana"
            pairs="Raydium"
            note="Thin. High slippage at size, 86.77% impact at 10k."
          />
        </div>
      </Card>
    </div>
  );
}


function Frame1080() {
  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        background: C.bg,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Header scale={1.1} />
      <div style={{ marginTop: 16 }}>
        <div
          style={{
            fontFamily: SANS,
            fontWeight: 700,
            fontSize: 34,
            letterSpacing: "-0.02em",
            color: C.text,
          }}
        >
          Where to buy and trade RBNT
        </div>
        <div style={{ height: 4, width: 88, background: C.brand, marginTop: 10, borderRadius: 4 }} />
      </div>

      <div style={{ marginTop: 14, flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <Label size={12}>Spot</Label>
        <SpotBlocks scale={0.82} />
        <Divider />
        <Derivatives scale={0.82} />
      </div>

      <div style={{ marginTop: 14 }}>
        <Divider />
        <div style={{ marginTop: 10 }}>
          <Stamp scale={1} />
        </div>
      </div>
    </div>
  );
}

function Frame1200() {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        background: C.bg,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Header scale={0.8} />
      <div style={{ display: "flex", gap: 20, marginTop: 12, flex: 1, minHeight: 0 }}>
        <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "-0.02em",
              color: C.text,
            }}
          >
            Where to buy and trade RBNT
          </div>
          <Label size={11}>Spot</Label>
          <div style={{ transform: "scale(0.88)", transformOrigin: "top left", width: "113.6%" }}>
            <SpotBlocks scale={0.62} compact />
          </div>

        </div>
        <div style={{ width: 1, background: C.hairline }} />
        <div style={{ flex: "0 0 290px", display: "flex", flexDirection: "column" }}>
          <Derivatives scale={0.8} />
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <Divider />
        <div style={{ marginTop: 8 }}>
          <Stamp scale={0.85} />
        </div>
      </div>
    </div>
  );
}


function GraphicPage() {
  const sq = useRef<HTMLDivElement>(null);
  const og = useRef<HTMLDivElement>(null);

  const exportPng = async (
    node: HTMLDivElement | null,
    width: number,
    height: number,
    name: string,
  ) => {
    if (!node) return;
    const { toPng } = await import("html-to-image");
    const dataUrl = await toPng(node, {
      width,
      height,
      pixelRatio: 1,
      cacheBust: true,
      backgroundColor: C.bg,
    });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = name;
    a.click();
  };

  const btn: React.CSSProperties = {
    fontFamily: SANS,
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0",
    textTransform: "none",
    color: "#ffffff",
    background: C.brand,
    border: "none",
    borderRadius: 4,
    padding: "10px 20px",
    cursor: "pointer",
    transition: "opacity 150ms ease",
  };

  return (
    <main
      style={{
        background: C.bg,
        minHeight: "100vh",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <h1
        style={{
          fontFamily: SANS,
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "-0.02em",
          color: C.text,
        }}
      >
        RBNT venue graphics export
      </h1>

      <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Label>1080 x 1080</Label>
        <div ref={sq} style={{ width: 1080, height: 1080 }}>
          <Frame1080 />
        </div>
        <div>
          <button
            className="transition-opacity hover:opacity-90"
            style={btn}
            onClick={() => exportPng(sq.current, 1080, 1080, "rbnt-venues-1080x1080.png")}
          >
            Export PNG
          </button>
        </div>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Label>1200 x 630</Label>
        <div ref={og} style={{ width: 1200, height: 630 }}>
          <Frame1200 />
        </div>
        <div>
          <button
            className="transition-opacity hover:opacity-90"
            style={btn}
            onClick={() => exportPng(og.current, 1200, 630, "rbnt-venues-1200x630.png")}
          >
            Export PNG
          </button>
        </div>
      </section>
    </main>
  );
}
