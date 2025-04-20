import { FC } from "react";
import { ToggleButtonProps } from "@/models/ToggleButton";
import { Switch, Checkbox, Slider } from "./styles";

const ToggleButton: FC<ToggleButtonProps> = ({
  isActive,
  onToggle,
  ...rest
}) => {
  return (
    <Switch>
      <Checkbox
        type="checkbox"
        checked={isActive}
        onChange={() => onToggle(isActive)}
        {...rest}
      />
      <Slider />
    </Switch>
  );
};

export { ToggleButton };
