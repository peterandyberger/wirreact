import { ReactElement } from 'react';
import styles from './header.module.scss';

export interface HeaderTemplateProps {
    title: string
}

const HeaderTemplate = function ({ title }: HeaderTemplateProps): ReactElement {

    return <>
        <div className={styles.uiKit}>
            <h1>{title}</h1>
        </div>
    </>;
};

export default HeaderTemplate;
