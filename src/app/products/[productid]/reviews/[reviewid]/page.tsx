export default async function reviewdetails(
    {params}:{params:Promise<{
        productid:string;
        reviewid:string;
    }>;}
){
    const {reviewid, productid} = await params;
    return(
        <><h1>{reviewid} see its is bad dont buy this product {productid}</h1></>
    )
}