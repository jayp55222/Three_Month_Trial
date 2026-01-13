import React from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
const Container: React.FC<ContainerProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

interface TextProps {
  className?: string;
  children?: React.ReactNode;
}
const Text: React.FC<TextProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export { Container, Button, Text };
