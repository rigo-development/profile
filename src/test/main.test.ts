import './style.css';
import { initPortfolioApp } from './main';

describe('Main Application Entrypoint', () => {
  it('should export initPortfolioApp function', () => {
    expect(typeof initPortfolioApp).toBe('function');
  });
});
