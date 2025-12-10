import { Card } from "@/components/ui/card";

interface RecapCardProps {
  title: string;
  videoUrl?: string;
  imageUrl?: string;
  isTextRecap?: boolean;
}

export const RecapCard = ({ title, videoUrl, imageUrl, isTextRecap }: RecapCardProps) => {
  const firstWord = title.split(' ')[0];
  
  if (isTextRecap) {
    return (
      <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer shadow-none border-0 h-full flex flex-col">
        <div className="aspect-[3/4] bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-6 rounded-lg">
          <h3 className="font-cursive text-3xl md:text-4xl text-white text-center leading-relaxed">
            {firstWord}
          </h3>
        </div>
        <div className="p-4 bg-card group-hover:bg-card-hover transition-colors flex-1">
          <h3 className="font-medium text-card-foreground line-clamp-2">
            {title}
          </h3>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer shadow-none border-0 h-full flex flex-col">
      <div className="aspect-[3/4] bg-muted relative overflow-hidden rounded-lg">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        )}
        {videoUrl && (
          <video
            className="w-full h-full object-cover"
            poster={imageUrl}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="p-4 bg-card group-hover:bg-card-hover transition-colors flex-1">
        <h3 className="font-medium text-card-foreground line-clamp-2">
          {title}
        </h3>
      </div>
    </Card>
  );
};
