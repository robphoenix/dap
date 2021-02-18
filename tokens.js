const space = {
  xxs: 'var(--space-xxs)',
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
  xl: 'var(--space-xl)',
  xxl: 'var(--space-xxl)',
  xxxl: 'var(--space-xxxl)',
  xxxxl: 'var(--space-xxxxl)',
}

const fonts = {
  heading: 'var(--fonts-heading)',
}

const fontSizes = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  md: 'var(--font-size-md)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
  xxl: 'var(--font-size-xxl)',
  xxxl: 'var(--font-size-xxxl)',
}

const colors = {
  background: 'var(--colors-background)',
  text: 'var(--colors-text)',
}

const breakpoints = { sm: '40em', md: '52em', lg: '65em' }
const mq = (breakpoint) => `@media (min-width: ${breakpoint})`
const mediaQueries = {
  sm: mq(breakpoints.sm),
  md: mq(breakpoints.md),
  lg: mq(breakpoints.lg),
}

const tokens = { fonts, space, fontSizes, colors, mediaQueries }

export { fonts, space, fontSizes, colors, mediaQueries }
export default tokens
