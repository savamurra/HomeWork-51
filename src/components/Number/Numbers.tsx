import './Numbers.css';
interface Props {
    number: number;
}


const Numbers: React.FC<Props> = ({number}) => {
    return (
            <div className="numberCircle">{number}</div>
    );
};

export default Numbers;