import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

const Articles = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-10">
          Articles
        </h1>

        {articles.length === 0 ? (
          <p className="text-muted-foreground">No articles available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Articles;
