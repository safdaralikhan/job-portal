export interface Job {
    id: string;
    title: string;
    company: string;
    logo: string;
    location: string;
    type: string;
    salary: string;
    time: string;
    applicants: number;
    promoted?: boolean;
}

export const JOBS: Job[] = [
    {
        id: "1",
        title: "UI/UX Designer",
        company: "Teams",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        location: "Seattle, USA (Remote)",
        type: "Full Time",
        salary: "$120k/y",
        time: "1 day ago",
        applicants: 22,
        promoted: true
    },
    {
        id: "2",
        title: "Angular Developer",
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
        location: "San Fransisco, USA",
        type: "Part Time",
        salary: "$30k/y",
        time: "1 day ago",
        applicants: 15,
        promoted: true
    },
    {
        id: "3",
        title: "Project Manager",
        company: "Facebook",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
        location: "California, USA",
        type: "Full Time",
        salary: "$90k/y",
        time: "2 days ago",
        applicants: 45,
        promoted: true
    },
    {
        id: "4",
        title: "UI/UX Designer",
        company: "Teams",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        location: "Seattle, USA (Remote)",
        type: "Full Time",
        salary: "$120k/y",
        time: "1 day ago",
        applicants: 22,
        promoted: true
    },
    {
        id: "5",
        title: "Fullstack Dev",
        company: "Dribbble",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.svg",
        location: "Remote, UK",
        type: "Full Time",
        salary: "$80k/y",
        time: "3 days ago",
        applicants: 12,
        promoted: true
    }
];
