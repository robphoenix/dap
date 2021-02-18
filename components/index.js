import { css } from '@emotion/react'

import tokens from '../theme/tokens'

function StyledLink(props) {
  const { showVisited } = props
  return (
    <a
      css={css`
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
        cursor: pointer;
        color: ${tokens.colors.text};
        background-image: linear-gradient(
          ${tokens.colors.text},
          ${tokens.colors.text}
        );
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 100% 0;
        transition: all 0.05s ease-in-out;
        :hover,
        :focus {
          text-decoration: none;
          color: ${tokens.colors.background};
          background-size: 100% 100%;
          transition: all 0.2s ease-in-out;
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

const Title = (props) => (
  <h2
    css={css`
      text-transform: capitalize;
      margin-bottom: ${tokens.space.xl};
      ${tokens.mediaQueries.md} {
        margin-bottom: ${tokens.space.xxl};
        text-align: center;
      }
    `}
    {...props}
  />
)

const PageSection = (props) => (
  <section
    css={css`
      margin-bottom: ${tokens.space.xxl};
      ${tokens.mediaQueries.lg} {
        margin-bottom: ${tokens.space.xxxxl};
        width: 65ch;
        width: clamp(8rem, 40vw, 65ch);
        margin-left: auto;
        margin-right: auto;
      }
    `}
    {...props}
  />
)

export { StyledLink, Quote, Title, PageSection }
