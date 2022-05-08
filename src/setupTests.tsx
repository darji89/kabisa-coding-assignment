// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, renderHook, RenderOptions } from '@testing-library/react';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

export const wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const renderWithWrapper = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper, ...options });

export const renderHookWithWrapper: typeof renderHook = (callback, options) =>
  renderHook(callback, {
    ...options,
    wrapper,
  });
