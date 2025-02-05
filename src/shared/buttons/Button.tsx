import { ButtonStyles } from './button-styles';
interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>  {

}
const Button: React.FC<ButtonProps>= ({ ...props }) => {
  return <ButtonStyles {...props}></ButtonStyles>;
};

export default Button;
