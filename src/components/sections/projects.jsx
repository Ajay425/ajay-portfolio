
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return( 
    <section id="projects" className="min-h-screeb flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">NFTPioneer</h3>
                <p className="text-grey-400 mb-4">
                    An Android game built with Java and Android Studio that challenges players to simulate buying, selling, and trading NFTs. Players compete to reach a target balance in the fewest in-game days, with an intuitive and engaging interface that mimics real-world trading dynamics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Java", "Android Studio", "Junit", ""].map((tech, key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.1)] transition-all
                            ">
                                {tech}
                            </span>
                    ))}
                </div>
                <div className="flex justify-between items center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Github → </a>
                </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Personal Website</h3>
                <p className="text-grey-400 mb-4">
                    A responsive and modern website built with React, Tailwind CSS, and Vite to showcase my projects, technical skills, and professional experience. Features include smooth animations, contact form integration, and a clean, mobile-friendly design for easy navigation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Vite", "TailwindCSS"].map((tech, key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.1)] transition-all
                            ">
                                {tech}
                            </span>
                    ))}
                </div>
                <div className="flex justify-between items center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Github → </a>
                </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Spotify API Clone</h3>
                <p className="text-grey-400 mb-4">
                    A backend application built with Java and Spring Boot that replicates core Spotify features like user profiles, social connections, and song interactions. Utilized MongoDB for metadata storage, Neo4j for relationship modeling, and OkHttp for external data handling. Exposed RESTful APIs and tested endpoints using Postman for reliability and performance.                
                </p>
              <div className="flex flex-wrap gap-2 mb-4">
                    {["Java", "MongoDB", "Spring Boot", "Neo4j", "Okhttp3"].map((tech, key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px+8px_rgba(59, 130, 246, 0.1)] transition-all
                            ">
                                {tech}
                            </span>
                    ))}
                </div>
                <div className="flex justify-between items center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Github → </a>
                </div>
            </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>

    )
}