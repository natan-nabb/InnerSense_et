import ArticleCard from './ArticleCard';
import { Article } from '@/data/articles';

interface HeroSectionProps {
  featuredArticle: Article;
}

const HeroSection = ({ featuredArticle }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 pt-6 pb-8">
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <ArticleCard article={featuredArticle} featured />
      </div>
    </section>
  );
};

export default HeroSection;
