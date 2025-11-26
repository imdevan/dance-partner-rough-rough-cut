import { Card } from "@/components/ui/card";

interface RecapCardProps {
  title: string;
  videoUrl?: string;
  imageUrl?: string;
  isTextRecap?: boolean;
}

export const RecapCard = ({ title, videoUrl, imageUrl, isTextRecap }: RecapCardProps) => {
  if (isTextRecap) {
    return (
      <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer border-border/50 hover:border-border">
        <div className="aspect-video bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-6">
          <h3 className="font-cursive text-3xl md:text-4xl text-white text-center leading-relaxed">
            {title}
          </h3>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer border-border/50 hover:border-border">
      <div className="aspect-video bg-muted relative overflow-hidden">
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
      <div className="p-4 bg-card group-hover:bg-card-hover transition-colors">
        <h3 className="font-medium text-card-foreground line-clamp-2">
          {title}
        </h3>
      </div>
    </Card>
  );
};
