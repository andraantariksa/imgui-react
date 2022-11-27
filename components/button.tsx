export type ButtonProps = {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="bg-secondary hover:bg-secondary-active px-1 py-1 text-text-primary">{ children }</button>
}
