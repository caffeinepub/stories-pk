import { useMemo } from 'react';
import { getAllStories, type Story } from '@/data/stories';

export function useStoriesFilter(searchQuery: string, selectedCategory: string): Story[] {
  const allStories = getAllStories();

  return useMemo(() => {
    let filtered = allStories;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter((story) => story.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (story) =>
          story.title.toLowerCase().includes(query) ||
          story.excerpt.toLowerCase().includes(query) ||
          story.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [allStories, searchQuery, selectedCategory]);
}
