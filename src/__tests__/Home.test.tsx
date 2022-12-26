import Home from "../pages/index";
import { render } from "@testing-library/react";

describe("Home", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});
