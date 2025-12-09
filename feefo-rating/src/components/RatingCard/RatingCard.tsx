import RatingStars from "./RatingStars";
import RatingBarRow from "./RatingBarRow";
import type { RatingBreakdown } from "./types";
const ratingData = {
  title: "EXCELLENT",
  average: 4.6,
  stars: 4.5,
  breakdown: [
    { stars: 5, count: 952 },
    { stars: 4, count: 171 },
    { stars: 3, count: 55 },
    { stars: 2, count: 14 },
    { stars: 1, count: 40 },
  ] as RatingBreakdown,
};

export default function RatingCard() {
  const total = ratingData.breakdown.reduce((sum, r) => sum + r.count, 0); //calculate total to make proportionately filled bars

  return (
    <div
      style={{
        width: "350px",
        background: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginTop: 0, textAlign: "center" }}>{ratingData.title}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <RatingStars value={ratingData.stars} />
      </div>

      <p
        style={{
          textAlign: "center",
          margin: 0,
          fontWeight: 500,
          color: "#555",
        }}
      >
        {ratingData.average} OUT OF 5
      </p>

      <p style={{ textAlign: "center", color: "#555", marginTop: "4px" }}>
        Product Rating{" "}
        <img
          src="/feefo.png"
          style={{ height: "50px", verticalAlign: "middle", marginLeft: "4px" }}
        />
      </p>

      <div style={{ marginTop: "16px" }}>
        {ratingData.breakdown.map((row) => (
          <RatingBarRow
            key={row.stars}
            stars={row.stars}
            count={row.count}
            total={total}
          />
        ))}
      </div>
    </div>
  );
}
