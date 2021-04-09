import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = 'Jimmy';
    const lastName = 'Neutron';
    const address = '1234 science dr';
    const city = 'Moon';
    const state = 'MA';
    const zip = '12345';

    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, firstName);

    const lastNameInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, lastName);

    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, address);

    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, city);

    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, state);

    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, zip);

    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

    const successMessage = screen.queryByTestId(/successmessage/i);
    expect(successMessage).toBeInTheDocument();
});
