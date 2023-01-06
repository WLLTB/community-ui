import {Get, Post} from '../axios.js';

export const saveBlog = async blog => {
  return Post({
    url: '/api/blog',
    data: blog,
  })
};

export const getBlogList = async ({current, size, name}) => {
  return Get({
    url: '/api/blog',
    params: {
      current,
      size,
      title: name,
    },
  })
};

export const getBlogType = async () => {
  return Get({
    url: '/api/blog/type',
  })
};

