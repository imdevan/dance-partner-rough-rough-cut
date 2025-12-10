import { Menu, Filter, List, Activity, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecapCard } from "@/components/RecapCard";
import { AnimatedCategoryTitle } from "@/components/AnimatedCategoryTitle";
import { generateRecaps, getRandomDanceStyle } from "@/lib/mockData";
import { useState, useMemo } from "react";

const Index = () => {
  const [category, setCategory] = useState(() => getRandomDanceStyle());
  const recaps = useMemo(() => generateRecaps(12, category), [category]);

  const handleCategoryClick = () => {
    setCategory(getRandomDanceStyle());
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Menu className="h-5 w-5" />
            </Button>
            
            <AnimatedCategoryTitle 
              initialCategory={category} 
              onCategoryClick={handleCategoryClick}
            />
            
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {recaps.map((recap) => (
            <RecapCard
              key={recap.id}
              title={recap.title}
              isTextRecap={recap.isTextRecap}
              imageUrl={recap.imageUrl}
              videoUrl={recap.videoUrl}
            />
          ))}
        </div>
      </main>

      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="flex items-center justify-around py-3 w-full">
          <Button variant="ghost" size="icon" className="hover:bg-muted">
            <List className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-muted">
            <Activity className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-muted">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;