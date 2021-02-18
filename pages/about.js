import { css } from '@emotion/react'

import tokens from '../tokens'
import { PageSection, Title, StyledLink } from '../components'

function About() {
  const styles = {
    h3: css`
      text-transform: capitalize;
      margin-bottom: ${tokens.space.lg};
    `,
    italic: css`
      font-style: normal;
    `,
  }

  return (
    <>
      <Title id="about">about</Title>
      <PageSection>
        <div
          css={css`
            display: grid;
            grid-gap: ${tokens.space.xxxl};
            gap: ${tokens.space.xxxl};
          `}
        >
          <div>
            <h3 css={styles.h3}>D.I.Y.</h3>
            <p>
              Stands for <span css={styles.italic}>“Do It Yourself”</span>. In
              music it promotes the idea that anyone is capable of becoming a
              musician and sharing their music. It empowers individuals and
              communities, encouraging alternative approaches when faced with
              obstacles to achieving their objectives.
            </p>
          </div>

          <div>
            <h3 css={styles.h3}>disability</h3>
            <p>
              I use the social model of disability. The idea that it is the
              environment, society and culture that surrounds someone that
              creates barriers and obstacles which disable and exclude them.
            </p>
          </div>

          <div>
            <h3 css={styles.h3}>privilege</h3>
            <p>
              The idea that advantages are available only to certain people in
              society.
            </p>
          </div>

          <div>
            <h3 css={styles.h3}>manifesto</h3>
            <p>
              A text that promotes a new idea with ways for carrying out changes
              the author believes should be made.
            </p>
          </div>

          <div>
            <p
              css={css`
                margin-bottom: ${tokens.space.md};
              `}
            >
              This is the second version of the manifesto, it uses the words{' '}
              <span css={styles.italic}>‘Disabled people’</span> rather than{' '}
              <span css={styles.italic}>‘People with Disabilities’</span>. This
              is so the language in the text better reflects the social model of
              disability.
            </p>
            <p>
              The Manifesto is available to{' '}
              <StyledLink href="/files/2019-DIY-as-Privilege.pdf">
                download as a PDF
              </StyledLink>{' '}
              and{' '}
              <StyledLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
                buy as a risograph print
              </StyledLink>
              .
            </p>
          </div>
        </div>
      </PageSection>
      <Title id="why">why I wrote the manifesto</Title>

      <PageSection>
        <div
          css={css`
            display: grid;
            grid-gap: ${tokens.space.xl};
            gap: ${tokens.space.xl};
          `}
        >
          <p>
            “On the 4th December 2006 I saw the bands{' '}
            <span css={styles.italic}>Beat Express</span> and{' '}
            <span css={styles.italic}>Heavy Load</span> play in Brighton. It was
            the first time I had seen musicians with learning disabilities on
            stage performing and it was one of the best gigs I’ve ever been to.
            I wondered why I hadn’t heard of or seen these musicians play
            before. I thought that if I had enjoyed it so much, then other
            people would too. It also made me realise the opportunities I had as
            a musician weren’t available to everyone. So, since then I’ve done
            all I can to support all kinds of people to make all kinds of music,
            share this music and get others to watch and listen.
          </p>
          <p>
            This includes supporting the creation of a music scene in Brighton
            around the long running{' '}
            <StyledLink href="https://therockhousebrighton.blogspot.com/">
              Rock House
            </StyledLink>{' '}
            night; organising three UK tours for bands with members with
            learning disabilities through{' '}
            <StyledLink href="https://www.constantflux.co.uk">
              Constant Flux
            </StyledLink>
            ; supporting{' '}
            <StyledLink href="https://diyspaceforlondon.org/">
              DIY Space For London
            </StyledLink>{' '}
            to be the first volunteer run venue in the UK to achieve Bronze
            accreditation for access from{' '}
            <StyledLink href="http://www.attitudeiseverything.org.uk/">
              Attitude Is Everything
            </StyledLink>
            ; and working for organisations such as{' '}
            <StyledLink href="https://www.heartnsoul.co.uk/">
              Heart n Soul
            </StyledLink>
            ,{' '}
            <StyledLink href="http://www.carousel.org.uk/">Carousel</StyledLink>
            ,{' '}
            <StyledLink href="http://www.clubsoda.org.uk/">
              Club Soda
            </StyledLink>
            ,{' '}
            <StyledLink href="https://www.cultureshift.org.uk/">
              Culture Shift
            </StyledLink>{' '}
            and{' '}
            <StyledLink href="https://stayuplate.org/">Stay Up Late</StyledLink>{' '}
            as a music facilitator supporting people with learning disabilities
            to form bands, create music, record and perform; as well as
            organising countless other gigs, releases, events and projects.
          </p>
          <p>
            I think everyone should have the chance to experience a little of
            what I’ve been lucky enough to experience since 2006. I will forever
            be grateful for everything I have learnt from being involved with
            all of this. I wrote the manifesto to try and encourage others to
            get involved and help make more and more things happen.
          </p>
          <p>
            In 2006 I only knew two bands existed, now I can write the list
            below of bands and musicians. Some existed for just one night and
            some have been playing for years, all of them helped change mine and
            other people’s worlds, even in some small way. I hope this list will
            only get longer and longer!”
          </p>
          <div
            css={css`
              text-align: right;
              font-size: ${tokens.fontSizes.md};
            `}
          >
            &mdash;{' '}
            <StyledLink href="https://www.richardphoenix.com">
              Richard Phoenix
            </StyledLink>
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default About
