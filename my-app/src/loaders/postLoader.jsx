import { post } from "../data/post";

export default function postLoader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ post });
    }, 300);
  });
}
