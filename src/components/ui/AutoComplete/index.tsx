import React from "react";
import { AutocompleteProps } from "@/models/AutoComplete";
import { Invited } from "@/models/Invited";
import {
  Container,
  TagContainer,
  Tag,
  RemoveButton,
  Input,
  Dropdown,
  Option,
} from "./styles";

const AutoComplete: React.FC<AutocompleteProps> = ({
  id,
  options,
  placeholder,
  onChange,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [filtered, setFiltered] = React.useState<Invited[]>(options);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const filteredOptions = options?.filter(
      (opt) =>
        opt.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selected.includes(opt.name)
    );
    setFiltered(filteredOptions);
  }, [inputValue, options, selected]);

  const handleAdd = (value: Invited) => {
    if (!selected.includes(value.name)) {
      const newSelected = [...selected, value.name];
      const newSelectedObjects = options?.filter((opt) =>
        newSelected.includes(opt.name)
      );
      setSelected(newSelected);
      onChange(newSelectedObjects);
      setInputValue("");
    }
  };

  const handleRemove = (value: string) => {
    const newSelected = selected.filter((v) => v !== value);
    const newSelectedObjects = options?.filter((opt) =>
      newSelected.includes(opt.name)
    );
    setSelected(newSelected);
    onChange(newSelectedObjects);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container ref={containerRef}>
      <span>Nome</span>

      {selected.length > 0 && (
        <TagContainer>
          {selected.map((item) => (
            <Tag key={item}>
              <span>{item}</span>
              <RemoveButton onClick={() => handleRemove(item)}>×</RemoveButton>
            </Tag>
          ))}
        </TagContainer>
      )}

      {selected.length !== options?.length && (
        <Input
          id={id}
          type="text"
          placeholder={selected.length > 0 ? "" : placeholder}
          value={inputValue}
          onFocus={() => setIsDropdownOpen(true)}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      {isDropdownOpen && filtered.length > 0 && (
        <Dropdown>
          {filtered.map((option) => (
            <Option key={option.id} onClick={() => handleAdd(option)}>
              {option.name}
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export { AutoComplete };
