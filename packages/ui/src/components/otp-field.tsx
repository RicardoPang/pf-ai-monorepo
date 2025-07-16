import * as React from 'react';
import { cn } from '../utils/cn';

interface OTPFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  length?: number;
  disabled?: boolean;
}

const OTPField = React.forwardRef<HTMLDivElement, OTPFieldProps>(
  ({ className, value = '', onChange, length = 6, disabled, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value);
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const currentValue = value || internalValue;

    const handleChange = (index: number, newValue: string) => {
      if (newValue.length > 1) {
        // Handle paste
        const pastedValue = newValue.slice(0, length);
        const newFullValue = pastedValue.padEnd(length, '').slice(0, length);
        setInternalValue(newFullValue);
        onChange?.(newFullValue);
        
        // Focus the last filled input or the next empty one
        const nextIndex = Math.min(pastedValue.length, length - 1);
        inputRefs.current[nextIndex]?.focus();
        return;
      }

      const newFullValue = currentValue
        .split('')
        .map((char, i) => (i === index ? newValue : char))
        .join('')
        .padEnd(length, '')
        .slice(0, length);

      setInternalValue(newFullValue);
      onChange?.(newFullValue);

      // Move to next input if value was entered
      if (newValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !currentValue[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={currentValue[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={disabled}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-center text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            )}
          />
        ))}
      </div>
    );
  }
);

OTPField.displayName = 'OTPField';

export { OTPField };
