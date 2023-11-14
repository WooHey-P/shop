import { Outlet } from 'react-router-dom';

function Event(props) {
    return (
        <>
            <h2>이벤트 페이지</h2>
            <button onClick={props.one}>이벤트1</button>
            <button onClick={props.two}>이벤트2</button>
            
            <Outlet />
        </>
    );
}

function EventOne() {
    return (
        <div>첫 주문시 맛난거 사줌</div>
    );
}

function EventTwo() {
    return (
        <div>생일 기념 쿠폰받기</div>
    );
}

export { Event, EventOne, EventTwo };