import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "First blog",
  },
};
export default function first() {
  return <h1>firts blog</h1>;
}
