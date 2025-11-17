import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Main Page",
};
export default async function blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return <h1>blog main page</h1>;
}
