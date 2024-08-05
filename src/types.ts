/**
 * A valid `picomatch` glob pattern, or array of patterns.
 */
export type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null

export interface Options {
  // define your plugin options here
  include?: FilterPattern
  exclude?: FilterPattern
  compact?: boolean
  includeArbitraryNames?: boolean
  indent?: string
  namedExports?: boolean
  preferConst?: boolean
}
