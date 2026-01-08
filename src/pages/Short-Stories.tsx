import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

const ShortStories = () => {
  const shortStories = articles.filter(
    article => article.category === 'Short Stories'
  );

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-10">
          Short Stories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortStories.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ShortStories;
