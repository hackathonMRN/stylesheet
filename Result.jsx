import { useLocation } from 'react-router-dom';

function Result() {
    const location = useLocation(); // useLocation 훅을 사용하여 location 정보 가져오기
    const answers = location.state?.answers || []; // 상태에서 answers 가져오기

    return (
        <div className="App">
            <h2>설문 결과</h2>
            <ul>
                {answers.map((item, index) => (
                    <li key={index}>
                        <strong>{item.question}</strong>: {item.answer}
                    </li>
                ))}
            </ul>
        </div>
    );
}