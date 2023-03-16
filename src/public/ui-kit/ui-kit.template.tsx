import { ReactElement } from 'react';
import styles from './ui-kit.module.scss';
import { CallbackCollection } from '../../shared/interfaces/common.interface';
import {translate as t} from '../../shared/helpers/translate';
import { ChuckJoke } from '../../shared/interfaces/joke.interface';



export enum UiKitCallbacks {
    GET_JOKE = 'getJoke',
    LOGIN_STATE_CHANGE = 'loginStateChange'
}

export interface UiKitTemplateProps {
    title: string,
    callbacks: CallbackCollection<UiKitCallbacks>,
    joke?: ChuckJoke,
    login: boolean,
    userName?: string
}

const UiKitTemplate = function ({ title, joke, userName, callbacks, login }: UiKitTemplateProps): ReactElement {


    return <>
        <div className={styles.uiKit}>
            <h1>{title}{userName && ' - UserName: ' + userName}</h1>
            { joke && <>
                <p>{joke.value}</p>
                <a href={joke.url} target="_blank" rel="noreferrer">{joke.url}</a>
            </>}
            <div>
                <button onClick={() => callbacks.getJoke()}>{t('ui-kit.get-joke')}</button>
            </div>
            <div>
                <button onClick={() => {
                    callbacks.loginStateChange();
                }}>LOGIN
                </button>
                <p> {`LoggedIn Value: ${login}`}</p>
            </div>
        </div>
    </>;
};
export default UiKitTemplate;

