import Logo from '../../logo.svg';
import { WipHeader } from './wip.header'
import { WipFooter } from './wip.footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  height: 100vh;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 10em;
  }
  
  @media screen and (min-width: 600px) {
    max-width: 25em;
    .logo {
      width: 25em;
    }
    main {
      flex-direction: row;
    }
  }
`

export const WipPage = () => (
  <>
    <Wrapper className="App">
      <main>
        <img src={Logo} className="logo" alt="MJS Logo" />
        <WipHeader />
      </main>
      <WipFooter />
    </Wrapper >
  </>
)