import { describe, it, expect } from 'vitest';
import { initPortfolioApp } from '../main';

describe('Main Application Entrypoint', () => {
  it('should export initPortfolioApp function', () => {
    expect(typeof initPortfolioApp).toBe('function');
  });
});
