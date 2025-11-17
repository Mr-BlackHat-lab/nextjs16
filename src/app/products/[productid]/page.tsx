import { Metadata } from "next";
type Props = {
  params: Promise<{ productid: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productid;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${id} st product`);
    }, 100);
  });
  return {
    title: `product ${title} details page`,
  };
};
export default async function Productdetails({ params }: Props) {
  const productid = (await params).productid;
  return <h1>Details of product {productid}</h1>;
}
