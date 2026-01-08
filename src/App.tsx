import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Featured from "./pages/Featured";
import ShortStories from "./pages/Short-Stories";
import Practices from "./pages/Practices";
import About from "./pages/About";
import Category from '@/pages/Category';
import Articles from '@/pages/Articles';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/short-stories" element={<ShortStories />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:category" element={<Category />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
