import { useParams } from "react-router-dom";

function Detail(props) {
    let {id, name} = useParams();

    console.log('id', id, 'name', name);

    const findShoes = props.shoes.find((item) => { 
        return item.id === parseInt(id);
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id)+1) + '.jpg'} width='100%' />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findShoes?.name}</h4>
                    <p>{findShoes?.content}</p>
                    <p>{findShoes?.price} 원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger">뒤로가기</button> 
                </div>
            </div>
        </div>
    );
}

export default Detail;