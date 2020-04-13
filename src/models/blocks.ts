import { Effect, Reducer } from 'umi';
import * as API from '@/services/block';

export interface block {
  height: number;
  reward: number;
  timestamp: number;
  miner: string;
  txns: number;
}

export interface BlocksModelState {
  data: block[];
  size: number;
  page: number;
}

export interface BlocksModelType {
  namespace: 'blocks',
  state: BlocksModelState,
  reducers: {
    setBlocks: Reducer<BlocksModelState>;
  },
  effects: {
    fetchBlocks: Effect
  },
};

const BlocksModel: BlocksModelType = {
  namespace: 'blocks',

  state: {
    data: [],
    page: 1,
    size: 10
  },

  reducers: {
    setBlocks(state, action) {
      const { payload } = action;
      return payload;
    }
  },

  effects: {
    *fetchBlocks({ payload }, { call, put }) {
      const { page, size } = payload;
      const data = yield call(API.getBlocks, { page, size });
      const updation = {
        data,
        page,
        size
      }
      yield put({
        type: 'setBlocks',
        payload: updation
      })
    }
  }
};

export default BlocksModel;