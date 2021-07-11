import React, { FC } from "react";
import styled from "styled-components";

const TextWrapper = styled.p`
font-family: 'Spartan', sans-serif;
margin: 0;
`

interface TextProps {
  color?: string;
}

export const Text: FC<TextProps> = (props) => (
  <TextWrapper style={{ color: props.color }}>{props.children} </TextWrapper>
);