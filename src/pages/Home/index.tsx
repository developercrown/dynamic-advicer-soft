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

// const api_call_time = 5000; // Tiempo en milisegundos para llamar a la API cada 5 segundos

const Home = () => {
    const [progress, setProgress] = useState<number>(100); // Progreso inicializado al 100%
    const [data, setData] = useState<DataResponseType[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            // Simulación de carga de datos
            setData([...DataResponse]);
            setCurrentIndex(0);
        };

        fetchData();
        // const intervalId = setInterval(fetchData, api_call_time);
        // return () => clearInterval(intervalId);
    }, []);

    useEffect(() => { //TODO: uncomment in production
        if (!data.length) return;

        const currentData: DataResponseType = data[currentIndex];
        const duration = (currentData.duration || 10) * 1000; // Usa 10 segundos como valor por defecto
        setProgress(100); // Reinicia la barra de progreso al 100%

        const intervalDuration = 100; // Intervalo de actualización del progreso en milisegundos
        const totalSteps = duration / intervalDuration;
        let steps = 0;

        const progressInterval = setInterval(() => {
            steps++;
            setProgress(100 - (steps / totalSteps * 100));
        }, intervalDuration);

        const timer = setTimeout(() => {
            // console.log("Transitioning to next content at", new Date().toTimeString());
            setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
        }, duration);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [currentIndex, data]);


    // Función para renderizar el contenido adecuado
    const renderContent = (item: DataResponseType) => {
        // console.log("rendering", item.type, item);

        switch (item.type) {
            case 'aviso':
                return <AvisosComponent scheme={item.scheme} payload={item.payload} />;
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
        <div className="home" style={{ width: '100vw', height: '100vh', backgroundColor: "#333" }}>
            <AnimatePresence>
                {data.length > 0 && (
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 400 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0.6, x: 0 }}
                        transition={{ duration: 1, delay: 0, ease: [0.17, 0.67, 0.83, 0.67], type: "spring", bounce: 0.6 }}
                        className="content-wrapper"
                    >
                        {renderContent(data[currentIndex])}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="progress-bar-scene" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default Home;
