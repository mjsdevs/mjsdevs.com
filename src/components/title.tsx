import styled from 'styled-components';
import { FC } from 'react';

const TitleWrapper = styled.h1`
font-family: 'Source Code Pro', monospace;
vertical-align: middle;
`;

interface TitleProps {
  color?: string;
}

export const Title: FC<TitleProps> = (props) => (
  <TitleWrapper style={{ color: props.color ?? 'black' }}>{props.children}</TitleWrapper>
);