import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'

import tokens from '../theme/tokens'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  const navigation = ['manifesto', 'about', 'publications']
  return (
    <>
      <Head>
        <title>D.I.Y. as Privilege</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/cocogothic/cocogothic-bolditalic.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/cocogothic/cocogothic-bolditalic.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/cocogothic/cocogothic-bolditalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Bold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Italic.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Italic.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-BoldItalic.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-BoldItalic.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinsonhyperlegible/Atkinson-Hyperlegible-BoldItalic.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <header
        role="banner"
        css={css`
          padding: ${tokens.space.md};
          display: grid;
          justify-content: center;
          margin-bottom: ${tokens.space.xxl};
          ${tokens.mediaQueries.md} {
            padding: ${tokens.space.xl};
            margin-bottom: ${tokens.space.xxl};
          }
        `}
      >
        <div
          css={css`
            width: 90vw;
            width: clamp(8rem, 90vw, 70rem);
            display: grid;
            grid-gap: ${tokens.space.md};
            gap: ${tokens.space.md};
            align-items: baseline;
            grid-template-columns: repeat(1, 1fr);
            ${tokens.mediaQueries.sm} {
              grid-template-columns: repeat(2, 1fr);
            }
          `}
        >
          <Link href="/">
            <a>
              <h1>D.I.Y. as Privilege</h1>
            </a>
          </Link>

          <nav>
            <ul
              role="list"
              css={css`
                display: flex;
                ${tokens.mediaQueries.md} {
                  justify-content: flex-end;
                }
              `}
            >
              {navigation.map((item) => (
                <li
                  key={item}
                  css={css`
                    text-transform: capitalize;
                    margin-right: ${tokens.space.md};
                    ${tokens.mediaQueries.md} {
                      margin-right: 0;
                      margin-left: ${tokens.space.xl};
                    }
                  `}
                >
                  <Link href={`/${item}`}>
                    <a
                      css={css`
                        font-size: ${tokens.fontSizes.sm};
                        ${tokens.mediaQueries.md} {
                          font-size: ${tokens.fontSizes.md};
                        }
                        :hover {
                          cursor: pointer;
                          border-bottom: 3px solid;
                        }
                      `}
                    >
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div
          css={css`
            display: grid;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 90vw;
              width: clamp(8rem, 90vw, 70rem);
              margin-bottom: ${tokens.space.xxxl};
              ${tokens.mediaQueries.md} {
                padding: 0 ${tokens.space.md};
                margin-bottom: ${tokens.space.xxl};
              }
            `}
          >
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
