type Props = {
  value: number; // e.g. 4.7
};

export default function RatingStars({ value }: Props) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {/* Create an array of 5 elements (for 5 stars) and map over it */}
      {Array.from({ length: 5 }, (_, i) => {
        // For each star index (i):
        // - If the rating is greater than or equal to the next whole number (i+1), it's a full star.
        // - If the rating is greater than the current index but less than the next, it's a partial star.
        // - Otherwise, it's an empty star.
        let fill = 0;
        if (value >= i + 1) {
          fill = 1; // full star
        } else if (value > i) {
          fill = value - i; // partial star (fractional fill)
        }
        // Render the star with the appropriate fill using a background color or gradient
        return (
          <div
            key={i}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              background:
                fill === 1
                  ? "#F9C74F"
                  : fill > 0
                  ? `linear-gradient(90deg, #F9C74F ${fill * 100}%, #E0E0E0 ${
                      fill * 100
                    }%)`
                  : "#E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute" }}
            >
              <polygon points="10,2 12.4,7.5 18.3,7.5 13.5,11.5 15.5,17.5 10,14 4.5,17.5 6.5,11.5 1.7,7.5 7.6,7.5" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
