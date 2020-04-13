import React from 'react';
import { connect, dynamic } from 'umi';
import { Button } from 'antd';

const BlockList = dynamic(() => import('@/components/BlockList'));

const Blocks = (props: any) => {
  const { blocks, dispatch } = props;
  const { data } = blocks;
  const fetchData = () => {
    dispatch({
      type: 'blocks/fetchBlocks',
      payload: {
        page: 2,
        size: 10
      }
    })
  }
  return (
    <div>
      <h2>Block List</h2>
      <Button onClick={fetchData}>Fetch Blocks</Button>
      <BlockList blocks={data} />
    </div>
  )
}

export default connect(({ blocks }) => ({
  blocks
}))(Blocks);
