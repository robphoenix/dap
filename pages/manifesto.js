import { css } from '@emotion/react'

import tokens from '../tokens'
import { Quote, PageTitle, PageSection } from '../components'

function Manifesto() {
  const styles = {
    author: css`
      text-align: right;
      font-weight: bold;
    `,
    point: css`
      counter-increment: point;
      display: flex;
      align-items: baseline;
      font-size: ${tokens.fontSizes.sm};
      :before {
        content: counter(point) '. ';
        font-family: ${tokens.fonts.heading};
        min-width: 2rem;
      }
      ${tokens.mediaQueries.sm} {
        font-size: ${tokens.fontSizes.md};
        :before {
          min-width: 4rem;
        }
      }
    `,
  }

  return (
    <>
      <PageTitle>13 point manifesto for musicians</PageTitle>
      <PageSection>
        <ol
          css={css`
            counter-reset: point;
            display: grid;
            grid-gap: ${tokens.space.xxl};
            gap: ${tokens.space.xxl};
          `}
        >
          <li css={styles.point}>
            <p>See the privilege in being able to Do It Yourself.</p>
          </li>
          <li css={styles.point}>
            <p>
              Disabilities can be visible and invisible. Physical barriers and
              lack of understanding can exclude people, think about how you can
              help remove barriers.
            </p>
          </li>
          <li css={styles.point}>
            <p
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <Quote>
                “Using privilege to dismantle privilege, one of the best ways to
                use your voice is to amplify voices that aren't being heard”
              </Quote>
              <span css={styles.author}>&mdash; Rebecca Solnit</span>
            </p>
          </li>
          <li css={styles.point}>
            <p>
              Do It Yourself can mean different things to different people and
              is a misleading term &mdash; it can mean you still work with
              people that record your music, people that make and sell your
              records, people that own the buildings you rehearse in, people
              that put on gigs, just as much as music facilitators, support
              workers or transport to and from a gig.
            </p>
          </li>
          <li css={styles.point}>
            <p>
              Be a supportive tool, be patient, listen, give people control.
            </p>
          </li>
          <li css={styles.point}>
            <p
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <Quote>
                “They're catching me on my weak points but not on my strong
                points.”
              </Quote>
              <span css={styles.author}>
                &mdash; David M on Job Centre Plus
              </span>
              <br />
              Catch people's strong points.
            </p>
          </li>
          <li css={styles.point}>
            <p>Don't assume what's accessible; ask and learn.</p>
          </li>
          <li css={styles.point}>
            <p>
              Disabled people performing at or attending gigs shouldn't be
              exceptional; the more it happens the more <em>‘normal’</em> it
              becomes. Make it the norm.
            </p>
          </li>
          <li css={styles.point}>
            <p>
              There is an audience for everything and ideas of what is{' '}
              <em>‘good music’</em> will always be political.
            </p>
          </li>
          <li css={styles.point}>
            <p>
              Everyone, regardless of ability, can contribute to a music scene.
              Use existing support networks to get people on stage and in the
              audience &mdash; disability arts charities, organisations and
              support.
            </p>
          </li>
          <li css={styles.point}>
            <p>
              Turn up and keep turning up. Sometimes when supporting people
              being consistent is more impressive than being spectacular.
            </p>
          </li>
          <li css={styles.point}>
            <p>
              The more invisible you make yourself, the more visible others will
              be.
            </p>
          </li>
          <li css={styles.point}>
            <p>
              Disabled people have senses of humour, laugh with people and enjoy
              yourself.
            </p>
          </li>
        </ol>
      </PageSection>
    </>
  )
}

export default Manifesto
