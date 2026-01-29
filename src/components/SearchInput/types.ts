export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}
