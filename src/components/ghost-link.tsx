import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '@commons';

const LinkWrapper = styled.a`
border: 1px solid ${Colors.dark};
color: ${Colors.dark};
text-decoration: none;
padding: 0.5em 1em;
border-radius: 0.4em;

transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;

&:visited {
  color: ${Colors.dark};
}

&:hover {
  background-color: ${Colors.dark};
  color: ${Colors.light};
}
`

interface LinkProps {
  href: string,
  target: React.HTMLAttributeAnchorTarget
}

export const GhostLink: FC<LinkProps> = (props) => (
  <LinkWrapper href={props.href} target={props.target}> {props.children} </LinkWrapper>
);