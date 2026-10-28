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
    link: 'https://aplushardwoodfloors.com/',
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
        { title: 'From worn to renewed', body: 'The restoration process becomes the main story: assess and prepare the floor, sand and restore it, then finish and protect the surface. This sequence helps visitors understand the work behind the transformation instead of seeing a list of services alone.', media: 'Scrolling storytelling sequence' },
        { title: 'Simplify everything around the story', body: 'About and Services were combined, craftsmanship messages were incorporated into the storytelling, and the gallery was reduced to a smaller selection of projects. The ending brings consultation, service areas, essential questions and contact together without competing with the narrative.', media: 'Simplified supporting sections and contact' },
      ],
      decision: { title: 'Let the process explain the service', before: 'A traditional service page could list every benefit and process step, but that would repeat ideas and make the landing longer.', after: 'The refinishing process became the central narrative. The rest of the page supports it with concise information and direct navigation. The site is now published, but conversion performance has not been measured.' },
      closing: 'The published site brings service information, project examples, the restoration process and a direct quote-request path into one experience. The next step is to measure whether visitors understand the services and successfully contact the business. The main learning was that motion is most useful when it explains the service itself.',
    },
    es: {
      intro: 'Una experiencia web que cuenta la transformación de un piso de madera.',
      context: 'Diseñé una landing en inglés para presentar los servicios de instalación, lijado y refinishing, restauración y reparación de pisos de madera de A+ Hardwood Flooring. El proyecto partió de una versión en HTML, CSS y JavaScript y evolucionó hacia una experiencia en Framer con un recorrido visual por los servicios, el trabajo y el contacto.',
      sections: [
        { title: 'Comunicar con claridad el valor del trabajo', body: 'La primera versión reunía servicios, información del negocio, proyectos, diferenciadores, proceso, preguntas frecuentes y contacto. Era completa, pero algunas ideas sobre preparación, cuidado y acabado se repetían. El objetivo fue conservar la información útil haciendo la experiencia más breve y clara.', media: 'Estructura de contenido y jerarquía de servicios' },
        { title: 'Construir el recorrido alrededor de la transformación', body: 'La experiencia se organizó como Presentación → Necesidad → Transformación → Resultado → Contacto. La navegación mantiene accesos directos a los apartados principales mientras la narrativa explica visualmente el trabajo.', media: 'Arquitectura de información y recorrido de la página' },
        { title: 'De desgastado a renovado', body: 'El proceso de restauración se convierte en la historia principal: evaluar y preparar el piso, lijar y restaurar, y después aplicar el acabado protector. Esta secuencia ayuda a comprender el trabajo detrás de la transformación, en lugar de presentar solo una lista de servicios.', media: 'Secuencia visual del proceso de restauración' },
        { title: 'Simplificar todo lo que rodea la historia', body: 'About y Services se unieron, los mensajes de craftsmanship se incorporaron al storytelling y la galería se redujo a una selección menor de proyectos. El cierre reúne consulta, zonas de servicio, preguntas esenciales y contacto sin competir con la narrativa principal.', media: 'Secciones de apoyo simplificadas y contacto' },
      ],
      decision: { title: 'Dejar que el proceso explique el servicio', before: 'Una página tradicional puede enumerar cada beneficio y etapa, pero eso puede repetir ideas y hacer más larga la landing.', after: 'El proceso de restauración se convirtió en la narrativa central. El resto de la página lo acompaña con información breve y navegación directa. El sitio ya está publicado, aunque todavía no se han medido resultados de conversión.' },
      closing: 'El sitio publicado reúne los servicios, ejemplos de trabajos, el proceso de restauración y una vía directa para solicitar una cotización. El siguiente paso sería medir si las personas comprenden los servicios y logran contactar al negocio. El principal aprendizaje fue que el movimiento aporta más cuando ayuda a explicar el servicio.',
    },
  },

  'shine-cleaning': {
    title: 'Shine Cleaning', role: 'UX/UI · Web Design', roleDetail: 'UX/UI Designer', tools: 'Figma · Framer', category: 'Web Design',
    link: 'https://shinecleaningnc.com/',
    cover: { type: 'image', src: shine1 },
    media: [
      { type: 'image', src: shine2 },
      { type: 'image', src: shine3 },
    ],
    en: {
      intro: 'A service website designed to make cleaning options and the quote process easy to understand.',
      context: 'Shine Cleaning needed a clear online presence for customers around Asheville, North Carolina. I designed and built a responsive landing page that explains the available cleaning services, clarifies the service area, and guides visitors toward requesting a quote by text.',
      sections: [
        { title: 'Make the services easy to compare', body: 'Standard, deep, move-out, and vacation-rental cleaning are presented as distinct options. Supporting details help visitors identify the service that fits their needs before getting in touch.', media: 'Shine Cleaning landing page' },
        { title: 'Make the next step clear', body: 'Instead of suggesting that a booking is confirmed immediately, the page prepares a text message so customers can describe what they need and coordinate the estimate and schedule directly with the business.', media: 'Service details and text quote flow' },
        { title: 'Design for a local service business', body: 'The page brings together service areas, additional cleaning options, and contact information in a responsive layout. The live site can now be explored to review the experience in context.', media: 'Responsive layout and local service information' },
      ],
      decision: { title: 'A clear quote request, not a false booking confirmation', before: 'A generic booking button could imply that a cleaning appointment is confirmed as soon as someone taps it.', after: 'The contact flow explains that customers send a request by text and coordinate the estimate and schedule directly. The website is live; conversion results have not been measured.' },
      closing: 'The published site gives Shine Cleaning a clear service presentation and a direct way to start a quote conversation. A future iteration could review inquiry quality and measure how many visitors proceed to contact the business.',
    },
    es: {
      intro: 'Un sitio de servicios diseñado para explicar las opciones de limpieza y facilitar la solicitud de cotización.',
      context: 'Shine Cleaning necesitaba una presencia digital clara para clientes de Asheville, Carolina del Norte, y sus alrededores. Diseñé y desarrollé una landing responsiva que explica los servicios disponibles, delimita la zona de atención y guía a las personas para solicitar una cotización por mensaje de texto.',
      sections: [
        { title: 'Facilitar la comparación de servicios', body: 'La limpieza estándar, profunda, de mudanza y para alojamientos vacacionales se presenta como opciones diferenciadas. La información complementaria ayuda a identificar qué servicio puede responder a cada necesidad antes de contactar al negocio.', media: 'Landing de Shine Cleaning' },
        { title: 'Aclarar el siguiente paso', body: 'En lugar de sugerir que una cita queda confirmada al instante, la página prepara un mensaje de texto para que la persona explique lo que necesita y coordine directamente con el negocio la cotización y el horario.', media: 'Detalles de servicios y flujo de cotización por SMS' },
        { title: 'Diseñar para un negocio local', body: 'La página reúne las zonas de atención, los servicios adicionales y la información de contacto en una experiencia responsiva. El sitio publicado permite explorar el recorrido completo en su contexto real.', media: 'Diseño responsivo e información de servicio local' },
      ],
      decision: { title: 'Una solicitud de cotización clara, no una falsa confirmación', before: 'Un botón de reserva genérico podría dar a entender que la cita queda confirmada al tocarlo.', after: 'El flujo explica que la persona envía una solicitud por mensaje y coordina directamente la cotización y el horario. El sitio ya está publicado; todavía no se han medido resultados de conversión.' },
      closing: 'El sitio publicado ofrece a Shine Cleaning una presentación clara de sus servicios y una vía directa para iniciar una conversación sobre la cotización. En una siguiente iteración se podría revisar la calidad de las consultas y medir cuántas personas llegan al contacto.',
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
