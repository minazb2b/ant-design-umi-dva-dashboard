import request from '@/utils/request';

export async function getBlocks(query: any): Promise<any> {
  return request('blocks', {
    params: query
  }).then(res => res.data)
    .then(data => data.data)
    .catch(e => []);
}

export async function getBlock(height: string): Promise<any> {
  return request(`block/${height}`);
}