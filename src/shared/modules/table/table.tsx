import TableTemplate from './table.template';
import {useEffect, useState} from 'react';

export interface TableProps<T> {
    recordList: T[],
    translatePreKey: string,
    customRecordProps?: string[],
}

const Table = function<T>({
    recordList,
    translatePreKey,
    customRecordProps,
}:TableProps<T>) {

    const [recordProps,setRecordProps] = useState<(keyof T)[]>([]);

    useEffect(() => {
        if (customRecordProps) {
            setRecordProps(customRecordProps as (keyof T)[]);
            return;
        }
        const mergedRecords = recordList.reduce((acc, record) => ({...acc, ...record}));
        setRecordProps(Object.keys(mergedRecords as object) as (keyof T)[]);
    }, [recordList, customRecordProps]);






    return  <TableTemplate<T>
        recordProps={recordProps}
        translatePreKey={translatePreKey}
        data={recordList}
        isSearchable={true}/>;

};

export default Table;

