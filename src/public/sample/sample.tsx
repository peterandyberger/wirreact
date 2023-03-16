import SampleTemplate from './sample.template';
import { ReactElement, useEffect } from 'react';
import { useLoaderTData } from '../../shared/helpers/hooks';
import { SampleLoader } from '../../shared/helpers/loaders';
import {MockTableRecord} from '../../shared/interfaces/mock.interface';

export interface SamplePageProps {
    isVisible?: boolean,
}

const SamplePage = function ({}: SamplePageProps): ReactElement {

    const loaderData = useLoaderTData<SampleLoader>();

    const records: MockTableRecord[] = [
        { id: 1, firstName: 'Mark', lastName: 'Otto', userName: '@mdo'},
        { id: 2, firstName: 'Jacob', lastName: 'Thornton', userName: '@fat'},
        { id: 3, firstName: 'Dave', lastName: 'G', userName: '@dave'},
        { id: 4, firstName: 'Nik', lastName: 'N', userName: '@nikn'},
        { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', userName: '@sn'},
    ];

    const recordsMissing: MockTableRecord[] = [
        { id: 1, firstName: 'Mark', userName: '@mdo'},
        { id: 2, firstName: 'Jacob', lastName: 'Thornton'},
        { id: 3, userName: '@dave'},
        { id: 4, firstName: 'Nik', lastName: 'N', userName: '@nikn'},
        { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', userName: '@sn'},
    ];

    useEffect(() => {
        console.log('loaderData changed', loaderData);
    }, [loaderData]);

    return <SampleTemplate
        tableRecordList={[records, recordsMissing]}
        title={'Table page' + (loaderData ? ': ' + loaderData.sampleId : '')}/>;
};

export default SamplePage;
