import { Card, CardContent } from '@/components/ui/card';

// Solid minimal icon components for luxury black-and-white theme
const InspirationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
    <path d="M12 2C11.45 2 11 2.45 11 3V5.5C11 6.05 11.45 6.5 12 6.5C12.55 6.5 13 6.05 13 5.5V3C13 2.45 12.55 2 12 2ZM12 9C9.24 9 7 11.24 7 14C7 15.32 7.47 16.53 8.26 17.47C8.61 17.9 9 18.35 9 19V21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V19C15 18.35 15.39 17.9 15.74 17.47C16.53 16.53 17 15.32 17 14C17 11.24 14.76 9 12 9Z"/>
  </svg>
);

const LifeLessonsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
  </svg>
);

const CreativityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
    <path d="M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22ZM18 14.5C18 11.43 15.86 8.86 13 8.18V7.5C13 6.67 12.33 6 11.5 6C10.67 6 10 6.67 10 7.5V8.18C7.14 8.86 5 11.43 5 14.5V18L3 20V21H20V20L18 18V14.5ZM16 19H7V14.5C7 12.01 8.51 9.89 11 9.39V9.5C11 10.33 11.67 11 12.5 11C13.33 11 14 10.33 14 9.5V9.39C16.49 9.89 18 12.01 18 14.5V19Z"/>
    <circle cx="7" cy="5" r="2"/>
    <circle cx="17" cy="5" r="2"/>
  </svg>
);

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
  </svg>
);

const TechnologyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
    <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6ZM6 8H8V10H6V8ZM6 11H8V13H6V11ZM9 8H11V10H9V8ZM9 11H11V13H9V11ZM12 8H18V10H12V8ZM12 11H18V13H12V11Z"/>
  </svg>
);

const categories = [
  {
    name: 'Inspiration',
    icon: InspirationIcon,
    description: 'Stories that motivate and uplift',
  },
  {
    name: 'Life Lessons',
    icon: LifeLessonsIcon,
    description: 'Wisdom from lived experiences',
  },
  {
    name: 'Creativity',
    icon: CreativityIcon,
    description: 'Exploring artistic expression',
  },
  {
    name: 'Success',
    icon: SuccessIcon,
    description: 'Journeys to achievement',
  },
  {
    name: 'Technology',
    icon: TechnologyIcon,
    description: 'Innovation and digital futures',
  },
];

export default function HomeCategoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Card
            key={category.name}
            className="group cursor-pointer border-border/50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury"
          >
            <CardContent className="flex flex-col items-center space-y-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                <Icon />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
