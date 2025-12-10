import { render, screen } from "@testing-library/react";
import RatingCard from "../components/RatingCard/RatingCard";

describe("RatingCard", () => {
  it("renders the title", () => {
    render(<RatingCard />);
    expect(screen.getByText(/EXCELLENT/i)).toBeInTheDocument();
  });

  it("renders the average rating", () => {
    render(<RatingCard />);
    expect(screen.getByText(/4.6 OUT OF 5/i)).toBeInTheDocument();
  });

  it("renders the product rating label", () => {
    render(<RatingCard />);
    expect(screen.getByText(/Product Rating/i)).toBeInTheDocument();
  });

  it("renders the Feefo image", () => {
    render(<RatingCard />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/feefo.png");
  });

  it("renders all 5 breakdown rows", () => {
    render(<RatingCard />);
    [5, 4, 3, 2, 1].forEach((star) => {
      expect(screen.getByText(star.toString())).toBeInTheDocument();
    });
  });

  it.each([
    { stars: 5, count: 952 },
    { stars: 4, count: 171 },
    { stars: 3, count: 55 },
    { stars: 2, count: 14 },
    { stars: 1, count: 40 },
  ])(
    "renders breakdown row for %i stars with correct count",
    ({ stars, count }) => {
      render(<RatingCard />);
      expect(screen.getByText(stars.toString())).toBeInTheDocument();
      expect(screen.getByText(count.toString())).toBeInTheDocument();
    }
  );

  it("handles all breakdown counts as zero", () => {
    const ratingData = {
      title: "EXCELLENT",
      average: 0,
      stars: 0,
      breakdown: [
        { stars: 5, count: 0 },
        { stars: 4, count: 0 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
      ],
    };
    render(<RatingCard ratingData={ratingData} />);
    expect(screen.getByText(/0 OUT OF 5/i)).toBeInTheDocument();
    [5, 4, 3, 2, 1].forEach((star) => {
      expect(screen.getByText(star.toString())).toBeInTheDocument();
      expect(screen.getAllByText("0").length).toBeGreaterThan(0);
    });
  });

  it("handles null ratingData gracefully", () => {
    render(<RatingCard ratingData={null as any} />);
    // Should not throw, and should render fallback UI or nothing
    expect(screen.queryByText(/OUT OF 5/i)).not.toBeInTheDocument();
  });
});
