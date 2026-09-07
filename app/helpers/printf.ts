import { helper } from '@ember/component/helper';

interface PrintFSignature {
  Args: {
    Named: {};
    Positional: [value?: string, replacement?: string];
  };
  Return: string;
}

export default helper<PrintFSignature>(function printf([
  value = '',
  replacement = '',
]) {
  return value.replace(/%s/g, replacement);
});
