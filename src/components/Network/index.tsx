import './style.css';

type NetworkComponentProps = {
    // Define tus propiedades aquí
    payload: any
};

const NetworkComponent = ({ }: NetworkComponentProps) => {
    return (
        <div>
            <p>NetworkComponent</p>
        </div>
    );
}

export default NetworkComponent;