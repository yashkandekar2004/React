function Card(data){

    return (
        <>
        <h1>{data.name}</h1>
        <img src={data.img} alt="" srcset="" />
        <p>MOBILE_NO : {data.mobile}</p>
        <p>EMAIL : {data.email}</p>
        </>
    )
}
export default Card;