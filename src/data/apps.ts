export interface AppItem {
    id: number;
    name: string;
    description: string;
    icon: string; // Path to icon image
    demoUrl?: string;
    codeUrl?: string;
    color: string; // Gradient accent color
}

export const craftedApps: AppItem[] = [
    {
        id: 1,
        name: "TaskFlow n8n",
        description: "TaskFlow connects your apps and automates tasks using powerful, no-code workflows—fast, flexible, and open source.",
        icon: "/icons/taskflow.png",
        codeUrl: "https://github.com/rpradeepraj/taskflow",
        color: "#3fb950"
    },
    {
        id: 2,
        name: "Finpool",
        description: "Finapp helps you track expenses and savings easily. Plan budgets and monitor your spending. Take control of your personal finances.",
        icon: "/icons/finpool.png",
        demoUrl: "#",
        codeUrl: "https://github.com/rpradeepraj/finpool",
        color: "#3fb950"
    }
];
