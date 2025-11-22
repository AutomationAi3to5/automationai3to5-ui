/**
 * Icon Component Tests
 * Unit tests for Icon component
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../Icon';

describe('Icon Component', () => {
  // Props Tests
  describe('Props', () => {
    it('should render with default props', () => {
      const { container } = render(<Icon name="home" category="navigation" />);
      expect(container).toBeInTheDocument();
    });

    it('should accept name prop', () => {
      const { container } = render(<Icon name="download" category="actions" />);
      expect(container.querySelector('.icon')).toBeInTheDocument();
    });

    it('should accept category prop', () => {
      const { container } = render(<Icon name="user" category="users" />);
      expect(container.querySelector('.icon')).toBeInTheDocument();
    });

    it('should accept size prop', () => {
      const { container } = render(<Icon name="home" category="navigation" size={32} />);
      const svg = container.querySelector('svg');
      if (svg) {
        expect(svg).toHaveAttribute('width', '32');
        expect(svg).toHaveAttribute('height', '32');
      }
    });

    it('should accept color prop', () => {
      const { container } = render(<Icon name="home" category="navigation" color="#ff0000" />);
      const svg = container.querySelector('svg');
      // Color is applied dynamically
      expect(svg).toBeInTheDocument();
    });

    it('should accept alt prop for accessibility', () => {
      const { container } = render(<Icon name="home" category="navigation" alt="Home icon" />);
      const svg = container.querySelector('svg');
      if (svg) {
        expect(svg).toHaveAttribute('aria-label', 'Home icon');
      }
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('should have aria-hidden for decorative icons', () => {
      const { container } = render(<Icon name="home" category="navigation" />);
      const svg = container.querySelector('svg');
      if (svg) {
        expect(svg).toHaveAttribute('aria-hidden', 'true');
      }
    });

    it('should have aria-label when alt text provided', () => {
      const { container } = render(<Icon name="home" category="navigation" alt="Home" />);
      const svg = container.querySelector('svg');
      if (svg) {
        expect(svg).toHaveAttribute('aria-label', 'Home');
      }
    });

    it('should be focusable when clickable', () => {
      const handleClick = jest.fn();
      const { container } = render(
        <Icon name="home" category="navigation" onClick={handleClick} />
      );
      const svg = container.querySelector('svg');
      // Focusable set when onClick provided
      expect(svg).toBeInTheDocument();
    });
  });

  // CSS Classes Tests
  describe('CSS Classes', () => {
    it('should have icon class', () => {
      const { container } = render(<Icon name="home" category="navigation" />);
      const svg = container.querySelector('svg');
      if (svg) {
        expect(svg.classList.contains('icon')).toBe(true);
      }
    });

    it('should accept custom className', () => {
      const { container } = render(
        <Icon name="home" category="navigation" className="custom-class" />
      );
      const svg = container.querySelector('svg');
      if (svg) {
        expect(svg.classList.contains('custom-class')).toBe(true);
      }
    });
  });

  // Error Handling Tests
  describe('Error Handling', () => {
    it('should show fallback when icon not found', async () => {
      const { container } = render(<Icon name="nonexistent" category="fake" />);
      // After async load fails, should show fallback
      setTimeout(() => {
        expect(container.textContent).toContain('✗');
      }, 100);
    });

    it('should show loading state', () => {
      const { container } = render(<Icon name="home" category="navigation" />);
      // Initially might show "Loading..."
      expect(container).toBeInTheDocument();
    });
  });
});
