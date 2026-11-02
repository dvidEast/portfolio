import React from "react";
import { useEffect, useRef } from "react";
import Border from "./Border"

export default function TechnicalSkills() {
    const skills = [
        {
            type: "LANGUAGES",
            list: [
                "Python", "Ruby", "JavaScript", "TypeScript", "Java", "SQL", "R", "ReactJS", "HTML", "CSS"
            ]
        },
        {
            type: "DB",
            list: [
                "MySQL", "Firebase"
            ]
        },
        {
            type: "TESTING",
            list: [
                "Jest", "JUnit", "Postman Collections"
            ]
        },
        {
            type: "DEV TOOLS",
            list: [
                "Git", "GitHub", "Docker", "AWS", "Jupyter", "Postman", "Jenkins", "Claude Code", "Deterministic LLM Programming"
            ]
        },
        {
            type: "FRAMEWORKS / LIBRARIES",
            list: [
                "Ruby on Rails", "Pandas", "NumPy", "Matplotlib", "Tensorflow", "Scikit-learn", "NodeJS"
            ]
        }
    ]

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
        <section className="w-full mb-15">
            <Border sectionTitle="TECHNICAL SKILLS" textOnLeft={true} />

            <div className="px-6 py-10 mt-15">
                <div className="max-w-4xl mx-auto text-left space-y-7">
                    {skills.map((skill, index) => (
                    <div
                        key={skill.type}
                        className="timeline-item flex flex-col sm:flex-row sm:items-start flex-wrap gap-y-2"
                        ref={(el) => {
                            itemRefs.current[index] = el;
                        }}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {/* Skill Type */}
                        <span className="sm:w-48 font-bold">{skill.type}</span>

                        {/* Skill Items */}
                        <div className="flex flex-wrap gap-x-2 text-gray-300">
                        {skill.list.map((item, index) => (
                            <React.Fragment key={item}>
                                {index !== 0 && <span className="text-gray-500">/</span>}
                                <span className="whitespace-nowrap">{item}</span>
                            </React.Fragment>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}