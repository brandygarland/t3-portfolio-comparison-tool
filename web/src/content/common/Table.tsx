import * as React from 'react'

export interface TableProps {
    columnHeaders: object;
    tableType?: string;
    customPlaceholder?: string;
    data?: object[];
    showPrimaryKey?: boolean;
    tableClick?(event: any);
}

const Table = (props: TableProps) => {

    const renderTableHeaderColumns = () => {
        return Object.keys(props.columnHeaders).map((key) => {
            return <th key={key}> {props.columnHeaders[key]}</th>
        })
    }

    const renderTableRows = () => {
        let noData = (props.data === undefined || props.data.length === 0)
        if (noData) {
            return (
                <tr className="noDataCell">
                    {props.customPlaceholder ?
                        <td> {props.customPlaceholder} </td> :
                        <td> No data </td>
                    }
                </tr>
            )
        } else {
            return props.data.map((datum, index) => {
                return (
                    <tr
                        className="table-row"
                        key={index}
                        data-value={datum[index]}
                    >
                        {renderCell(datum, index)}
                    </tr>
                )
            })
        }
    }

    const renderCell = (datum, rowIndex) => {
        const keys = Object.keys(props.columnHeaders)
        return keys.map((key, index) => {
            let isPrimaryKey = (index === 0 && typeof props.tableClick === 'function')
            if (isPrimaryKey && props.showPrimaryKey) {
                return (
                    <td key={rowIndex * keys.length + index}>
                        <a
                            className="tableRowKey"
                            href="/#"
                            data-value={datum[key]}
                            onClick={props.tableClick}
                        >
                            {datum[key]}
                        </a>
                    </td>
                )
            } else {
                return <td key={rowIndex * keys.length + index}>{datum[key]}</td>
            }
        })
    }
    return (
        <div id="table-container">
            <table id={props.tableType + '_list_table'} className="list_table">
                <thead>
                <tr>
                    {renderTableHeaderColumns()}
                </tr>
                </thead>
                <tbody className="list_table_body">
                {renderTableRows()}
                </tbody>
            </table>
        </div>
    )
}

export default Table