export interface Project {
    id: number;
    title: string;
    role: string;
    duration: string;
    client: string;
    tools: string[];
    description: string;
    type: 'web' | 'mobile' | 'other';
    primaryLanguage: string;
    languageColor: string;
    stars?: number;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "AgriCart",
        role: "Senior Software Engineer",
        duration: "Jan 2024 - Present",
        client: "Department of Agriculture Tamilnadu",
        tools: ["React.js", "Redux", "JavaScript", "AWS S3", "AI Chat"],
        description: "An exclusive e-commerce platform for agricultural products from Tamil Nadu Agricultural University. Features BillDesk payment integration, AI chat, and seamless mobile responsiveness.",
        type: 'web',
        primaryLanguage: "React",
        languageColor: "#61dafb",
        stars: 5
    },
    {
        id: 2,
        title: "Agre-X",
        role: "Software Engineer",
        duration: "Jan 2023 - Dec 2023",
        client: "Telangana Government",
        tools: ["React.js", "Redux", "JavaScript", "Remote Sensing"],
        description: "Delivers near real-time, high-resolution crop data and health monitoring. Integrated remote sensing technologies and geospatial analysis for user-specific regions.",
        type: 'web',
        primaryLanguage: "React",
        languageColor: "#61dafb",
        stars: 4
    },
    {
        id: 3,
        title: "Digitization of Cadastral Maps",
        role: "Software Engineer",
        duration: "Apr 2022 - Dec 2022",
        client: "FarmwiseAi Pvt Ltd",
        tools: ["React", "GeoServer", "OpenLayers", "JavaScript"],
        description: "State-wide geo-referencing solution using GeoServer and OpenLayers. Integrated soil and land details into an interactive map view for agricultural insights.",
        type: 'web',
        primaryLanguage: "JavaScript",
        languageColor: "#f7df1e",
        stars: 4
    },
    {
        id: 4,
        title: "WRD Mobile App",
        role: "Software Engineer",
        duration: "Mar 2021 - Apr 2022",
        client: "Water Resource Department Tamil Nadu",
        tools: ["React Native", "Redux", "JavaScript", "Geofencing"],
        description: "Mobile app for collecting well water level data with geofencing validation (100m radius). Built an admin dashboard for district-wise insights and hydrographs.",
        type: 'mobile',
        primaryLanguage: "React Native",
        languageColor: "#61dafb",
        stars: 3
    },
    {
        id: 5,
        title: "Raven SiteBuilder",
        role: "Software Engineer",
        duration: "Aug 2019 - Jan 2021",
        client: "Flir Systems",
        tools: ["JavaScript", "jQuery", "Google Maps API"],
        description: "Professional site planning application for thermal security camera simulation and Google Maps layout. Managed maintenance and performance optimization.",
        type: 'web',
        primaryLanguage: "JavaScript",
        languageColor: "#f7df1e",
        stars: 3
    }
];
