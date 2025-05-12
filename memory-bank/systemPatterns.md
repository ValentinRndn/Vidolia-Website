# System Patterns: Vidolia Website

## 1. System Architecture

- **Frontend Framework:** Nuxt.js (Vue.js framework) is used for the frontend, providing server-side rendering (SSR) or static site generation (SSG) capabilities.
- **Page-Based Routing:** Nuxt.js uses a file-system based routing system where files in the `pages/` directory correspond to application routes.
- **Component-Based UI:** The UI is likely built using Vue components, organized in the `components/` directory.
- **Layouts:** Nuxt.js layouts (in `layouts/`) define common UI structures for different pages.
- **Static Assets:** Images, fonts, and CSS are stored in the `assets/` directory. Publicly accessible files are in `public/`.

## 2. Key Technical Decisions

- **Nuxt.js Adoption:** Chosen for its features like SSR/SSG, routing, and conventions that streamline Vue.js development.
- **Internationalization (i18n):** The project uses an i18n solution (likely `nuxt-i18n` or a similar library, given `i18n/config.ts` and locale files) to support multiple languages.
- **Tebex Integration (Evolution):**
    - *Previous:* Utilized Tebex Headless API for an integrated shop experience. This involved a service file (`services/tebex.js`) to interact with the API.
    - *Current:* Shifting to a direct link to an external Tebex store (`https://vidolia.tebex.io/`). This simplifies the integration significantly, likely deprecating the need for `services/tebex.js` and complex client-side logic for the shop.

## 3. Design Patterns in Use

- **MVC/MVVM (Implicit via Nuxt/Vue):** Vue.js components and Nuxt.js structure inherently follow patterns similar to MVVM (Model-View-ViewModel).
- **Modular Design:** Code is organized into components, pages, layouts, and services, promoting modularity.
- **Centralized Configuration:** Nuxt configuration (`nuxt.config.ts`) and i18n configuration (`i18n/config.ts`) centralize key project settings.

## 4. Component Relationships (Assumed)

- `app.vue`: The main application component.
- `layouts/default.vue`: Likely the primary layout wrapping most pages.
- `components/layout/navbar.vue` and `components/layout/footer.vue`: Reusable navigation and footer components, probably used in `default.vue`.
- `pages/boutique/index.vue`: The current local shop page that needs to be modified or its links updated to redirect externally.
- Other `pages/` files represent different sections of the website.

## 5. Critical Implementation Paths

- **Shop Redirection:** The primary task is to ensure all attempts to access the internal shop page or links leading to it are redirected to `https://vidolia.tebex.io/`. This might involve:
    - Modifying Nuxt navigation (e.g., `<NuxtLink>` components).
    - Potentially using Nuxt middleware for server-side redirects if `/boutique` is directly accessed.
    - Updating any client-side routing logic.
- **Language Switching:** The `LanguageSwitcher.vue` component handles changing the active language, interacting with the i18n setup.
