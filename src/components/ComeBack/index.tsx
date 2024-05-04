import './style.css';

type ComeBackComponentProps = {
    // Define tus propiedades aquí
    payload: any
};

const ComeBackComponent = ({ }: ComeBackComponentProps) => {
    return (
        <div>
            <p>ComeBackComponent</p>
        </div>
    );
}

export default ComeBackComponent;