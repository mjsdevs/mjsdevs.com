import { Title, Text, GhostLinkAlt } from '@components';
import { DiscordIcon } from '@icons';
import { Colors } from '@commons';
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


export const WipHeader = () => (
  <HeaderWrapper>
    <Title color={Colors.light}>Hello world</Title>
    <Text color={Colors.light}>Nós somos um grupo de pessoas com diferentes níveis de experiência. Vamos compartilhar conhecimento e crescer em conjunto?</Text>

    <GhostLinkAlt href="https://discord.gg/HnZE7ub" target='_blank' style={{
      marginBlockStart: '2em',
    }}>
      <DiscordIcon /> Entrar no discord
    </GhostLinkAlt>
  </HeaderWrapper>
)
