# Casos de estudio y mockups

El home presenta, en este orden: GU-QI, Kokoro, A+ Hardwood Flooring, Shine Cleaning y AURA Drive. Las dos landings son tarjetas sin enlace hasta que su trabajo y fotografías estén listos.

Los casos de GU-QI, Kokoro y AURA Drive comparten `src/pages/CaseStudy.jsx` y sus textos en español e inglés viven en `src/data/caseStudies.js`. GU-QI y AURA Drive tienen una portada y dos espacios visuales; Kokoro tiene una portada y tres espacios para explicar su proceso. Las imágenes todavía no forman parte del proyecto.

Para añadir mockups:

1. Exporta cada composición como WebP; usa proporción aproximada 16:9 para el caso y 16:10 para la tarjeta del home. Conserva los originales de alta resolución fuera del repositorio.
2. Guarda los WebP finales en `src/media/cases/<slug>/` y la portada de cada tarjeta en `src/media/cards/`.
3. Importa los archivos en `src/data/caseStudies.js` y asigna `cover` y `media: [primeraImagen, segundaImagen]` al proyecto correspondiente. Para Kokoro, añade una tercera imagen al arreglo.
4. Importa la imagen de portada de la tarjeta en `src/data/projects.js` y asigna `image` al proyecto. No es obligatorio utilizar el mismo recorte en el home y el caso.
5. Ejecuta `npm run lint` y `npm run build` antes de compartir el resultado. Si faltan fotos definitivas, deja el espacio vacío en vez de añadir material provisional pesado.

Los enlaces a los proyectos interactivos de GU-QI y AURA Drive están en `src/data/caseStudies.js`. Cuando estén listas las landings, cambia `upcoming: true` en `src/data/projects.js` y añade cada caso a `src/data/caseStudies.js`; así la tarjeta ya tendrá una página real.
