// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import PopupButton from "../PopupButton";

// describe("PopupButton Modal", () => {
//     test("renders the Open Modal button", () => {
//         render(<PopupButton />);
//         expect(screen.getByText("Open Modal")).toBeInTheDocument();
//     });

//     test("opens the modal when clicking the button", () => {
//         render(<PopupButton />);

//         // Click the "Open Modal" button
//         fireEvent.click(screen.getByText("Open Modal"));

//         // Check if modal content appears
//         expect(screen.getByText("Popup Modal")).toBeInTheDocument();
//         expect(screen.getByText("This is a modal popup with some content.")).toBeInTheDocument();
//     });

//     test("closes the modal when clicking the close button", () => {
//         render(<PopupButton />);

//         // Open the modal
//         fireEvent.click(screen.getByText("Open Modal"));

//         // Click the close button
//         fireEvent.click(screen.getByText("✖"));

//         // Modal should not be in the document
//         expect(screen.queryByText("Popup Modal")).not.toBeInTheDocument();
//     });

//     test("closes the modal when clicking outside the modal", () => {
//         render(<PopupButton />);

//         // Open the modal
//         fireEvent.click(screen.getByText("Open Modal"));

//         // Click outside the modal
//         fireEvent.click(screen.getByTestId("modal-overlay"));

//         // Modal should not be in the document
//         expect(screen.queryByText("Popup Modal")).not.toBeInTheDocument();
//     });
// });


const sum = require('../components/PopupButton')


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});