import { Clickable } from "../../../Clickable";
import { Button, ButtonContainer, ButtonLeft, ButtonRight } from "./styles";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
interface SelectorButtonProps {
  isActive: boolean;
  setIsActive: (val: boolean) => void;
}
export function SelectorButton({ isActive, setIsActive }: SelectorButtonProps) {
  return (
    <ButtonContainer isActive={isActive}>
      <Clickable
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <Button>
          <ButtonLeft>
            <BsFillArrowUpRightCircleFill />
            <p>Popular</p>
          </ButtonLeft>
          <ButtonRight>
            <IoIosArrowDown />
          </ButtonRight>
        </Button>
      </Clickable>
    </ButtonContainer>
  );
}
