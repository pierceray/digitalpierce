import { render, screen } from "@testing-library/react";
import BasicLayout from "./BasicLayout";

describe("BasicLayout", () => {
  it("should render the component", () => {
    render(<BasicLayout>test</BasicLayout>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
