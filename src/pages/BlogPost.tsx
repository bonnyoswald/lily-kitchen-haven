
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-montserrat font-bold text-charcoal mb-4">
              Blog post not found
            </h1>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/blog">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            <article>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-600">{post.category}</span>
                <span className="text-gray-600">{post.date}</span>
              </div>

              <h1 className="text-4xl font-montserrat font-bold text-charcoal mb-6">
                {post.title}
              </h1>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-gray-600">
                  This is a sample blog post content. In a real application, this would be the full content of the blog post.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
