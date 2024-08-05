import { createFilter, dataToEsm } from '@rollup/pluginutils'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  const indent = 'indent' in options ? options.indent : '\t'

  return {
    name: 'unplugin-json',
    transform(code, id) {
      if (id.slice(-5) !== '.json' || !filter(id))
        return null

      try {
        const parsed = JSON.parse(code)
        return {
          code: dataToEsm(parsed, {
            preferConst: options.preferConst,
            compact: options.compact,
            namedExports: options.namedExports,
            includeArbitraryNames: options.includeArbitraryNames,
            indent,
          }),
          map: { mappings: '' },
        }
      }
      catch (err) {
        const message = 'Could not parse JSON file'
        // FIXME remove any
        this.error({ message, id, cause: err } as any)
        return null
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
