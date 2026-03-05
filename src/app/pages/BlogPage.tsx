import { Layout } from '../components/Layout';
import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';

export function BlogPage() {
  // SEO Meta tags
  useEffect(() => {
    document.title = 'Blog - Scipy Technologies | AI, Cloud & Software Development Insights';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on AI solutions, cloud computing, software development, digital transformation, and emerging technologies. Stay updated with Scipy Technologies blog.');
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Enterprise Solutions',
      excerpt: 'Discover how AI is transforming business operations, from predictive analytics to intelligent automation, and why enterprises must adopt AI strategies now.',
      category: 'Artificial Intelligence',
      author: 'Dr. Rahul Sharma',
      date: '2024-02-15',
      readTime: '8 min read',
      image: 'ai-enterprise',
      slug: 'future-of-ai-in-enterprise',
      tags: ['AI', 'Machine Learning', 'Enterprise', 'Digital Transformation'],
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Modern Businesses',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud with minimal disruption. Learn best practices for AWS, Azure, and Google Cloud Platform.',
      category: 'Cloud Solutions',
      author: 'Priya Menon',
      date: '2024-02-12',
      readTime: '10 min read',
      image: 'cloud-migration',
      slug: 'cloud-migration-strategies',
      tags: ['Cloud Computing', 'AWS', 'Azure', 'DevOps'],
    },
    {
      id: 3,
      title: 'Building Scalable SaaS Applications: Best Practices 2024',
      excerpt: 'Essential architecture patterns and development practices for creating robust, scalable SaaS products that can grow with your business.',
      category: 'Software Development',
      author: 'Arun Kumar',
      date: '2024-02-10',
      readTime: '12 min read',
      image: 'saas-development',
      slug: 'building-scalable-saas-applications',
      tags: ['SaaS', 'Scalability', 'Microservices', 'Architecture'],
    },
    {
      id: 4,
      title: 'DevOps Automation: Streamlining Your CI/CD Pipeline',
      excerpt: 'Learn how to implement continuous integration and deployment pipelines that reduce deployment time by 80% and improve code quality.',
      category: 'DevOps',
      author: 'Vikram Singh',
      date: '2024-02-08',
      readTime: '9 min read',
      image: 'devops-automation',
      slug: 'devops-automation-cicd',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Docker', 'Kubernetes'],
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for Web Applications',
      excerpt: 'Protect your applications from modern threats with these essential security measures, including OWASP Top 10 vulnerabilities and mitigation strategies.',
      category: 'Security',
      author: 'Sneha Reddy',
      date: '2024-02-05',
      readTime: '11 min read',
      image: 'cybersecurity',
      slug: 'cybersecurity-best-practices',
      tags: ['Security', 'OWASP', 'Penetration Testing', 'Compliance'],
    },
    {
      id: 6,
      title: 'Mobile-First Development: React Native vs Flutter',
      excerpt: 'A detailed comparison of the two leading cross-platform mobile development frameworks to help you choose the right technology for your project.',
      category: 'Mobile Development',
      author: 'Mohammed Ali',
      date: '2024-02-03',
      readTime: '7 min read',
      image: 'mobile-development',
      slug: 'react-native-vs-flutter',
      tags: ['Mobile Apps', 'React Native', 'Flutter', 'Cross-platform'],
    },
    {
      id: 7,
      title: 'Data Analytics: Turning Big Data into Business Insights',
      excerpt: 'Explore how advanced analytics and business intelligence tools can transform raw data into actionable insights that drive growth and innovation.',
      category: 'Data Analytics',
      author: 'Dr. Anita Desai',
      date: '2024-02-01',
      readTime: '10 min read',
      image: 'data-analytics',
      slug: 'big-data-business-insights',
      tags: ['Big Data', 'Analytics', 'BI', 'Data Science'],
    },
    {
      id: 8,
      title: 'Digital Transformation: A Step-by-Step Guide for SMEs',
      excerpt: 'Small and medium enterprises can leverage digital technologies to compete with larger organizations. Learn the roadmap to successful transformation.',
      category: 'Digital Transformation',
      author: 'Rajesh Patel',
      date: '2024-01-28',
      readTime: '9 min read',
      image: 'digital-transformation',
      slug: 'digital-transformation-smes',
      tags: ['Digital Transformation', 'SME', 'Strategy', 'Innovation'],
    },
    {
      id: 9,
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Discover practical blockchain applications in supply chain, healthcare, finance, and how decentralized technologies are reshaping industries.',
      category: 'Blockchain',
      author: 'Kavita Nair',
      date: '2024-01-25',
      readTime: '8 min read',
      image: 'blockchain',
      slug: 'blockchain-beyond-crypto',
      tags: ['Blockchain', 'Web3', 'Smart Contracts', 'DeFi'],
    },
  ];

  const categories = [
    'All Posts',
    'Artificial Intelligence',
    'Cloud Solutions',
    'Software Development',
    'DevOps',
    'Security',
    'Mobile Development',
  ];

  return (
    <Layout>
      {/* SEO-optimized Page Header */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Tech Insights
              </span>{' '}
              & Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Expert perspectives on AI, cloud computing, software development, and emerging technologies shaping the digital future
            </p>
          </motion.div>
        </div>
      </header>

      {/* Blog Content Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <nav className="flex flex-wrap gap-3 justify-center" aria-label="Blog categories">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    index === 0
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {category}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Featured Post */}
          <article className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl h-80 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-6xl opacity-20" style={{ fontFamily: 'Poppins, sans-serif' }}>AI</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold mb-4 w-fit">
                  <Tag className="w-3 h-3" />
                  Featured Post
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </article>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl text-blue-600 dark:text-cyan-400 opacity-30 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {post.category.split(' ')[0]}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-blue-600 dark:text-cyan-400 text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 text-xs font-medium"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - SEO benefit */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get the latest tech insights, industry trends, and exclusive content delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
