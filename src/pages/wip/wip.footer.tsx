import { Text } from '@components';
import { Colors } from '@commons';

export const WipFooter = () => (
  <footer style={{
    fontSize: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '3em',
    justifyContent: 'space-between',
  }}>
    <Text color={Colors.light}>
      Esta página está em construção.
    </Text>
    <Text color={Colors.light}>
      Quer ajudar a MJS? Que tal <strong><a href="https://github.com/mjsdevs/mjsdevs.com" style={{
        color: Colors.primary,
        textDecoration: 'none',
      }}> abrir um PR?</a></strong>
    </Text>
  </footer>
)