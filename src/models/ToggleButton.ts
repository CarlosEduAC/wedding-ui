import { ButtonHTMLAttributes } from "react";

export interface ToggleButtonProps
  extends ButtonHTMLAttributes<HTMLInputElement> {
  isActive: boolean;
  onToggle: (isActive: boolean) => void;
}
