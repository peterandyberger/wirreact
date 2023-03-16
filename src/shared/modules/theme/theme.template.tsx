import React, { ReactElement } from 'react';
import styles from './theme.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Menu from '../Menu/menu';
import { getMenuItems } from '../../helpers/menu';

const ThemeTemplate = function (): ReactElement {

    return <>
        <Header/>
        <div className={styles.theme}>
            <div>
                <Menu menuItems={getMenuItems()} />
            </div>
            <div className={styles.outletContent}>
                <Outlet/>
            </div>
        </div>
    </>;
};

export default ThemeTemplate;
