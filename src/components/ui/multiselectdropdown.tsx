// components/ui/MultiSelectDropdown.tsx
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { ScrollArea } from "./scroll-area";
import { Label } from "./label";
import { Check } from "lucide-react";

type Props = {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
};

export function MultiSelectDropdown({
  label,
  options,
  selected,
  onChange,
}: Props) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selected.length > 0
            ? `${label}: ${selected.join(", ")}`
            : `Select ${label}`}
          <Check className="w-4 h-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-2">
        <ScrollArea className="max-h-60">
          {options.map((opt) => (
            <div
              key={opt}
              className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-muted"
            >
              <Checkbox
                checked={selected.includes(opt)}
                onCheckedChange={() => toggle(opt)}
                id={opt}
              />
              <Label htmlFor={opt}>{opt}</Label>
            </div>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
