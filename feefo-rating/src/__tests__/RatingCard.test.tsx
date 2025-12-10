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
    expect(screen.getAllByText(/stars?/i).length).toBeGreaterThanOrEqual(1);
  });
});
