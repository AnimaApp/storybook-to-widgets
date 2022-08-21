import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
    title: "Ant Design/Table Column",
    component: Antd.Table.Column,
    parameters: {
        docs: {
            description: {
                component: "Item",
            },
        },
        container: Antd.Table,
        titleArg: "tab",
        custom_css:
            '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    },
    argTypes: {
        title: { description: 'Title', type: 'string' },
        width: { description: 'Width', type: 'number' },
        align: {
            description: 'Align',
            control: { type: 'select' },
            options: ['left', 'right', 'center'],
        },
        filtered: { description: 'Filtered', type: 'boolean' },
        sorter: { description: 'Sorter', type: 'boolean' },
        dataIndex: { description: 'Data Index', type: 'string' },
    },
};


const Template = (args) => {
    return (
        <Antd.Table.Column
            title={args.title}
            width={args.width}
            align={args.align}
            filtered={args.filtered}
            sorter={args.sorter}
            dataIndex={args.dataIndex}
        />
    );
};
export const SimpleTableColumn = Template.bind({});


SimpleTableColumn.args = {
    title: 'Title',
    width: 100,
    align: 'left',
    filtered: false,
    sorter: false,
    dataIndex: 'address',

};

SimpleTableColumn.storyInfo = {
    name: "SimpleTableColumn",
    kind: "Ant Design/Table Column",
};
