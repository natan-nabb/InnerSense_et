import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  const relatedArticles = articles
    .filter(a => a.id !== id && a.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <Link to="/" className="text-aqua hover:underline">
            Return Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Link */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <span className="category-tag mb-4 inline-block">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-muted-foreground mb-8">{article.date}</p>

          <div className="prose prose-lg max-w-none">
            {/* Excerpt */}
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              {article.excerpt}
            </p>

            {/* Dynamic structured content */}
            {article.content?.map((block, idx) => {
              switch (block.type) {
                case 'header':
                  return (
                    <h2 key={idx} className="text-2xl md:text-3xl font-bold mb-4">
                      {block.text}
                    </h2>
                  );
                case 'paragraph':
                  return (
                    <p key={idx} className="text-foreground/80 leading-7 mb-6">
                      {block.text}
                    </p>
                  );
                case 'conclusion-title':
                  return (
                    <h3 key={idx} className="text-xl md:text-2xl font-semibold mt-10 mb-2">
                      {block.text}
                    </h3>
                  );
                case 'conclusion-paragraph':
                  return (
                    <p key={idx} className="text-foreground/80 leading-relaxed mb-6">
                      {block.text}
                    </p>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-4 py-12 border-t border-border">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
            More in {article.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map(related => (
              <ArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Article;
