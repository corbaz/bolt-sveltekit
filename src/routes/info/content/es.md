# Guía de Estructura del Proyecto SvelteKit

## Explicación de Archivos Principales

### 1. Plantilla HTML (app.html)
- Plantilla HTML base para toda la aplicación
- Contiene marcadores especiales de SvelteKit:
  - `%sveltekit.head%`: Para elementos del encabezado
  - `%sveltekit.body%`: Para contenido del cuerpo
- Sirve como estructura base para todas las páginas

### 2. Estilos (app.css)
- Estilos CSS globales
- Importado en el layout para estilos en toda la aplicación
- Contiene estilos base como fuentes, colores y diseños

### 3. Definiciones TypeScript (app.d.ts)
- Definiciones de tipos TypeScript
- Configura interfaces para:
  - Manejo de errores
  - Datos de página
  - Estado de la aplicación
  - Configuración de plataforma

### 4. Archivos de Enrutamiento

#### +page.svelte
- Archivos de componentes de página
- Definen el contenido y diseño de cada ruta
- Pueden incluir sus propios estilos y scripts

#### +page.js
- Controla el comportamiento de la página
- Puede configurar:
  - `prerender`: Generación estática en tiempo de compilación
  - `ssr`: Renderizado del lado del servidor
  - `csr`: Renderizado del lado del cliente
  - Carga de datos a través de funciones `load`

## Mejores Prácticas de Estructura

1. **Organización de Archivos**
   - Mantener archivos pequeños y enfocados
   - Una responsabilidad por archivo
   - Agrupar archivos relacionados
   - Extraer lógica reutilizable en utilidades

2. **Enrutamiento**
   - Los archivos en el directorio `routes` crean URLs
   - Las carpetas anidadas crean rutas anidadas
   - Archivos especiales `+` controlan el comportamiento de la ruta

3. **Estilos**
   - Estilos globales en app.css
   - Estilos específicos de componentes en archivos .svelte
   - Tailwind CSS disponible a través de CDN en layout