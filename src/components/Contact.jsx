import React from 'react';

const Contact = () => {
  return (
    <section className="mt-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-white">Contact</h2>
      <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg max-w-lg mx-auto">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4">
          Feel free to connect with me. I’m open to internship opportunities and tech collaborations!
        </p>
        <ul className="space-y-3 text-base text-gray-800 dark:text-gray-200 font-medium">
          <li>
            📧 Email: <a href="mailto:monatarafdar19@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">monatarafdar19@gmail.com</a>
          </li>
          <li>
            💼 LinkedIn: <a href="https://linkedin.com/in/varsha-tarafdar-69939631b" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">linkedin.com/in/varsha-tarafdar</a>
          </li>
          <li>
            🐙 GitHub: <a href="https://github.com/varshatarafdar" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/varshatarafdar</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
