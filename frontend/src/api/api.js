import axios from "axios";

const baseURL = "http://localhost:3000";

export const getAllPosts = async () => {
  const api = await axios.get(`${baseURL}/posts`);
  if (api.status === 200) {
    return api.data;
  } else {
    return;
  }
};

export const getPost = async (id) => {
  const api = await axios.get(`${baseURL}/posts/${id}`);
  if (api.status === 200) {
    return api.data;
  } else {
    return;
  }
};

export const createPost = async (post) => {
  const api = await axios.post(`${baseURL}/posts`, post);
  return api;
};

export const updatedPost = async (id, post) => {
  const api = await axios.put(`${baseURL}/posts/${id}`, post);
  return api;
};

export const deletePost = async (id) => {
  const api = await axios.delete(`${baseURL}/posts.${id}`);
  return api;
};
