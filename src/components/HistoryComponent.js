import {useNavigate} from 'react-router-dom';

function HistoryComponent() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );

}
export default HistoryComponent;