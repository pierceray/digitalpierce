import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render the Footer", () => {
    render(<Footer />);

    expect(screen.getByText("© 2023 Ray Pierce")).toBeInTheDocument();
  });
});
