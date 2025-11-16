import { Metadata } from "next";
type Props = {
  params: Promise<{ productid: string }>;
};
export const genreateMetadata = async ({params}:Props):Promise<Metadata>=>{
    const id = (await params).productid;
    return {
        title : `product ${id} details page`
    }
}
export default async function Productdetails({ params }: Props) {
  const productid = (await params).productid;
  return <h1>Details of product {productid}</h1>;
}
