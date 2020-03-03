import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import App from './App';

it('decreases the remaining guesses count after an incorrect guess', async () => {
  const { getByTestId, getByText } = render(<App testWord="spec" />);
  expect(getByTestId('remaining-guesses')).toHaveTextContent('10');
  fireEvent.click(getByText('A'));
  expect(
    await waitForElement(() => getByTestId('remaining-guesses'))
  ).toHaveTextContent('9');
});

it('shows a success message after the user guesses the word', async () => {
  const { getByTestId, getByText } = render(<App testWord="spec" />, {
    container: document.body,
  });
  expect(getByTestId('remaining-guesses')).toHaveTextContent('10');

  ['S', 'P', 'E', 'C'].forEach(async letter => {
    fireEvent.click(getByText(letter));
    await waitForElement(() => getByTestId('remaining-guesses'));
  });

  expect(getByTestId('remaining-guesses')).toHaveTextContent('9');
});
