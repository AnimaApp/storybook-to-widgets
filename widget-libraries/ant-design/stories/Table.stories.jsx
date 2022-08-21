import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { SimpleTableColumn } from "./TableColumn.stories";

export default {
    title: 'Ant Design/Table',
    component: Antd.Table,
    parameters: {
        custom_css:
            '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
        docs: {
            description: {
                component: 'Table',
            },
        },
    },
    argTypes: {
        title: { description: 'Title', type: 'boolean' },
        bordered: { description: 'Bordered', type: 'boolean' },
        showHeader: { description: 'Show header', type: 'boolean' },
        size: {
            description: 'Size',
            control: { type: 'select' },
            options: ['default', 'middle', 'small'],
        },
        loading: { description: 'Loading', type: 'boolean' },
        item: {
            type: "story",
            description: "item",
            storyInfo: SimpleTableColumn.storyInfo,
        },
        item2: {
            type: "story",
            description: "item",
            storyInfo: SimpleTableColumn.storyInfo,
        },
        item3: {
            type: "story",
            description: "item",
            storyInfo: SimpleTableColumn.storyInfo,
        },
    },
};


const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '15 Oxford Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'Tony',
        age: 22,
        address: '10 The Roundway',
    },

];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];



const Template = (args) => {
    return (
        <Antd.Table
            bordered={args.bordered}
            showHeader={args.showHeader}
            size={args.size}
            loading={args.loading}
            dataSource={args.dataSource}
        >
            <SimpleTableColumn {...args.item} />
            <SimpleTableColumn {...args.item2} />
            <SimpleTableColumn {...args.item3} />
        </Antd.Table>
    );
};

export const SimpleTable = Template.bind({});

SimpleTable.args = {
    bordered: false,
    showHeader: true,
    size: 'default',
    loading: false,
    dataSource: dataSource,
    columns: columns,
    item: {
        ...SimpleTableColumn.args,
        dataIndex: 'name',
        key: 'name',
        title: 'Name',
    },
    item2: {
        ...SimpleTableColumn.args,
        dataIndex: 'age',
        key: 'age',
        title: 'Age',
        sorter: (a, b) => a.age - b.age,
    },
    item3: {
        ...SimpleTableColumn.args,
        dataIndex: 'address',
        key: 'address',
        title: 'Address',
    },
};
