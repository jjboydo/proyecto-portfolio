AOS.init()

const TAGS = {
    REACT: {
        name: "React.js",
        class: "bg-cyan-700/80 text-white",
        icon: "../assets/img/logos/react.svg",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-cyan-100/80 text-cyan-700",
        icon: "../assets/img/logos/tailwindcss.svg",
    },
    REACT_ROUTER: {
        name: "React Router DOM",
        class: "bg-red-400/80 text-white",
        icon: "../assets/img/logos/reactrouter.svg",
    },
    CHAKRA_UI: {
        name: "Chakra UI",
        class: "bg-cyan-400/80 text-white",
        icon: "../assets/img/logos/chakra-ui.svg",
    },
    FIREBASE: {
        name: "Firebase",
        class: "bg-yellow-600/80 text-white",
        icon: "../assets/img/logos/firebase.svg",
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        class: "bg-purple-900/80 text-white",
        icon: "../assets/img/logos/bootstrap.svg",
    },
    POSTGRESQL: {
        name: "PostgreSQL",
        class: "bg-blue-900/80 text-white",
        icon: "../assets/img/logos/postgresql.svg",
    },
    FIGMA: {
        name: "Figma",
        class: "bg-white/80 text-black",
        icon: "../assets/img/logos/figma.svg",
    },
    HTML: {
        name: "HTML",
        class: "bg-orange-700/80 text-white",
        icon: "../assets/img/logos/html5.svg",
    },
    CSS: {
        name: "CSS",
        class: "bg-blue-800/80 text-white",
        icon: "../assets/img/logos/css.svg",
    },
    NODE: {
        name: "Node.js",
        class: "bg-green-800/80 text-white",
        icon: "../assets/img/logos/nodejs.svg",
    },
    EXPRESS: {
        name: "Express.js",
        class: "bg-gray-700/80 text-white",
        icon: "../assets/img/logos/expressjs_dark.svg",
    },
    MONGODB: {
        name: "MongoDB",
        class: "bg-green-600/80 text-white",
        icon: "../assets/img/logos/mongodb-wordmark.svg",
    },
};

const PROJECTS = [
    {
        title: "Coldwell Banker",
        description: "Aplicacion web para la gestión de un sistema inmobiliario",
        link: "https://coldwellbanker.vercel.app/",
        github: "https://github.com/jjboydo/proyecto-coldwell-banker",
        image: "../assets/img/projects/813shots_so.png",
        tags: [TAGS.MONGODB, TAGS.EXPRESS, TAGS.REACT, TAGS.NODE, TAGS.TAILWIND, TAGS.REACT_ROUTER],
    },
    {
        title: "Punto Padel",
        description: "Proyecto de un ecommerce de productos de padel",
        link: "https://puntopadel.vercel.app/",
        github: "https://github.com/jjboydo/proyecto-React-PuntoPadel",
        image: "../assets/img/projects/780shots_so.webp",
        tags: [TAGS.TAILWIND, TAGS.REACT, TAGS.REACT_ROUTER, TAGS.CHAKRA_UI, TAGS.FIREBASE],
    },
    {
        title: "Reserva Total",
        description: "Proyecto de un sistema de reservas de canchas de distintos deportes",
        link: "https://softwarecancha.onrender.com/",
        github: "https://github.com/bj10asd/SoftwareCancha",
        image: "../assets/img/projects/308shots_so.webp",
        tags: [TAGS.BOOTSTRAP, TAGS.POSTGRESQL, TAGS.FIGMA, TAGS.HTML, TAGS.CSS],
    },
];

const contenedor = document.getElementById('projects');

PROJECTS.forEach(({ title, description, tags, image, link, github }) => {
    // Crear los elementos HTML
    const article = document.createElement('article');
    // Agregar las clases y atributos necesarios
    article.setAttribute('data-aos', 'fade-up');
    article.setAttribute('data-aos-easing', 'ease-in-sine');
    article.setAttribute('data-aos-duration', '1000');
    article.className = 'group hover:scale-[1.005] transition-all duration-1000 bg-slate-950 rounded-lg border border-gray-700/20 shadow-lg p-7 my-10';
    // Agregar el contenido al artículo
    article.innerHTML = `
            <a href=${link} target="_blank" rel="noopener noreferrer">
                <div class="flex items-center justify-between">
                    <h3 class="mb-4 md:mb-2 text-2xl md:text-4xl font-semibold bg-gradient-to-br from-sky-300 to-cyan-400 inline-block text-transparent bg-clip-text">
                        ${title}
                    </h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-square-arrow-right group-hover:translate-x-5 transition-all duration-200 ease-linear delay-200 sm:mr-5"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#26C6DA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 16l4 -4l-4 -4" />
                        <path d="M8 12h8" />
                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    </svg>
                </div>
                <p class="text-md md:text-lg mb-4 text-pretty">${description}</p>
                <div class="sm:flex sm:items-center justify-between">
                    <ul class="flex flex-wrap gap-y-2 gap-x-3 pb-5 justify-center sm:justify-start">
                        ${tags.map((tag) => `
                            <li>
                                <span class="inline-flex items-center gap-x-2 py-1.5 px-3 rounded-lg text-xs font-medium ${tag.class}">
                                    <img src="${tag.icon}" class="hidden sm:block size-6 justify-center" alt="" />
                                    ${tag.name}
                                </span>
                            </li>
                        `).join('')}
                    </ul>
                    <a
                        href=${github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center  gap-x-5 mb-5 hover:scale-105 rounded-lg transition-all duration-700 hover:bg-cyan-200/20 p-2 hover:text-cyan-300/70"
                    >
                        <p>GitHub</p>
                        <svg
                            class="size-8 opacity-30"
                            viewBox="0 0 256 250"
                            width="256"
                            height="250"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                            ><path
                                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                                fill="currentColor"></path></svg
                        >
                    </a>
                </div>
                <img
                    class="rounded-xl shadow-xl shadow-sky-200/20 border-4 border-gray-200/30 border-double group-hover:scale-[1.005] group-hover:bg-sky-300 bg-cyan-600/20 transition-all duration-700 ease-in-out"
                    src=${image}
                    alt=${title}
                />
            </a>
    `;

    // Agregar el artículo al DOM
    contenedor.appendChild(article);
});

// Email

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const contactButton = document.getElementById('contact-button');

const publicKey = "iXKu11A2nxLT8Dsl8"
const serviceId = "service_qh6n4ul"
const templateId = "template_qadtjc8"

emailjs.init(publicKey);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    contactButton.disabled = true;
    contactButton.textContent = "Enviando...";

    const inputFields = {
        name: contactName.value,
        email: contactEmail.value,
        message: contactMessage.value,
    };

    emailjs.send(serviceId, templateId, inputFields)
        .then(() => {
            contactName.value = "";
            contactEmail.value = "";
            contactMessage.value = "";
            contactButton.textContent = "Mensaje enviado";
            contactButton.disabled = false;
            setTimeout(() => {
                contactButton.textContent = "Enviar";
            }, 3000);
        }), (error) => {
            console.log(error)
            contactButton.textContent = "Error al enviar";
            contactButton.disabled = false;
            setTimeout(() => {
                contactButton.textContent = "Enviar";
            }, 3000);
        };
});