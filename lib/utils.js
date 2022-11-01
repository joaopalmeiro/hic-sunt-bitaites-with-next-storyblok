export const genLocalString = (local) => `A partir de um ${local} • `;

// https://jakearchibald.github.io/svgomg/
export const genFavicon = (icon) =>
  `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon.width} ${icon.height}"><style>.favicon{color:black}@media (prefers-color-scheme:dark){.favicon{color:white}}</style><g transform="scale(0.95)" transform-origin="center" class="favicon">${icon.body}</g></svg>`;
