import { css } from '@emotion/react'

import {
  Heading,
  PageSection,
  StyledLink,
  PageStack,
  SubHeading,
  Version2Front,
  Version2Back,
  Version1Front,
  Version1Back,
} from '../components'
import tokens from '../tokens'

function Publications() {
  return (
    <>
      <Heading id="publication">publications</Heading>
      <PageSection>
        <PageStack>
          <p>
            The Manifesto was originally published as a pamphlet by{' '}
            <StyledLink href="https://www.gold.ac.uk/music/research/fringe-underground-music-group/">
              The Fringe and Underground Music Group
            </StyledLink>{' '}
            at Goldsmiths University as part of the ‘Spaces of Making’ project.
            It was launched on Friday 11th May at an event at Lewisham Art
            House, with readings from myself, Charles Hayward, Marlo Delara &
            Sharon Gal.
          </p>
          <p>
            Since then it has been published in the August 2018 issue of Maximum
            Rocknroll magazine and Tate’s 2019 Playground Magazine; made
            available in the Goldsmiths University Library Archive, Good Press
            Gallery in Glasgow, the Science and Media Museum in Bradford and Liz
            Harris/Grouper in the US.
          </p>
          <SubHeading>available translations</SubHeading>
          <p>
            Greek (
            <StyledLink href="/files/diy-as-privilege-greek-translation.pdf">
              download the pdf
            </StyledLink>
            ) &mdash; Translated by Zina Sarris for the{' '}
            <StyledLink href="https://www.soundsgoodproject.net/el">
              Sounds Good Project
            </StyledLink>
            .
          </p>
          <p>
            Please{' '}
            <StyledLink href="mailto: richardjamesphoenix@gmail.com">
              get in contact
            </StyledLink>{' '}
            if you're interested in stocking or distributing the manifesto or
            translating it into another language, my email is
            richardjamesphoenix@gmail.com
          </p>
          <SubHeading>2nd version</SubHeading>
          <p>
            {' '}
            200 copies riso-graph printed with teal ink on grey 180gsm matt
            paper. Re-design in collaboration with{' '}
            <StyledLink href="http://seanroyparker.com/">
              Sean Roy Parker
            </StyledLink>
            .
          </p>
          <div
            css={css`
              text-transform: capitalize;
              display: grid;
              grid-gap: ${tokens.space.md};
              gap: ${tokens.space.md};
            `}
          >
            <StyledLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
              buy a copy
            </StyledLink>
            <StyledLink href="/files/2019-DIY-as-Privilege.pdf">
              download the pdf
            </StyledLink>
          </div>
          <Version2Front />
          <Version2Back />
          <Version1Front />
          <Version1Back />
        </PageStack>
      </PageSection>
    </>
  )
}

export default Publications
