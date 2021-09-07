// Common types
interface buttondata {
  icon: string;
  label: string;
}

interface textdata {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  multiline?: boolean;
  value?: string;
}

interface form {
  name: string;
  value: string;
  focus: any;
}

interface valid {
  profile: RegExp;
  image: RegExp;
  firstName: RegExp;
  lastName: RegExp;
  email: RegExp;
  Id: RegExp;
  password: RegExp;
  confirmPassword: RegExp;
}

interface apicall {
  method: string;
  body?: string;
  source: string;
  dest?: string;
  message?: string;
  history?: History<unknown>;
}

interface Window {
  data: any;
}
