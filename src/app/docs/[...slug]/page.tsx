export default async function docs(
    {params}
    :
    {params:Promise<{slug:string[]}>;}
){
    const {slug} = await params;
    if(slug?.length == 2){
        return(
            <h1>this {slug[0]} is shit in price of {slug[1]} dont buy it</h1>
        )
    }else if(slug?.length==1){
        return <h1>tihs {slug[0]} is shit dont buy it in any price</h1>
    }
    return(
        <>
        <h1>docs home page</h1>;
        </>
    )
}