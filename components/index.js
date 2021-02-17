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
        padding-bottom: ${tokens.space.xs};
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

export { StyledLink, Quote }
