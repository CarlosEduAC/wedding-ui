type AutocompleteProps = {
  id?: string;
  options: string[];
  onChange?: (selected: string[]) => void;
  placeholder?: string;
};

export type { AutocompleteProps };