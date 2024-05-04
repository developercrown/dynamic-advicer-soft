import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AvisosComponent from '../../components/Avisos';
import ReglasComponent from '../../components/Reglas';
import ClockComponent from '../../components/Clock';
import ComeBackComponent from '../../components/ComeBack';
import PromocionalesComponent from '../../components/Promocionales';
import ConvocatoriasComponent from '../../components/Convocatorias';
import NetworkComponent from '../../components/Network';

import DataResponse from '../../Data/data';
import DataResponseType from '../../types/DataResponseType';

import './style.css';

const api_call_time = 5000; // Tiempo en milisegundos para llamar a la API cada 5 segundos

const Home = () => {
    const [data, setData] = useState<DataResponseType[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            // Simulación de carga de datos
            setData([...DataResponse]);
            setCurrentIndex(0);
        };

        fetchData();
        const intervalId = setInterval(fetchData, api_call_time);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!data.length) return;
        // const timer = setTimeout(() => {
        //     setCurrentIndex((currentIndex + 1) % data.length);
        // }, data[currentIndex].duration || 15000);
        // return () => clearTimeout(timer);
    }, [currentIndex, data]);

    // Función para renderizar el contenido adecuado
    const renderContent = (item: DataResponseType) => {
        console.log("rendering", item.type, item);
        
        switch (item.type) {
            case 'aviso':
                return <AvisosComponent payload={item.payload} />;
            case 'reglas':
                return <ReglasComponent />;
            case 'hora':
                return <ClockComponent />;
            case 'comeback':
                return <ComeBackComponent payload={item.payload} />;
            case 'promocional':
                return <PromocionalesComponent payload={item.payload} />;
            case 'convocatoria':
                return <ConvocatoriasComponent payload={item.payload} />;
            case 'network':
                return <NetworkComponent payload={item.payload} />;
            default:
                return <div>Unknown type</div>;
        }
    };

    return (
        <div className="home" style={{ width: '100vw', height: '100vh' }}>
            <AnimatePresence>
                {data.length > 0 && (
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="content-wrapper"
                    >
                        {renderContent(data[currentIndex])}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
