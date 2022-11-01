export const genLocalString = (local) => `A partir de um ${local} • `;

export const genFavicon = (icon) =>
  `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon.width} ${icon.height}"><g transform="scale(0.95)" transform-origin="center">${icon.body}</g></svg>`;
