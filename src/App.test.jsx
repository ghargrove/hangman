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
  const { getByTestId, getByText } = render(<App testWord="spec" />);

  'SPEL'.split('').forEach(letter => fireEvent.click(getByText(letter)));
  await waitForElement(() => getByTestId('remaining-guesses'));

  // Make sure the count decreases
  expect(
    await waitForElement(() => getByTestId('remaining-guesses'))
  ).toHaveTextContent('9');

  fireEvent.click(getByText('C'));
  await waitForElement(() => getByTestId('remaining-guesses'));

  // Verify success message
  expect(getByTestId('game-result')).toHaveTextContent('Congrats you won!');

  // Reset the board
  fireEvent.click(getByText('Play again'));

  // Make sure the count is reset
  expect(
    await waitForElement(() => getByTestId('remaining-guesses'))
  ).toHaveTextContent('10');
});

it('shows a sorry message after the user loses', async () => {
  const { getByTestId, getByText } = render(<App testWord="spec" />);

  'ABDFGHIJKL'.split('').forEach(letter => {
    fireEvent.click(getByText(letter));
  });

  // Verify success message
  expect(getByTestId('game-result')).toHaveTextContent(
    'Better luck next time!'
  );

  // Reset the board
  fireEvent.click(getByText('Play again'));

  // Make sure the count is reset
  expect(
    await waitForElement(() => getByTestId('remaining-guesses'))
  ).toHaveTextContent('10');
});
