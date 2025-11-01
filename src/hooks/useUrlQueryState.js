import { useCallback, useMemo, useState } from 'react'

/**
 * Local-only query state, no URL / history sync.
 */
export function useUrlQueryState(param = 'q', initial = '') {
  const [value, setValue] = useState(initial)

  const setAndSync = useCallback((updater) => {
    setValue((prev) => (typeof updater === 'function' ? updater(prev) : updater))
  }, [])

  return useMemo(() => [value, setAndSync], [value, setAndSync])
}

export default useUrlQueryState
