export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Reportes",
    url: "Regional",
    submenu: [
      {
        title: "Regional",
        url: "Regional",
        submenu: [
          {
            title: "Campo",
            url: "campo",
            id: "Campo",
          },
          {
            title: "Campo y Planta",
            url: "campo-y-planta",
            id: "Campo y Planta",
          },
          {
            title: "Calidad",
            url: "calidad",
            id: "Calidad",
          },
          {
            title: "Modelos",
            url: "modelos",
            id: "modelos-regional",
          },
        ],
      },
      {
        title: "Global",
        url: "Global",
        submenu: [
          {
            title: "Modelos",
            url: "modelos",
            id: "modelos-global",
          },
        ],
      },
    ],
  },
  {
    title: "Herramientas",
    url: "Herramientas",
    submenu: [
      {
        title: "Campo",
        url: "campo",
        id: "herramientas-campo",
      },
      {
        title: "Campo y Planta",
        url: "herramientas-campo-y-planta",
        id: "herramientas-campo-y-planta",
      },
      {
        title: "Comunidad",
        url: "herramientas-comunidad",
        id: "herramientas-comunidad",
      },
    ],
  },
  {
    title: "Contacto",
    url: "contact",
  },
];
