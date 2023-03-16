import { ReactElement } from 'react';
import Table from '../../shared/modules/table/table';
import styles from './sample.module.scss';
import {MockTableRecord} from '../../shared/interfaces/mock.interface';

export interface SampleTemplateProps {
    title: string,
    tableRecordList: Array<MockTableRecord[]>;
}

const SampleTemplate = function ({ title, tableRecordList }: SampleTemplateProps): ReactElement {
    return (
        <>
            <div className={styles.sample}>
                <h1>{title}</h1>
            </div>
            {tableRecordList.map((recordList, index) => (
                <div key={index}>
                    <h2>Table {index + 1}</h2>
                    <Table<MockTableRecord>
                        recordList={recordList}
                        translatePreKey={'sample.table'}
                    />
                </div>
            ))}
        </>
    );
};

export default SampleTemplate;
