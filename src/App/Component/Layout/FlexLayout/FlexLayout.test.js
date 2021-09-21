import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexLayout from "./FlexLayout";

describe('<FlexLayout />', () => {
    test('it should mount', () => {
        render(<FlexLayoutr />);

        const flexLayout = screen.getByTestId('FlexLayout');

        expect(flexLayout).toBeInTheDocument();
    });
});