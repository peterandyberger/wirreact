import '../../../assets/hyper/scss/Saas.scss';
import {translate as t} from '../../helpers/translate';
import {
    Column,
    TableInstance,
} from 'react-table';

import classNames from 'classnames';

export interface TableTemplateProps<T> {
    isSearchable?: boolean;
    isSortable?: boolean;
    pagination?: boolean;
    isSelectable?: boolean;
    isExpandable?: boolean;
    sizePerPageList?: PageSize[];
    columns?: ReadonlyArray<Column>;
    data?: T[];
    pageSize?: number;
    searchBoxClass?: string;
    tableClass?: TableClass;
    theadClass?: string;
    recordProps: Array<keyof T>;
    translatePreKey: string;
}

export type PageSize = {
    text: string;
    value: number;
};

export type PaginationProps = {
    tableProps: TableInstance;
    sizePerPageList: PageSize[];
};

export enum TableClass {
    Default = 'default',
    Striped = 'striped',
    Bordered = 'bordered'
}
const TableTemplate = function<T>({ recordProps, translatePreKey, data, tableClass = TableClass.Default}: TableTemplateProps<T>) {
    return <div className={tableClass}>
        {data && (
            <table className={classNames('table table-center react-table', tableClass)}>
                <thead>
                    <tr>
                        {recordProps.length > 0 && recordProps.map((header) =>
                            <th key={header as string} scope="col">
                                {t(translatePreKey + '.' + (header as string))}
                            </th>
                        )}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record: T, index: number) =>
                        <tr key={index}>
                            {recordProps.map((recordProp) => (
                                <td key={recordProp.toString()}>
                                    {`${record[recordProp as keyof T] ?? ''}`}
                                </td>
                            ))}
                            <td>
                                <button onClick={() => console.log(record)}>Action {index}</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )}

    </div>;

};
export default TableTemplate;

