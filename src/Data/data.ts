import DataResponseType from "../types/DataResponseType"

// scheme //info - warning, success, danger, primary, secondary light, dark es el esquema de color que afectara al diseño visual segun la elección
// once // define si se mostrara una sola vez y se ocultara o eliminara de la vista una vez que pase
// duration //opcional - por defecto 15segundos - son los segundos que durara la transición antes de cambiar a otro contenido
// type // define el tipo de contenido
// image //opcional - es una imagen que se posicionara en algun espacio en pantalla
// payload // datos variables que nutriran segun el contenido
// qr //opcional - genera un codigo QR con el contenido de este valor
// expires // opcional - define los minutos en los que expira y debera no mostrarse

const data: Array<DataResponseType> = [
    {
        type: "aviso",
        image: "./assets/images/aviso-icon.png",
        payload: {
            "title": "Comunicado Importante",
            "content": "<<text>><<md>>Querida comunidad Universitaria,<<jump>><<text>><<md>>se les comunica que este departamento trabaja en un horario de<<jump>><<text>><<md>><<bold>><<color-warning>>Lunes de miercoles y viernes de 8:00 a 15:00,<<jump>><<text>><<color-warning>><<md>><<bold>>Jueves y sabado de 8:00 a 14:00, <<jump>><<text>><<sm>>Agradecemos su comprensión.",
            "footer": "<<text>><<md>><<bold>>Atentamente,<<jump>><<text>><<sm>>Departamento de Sistemas y Tecnologías de la Información"
        },
        scheme: "primary",
        once: false,
        duration: 6
    },
    {
        type: "aviso",
        image: "./assets/images/aviso-icon.png",
        payload: {
            "title": "Cuidado con lo que haces",
            "content": "<<text>><<md>><<color-light>>Si detectamos que haces mal uso de las instancias te vamos a meter ala carcel",
            "footer": "<<text>><<md>><<color-light>>Atentamente,<<jump>><<text>><<color-light>><<sm>>Departamento de Sistemas y Tecnologías de la Información"
        },
        scheme: "secondary",
        once: false,
        duration: 8
    },
    // {
    //     type: "reglas"
    // },
    // {
    //     type: "hora"
    // },
    // {
    //     type: "comeback",
    //     payload: {
    //         "time": 5
    //     },
    //     duration: 20
    // },
    // {
    //     type: "promocional",
    //     image: "./assets/images/promocional.png",
    //     scheme: "warning",
    //     qr: "https://plataforma.upn164.edu.mx",
    //     once: false
    // },
    // {
    //     type: "convocatoria",
    //     image: "./assets/images/logo-lie.png",
    //     payload: {
    //         "title": "Licenciatura en Intervención Educativa",
    //         "content": "<<text>><<lg>>Modalidades ( En Línea, Mixta, Presencial )",
    //         "footer": "<<text>><<sm>Educar para transformar"
    //     },
    //     scheme: "primary",
    //     qr: "https://upn164.edu.mx /lie",
    //     once: false
    // },
    // {
    //     type: "network",
    //     payload: {
    //         "wpa": "Alumnos-UPN164",
    //         "wkey": "universidad164Zitacuaro"
    //     },
    //     once: true,
    //     expires: 5
    // }
]

export default data