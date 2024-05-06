import AdvicePropsInterface from '../../interfaces/AdvicePropsInterface';
import decorator from '../../assets/images/items/decorator-alt.png';
import advIcon from '../../assets/images/items/news-advice.svg';

import ComeBackPropsInterface from '../../interfaces/ComeBackPropsInterface';
import NetWorkPropsInterface from '../../interfaces/NetWorkPropsInterface';
import Text from '../UI/Texto';

import {
    bgDanger,
    bgDark,
    bgInfo,
    bgLight,
    bgPrimary,
    bgSecondary,
    bgSuccess,
    bgWarning
} from '../../assets/images/backgrounds'

import './style.css';

const backgroundImages: Record<string, unknown> = {
    primary: bgPrimary,
    secondary: bgSecondary,
    info: bgInfo,
    success: bgSuccess,
    warning: bgWarning,
    danger: bgDanger,
    light: bgLight,
    dark: bgDark,
};

type AvisosComponentProps = {
    // Define tus propiedades aquí
    payload?: AdvicePropsInterface | ComeBackPropsInterface | NetWorkPropsInterface | undefined,
    scheme?: string
};

const parseContent = (content: string) => {
    const elements = [];
    let index = 0;

    // Dividir el contenido basado en los comandos text y jump
    const segments = content.split(/<<(text|jump)>>/);

    let isText = false; // Controlar si el segmento actual es texto

    for (let i = 0; i < segments.length; i++) {
        if (segments[i] === "text") {
            isText = true;
            continue;
        } else if (segments[i] === "jump") {
            elements.push(<br key={"br" + index + i} />);
            isText = false;
            continue;
        }

        if (isText) {
            const textSegment = segments[i];
            const parsedText = parseTextSegment(textSegment, i);
            elements.push(parsedText);
            index++;
        }
    }

    return elements;
};

interface TextSegmentInterface {
    size: string | null;
    color: string | null;
    bold: string  | null | undefined;
}

const parseTextSegment = (segment: string, _index: number) => {
    const markerRegex = /<<(md|sm|lg|color-[a-z]+|bold)>>([^<]*)/g;
    let text = segment;
    const props: TextSegmentInterface = {
        size: 'md', // Tamaño por defecto
        color: null,
        bold: ""
    };

    let match;
    while ((match = markerRegex.exec(segment)) !== null) {
        const marker = match[1];
        text = match[2];

        if (marker.includes('color-')) {
            props.color = marker.split('-')[1]; // Extrae el color
        } else if (marker === 'bold') {
            props.bold = "bold";
        } else {
            props.size = marker;
        }
    }

    return <Text key={_index+"-"+props.size + props.color + props.bold} color={props.color} size={props.size} weight={props.bold}>{text}</Text>;
};




const AvisosComponent = ({ payload, scheme }: AvisosComponentProps) => {
    const backgroundScheme: string = scheme ? scheme : "primary";
    const backgroundImageUrl = (backgroundScheme && backgroundImages) && backgroundImages[backgroundScheme] || backgroundImages.primary;

    return (
        <div className={["announcementContainer", scheme].join(" ")} style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="decorator">
                <img src={decorator} />
            </div>
            {
                payload?.title && <div className="title">{payload?.title}</div>
            }

            <img src={advIcon} className="image-ads" />

            {
                payload && payload.content && (
                    <div className="content light-text">
                        {parseContent(payload.content)}
                    </div>
                )
            }
            {
                payload && payload.footer && (
                    <div className="footer light-text">
                        {parseContent(payload.footer)}
                    </div>
                )
            }
        </div>
    );
}

export default AvisosComponent;