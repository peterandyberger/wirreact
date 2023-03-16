import { LoaderFunctionArgs } from '@remix-run/router/utils';
import axios from 'axios';
import { TypedLoaderFunctionArgs } from '../interfaces/common.interface';
import { JsonPlaceholderUser } from '../interfaces/joke.interface';

export function basicLoader<T>(data: LoaderFunctionArgs): T {
    return data.params as T;
}

export interface SampleLoader {
    sampleId: number,
}

export function sampleLoader<T>(data: LoaderFunctionArgs) {
    console.log('params', data.params);
    return data.params as T;
}

export interface UiKitLoader {
    userId: string,
}

export async function uiKitLoader(data: TypedLoaderFunctionArgs<keyof UiKitLoader>): Promise<JsonPlaceholderUser> {
    axios.interceptors.request.use((config) => {
        console.log('intercept req', config);
        return config;
    });
    axios.interceptors.response.use((resp) => {
        console.log('intercept resp', resp);
        return resp;
    });
    return await axios.get<JsonPlaceholderUser>('/users/' + (data.params['userId'])).then((resp) => {
        console.log('async uiKitLoader', resp);
        return resp.data;
    });
}
