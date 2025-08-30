import { Invited } from '@/models/Invited';

type AutocompleteProps = {
  id?: string;
  options: Invited[];
  onChange: (selected: Invited[]) => void;
  placeholder?: string;
};

export type { AutocompleteProps };