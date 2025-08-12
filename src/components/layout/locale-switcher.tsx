import { IconCheck, IconSelector } from "@tabler/icons-react";
import { languageMap, SupportedLanguage } from "@/constants/languages";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, redirect } from "@/i18n/navigation";

const items = Object.entries(languageMap).map(([value, label]) => ({
  value,
  label,
}));

export default function LocalSwitcher() {
  const [open, setOpen] = useState(false);
  const localePath = useLocale();
  const path = usePathname();

  const handleLocaleSwitch = (label: string) => {
    const newLocale = items.find((lang) => lang.label === label)!
      .value as SupportedLanguage;

    redirect({ href: path, locale: newLocale });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] justify-between"
        >
          {localePath
            ? items.find((lang) => lang.value === localePath)?.label
            : "Select framework..."}
          <IconSelector className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] mr-[100px]">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>Language not found</CommandEmpty>
            <CommandGroup>
              {items.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.label}
                  onSelect={handleLocaleSwitch}
                >
                  <IconCheck
                    className={cn(
                      "mr-2 h-4 w-4",
                      localePath === lang.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {lang.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
