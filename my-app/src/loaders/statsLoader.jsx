import { post } from "../data/post";

export default function statsLoader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ post });
    }, 300);
  });
}
