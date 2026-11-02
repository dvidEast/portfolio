import Border from "./Border";
import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <Border sectionTitle="MY STORY" textOnLeft={true} />

            <section
                className="w-full mt-25 mb-25 flex items-center justify-center timeline-item"
                ref={sectionRef}
                style={{ transitionDelay: `${100}ms` }}
            >
                <div className="max-w-5xl flex flex-col gap-y-7">
                    <div className="px-6">
                        Hi, I&apos;m David 👋
                    </div>

                    <div className="px-6">
                        I&apos;m currently working as a <span className='text-[#38ad8f]'>software developer at Clio</span> while finishing my Mathematics and Data Science degree at UBC.
                    </div>

                    <div className="px-6">
                        Right now, I&apos;m focused on growing as an engineer, learning from the people around me, and getting better at building things from the ground up.
                    </div>

                    <div className="px-6">
                        Long term, I&apos;d love to <span className='text-[#0097ff]'>build something of my own and lead a team</span> tackling problems I genuinely care about.
                    </div>

                    <div className="px-6">
                        My experience spans payments engineering, application security, and developer automation.
                    </div>

                    <div className="px-6">
                        Outside of work, I&apos;m usually listening to <span className='text-[#ffb969]'>music, at the gym, or trying something new in the kitchen!</span>
                    </div>
                </div>
            </section>
        </>
    );
}