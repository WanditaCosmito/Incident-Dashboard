import React from 'react';
import { render, screen } from '@testing-library/react';
import CSVUploader from './CSVUploader';

test('renders CSVUploader component', () => {
	render(<CSVUploader />);
	const linkElement = screen.getByText(/upload csv/i);
	expect(linkElement).toBeInTheDocument();
});