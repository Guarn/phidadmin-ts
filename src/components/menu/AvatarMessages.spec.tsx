import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AvatarMessages } from "./AvatarMessages";

describe("AvatarMessages component", () => {
  it("calls the dispatch for modal when clicked", () => {
    const dispatch = jest.fn();
    const { getByTitle } = render(<AvatarMessages dispatch={dispatch} />);
    fireEvent.click(getByTitle("Notifications icon"));
    expect(dispatch).toBeCalledWith({
      operation: "create",
      target: "Bidule",
      type: "CONFIRMATION",
    });
  });
});
