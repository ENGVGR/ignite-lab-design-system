import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import Check from "../assets/Vector.png";

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator asChild>
        <img src={Check} className="" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
