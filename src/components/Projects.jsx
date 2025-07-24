import React from 'react';

const projects = [
  {
    title: "🎮 Game Hub",
    description: "A collection of interactive games built using React and JavaScript.",
  },
  {
    title: "🌐 Portfolio Website",
    description: "Responsive and modern portfolio built using React and Tailwind CSS.",
  },
  {
    title: "📚 Library Database System",
    description: "Digital library management system for managing books and users.",
  },
  {
    title: "📝 To-Do List App",
    description: "An app to add, edit, and delete daily tasks.",
  },
];

const Projects = () => {
  return (
    <section className="pl-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left dark:text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-neutral-800 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="font-medium text-base">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
