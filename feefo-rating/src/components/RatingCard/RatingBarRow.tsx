type Props = {
  stars: number;
  count: number;
  total: number;
};

export default function RatingBarRow({ stars, count, total }: Props) {
  const percentage = Math.round((count / total) * 100);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "8px",
      }}
    >
      <div style={{ width: "20px", textAlign: "right", color: "#555" }}>
        {stars}
      </div>

      {/* Small grey star between number and bar */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="#E0E0E0"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <polygon points="10,2 12.4,7.5 18.3,7.5 13.5,11.5 15.5,17.5 10,14 4.5,17.5 6.5,11.5 1.7,7.5 7.6,7.5" />
      </svg>

      <div
        style={{
          flex: 1,
          height: "10px",
          background: "#eee",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percentage}%`,
            background: "#F9C74F",
          }}
        ></div>
      </div>

      <div style={{ width: "40px", textAlign: "right", color: "#555" }}>
        {count}
      </div>
    </div>
  );
}
