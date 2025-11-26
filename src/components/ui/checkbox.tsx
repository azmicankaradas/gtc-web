import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  onChange?: (e: { target: { checked: boolean } }) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, label, checked, onChange, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={id}
          ref={ref}
          checked={checked}
          onChange={(e) =>
            onChange?.({ target: { checked: e.target.checked } })
          }
          className={cn(
            "h-4 w-4 rounded border-slate-600 bg-slate-800 text-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900",
            className
          )}
          {...props}
        />
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-300 cursor-pointer hover:text-white transition-colors"
        >
          {label}
        </label>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

