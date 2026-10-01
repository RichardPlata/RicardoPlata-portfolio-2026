import {
  guqi1, guqi2, guqi3,
  hardwood1, hardwood2, hardwood3,
  kokoro1, kokoro2, kokoro3,
  shine1, shine2, shine3,
  auraProjectsVideo, auraDriveModesVideo, auraExteriorVideo,
} from './mediaAssets.js'

export const caseStudies = {
  'gu-qi': {
    title: 'GU-QI', role: 'UX/UI · Front-end', tools: 'Figma · React · Vite · CSS',
    link: 'https://guqi-website.vercel.app/',
    cover: { type: 'image', src: guqi1 },
    media: [
      { type: 'image', src: guqi2 },
      { type: 'image', src: guqi3 },
    ],
    en: {
      intro: 'A clearer way to discover therapies and reach a wellness center in Mexico.',
      context: 'GU-QI offers integrative wellness services and courses. I designed and built a responsive Spanish-language website around the questions visitors need answered before getting in touch.',
      sections: [
        { title: 'Making the services understandable', body: 'The content needed a clear order. I put therapies first, gave each service its own space, and separated courses and the center’s philosophy so visitors could find the right information quickly.', media: 'Site structure and therapy pages' },
        { title: 'A direct route to conversation', body: 'WhatsApp became the main contact action. Visitors can explore a service and then ask the center for more information without completing an unnecessary form.', media: 'Desktop and mobile mockups' },
      ],
      decision: { title: 'Services first, contact second', before: 'A visitor needed to understand what each therapy offered before deciding what to ask.', after: 'The new structure lets people browse therapies and their details, then continue the conversation through WhatsApp. Whether this helps bookings still needs validation.' },
      closing: 'The site connects service discovery with a clear next step. A future iteration should test whether visitors understand the therapies and can find the right contact action.',
    },
    es: {
      intro: 'Una forma más clara de explorar terapias y contactar con un centro de bienestar en México.',
      context: 'GU-QI ofrece terapias integrativas y cursos. Diseñé y desarrollé un sitio responsivo en español, organizado alrededor de las preguntas que una persona necesita resolver antes de contactar al centro.',
      sections: [
        { title: 'Hacer comprensibles los servicios', body: 'El contenido necesitaba un orden claro. Di prioridad a las terapias, reservé espacio para explicar cada servicio y separé los cursos y la filosofía del centro para facilitar la exploración.', media: 'Estructura del sitio y páginas de terapias' },
        { title: 'Un camino directo a la conversación', body: 'WhatsApp se convirtió en la acción principal de contacto. Después de explorar un servicio, la persona puede resolver dudas con el centro sin completar un formulario innecesario.', media: 'Mockups de escritorio y móvil' },
      ],
      decision: { title: 'Primero el servicio, después el contacto', before: 'Antes de preguntar, la persona necesitaba entender qué ofrece cada terapia.', after: 'La nueva estructura permite explorar las terapias y sus detalles antes de continuar la conversación por WhatsApp. Aún falta validar si esto facilita las reservas.' },
      closing: 'El sitio conecta la exploración de servicios con un siguiente paso claro. Una futura iteración deberá comprobar si las personas comprenden las terapias y encuentran fácilmente el contacto.',
    },
  },

  kokoro: {
    title: 'Kokoro Bake Studio', role: 'UX/UI', roleDetail: 'UX/UI Designer', tools: 'Figma', year: '2026', category: 'UX/UI',
    cover: { type: 'image', src: kokoro1 },
    media: [
      { type: 'image', src: kokoro2 },
      { type: 'image', src: kokoro3 },
    ],
    en: {
      intro: 'A mobile baking experience built around the small moments worth celebrating.',
      context: 'Kokoro Bake Studio is a bakery experience for Latino and multicultural families in Michigan. This project focused on the mobile app rather than a brand identity system. The final concept is a five-screen flow that helps people discover the menu, customize a cake, review an order, and follow it while it is being baked.',
      sections: [
        { title: 'Home & menu', body: 'The first part of the flow brings the user into the app and makes the menu easy to explore. Product discovery stays immediate, with categories and popular items visible without adding unnecessary steps.', media: 'Kokoro home and menu' },
        { title: 'Customize the cake', body: 'The customization step turns the order into a focused set of choices. Size, flavor and the message can be selected before the user reviews the final request.', media: 'Kokoro cake customization' },
        { title: 'Review, order & baking status', body: 'The final part brings the selected product and delivery details together, then communicates that the order is being prepared. The five-screen flow ends with a clear status instead of adding another complex tracking experience.', media: 'Kokoro order and baking status' },
      ],
      decision: { title: 'Focus the project on the product experience', before: 'The project could have expanded into a complete brand identity, packaging and other visual deliverables.', after: 'I left those identity deliverables aside and focused the project on the mobile app itself: five screens that explain the core ordering journey from entry to baking status.' },
      closing: 'The result is a five-screen mobile app concept focused on the ordering journey. The project demonstrates how the experience can move from menu discovery to cake customization, order review and baking status without expanding the scope into a full brand identity.',
    },
    es: {
      intro: 'Una experiencia móvil de repostería construida alrededor de los pequeños momentos que vale la pena celebrar.',
      context: 'Kokoro Bake Studio es una experiencia de repostería dirigida a familias latinas y multiculturales en Michigan. Este proyecto se enfocó en la aplicación móvil y no en desarrollar un sistema de identidad de marca. El concepto final está compuesto por cinco pantallas que permiten descubrir el menú, personalizar un pastel, revisar el pedido y consultar su estado mientras se hornea.',
      sections: [
        { title: 'Home y menú', body: 'La primera parte del flujo presenta la aplicación y hace que el menú sea fácil de explorar. El descubrimiento se mantiene inmediato, con categorías y productos populares visibles sin agregar pasos innecesarios.', media: 'Home y menú de Kokoro' },
        { title: 'Personalizar el pastel', body: 'La personalización convierte el pedido en un conjunto de decisiones concretas. La persona puede elegir tamaño, sabor y dedicatoria antes de revisar la solicitud final.', media: 'Personalización del pastel en Kokoro' },
        { title: 'Revisar, pedir y ver el horneado', body: 'La parte final reúne el producto seleccionado y los datos de entrega, y después comunica que el pedido se está preparando. El flujo de cinco pantallas termina con un estado claro sin añadir una experiencia de tracking innecesariamente compleja.', media: 'Pedido y estado de horneado de Kokoro' },
      ],
      decision: { title: 'Enfocar el proyecto en la experiencia del producto', before: 'El proyecto podía extenderse hacia una identidad completa, packaging y otros entregables visuales.', after: 'Dejé de lado esos entregables y concentré el proyecto en la aplicación móvil: cinco pantallas que explican el recorrido principal desde la entrada hasta el estado de horneado.' },
      closing: 'El resultado es un concepto de aplicación móvil de cinco pantallas centrado en el recorrido de pedido. El proyecto demuestra cómo pasar del descubrimiento del menú a la personalización del pastel, la revisión del pedido y el estado de horneado sin ampliar el alcance hacia una identidad de marca completa.',
    },
  },

  'a-plus-hardwood': {
    title: 'A+ Hardwood Flooring', role: 'UX/UI · Web Design', roleDetail: 'UX/UI Designer', tools: 'HTML · CSS · JavaScript · Framer · Codex', year: '2026', category: 'Web Design',
    cover: { type: 'image', src: hardwood1 },
    media: [
      { type: 'image', src: hardwood2 },
      { type: 'image', src: hardwood3 },
    ],
    projectVideo: undefined,
    en: {
      intro: 'A web experience that tells the transformation of a hardwood floor.',
      context: 'I designed an English-language landing page for A+ Hardwood Flooring to present installation, sanding and refinishing, restoration and repair services. The project started from an HTML, CSS and JavaScript version and evolved into a Framer experience with a visual path through the services, the work and the contact step.',
      sections: [
        { title: 'Communicate the value of the work clearly', body: 'The first version gathered services, business information, projects, differentiators, process, FAQs and contact. It was complete, but ideas about preparation, care and finish were repeated. The goal was to keep useful information while making the experience shorter and clearer.', media: 'Content structure and service hierarchy' },
        { title: 'Build the journey around the transformation', body: 'The experience was organized as Presentation → Need → Transformation → Result → Contact. Navigation keeps direct access to the main sections while the narrative explains the work visually.', media: 'Information architecture and page flow' },
        { title: 'From worn to renewed', body: 'The main storytelling section is divided into Assess & prepare, Sand & restore, Finish & protect, and Enjoy the transformation. On desktop, the photographic panel can remain fixed while the active text and image change with the scroll. On mobile, the same story becomes a linear sequence.', media: 'Scrolling storytelling sequence' },
        { title: 'Simplify everything around the story', body: 'About and Services were combined, craftsmanship messages were incorporated into the storytelling, and the gallery was reduced to a smaller selection of projects. The ending brings consultation, service areas, essential questions and contact together without competing with the narrative.', media: 'Simplified supporting sections and contact' },
      ],
      decision: { title: 'Let the process explain the service', before: 'A traditional service page could list every benefit and process step, but that would repeat ideas and make the landing longer.', after: 'The refinishing process became the central narrative. The rest of the page supports it with concise information and direct navigation. No conversion metrics are available yet because publication and final contact integration are still pending.' },
      closing: 'The project evolved from an information-heavy base into a narrative Framer landing. The transformation section was developed and approved during design review. Publication, definitive contact integration and replacement of provisional photography remain pending. The main learning was that motion is most useful when it explains the service itself.',
    },
    es: {
      intro: 'Una experiencia web que cuenta la transformación de un piso de madera.',
      context: 'Diseñé una landing en inglés para presentar los servicios de instalación, lijado y refinishing, restauración y reparación de pisos de madera de A+ Hardwood Flooring. El proyecto partió de una versión en HTML, CSS y JavaScript y evolucionó hacia una experiencia en Framer con un recorrido visual por los servicios, el trabajo y el contacto.',
      sections: [
        { title: 'Comunicar con claridad el valor del trabajo', body: 'La primera versión reunía servicios, información del negocio, proyectos, diferenciadores, proceso, preguntas frecuentes y contacto. Era completa, pero algunas ideas sobre preparación, cuidado y acabado se repetían. El objetivo fue conservar la información útil haciendo la experiencia más breve y clara.', media: 'Estructura de contenido y jerarquía de servicios' },
        { title: 'Construir el recorrido alrededor de la transformación', body: 'La experiencia se organizó como Presentación → Necesidad → Transformación → Resultado → Contacto. La navegación mantiene accesos directos a los apartados principales mientras la narrativa explica visualmente el trabajo.', media: 'Arquitectura de información y recorrido de la página' },
        { title: 'From worn to renewed', body: 'La sección principal de storytelling se divide en Assess & prepare, Sand & restore, Finish & protect y Enjoy the transformation. En escritorio, el panel fotográfico puede permanecer fijo mientras el texto y la imagen activa cambian con el scroll. En móvil, la misma historia se convierte en una secuencia lineal.', media: 'Secuencia de scrolling storytelling' },
        { title: 'Simplificar todo lo que rodea la historia', body: 'About y Services se unieron, los mensajes de craftsmanship se incorporaron al storytelling y la galería se redujo a una selección menor de proyectos. El cierre reúne consulta, zonas de servicio, preguntas esenciales y contacto sin competir con la narrativa principal.', media: 'Secciones de apoyo simplificadas y contacto' },
      ],
      decision: { title: 'Dejar que el proceso explique el servicio', before: 'Una página tradicional puede enumerar cada beneficio y etapa, pero eso puede repetir ideas y hacer más larga la landing.', after: 'El proceso de refinishing se convirtió en la narrativa central. El resto de la página la acompaña con información breve y navegación directa. Todavía no hay métricas de conversión porque la publicación y la integración definitiva del contacto están pendientes.' },
      closing: 'El proyecto evolucionó de una base informativa a una landing narrativa en Framer. La sección de transformación fue desarrollada y aprobada durante la revisión de diseño. La publicación, la conexión definitiva del contacto y el reemplazo de fotografías provisionales siguen pendientes. El principal aprendizaje fue que el movimiento es más útil cuando explica el servicio.',
    },
  },

  'shine-cleaning': {
    title: 'Shine Cleaning', role: 'UX/UI · Web Design', roleDetail: 'UX/UI Designer', tools: 'Figma · Framer', category: 'Web Design',
    cover: { type: 'image', src: shine1 },
    media: [
      { type: 'image', src: shine2 },
      { type: 'image', src: shine3 },
    ],
    en: {
      intro: 'A landing page case study for Shine Cleaning.',
      context: 'The case study presents the Shine Cleaning landing through the same visual system used across the portfolio: a clear introduction, focused project chapters, progressive scroll reveals and a concise closing reflection.',
      sections: [
        { title: 'The landing page', body: 'The first chapter introduces the landing and its visual direction, keeping the project presentation focused on the product rather than on decorative elements.', media: 'Shine Cleaning landing' },
        { title: 'Organize the service experience', body: 'The case study uses the same structured rhythm for explaining the landing, its content hierarchy and the path toward contact.', media: 'Shine Cleaning service presentation' },
        { title: 'Let the visuals carry the story', body: 'The approved mockups can move into the visual area without changing the case-study structure. Each image enters with the same restrained reveal used by the other projects.', media: 'Shine Cleaning final screens' },
      ],
      closing: 'The Shine Cleaning case study is ready for its final visual assets. The structure, motion and media slots are shared with the rest of the portfolio so the remaining work is primarily asset placement.',
    },
    es: {
      intro: 'Un caso de estudio para la landing de Shine Cleaning.',
      context: 'El caso de estudio presenta la landing de Shine Cleaning utilizando el mismo sistema visual del portafolio: una introducción clara, capítulos enfocados, revelados progresivos durante el scroll y un cierre breve.',
      sections: [
        { title: 'La landing page', body: 'El primer capítulo presenta la landing y su dirección visual, manteniendo el foco en el producto en lugar de agregar elementos decorativos innecesarios.', media: 'Landing de Shine Cleaning' },
        { title: 'Organizar la experiencia del servicio', body: 'El caso utiliza el mismo ritmo estructurado para explicar la landing, su jerarquía de contenido y el recorrido hacia el contacto.', media: 'Presentación de servicios de Shine Cleaning' },
        { title: 'Dejar que los visuales cuenten la historia', body: 'Los mockups aprobados pueden ocupar el área visual sin cambiar la estructura del caso. Cada imagen aparece con el mismo reveal contenido que utiliza el resto del portafolio.', media: 'Pantallas finales de Shine Cleaning' },
      ],
      closing: 'El caso de Shine Cleaning está listo para recibir sus assets visuales finales. La estructura, el movimiento y los espacios multimedia son compartidos con el resto del portafolio, por lo que el trabajo restante se concentra principalmente en colocar los assets.',
    },
  },

  'aura-drive': {
    title: 'AURA Drive', role: 'UX/UI · Experiencia interactiva', tools: 'React · Three.js · React Three Fiber · CSS',
    link: 'https://aura-drive-showroom.vercel.app/',
    cover: { type: 'video', src: auraProjectsVideo },
    media: [
      { type: 'video', src: auraExteriorVideo },
      { type: 'video', src: auraDriveModesVideo },
    ],
    en: {
      intro: 'An interactive automotive concept connecting a 3D showroom with the vehicle interface.',
      context: 'I built an explorable vehicle experience and designed its cockpit interactions. The goal was to show how different system states feel in use, beyond isolated interface screens.',
      sections: [
        { title: 'From exterior to cockpit', body: 'Visitors can explore the vehicle, enter the interior, and move into the driver-facing interface. The transition gives the interface a physical context.', media: 'Exterior to cockpit sequence' },
        { title: 'Give drive modes a clear identity', body: 'Comfort, Sport, and Eco use distinct color and interface states to make each change easier to recognize. Navigation, media, climate, and vehicle controls are organized as parts of the same system.', media: 'Drive modes and interface states' },
      ],
      decision: { title: 'From static screens to system behavior', before: 'Separate mockups could show the visual style, but not how the vehicle, drive modes, and cockpit respond together.', after: 'I connected the 3D showroom and interface states in an interactive prototype. Cluster and HUD details remain opportunities for a further iteration.' },
      closing: 'The interactive prototype demonstrates the relationship between the vehicle and its interface. Cluster and HUD details can be developed further as the concept evolves.',
    },
    es: {
      intro: 'Un concepto automotriz interactivo que conecta un showroom 3D con la interfaz del vehículo.',
      context: 'Desarrollé una experiencia para explorar el auto y diseñé sus interacciones de cabina. El objetivo fue mostrar cómo se sienten los estados del sistema en uso, más allá de pantallas aisladas.',
      sections: [
        { title: 'Del exterior a la cabina', body: 'La persona puede explorar el vehículo, entrar al interior y pasar a la interfaz del conductor. Esa transición da un contexto físico a las pantallas.', media: 'Secuencia del exterior a la cabina' },
        { title: 'Dar una identidad clara a cada modo', body: 'Comfort, Sport y Eco usan colores y estados de interfaz distintos para que el cambio sea reconocible. Navegación, medios, clima y controles del auto forman parte del mismo sistema.', media: 'Modos de manejo y estados de interfaz' },
      ],
      decision: { title: 'De pantallas aisladas al comportamiento del sistema', before: 'Los mockups podían mostrar el estilo visual, pero no cómo responden juntos el vehículo, los modos de manejo y la cabina.', after: 'Conecté el showroom 3D con los estados de la interfaz en un prototipo interactivo. El cluster y el HUD quedan como áreas para una próxima iteración.' },
      closing: 'El prototipo interactivo muestra la relación entre vehículo e interfaz. Los detalles del cluster y del HUD podrán desarrollarse en próximas iteraciones.',
    },
  },
}
