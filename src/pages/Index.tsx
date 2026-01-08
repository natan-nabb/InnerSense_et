import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ArticleGrid from '@/components/ArticleGrid';
import { articles } from '@/data/articles';
import NewsletterForm from '@/components/NewsLetterComponents';


const Index = () => {
  const featuredArticle = articles.find(a => a.featured) || articles[0];
  const regularArticles = articles.filter(a => a.id !== featuredArticle.id);

  return (
    <Layout>
      {/* Hero */}
      <HeroSection featuredArticle={featuredArticle} />

      {/* Recent Articles */}
      <ArticleGrid articles={regularArticles} title="Latest Stories" />

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 text-center">
          {/* Decorative waves */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
              <path
                d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1200,100 1200,100 L1200,400 L0,400 Z"
                fill="currentColor"
              />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-3">
              Subscribe to our Newsletter
            </h3>

            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Get the latest articles, updates, and insights delivered straight to your inbox.
            </p>
           <NewsletterForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
