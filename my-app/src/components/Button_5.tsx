import React from 'react';

// type ButtonProps = {
//   style: React.CSSProperties,
//   borderRadius: {
//     topLeft: number,
//     topRight: number,
//     bottomLeft: number,
//     bottomRight: number
//   }
// }

// DOCS: The above type could be re-written as below as well:
// Record<string, number> => string => is the type of key in this object, and number is the type of value on this object
// Ref readme for more

type ButtonProps = {
  style: React.CSSProperties;
  // Static Object Structure typing => Strict
  // borderRadius: {
  //   topLeft: number,
  //   topRight: number,
  //   bottomLeft: number,
  //   bottomRight: number
  // }
  borderRadius: Record<string, number>; // DOCS: Genric Object structure allows any key
  // onClick: () => void, // DOCS: Function without any params and doesn't return anything
  onClick: (testNum: string) => number;
  children: React.ReactNode; // DOCS: Accepts everything as children like string, JSX Element, boolean, num etc.
  // children: JSX.Element // DOCS: Accepts only JSX element <div></div>
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isPillType?: boolean;
};

const Button_5 = ({
  style,
  borderRadius,
  onClick,
  children,
  setCount,
  isPillType = false,
}: ButtonProps) => {
  const { topLeft, topRight, bottomLeft, bottomRight } = borderRadius;

  const clickHandler = () => {
    onClick('5');
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button
        style={{
          ...style,
          borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
        }}
        onClick={clickHandler}
      >
        {children}
      </button>
      <Print />
    </>
  );
};

export default Button_5;

const Print = ({ text = 'Hello' }) => {
  return <p>{text}</p>;
};
