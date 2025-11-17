function getrandomNumber(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function reviewdetails({
  params,
}: {
  params: Promise<{
    productid: string;
    reviewid: string;
  }>;
}) {
  const random = getrandomNumber(2);
  if (random === 1) {
    throw new Error("Random Error Occurred");
  }
  const { reviewid, productid } = await params;
  return (
    <>
      <h1>
        {reviewid} see its is bad dont buy this product {productid}
      </h1>
    </>
  );
}
