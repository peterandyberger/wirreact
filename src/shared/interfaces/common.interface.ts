import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { Params } from 'react-router-dom';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type CallbackCollection<T extends string> = Record<T, ((data?: any) => void)>;

export interface TypedLoaderFunctionArgs<T extends string> extends LoaderFunctionArgs {
    params: Params<T>
}
