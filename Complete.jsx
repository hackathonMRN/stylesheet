import { useLocation, useNavigate } from 'react-router-dom';

function Complete() {
    const navigate = useNavigate();
    const location = useLocation(); // useLocation 훅을 사용하여 location 정보 가져오기
    const answers = location.state?.answers || []; // 상태에서 answers 가져오기

    return (
        <div className="App">
            <h2>모든 질문이 다 끝났습니다!</h2>
            <button className="button" onClick={() => navigate('/result', { state: { answers } })}>
                결과 확인하기
            </button>
        </div>
    );
}