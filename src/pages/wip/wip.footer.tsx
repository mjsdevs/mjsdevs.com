import { GhostLinkAlt, Text } from '@components';
import { Colors } from '@commons';

const linkStyle = {
  color: Colors.primary,
  textDecoration: 'none',
  paddingBottom: '2em'
}

const links = [
  { href: 'https://github.com/mjsdevs/admin/blob/main/MANIFESTO.md', label: 'Manifesto' },
  { href: 'https://github.com/mjsdevs', label: 'Github' },
  { href: 'https://bsky.app/profile/mjsdevs.com', label: 'Bluesky' },
  { href: 'https://dev.to/mjsdevs', label: 'Dev.to' },
  { href: 'https://podcasters.spotify.com/pod/show/mjsdevs', label: 'Podcast' },
  { href: 'https://mjsdevs.substack.com/', label: 'Newsletter' },
  // { href: '', label: 'Call for Projects' },
];

export const WipFooter = () => (
  <footer style={ {
    fontSize: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '3em',
    justifyContent: 'space-between',
  } }>
    <Text color={ Colors.light }>
      Quer ajudar a MJS? Que tal <strong><a href="https://github.com/mjsdevs/mjsdevs.com" style={ linkStyle }> abrir um
      PR?</a></strong>
    </Text>
    <Text color={ Colors.light } padding='1em'>
      {
        links.slice(0,3).map((link) => <GhostLinkAlt
            style={{
              margin: '0.2em',
              marginBottom: 0,
            }}
            href={ link.href }
            target='_blank'
            > { link.label }
          </GhostLinkAlt>
        )
      }
    </Text>

    <Text color={ Colors.light } padding='1em'>
      {
        links.slice(3).map((link) => <GhostLinkAlt
            href={ link.href }
            style={{
              margin: '0.2em'
            }}
            target='_blank'> { link.label }
          </GhostLinkAlt>
        )
      }
    </Text>

  </footer>
)
