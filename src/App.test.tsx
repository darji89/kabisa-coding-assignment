import { fireEvent } from '@testing-library/react';
import App from './App';
import { renderWithWrapper } from './setupTests';
import { APP_TEST_IDS } from './views/app.const';
import { POPULAR_QUOTES_IDS } from './views/PopularQuotes/popularQuotes.const';
import { RANDOM_QUOTES_IDS } from './views/RandomQuotes/randomQuotes.const';

describe('<App />', () => {
  it('Should render intially with start screen', () => {
    const { getByTestId, queryAllByTestId } = renderWithWrapper(<App />);

    expect(queryAllByTestId(APP_TEST_IDS.headerBackButton).length).toBe(0);
    expect(getByTestId(APP_TEST_IDS.headerTitle).innerHTML).toBe('start');
    expect(getByTestId(APP_TEST_IDS.initialScreen)).toBeTruthy();
    expect(getByTestId(APP_TEST_IDS.footer)).toBeTruthy();
  });

  it('Should show random quotes upon button press', () => {
    const { getByTestId, queryAllByTestId } = renderWithWrapper(<App />);
    const button = getByTestId(APP_TEST_IDS.randomButton);

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(getByTestId(APP_TEST_IDS.headerTitle).innerHTML).toBe('random');
    expect(queryAllByTestId(APP_TEST_IDS.initialScreen).length).toBe(0);
    expect(getByTestId(APP_TEST_IDS.headerBackButton)).toBeTruthy();
    expect(getByTestId(RANDOM_QUOTES_IDS.rootContainer)).toBeTruthy();
  });

  it('Should show popular quotes upon button press', () => {
    const { getByTestId, queryAllByTestId } = renderWithWrapper(<App />);
    const button = getByTestId(APP_TEST_IDS.popularButton);

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(getByTestId(APP_TEST_IDS.headerTitle).innerHTML).toBe('popular');
    expect(queryAllByTestId(APP_TEST_IDS.initialScreen).length).toBe(0);
    expect(getByTestId(APP_TEST_IDS.headerBackButton)).toBeTruthy();
    expect(getByTestId(POPULAR_QUOTES_IDS.rootContainer)).toBeTruthy();
  });
});
