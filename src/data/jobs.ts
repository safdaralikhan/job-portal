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
        company: "Airbnb",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
        location: "Remote, UK",
        type: "Full Time",
        salary: "$80k/y",
        time: "3 days ago",
        applicants: 12,
        promoted: true
    },
    {
        id: "6",
        title: "Senior Product Designer",
        company: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        location: "Cupertino, USA",
        type: "Full Time",
        salary: "$150k/y",
        time: "4 days ago",
        applicants: 128,
        promoted: true
    },
    {
        id: "7",
        title: "IOS Developer",
        company: "Twitter",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
        location: "London, UK",
        type: "Full Time",
        salary: "$110k/y",
        time: "5 days ago",
        applicants: 45,
        promoted: true
    },
    {
        id: "8",
        title: "Lead Designer",
        company: "Spotify",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
        location: "Stockholm, Sweden",
        type: "Remote",
        salary: "$135k/y",
        time: "6 days ago",
        applicants: 92,
        promoted: true
    },
    {
        id: "9",
        title: "Backend Engineer",
        company: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        location: "Seattle, USA",
        type: "Full Time",
        salary: "$160k/y",
        time: "1 week ago",
        applicants: 210,
        promoted: true
    },
    {
        id: "10",
        title: "Data Scientist",
        company: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        location: "Los Gatos, USA",
        type: "Part Time",
        salary: "$140k/y",
        time: "1 week ago",
        applicants: 115,
        promoted: true
    }
];
