import { RevealOnScroll } from "../RevealOnScroll";
export const About = () =>  {

    const FrontendSkills = ["React.js", "TailwindCSS", "Bootstrap"]
    const backendSkills = ["Node.js", "Python", "MongoDB", "MySQL", "GraphQL", "Spring-Boot", "Firebase"]
    return ( 
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
        

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">
                Hi! I’m — a recent Computer Science graduate from York University’s Lassonde School of Engineering. I recently worked as a Network Operations Assistant at YorkU, where I helped monitor and troubleshoot campus-wide infrastructure. I’ve also gained experience in software testing at Sanofi and enjoy building web apps, automating workflows, and exploring new technologies. Outside of tech, I’m a big anime fan (One Piece is the GOAT) and an active stock market enthusiast who loves researching ETFs and tracking market trends. I’m currently seeking new opportunities in software development, automation, or networking — feel free to connect!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {FrontendSkills.map((tech, key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.2)] transition
                            ">
                                {tech}
                            </span>
                        ))}

                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key)=> (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px+8px_rgba(59, 130, 2246, 0.2)] transition
                            ">
                                {tech}
                            </span>
                        ))}

                    </div>
                </div>
            </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B. S in Computer Science </strong> - York University (2020-2025)
                        </li>
                        <li>
                            Relevant Coursework: Data Strutures, Data Science, Operating Systems, Databases, UI
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4"> 🖥️ Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Network Services Assistant at York University (2024-2025)</h4>
                            <p>
                                Monitored and maintained campus-wide network infrastructure. Wrote Python scripts using Cisco API to automate diagnostics and improve network issue resolution.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Systems Testing Intern at Sanofi (2024-2025)</h4>
                            <p>
                                Performed system integration and user acceptance testing. Documented results and collaborated with QA teams to ensure compliance and functionality.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Systems Testing Intern at Sanofi (2024-2025)</h4>
                            <p>
                                Performed system integration and user acceptance testing. Documented results and collaborated with QA teams to ensure compliance and functionality.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Systems Testing Intern at Sanofi (2024-2025)</h4>
                            <p>
                                Performed system integration and user acceptance testing. Documented results and collaborated with QA teams to ensure compliance and functionality.
                            </p>
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};