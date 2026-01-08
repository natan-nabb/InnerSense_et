import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/article/${article.id}`}
        className="group relative block overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="category-tag mb-3 inline-block">
            {article.category}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-3 leading-tight">
            {article.title}
          </h2>
          <p className="text-primary-foreground/90 text-sm md:text-base max-w-2xl">
            {article.excerpt}
          </p>
          <p className="text-primary-foreground/60 text-sm mt-4">
            {article.date}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/article/${article.id}`}
      className="article-card group block"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="category-tag text-xs mb-2 inline-block">
          {article.category}
        </span>
        <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {article.excerpt}
        </p>
        <p className="text-muted-foreground/60 text-xs mt-3">
          {article.date}
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;
