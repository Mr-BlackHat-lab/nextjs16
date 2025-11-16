export default async function Productdetails(
    {params}:{params:Promise<{productid:string}>;}
) {
    const productid=(await params).productid;
    return(
        <h1>Details of product {productid}</h1>
    )
}