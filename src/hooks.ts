import { useEffect, useState, useCallback } from 'react';
import type { UseFetchResult } from './types';

export const useDebounce = <T>(value: T, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export function useFetch<T, P>(
  fetchFunction: (params: P) => Promise<T>,
  params: P
): UseFetchResult<T>;

export function useFetch<T>(
  fetchFunction: () => Promise<T>
): UseFetchResult<T>;

export function useFetch<T, P = void>(
  fetchFunction: ((params: P) => Promise<T>) | (() => Promise<T>),
  params? : P
  ): UseFetchResult<T> {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = params !== undefined 
      ? await (fetchFunction as (params: P) => Promise<T>)(params)
      : await (fetchFunction as () => Promise<T>)();
      setData(result)
    } catch(err) {
      setError(err instanceof Error ? err.message : 'An error occured')
    } finally {
      setLoading(false)
    }
  }, [fetchFunction, params])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };
  
  return { data, loading, error, refetch}
}
