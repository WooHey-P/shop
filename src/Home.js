function Home(props) {
    return(
        <div>
            <div className='container'>
                <div className='row'>
                {
                    props.shoes.map((item, idx) => {
                    return <Shoe item={props.shoes[idx]} idx={idx} />
                    })
                }
                </div>
            </div>
        </div>
    );
}

function Shoe(props) {
    return (
      <div className='col-md-4'>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.idx + 1) + '.jpg'} width='100%' />
        <h4>{props.item.name}</h4>
        <p>{props.item.content} & {props.item.price}</p>
      </div>
    )
}
  

export default Home;