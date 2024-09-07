import { Title, Text, GhostLinkAlt } from '@components';
import { DiscordIcon } from '@icons';
import { Box, Colors } from '@commons';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-block-end: 2em;
@media screen and (min-width: 600px) {
  align-items: flex-start;
}

`
const Cursor = styled.span`
display: inline-block;
width: 0.4em;
height: 1em;
background: ${Colors.light};
margin-left: 0.3em;
animation: Blink 1.5s ease-in-out infinite;

@keyframes Blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`

export const WipHeader = () => (
  <HeaderWrapper>
    <Title color={Colors.light}><Box style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>Hello world <Cursor/></Box></Title>
    <Text color={Colors.light}>Nós somos um grupo de pessoas com diferentes níveis de experiência. Vamos compartilhar conhecimento e crescer em conjunto?</Text>

    <GhostLinkAlt href="https://discord.gg/uJkbMrSU" target='_blank' style={{
      marginBlockStart: '2em',
    }}>
      <DiscordIcon /> Entrar no discord
    </GhostLinkAlt>
  </HeaderWrapper>
)
