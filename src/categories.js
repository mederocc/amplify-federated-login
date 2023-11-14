const categories = {
  Regional: [
    {
      title: "Campo",
      id: "Campo",
      message: "Explora los campos a fondo.",
      image: "images/bayer-pictures/center_pivot_irrigation_corn.png",
      description:
        "Informes precisos y herramientas para la optimización de procesos y gestión de recursos.",
      links: [
        {
          title: "Indicadores Campo Comercial",
          subtitle:
            "Tablero de indicadores de Producción Campos Comercial, seguimiento desde Siembra hasta Cosecha.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/CampoComercial-Dashboard/General-General?:iid=1",
          icon: "bars",
        },
        {
          title: "Data Quality Campo Comercial",
          subtitle:
            "Tablero de Calidad de Datos en Velocity y Scout para Producción Campos Comercial.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/CampoComercial-Dashboard/DQPreSiembraGeneral?:iid=1",
          icon: "magnifying-glass",
        },
        {
          title: "Weather Report",
          subtitle:
            "Reporte de información meterelógica en lotes productivos de COM y PCM, con datos durante producción y pronósticos.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/Weather/Inicio?:iid=1",
          icon: "clouds",
        },
        {
          title: "Hydrobio Report",
          subtitle:
            "Tablero de estado hídrico de lotes productivos de COM y PCM según datos registrados en HydroBio.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/Hydrobio/Hydrobio",
          icon: "watering-can",
        },
        {
          title: "RHS Report",
          subtitle:
            "Tablero de seguimiento de fechas y calidad de aplicaciones RHS.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/RHS/ReporteRHS",
          icon: "tractor",
        },
        {
          title: "DDS Campo PreComercial",
          subtitle:
            "Tablero de indicadores de Producción Campos Pre-Comercial, seguimiento desde Siembra hasta Cosecha.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/PCMCAMPODDS3/DDS3?:iid=1",
          icon: "bars",
        },
        {
          title: "Moisture Report - Envision",
          subtitle:
            "Reporte en Envision de inspecciones de humedad registradas con Scout.",
          link: "https://velocity.ag/envision-datasets/envisionDataId/f3bf103a-8b20-44e3-a713-075754202831#",
          icon: "drops",
        },
      ],
    },
    {
      title: "Campo y Planta",
      id: "Campo y Planta",
      message: "Una visión integral del Supply Chain",
      image: "images/bayer-pictures/corn_crop_1.png",
      description: "",
      links: [
        {
          title: "Drying Decision - SeedSet - Moisture",
          subtitle:
            "Tablero de resultados de granazón, decisión de secado, Seed Set e inspecciones de humedad de lotes COM y PCM.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/DryingDecisionTree/DryingDecisionTree",
          icon: "seeds",
        },
      ],
    },
    {
      title: "Calidad",
      id: "Calidad",
      message: "Conoce nuestros estándares.",
      image: "images/bayer-pictures/crop-duster_plane_over_field.png",
      description:
        "Herramientas de seguimiento y análisis de calidad. Desde la etapa precomercial hasta el empaquetado.",
      links: [
        {
          title: "Tablero ACAL Comercial",
          subtitle:
            "Tablero de Aseguramiento de la Calidad para Producción Comercial, desde Campo hasta Embolse.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/DashACALCom/DashboardQP?:iid=2",
          icon: "checklist",
        },
        {
          title: "Tablero ACAL PreComercial",
          subtitle:
            "Tablero de Aseguramiento de la Calidad para Producción Pre-Comercial, desde Campo hasta Embolse.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/DashACALPrecom/DashboardQP",
          icon: "checklist",
        },
        {
          title: "Curvas de Polinización",
          subtitle:
            "Curvas de polinización de campos productivos COM y PCM según inspecciones de Calidad.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/SCOUTQACorn/CurvasPolinizacin?:iid=1",
          icon: "chart-arrows",
        },
      ],
    },
    {
      title: "Modelos",
      id: "modelos-regional",
      message: "Explora modelos especializados para el análisis agrícola.",
      image: "images/bayer-pictures/farmer_inspecting_crop_12.png",
      description: "",
      links: [
        {
          title: "Simulador de Floración",
          subtitle:
            "Simulador de semana de floración según la combinación Híbrido-Macrozona, pre-planificación.",
          link: "https://emea.tableau.intranet.cnb/#/site/CCM/views/SimuladorFloracion/Simulador",
          icon: "corn-plant",
        },
      ],
    },
  ],
  Global: [
    {
      title: "Modelos",
      id: "modelos-global",
      message: "Explora modelos especializados para el análisis agrícola.",
      image: "images/bayer-pictures/watering_crops.png",
      description: "",
      links: [
        {
          title: "Growth Stage Model - Envision",
          subtitle:
            "Reporte de Envision de Growth Stage Model para Producción Comercial.",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          icon: "crops",
        },
      ],
    },
  ],
  Herramientas: [
    {
      title: "Campo",
      id: "herramientas-campo",
      links: [
        {
          title: "Velocity",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "HydroBio",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Lares",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Caliber",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Acronex",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      title: "Campo y Planta",
      id: "herramientas-campo-y-planta",
      links: [
        {
          title: "Tarjetas de Mejoras",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      title: "Comunidad",
      id: "herramientas-comunidad",
      links: [
        {
          title: "Experiencia María Eugenia",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Wiolit",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "CulturaLike - Reconocimientos",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "HR - Digital Partner",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "IT4You",
          link: "https://velocity.ag/envision-datasets/envisionDataId/b017487e-6097-4395-836f-2b857373f8b8",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
  ],
};

export default categories;
