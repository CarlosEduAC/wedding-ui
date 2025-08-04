import React from "react";
import { AutocompleteProps } from "@/models/AutoComplete";
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
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [filtered, setFiltered] = React.useState<string[]>(options);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const filteredOptions = options.filter(
      (opt) =>
        opt.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selected.includes(opt)
    );
    setFiltered(filteredOptions);
  }, [inputValue, options, selected]);

  const handleAdd = (value: string) => {
    if (!selected.includes(value)) {
      setSelected([...selected, value]);
      setInputValue("");
    }
  };

  const handleRemove = (value: string) => {
    setSelected(selected.filter((v) => v !== value));
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

      {selected.length !== options.length && (
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
            <Option key={option} onClick={() => handleAdd(option)}>
              {option}
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export { AutoComplete };
