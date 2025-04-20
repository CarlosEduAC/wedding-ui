import { FC } from "react";
import { ToggleButtonProps } from "@/models/ToggleButton";
import { Switch, Checkbox } from "./styles";
import Heart from "@/assets/heart.svg";

const HeartSwitch: FC<ToggleButtonProps> = ({
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
      <Heart />
    </Switch>
  );
};

export { HeartSwitch };
