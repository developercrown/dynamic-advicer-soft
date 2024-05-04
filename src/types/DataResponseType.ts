import AdvicePropsInterface from "../interfaces/AdvicePropsInterface";
import ComeBackPropsInterface from "../interfaces/ComeBackPropsInterface";
import NetWorkPropsInterface from "../interfaces/NetWorkPropsInterface";

type ContentType = 'aviso' | 'reglas' | 'hora' | 'comeback' | 'promocional' | 'convocatoria' | 'network';

type DataResponseType = {
    type: ContentType;
    image?: string;
    payload?: AdvicePropsInterface | ComeBackPropsInterface | NetWorkPropsInterface; // Considerar definir un tipo más específico en lugar de any si es posible.
    qr?: string;
    scheme?: string;
    once?: boolean;
    duration?: number;
    expires?: number;
};

export default DataResponseType;