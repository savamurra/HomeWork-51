import './Numbers.css';
interface Props {
    number: number;
}


const Numbers: React.FC<Props> = ({number}) => {
    return (
        <div className="numbers">
            <div className="numberCircle">{number}</div>
        </div>
    );
};

export default Numbers;