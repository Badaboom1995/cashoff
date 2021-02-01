export interface InputInterface {
  name: string;
  title: string;
  error?: string;
  icon?: string;
  password?: boolean;
  touched?: boolean;
  onChange?: (e: any) => void;
}
