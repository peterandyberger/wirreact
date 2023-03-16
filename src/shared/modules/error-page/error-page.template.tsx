import { ReactElement } from 'react';
import styles from './error-page.module.scss';

export interface ErrorPageTemplateProps {
    title: string
}

const ErrorPageTemplate = function ({ title }: ErrorPageTemplateProps): ReactElement {

    return <>
        <div className={styles.errorPage}>
            <h1>{title}</h1>
        </div>
    </>;
};

export default ErrorPageTemplate;
