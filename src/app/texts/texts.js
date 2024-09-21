const title = "Confecciones Copitos";
const email = "kimberlein1506@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573197573821";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Confecciones Copitos se especializa en la creación de pijamas, blusas, sudaderas y buzos. Nuestra misión es ofrecer prendas cómodas y de alta calidad para cada ocasión. Nos inspiramos en el lema 'Un ave blanca' para diseñar cada pieza con un toque especial.",
        description2: "En Confecciones Copitos, nos esforzamos por proporcionar productos que combinen estilo y confort. Explora nuestra colección y descubre cómo nuestras confecciones pueden mejorar tu vestuario."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Un ave 🕊️ blanca",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
