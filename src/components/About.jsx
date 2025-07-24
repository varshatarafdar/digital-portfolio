import React from 'react';

const About = () => {
  return (
    <section className="px-6">
      <h2 className="text-4xl font-bold mb-6 dark:text-white">About Me</h2>
      <div className="text-xl font-medium text-gray-800 dark:text-gray-300 leading-relaxed space-y-4">
        <p>
          I’m currently pursuing my degree in Computer Science and passionate about building responsive, clean, and user-friendly websites with modern technologies like React and Tailwind CSS.
        </p>
        <p>
          I’m actively looking for <span className="font-bold">internship opportunities</span> where I can contribute, learn, and grow.
        </p>
      </div>
    </section>
  );
};

export default About;
