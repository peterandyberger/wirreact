import './app.module.scss';
import './app.module.scss';
import styles from './app.module.scss';
import {RouterProvider } from 'react-router-dom';
import { routeConfig } from './routes.config';
import {useEffect} from 'react';
import {saveEnvVariables} from './redux/actions';
import {useDispatch} from 'react-redux';
import './assets/hyper/scss/Saas.scss';

function App () {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(new Date());
        dispatch(saveEnvVariables(import.meta.env));
    }, []);

    return (
        <div className={styles.app}>
            <RouterProvider router={routeConfig}/>
        </div>
    );
}

export default App;
