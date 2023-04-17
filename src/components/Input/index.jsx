import { BiSearch } from "react-icons/bi";


import {
  CommonInput,
  InputWrapper,
  IconContainer,
  LabelContainer,
} from "./styles";

const Input = ({
  label,
  icon,
  placeholder,
  message,
  onChange,
  isValid,
  secure,
  type,
}) => {
  return (
    <InputWrapper>
      {icon && (
        <IconContainer>
          <BiSearch />
        </IconContainer>
      )}
      <CommonInput
        label="label"
        placeholder={placeholder}
        //onChangeText={onChange}
        secureTextEntry={secure}
        keyboardType={type}
        //placeholderTextColor={COLORS.gray}
        isActive={isValid ? true : false}
        icon={icon ? true : false}
      />
    </InputWrapper>
  );
};

export default Input;

