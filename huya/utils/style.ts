export const styleToSelector = (style:any):any => {
  return Object.keys(style).reduce((p:any, c) => {
    if (c.indexOf('jq') === 0) {
      p[c] = '.' + style[c]
    }
    return p
  }, {})
}

export function delay (ms:number):Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}
