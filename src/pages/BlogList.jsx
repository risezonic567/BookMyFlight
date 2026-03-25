import { useState, useEffect } from "react";
import blogs from "../data/blogs";
import BlogCard from "../component/BlogCard";
import { Helmet } from "react-helmet";
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

export default function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // ✅ Sort blogs by ID (newest = highest ID)
    const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

    const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

    // Use sorted list for pagination
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Book My Flight Blog | Flight Guides, Comparisons & Tips</title>
                <meta
                    name="description"
                    content="Explore expert tips, buying guides, trends & comparisons on marble, granite, and tiles from Malani Marbles – India’s trusted natural stone supplier."
                />
                <link rel="canonical" href="https://www.malanimarbles.com/blog" />
            </Helmet>

            {/* Banner */}
            <div className="relative">
                <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
                <img
                    className="w-full"
                    src="https://blogcrm.flightschannel.com/images/blog/65Europe.webp"
                    alt="Blog Banner"
                />
            </div>
            <section className="py-16 px-6 max-w-7xl mx-auto font-sans">
      {/* Section Title */}

      {/* Blog Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white overflow-hidden">
        
        {/* Left: Image Section */}
        <div className="relative w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-lg group">
          <img 
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200" 
            alt="Travelers at Airport" 
            className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-tight">
              Travel Tips
            </span>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-4 px-2">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a2b48] leading-tight">
            The Right Time to Get to the Airport
          </h3>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-6">
            When you are planning a trip somewhere, you will want to be as thorough as possible, 
            making sure that there are no mistakes. If you are opting for flights over trains 
            or buses, there could be numerous reasons for this. Mostly it will be much quicker 
            and it is also considered to be the safest mode of transport. So, you have decided 
            upon where you will be staying and have calculated the amount you will need to spend 
            on your trip. Alternatively, your company may have decided everything for you if you are going f...
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-gray-500 font-medium text-sm">16 Oct 2023</span>
            
            <button className="flex items-center gap-2 bg-[#1F3F63] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#1a3554] transition shadow-md group">
              <Link to="/blog/home-interior-trends-2026-italian-marble-beige-marble-italian-tiles">Read More</Link>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
                    Our Latest Blogs
                </h1>

                {currentBlogs.length > 0 ? (
                    <>
                        {/* Blog Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentBlogs.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12 gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md text-white ${currentPage === 1
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                Previous
                            </button>

                            <span className="px-4 py-2 bg-gray-100 rounded-md font-semibold">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500 text-lg py-20">
                        No blogs found yet.
                    </div>
                )}
            </div>
        </>
    );
}
