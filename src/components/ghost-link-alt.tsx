import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '@commons';

const LinkWrapper = styled.a`
border: 1px solid ${Colors.light};
color: ${Colors.light};
text-decoration: none;
padding: 0.5em 1em;
border-radius: 0.4em;

transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;

&:visited {
  color: ${Colors.light};
}

&:hover {
  background-color: ${Colors.light};
  color: ${Colors.dark};
}
`

interface LinkProps {
  href: string,
  target: React.HTMLAttributeAnchorTarget,
  style?: React.CSSProperties
}

export const GhostLinkAlt: FC<LinkProps> = ({ style, href, children, target }) => (
  <LinkWrapper style={style} href={href} target={target}> {children} </LinkWrapper>
);