import request from '@/utils/request';

type FetchType = {
  id: number;
};

export function fetchGetData(params: FetchType) {
  return request({
    url: '',
    method: 'get',
    params,
  });
}

export function fetchPostData(data: FetchType) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}

export function fetchDownloadData(params: FetchType) {
  return request({
    url: '',
    method: 'get',
    params,
    responseType: 'blob',
    timeout: 60 * 1000,
  });
}
