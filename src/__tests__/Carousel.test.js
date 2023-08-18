import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "../components/Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("renders without crashing", function() {
  render(<Carousel />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // Move to the second image by clicking the right arrow
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // Check if the second image is being shown
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // Move back to the first image by clicking the left arrow
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // Expect the first image to show again
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});

it("hides left arrow on first image and right arrow on last image", function() {
  const { queryByTestId } = render(<Carousel />);

  // Check that the left arrow is not visible on the first image
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();

  // Move to the last image by clicking the right arrow
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow); // Assuming there are only 3 images based on previous tests

  // Check that the right arrow is not visible on the last image
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
});
