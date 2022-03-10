export const styleToSelector = (style) => {
  return Object.keys(style).reduce((p, c) => {
    if (c.indexOf('jq') === 0) {
      p[c] = '.' + style[c]
    }
    return p
  }, {})
}

export function delay (ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

