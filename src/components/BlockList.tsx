import React from "react";
import { Table } from "antd";
import { Link } from "umi";

const columns = [
  {
    title: "Block",
    key: "height",
    dataIndex: 'height',
  },
  {
    title: "Age",
    key: "timestamp",
    dataIndex: 'timestamp',
  },
  {
    title: "Miner",
    key: 'miner',
    dataIndex: 'miner',
    render(miner: any, record: any) {
      return <Link to={`/miner/${miner}`}>{miner}</Link>;
    }
  },
  {
    title: "Txn",
    key: "txns",
    dataIndex: 'txns',
  },
  {
    title: "Reward",
    key: "reward",
    dataIndex: 'reward',

  },
];

const BlockList = (props: any) => {
  const { blocks = [] } = props;
  return (
    <Table dataSource={blocks} columns={columns} rowKey={'height'}></Table>
  );
};

export default BlockList;
