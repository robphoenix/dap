import { css } from '@emotion/react'

import tokens from '../tokens'

function StyledLink(props) {
  const { showVisited } = props
  return (
    <a
      css={css`
        text-decoration: none;
        cursor: pointer;
        color: ${tokens.colors.text};
        background-image: linear-gradient(
          ${tokens.colors.text},
          ${tokens.colors.text}
        );
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 100% 10%;
        transition: all 0.2s ease-in-out;
        padding-bottom: ${tokens.space.xxs};
        :hover,
        :focus {
          color: ${tokens.colors.background};
          background-size: 100% 100%;
        }
        :visited {
          color: ${showVisited && tokens.colors.background};
          background-size: ${showVisited && '100% 100%'};
          background-color: ${showVisited && tokens.colors.text};
        }
      `}
      {...props}
    />
  )
}

const Quote = (props) => (
  <blockquote
    css={css`
      display: inline;
      font-style: italic;
    `}
    {...props}
  />
)

const PageTitle = (props) => (
  <h2
    css={css`
      text-transform: capitalize;
      margin-bottom: ${tokens.space.xl};
      ${tokens.mediaQueries.md} {
        margin-bottom: ${tokens.space.xxxl};
        text-align: center;
      }
    `}
    {...props}
  />
)

const PageSection = (props) => (
  <section
    css={css`
      ${tokens.mediaQueries.lg} {
        width: 65ch;
        width: clamp(8rem, 40vw, 65ch);
        margin-left: auto;
        margin-right: auto;
      }
    `}
    {...props}
  />
)

export { StyledLink, Quote, PageTitle, PageSection }
