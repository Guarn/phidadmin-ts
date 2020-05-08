import React from "react";
import Todo from "./Todo";
import { render, fireEvent } from "@testing-library/react";

describe("Todo reacts correctly", () => {
  it("Todo shows correct text", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Todo onClick={onClick} completed text="Bidule" />
    );

    expect(getByText("Bidule")).toBeInTheDocument();
  });
  it("Todo calls onClick fct on on Onclick", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Todo onClick={onClick} completed text="Bidule" />
    );
    fireEvent.click(getByText("Bidule"));
    expect(onClick).toBeCalledTimes(1);
  });
  it("Todo's text is line-through if completed", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Todo onClick={onClick} completed text="Bidule" />
    );
    expect(getByText("Bidule")).toHaveAttribute(
      "style",
      "text-decoration: line-through;"
    );
  });
  it("Todo's text is plain text if not completed", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Todo onClick={onClick} completed={false} text="Bidule" />
    );
    expect(getByText("Bidule")).not.toHaveAttribute(
      "style",
      "text-decoration: line-through;"
    );
  });
});
