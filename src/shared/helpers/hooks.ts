import { useLoaderData } from 'react-router-dom';

export function useLoaderTData<T>(): T {
    return useLoaderData() as T;
}
