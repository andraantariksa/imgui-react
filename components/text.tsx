export type TextProps = {
  children: string;
}

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
}
