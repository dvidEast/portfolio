import { useEffect, useRef } from 'react';
import Border from "@/components/Border";

export default function Timeline() {
    const timeline = [
        {
            title: "BSc MATHEMATICS, MINOR DATA SCIENCE",
            subtitle: "THE UNIVERSITY OF BRITISH COLUMBIA",
            date: "Sept 2021 – Present",
            bulletColor: "bg-yellow-400",
            details: [
                "Science Undergraduate Society (SUS) ->",
                "SUS Associate Vice President Communications (2024–2025)",
                "SUS Development Lead (2024–2025)",
                "SUS Media Lead (2023–2024)",
                "SUS Content Writer (2022–2023)",
                "SUS Events Lead (2022)",
            ],
        },
        {
            title: "JUNIOR SOFTWARE DEVELOPER (INTERNSHIP)",
            subtitle: "CLIO",
            date: "May 2027 – Now",
            bulletColor: "bg-gray-50",
            details: [
                "Developed and maintained backend payment and billing systems using Ruby on Rails and MySQL, implementing business logic, API integrations, and production fixes.",
                "Helped ship auto-charging and trust-account auto-charging features in Clio’s payments platform.",
                "Developed AI-powered billing workflows in Clio Flow with Python, refining LLM prompts, context management, and integrations with internal systems to improve workflow reliability and predictability."
            ]
        },
        {
            title: "SECURITY SOFTWARE ENGINEER (INTERNSHIP)",
            subtitle: "SAP",
            date: "Sept 2025 – April 2026",
            bulletColor: "bg-blue-400",
            details: [
                "Developed automation pipelines in Python, integrating SAST and OSS security scanners, and enabling continuous vulnerability reporting using Dockerized Jenkins agents for over 180 microservices and libraries across SAP.",
                "Led the development of an automated “early-warning” security ticket alert system that surfaced high-risk alerts in real-time, reducing overdue tickets by 50% and improving SLA compliance benchmarks.",
                "Conducted application security reviews by validating SAST-detected vulnerabilities across existing codebases.",
                "Performed debugging on application scanning pipeline errors, ensuring accurate vulnerability classification and reducing application scanning pipeline errors by 25%.",
                "Performed vulnerability analysis using BurpSuite to investigate race conditions in application features, producing remediation recommendations for respective code owners.",
                "Published structured vulnerability findings to SQL databases to support security analytics teams.",
                "Coordinated with KPI analytics, and global security teams to plan and execute annual security review cycles."
            ],
        },
        {
            title: "SOFTWARE DEVELOPMENT LEAD (VOLUNTEER)",
            subtitle: "UBC SCIENCE UNDERGRADUATE SOCIETY",
            date: "Jun 2024 – April 2026",
            bulletColor: "bg-purple-400",
            details: [
                "Managed a team of 10 to design, build, and maintain the organization’s website using React (Next.js), TypeScript, and Figma, demonstrating strong team collaboration, technical proficiency, and leadership.",
                "Overhauled website to better deliver resources for 16,000+ science students, resulting in a 30% increase in user engagement.",
                "Developed the team’s Git workflow and CI/CD pipelines in Github Actions, ensured code reviews for quality, and maintained documentation for current and future development."
            ],
        }
    ];

    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            });
        },
        {
            threshold: 0.1,
        }
        );

        itemRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => {
        itemRefs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
        };
    }, []);

    return (
        <section className="w-full text-white">
            <Border sectionTitle="TIMELINE" textOnLeft={false} />

            <div className="mt-25 mb-25 max-w-5xl mx-auto px-8">
                <div className="relative border-l border-gray-600">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            className="ml-6 mb-12 relative timeline-item"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Bullet */}
                            <span
                                className={`absolute left-0 top-1.5 w-3 h-3 rounded-full ${item.bulletColor}`}
                                style={{ transform: 'translateX(-250%)' }}
                            />

                            {/* Content */}
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>

                                <p className="text-sm mb-4">{item.subtitle}</p>
                                {item.details.length > 0 && (
                                    <ul className="list-disc text-sm text-gray-300 ml-5 space-y-3">
                                    {item.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                    </ul>
                                )}
                                </div>

                                <p className="text-sm text-gray-400 whitespace-nowrap">
                                {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
