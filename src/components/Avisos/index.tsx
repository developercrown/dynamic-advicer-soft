import AdvicePropsInterface from '../../interfaces/AdvicePropsInterface';
import background from '../../assets/images/backgrounds/bg-primary.jpeg';
import decorator from '../../assets/images/items/decorator-alt.png';

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

import './style.css';

type AvisosComponentProps = {
    // Define tus propiedades aquí
    payload?: AdvicePropsInterface,
    scheme?: string
};

const AvisosComponent = ({ payload, scheme }: AvisosComponentProps) => {
    console.log("scheme", scheme);
    console.log("payload", payload);

    const backgroundScheme: string = scheme ? scheme : "primary";

    const backgroundImageUrl = (backgroundScheme && backgroundImages) && backgroundImages[backgroundScheme] || backgroundImages.primary;

    
    return (
        <div className={["announcementContainer", scheme].join(" ")} style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="decorator">
                <img src={decorator}/>
            </div>
            {
                payload?.title && <div className="title">{payload?.title}</div>
            }
            {
                payload?.content && <div className="content light-text">
                    {
                        payload?.content
                    }
                </div>
            }
            {
                payload?.footer && <div className="footer light-text">
                    {
                        payload?.footer
                    }
                </div>
            }
        </div>
    );
}

export default AvisosComponent;