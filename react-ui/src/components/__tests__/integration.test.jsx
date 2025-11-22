/**
 * Integration Tests
 * Test component interactions and workflows
 */

import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Button from '../Button';
import Input from '../Input';
import Alert from '../Alert';
import Card from '../Card';

describe('Integration Tests', () => {
  // Form Workflow Test
  describe('Form Workflow', () => {
    function SignupForm() {
      const [email, setEmail] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = () => {
        if (!email.includes('@')) {
          setError('Invalid email');
        } else {
          setError('');
        }
      };

      return (
        <Card header={<h2>Sign Up</h2>}>
          <Input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            data-testid="email-input"
          />
          {error && <Alert variant="error">{error}</Alert>}
          <Button onClick={handleSubmit} data-testid="submit-btn">
            Submit
          </Button>
        </Card>
      );
    }

    it('should validate email on submit', async () => {
      render(<SignupForm />);
      const submitBtn = screen.getByTestId('submit-btn');
      const input = screen.getByTestId('email-input');

      // Enter invalid email
      fireEvent.change(input, { target: { value: 'notanemail' } });
      fireEvent.click(submitBtn);

      // Error should appear
      await waitFor(() => {
        expect(screen.getByText('Invalid email')).toBeInTheDocument();
      });
    });

    it('should clear error on valid email', async () => {
      render(<SignupForm />);
      const submitBtn = screen.getByTestId('submit-btn');
      const input = screen.getByTestId('email-input');

      // Enter invalid then valid
      fireEvent.change(input, { target: { value: 'notanemail' } });
      fireEvent.click(submitBtn);
      fireEvent.change(input, { target: { value: 'valid@example.com' } });
      fireEvent.click(submitBtn);

      // Error should be gone
      expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
    });
  });

  // Modal Workflow Test
  describe('Modal Workflow', () => {
    function ModalWorkflow() {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div>
          <Button onClick={() => setIsOpen(true)} data-testid="open-btn">
            Open Modal
          </Button>
          {isOpen && (
            <div data-testid="modal">
              <h2>Modal Title</h2>
              <Button onClick={() => setIsOpen(false)} data-testid="close-btn">
                Close
              </Button>
            </div>
          )}
        </div>
      );
    }

    it('should open and close modal', () => {
      render(<ModalWorkflow />);
      const openBtn = screen.getByTestId('open-btn');

      // Initially closed
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

      // Click open
      fireEvent.click(openBtn);
      expect(screen.getByTestId('modal')).toBeInTheDocument();

      // Click close
      const closeBtn = screen.getByTestId('close-btn');
      fireEvent.click(closeBtn);
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });

  // Alert Workflow Test
  describe('Alert Workflow', () => {
    function AlertWorkflow() {
      const [alerts, setAlerts] = useState([]);

      const addAlert = (type, message) => {
        setAlerts([...alerts, { type, message, id: Date.now() }]);
      };

      return (
        <div>
          <Button onClick={() => addAlert('success', 'Success!')}>
            Show Success
          </Button>
          <Button onClick={() => addAlert('error', 'Error occurred')}>
            Show Error
          </Button>
          <div data-testid="alerts-container">
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                variant={alert.type}
                onClose={() => setAlerts(alerts.filter((a) => a.id !== alert.id))}
              >
                {alert.message}
              </Alert>
            ))}
          </div>
        </div>
      );
    }

    it('should add and remove alerts', () => {
      render(<AlertWorkflow />);
      const successBtn = screen.getByText('Show Success');
      const errorBtn = screen.getByText('Show Error');

      // Add success alert
      fireEvent.click(successBtn);
      expect(screen.getByText('Success!')).toBeInTheDocument();

      // Add error alert
      fireEvent.click(errorBtn);
      expect(screen.getByText('Error occurred')).toBeInTheDocument();

      // Remove alerts
      const closeButtons = screen.getAllByRole('button');
      fireEvent.click(closeButtons[closeButtons.length - 1]); // Click last close button
    });
  });

  // Button Variant Integration Test
  describe('Button Variant Selection', () => {
    function ButtonSelector() {
      const [variant, setVariant] = useState('primary');

      return (
        <div>
          <div>
            <Button
              onClick={() => setVariant('primary')}
              data-testid="variant-primary"
            >
              Primary
            </Button>
            <Button
              onClick={() => setVariant('secondary')}
              data-testid="variant-secondary"
            >
              Secondary
            </Button>
          </div>
          <Button variant={variant} data-testid="selected-button">
            Selected: {variant}
          </Button>
        </div>
      );
    }

    it('should change button variant', () => {
      render(<ButtonSelector />);
      const selectedBtn = screen.getByTestId('selected-button');

      // Check initial
      expect(selectedBtn).toHaveClass('button--primary');

      // Change to secondary
      fireEvent.click(screen.getByTestId('variant-secondary'));
      expect(selectedBtn).toHaveClass('button--secondary');
    });
  });

  // Multiple Components Integration
  describe('Complex Component Interactions', () => {
    function ComplexForm() {
      const [formData, setFormData] = useState({ name: '', email: '' });
      const [submitted, setSubmitted] = useState(false);
      const [errors, setErrors] = useState({});

      const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };

      const handleSubmit = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name required';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email';

        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          setSubmitted(true);
        }
      };

      return (
        <Card header={<h2>Registration Form</h2>}>
          <Input
            placeholder="Name..."
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={!!errors.name}
            data-testid="name-input"
          />
          {errors.name && <Alert variant="error">{errors.name}</Alert>}

          <Input
            type="email"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={!!errors.email}
            data-testid="email-input"
          />
          {errors.email && <Alert variant="error">{errors.email}</Alert>}

          <Button onClick={handleSubmit} variant="success" data-testid="submit">
            Register
          </Button>

          {submitted && (
            <Alert variant="success" title="Success!">
              Registration completed!
            </Alert>
          )}
        </Card>
      );
    }

    it('should validate and submit form', async () => {
      render(<ComplexForm />);
      const submitBtn = screen.getByTestId('submit');

      // Try submit empty
      fireEvent.click(submitBtn);
      expect(screen.getByText('Name required')).toBeInTheDocument();

      // Fill form
      const nameInput = screen.getByTestId('name-input');
      const emailInput = screen.getByTestId('email-input');

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.click(submitBtn);

      // Check success
      await waitFor(() => {
        expect(screen.getByText('Registration completed!')).toBeInTheDocument();
      });
    });
  });
});
