import ArticleCard from './ArticleCard';
import { Article } from '@/data/articles';

interface ArticleGridProps {
  articles: Article[];
  title?: string;
}

const ArticleGrid = ({ articles, title }: ArticleGridProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      {title && (
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
