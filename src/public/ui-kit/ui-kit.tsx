import UiKitTemplate, { UiKitCallbacks } from './ui-kit.template';
import { ReactElement, useEffect, useState } from 'react';
import { CallbackCollection } from '../../shared/interfaces/common.interface';
import axios from 'axios';
import { ChuckJoke, JsonPlaceholderUser } from '../../shared/interfaces/joke.interface';
import { useLoaderTData } from '../../shared/helpers/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedIn} from '../../redux/actions';
import { ReduxStore } from '../../redux/reducers';

export interface UiKitPageProps {
    isVisible: boolean
}

const UiKitPage = function ({}: UiKitPageProps): ReactElement {

    const [joke, setJoke] = useState<ChuckJoke | undefined>(undefined);
    const urlWrappedData = useLoaderTData<JsonPlaceholderUser>();
    const dispatch = useDispatch();
    const login = useSelector<ReduxStore, boolean>((state) => state.loggedIn);

    const callbacks: CallbackCollection<UiKitCallbacks> = {
        [UiKitCallbacks.GET_JOKE]: () => getJoke(),
        [UiKitCallbacks.LOGIN_STATE_CHANGE]: () => dispatch(setLoggedIn(!login))

    };

    useEffect(() => {
        if (urlWrappedData) {
            console.log('url wrapped Data', urlWrappedData.name);
        }
    }, [urlWrappedData]);

    function getJoke() {
        axios.get<ChuckJoke>('/jokes/random').then((resp) => {
            console.log('getJoke', resp);
            setJoke(resp.data);
        });
    }

    return <UiKitTemplate
        callbacks={callbacks}
        joke={joke}
        userName={urlWrappedData?.name}
        title={'UI Kit page'}
        login={login}/>;
};

export default UiKitPage;
