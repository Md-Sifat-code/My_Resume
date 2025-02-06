import React, { useState } from 'react';
import { useBlogs } from '../Context/BlogContext';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const Blogs: React.FC = () => {
  const { blogs } = useBlogs();
  const [selectedBlog, setSelectedBlog] = useState<null | any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const closeModal = () => setSelectedBlog(null);

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Insights & Stories
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="relative h-48">
                <img
                  src={blog.picture}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900" />
              </div>

              <div className="flex flex-col justify-between p-6 flex-grow">
                <div className="flex items-center text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span className="text-sm">
                    {format(new Date(blog.publishedDate), 'MMM dd, yyyy')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow">
                  {blog.title}
                </h3>

                <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                  {blog.description}
                </p>

                

                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal for Detailed Blog View */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedBlog.title}</h2>
            <p className="text-gray-600 mb-4">{selectedBlog.description}</p>
            <div className="mb-4">
              <img
                src={selectedBlog.image_1}
                alt="Additional Image 1"
                className="w-full h-auto object-cover mb-2"
              />
              <img
                src={selectedBlog.image_2}
                alt="Additional Image 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-gray-600 mb-4">{selectedBlog.readmore}</p>
            <button
              onClick={closeModal}
              className="text-white w-full py-3 bg-amber-600 font-bold  hover:text-black rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
