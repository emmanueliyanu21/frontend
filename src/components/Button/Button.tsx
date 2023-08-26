type typeProp = "primary" | "secondary";

type ButtonProps = {
  buttonText: string;
  type?: typeProp;
};

const Button = ({ buttonText }: ButtonProps): JSX.Element => {
  return (
    <>
      <button className="">{buttonText}</button>
    </>
  );
};

export { Button };
