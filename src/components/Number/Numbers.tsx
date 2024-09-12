import './Numbers.css';
interface Props {
    number: number;
}


const Numbers: React.FC<Props> = ({number}) => {
    return (
        <div className="numbers">
            <button className="random-btn" type="button">New Numbers</button>
            <div className="numberCircle">{number}</div>
        </div>
    );
};

export default Numbers;