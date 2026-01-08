import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const normalizedParam = category?.toLowerCase() ?? '';

  const filteredArticles = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, '-') === normalizedParam
  );

  const title = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : 'Category';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8 capitalize">
          {title}
        </h1>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No articles found in this category.</p>
        )}
      </div>
    </Layout>
  );
};

export default Category;