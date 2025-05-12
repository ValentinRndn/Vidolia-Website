# Product Context: Vidolia Website

## 1. Why Vidolia Exists

Vidolia aims to provide a dedicated online space for fans of specific anime/manga themes, such as Bleach and Demon Slayer. It likely serves as a hub for community interaction, content consumption, and purchasing related merchandise or in-game items.

## 2. Problems Vidolia Solves

- **Centralized Hub:** Offers a single point of access for content and commerce related to its themes, rather than users having to find disparate sources.
- **Community Building:** May foster a community around shared interests.
- **E-commerce:** Provides a platform for selling theme-related products or services. Initially, this was planned via a Tebex Headless API integration, but is now being simplified to an external Tebex store.

## 3. How Vidolia Should Work

- **Navigation:** Users should be able to easily navigate through different sections of the site (e.g., content pages, shop).
- **Shop Experience (Current Iteration):** Accessing the "shop" or "boutique" section should seamlessly redirect users to the external Tebex store (`https://vidolia.tebex.io/`). The previous, more integrated, headless API approach is being deprecated in favor of this simpler external redirection.
- **Content Delivery:** Present information and media related to its themes in an engaging way.
- **Multilingual Support:** Cater to an international audience by offering content in multiple languages.

## 4. User Experience Goals

- **Simplicity:** Especially for the shopping experience, the goal is now a straightforward redirection to a functional external store.
- **Engagement:** Keep users interested in the content provided on the site.
- **Clarity:** Ensure users understand where they are being directed, particularly for the shop.
- **Accessibility:** The site should be usable by a diverse audience, including support for multiple languages.
