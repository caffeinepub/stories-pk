export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string[];
  author?: string;
  date?: string;
  featured?: boolean;
}

const stories: Story[] = [
  {
    slug: 'the-art-of-storytelling',
    title: 'The Art of Storytelling: Why Narratives Matter',
    excerpt:
      'Explore the timeless power of storytelling and how narratives shape our understanding of the world around us.',
    body: `Stories have been the cornerstone of human communication since the dawn of civilization. From ancient cave paintings to modern digital media, narratives have served as the primary vehicle through which we share experiences, transmit knowledge, and connect with one another on a profound level.

The power of storytelling lies not just in the words themselves, but in their ability to evoke emotions, spark imagination, and create lasting memories. When we hear a compelling story, our brains light up in ways that mere facts and figures cannot achieve. We don't just process information—we experience it, feel it, and internalize it.

In today's fast-paced digital age, the art of storytelling has evolved but its essence remains unchanged. Whether through written word, video, or interactive media, stories continue to be the most effective way to communicate complex ideas, build empathy, and inspire action.

Great storytellers understand that every narrative needs three essential elements: compelling characters we can relate to, conflicts that challenge and engage us, and resolutions that satisfy our innate desire for meaning. When these elements come together, magic happens.

As we navigate an increasingly complex world, the ability to tell and understand stories becomes more crucial than ever. Stories help us make sense of chaos, find common ground across differences, and imagine possibilities beyond our current reality. They are not just entertainment—they are essential tools for human connection and progress.`,
    category: 'Culture',
    tags: ['storytelling', 'communication', 'culture'],
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    featured: true,
  },
  {
    slug: 'digital-transformation-journey',
    title: 'Navigating the Digital Transformation Journey',
    excerpt:
      'A comprehensive look at how organizations can successfully embrace digital transformation in the modern era.',
    body: `Digital transformation is no longer a buzzword—it's a necessity for organizations seeking to remain competitive in today's rapidly evolving landscape. But what does true digital transformation look like, and how can businesses navigate this complex journey successfully?

At its core, digital transformation is about fundamentally rethinking how an organization operates and delivers value to its customers. It's not simply about adopting new technologies; it's about embracing a new mindset that puts digital capabilities at the heart of business strategy.

The journey begins with leadership commitment. Without buy-in from the top, digital transformation initiatives often stall or fail to achieve their full potential. Leaders must champion change, allocate resources, and create a culture that embraces innovation and experimentation.

Technology is, of course, a crucial component. Cloud computing, artificial intelligence, data analytics, and automation tools provide the foundation for digital operations. However, technology alone is not enough. Organizations must also invest in their people, providing training and support to help employees adapt to new ways of working.

Customer experience should be at the center of any digital transformation strategy. By leveraging digital tools to better understand and serve customers, organizations can create more personalized, efficient, and satisfying experiences that drive loyalty and growth.

The path to digital transformation is rarely linear. It requires patience, persistence, and a willingness to learn from both successes and failures. Organizations that approach transformation as an ongoing journey rather than a one-time project are best positioned to thrive in the digital age.`,
    category: 'Technology',
    tags: ['digital transformation', 'business', 'innovation'],
    author: 'Michael Chen',
    date: '2024-01-20',
    featured: true,
  },
  {
    slug: 'sustainable-living-guide',
    title: 'A Practical Guide to Sustainable Living',
    excerpt:
      'Discover actionable steps you can take today to reduce your environmental impact and live more sustainably.',
    body: `Sustainable living is about making conscious choices that minimize our negative impact on the environment while maintaining or improving our quality of life. While the challenge of climate change can feel overwhelming, individual actions do matter—and they add up.

The journey to sustainable living doesn't require perfection. Small, consistent changes in our daily habits can collectively make a significant difference. Start by examining your consumption patterns. Do you really need that new item, or can you repair, reuse, or borrow instead?

Energy consumption is one of the most impactful areas where individuals can make a difference. Simple steps like switching to LED bulbs, improving home insulation, and being mindful of heating and cooling usage can dramatically reduce your carbon footprint while also lowering utility bills.

Transportation choices matter too. Walking, cycling, or using public transit when possible not only reduces emissions but often improves health and saves money. For those who need cars, carpooling and maintaining vehicles properly can help minimize environmental impact.

Food choices represent another powerful lever for change. Eating more plant-based meals, reducing food waste, buying local and seasonal produce, and composting organic waste all contribute to a more sustainable food system.

Remember, sustainable living is a journey, not a destination. Every positive choice counts, and progress is more important than perfection. By making conscious decisions and inspiring others through our actions, we can collectively create a more sustainable future for generations to come.`,
    category: 'Lifestyle',
    tags: ['sustainability', 'environment', 'lifestyle'],
    author: 'Emma Rodriguez',
    date: '2024-01-25',
    featured: true,
  },
  {
    slug: 'future-of-remote-work',
    title: 'The Future of Remote Work: Trends and Predictions',
    excerpt:
      'An in-depth analysis of how remote work is reshaping the modern workplace and what it means for the future.',
    body: `The COVID-19 pandemic accelerated a workplace revolution that was already underway. Remote work, once considered a perk or exception, has become the norm for millions of professionals worldwide. As we look to the future, it's clear that the way we work has been permanently transformed.

Hybrid models are emerging as the preferred approach for many organizations. Rather than choosing between fully remote or fully in-office, companies are creating flexible arrangements that allow employees to split their time between home and office. This approach aims to capture the benefits of both worlds—the focus and flexibility of remote work combined with the collaboration and culture-building of in-person interaction.

Technology continues to evolve to support distributed teams. Video conferencing, project management tools, and virtual collaboration platforms have become essential infrastructure. As these tools become more sophisticated, they're enabling new forms of asynchronous work that transcend time zones and geographical boundaries.

The shift to remote work is also changing where people choose to live. No longer tethered to expensive urban centers, many professionals are relocating to smaller cities or rural areas, seeking better quality of life and lower costs of living. This migration is reshaping real estate markets and local economies across the globe.

However, remote work also presents challenges. Maintaining company culture, ensuring effective communication, and preventing burnout require intentional effort. Organizations must develop new strategies for onboarding, training, and team building in virtual environments.

Looking ahead, the future of work will likely be characterized by increased flexibility, greater emphasis on outcomes over hours worked, and continued innovation in how we collaborate across distances. Those who adapt successfully will find themselves better positioned to attract talent and thrive in an increasingly competitive landscape.`,
    category: 'Business',
    tags: ['remote work', 'future of work', 'workplace'],
    author: 'David Park',
    date: '2024-02-01',
  },
  {
    slug: 'mindfulness-in-modern-life',
    title: 'Practicing Mindfulness in Modern Life',
    excerpt:
      'Learn how mindfulness practices can help you navigate stress, improve focus, and find peace in a busy world.',
    body: `In our hyperconnected, always-on world, finding moments of peace and presence can feel like an impossible task. Yet mindfulness—the practice of paying attention to the present moment without judgment—offers a powerful antidote to the stress and distraction of modern life.

Mindfulness is not about emptying your mind or achieving a state of perpetual calm. Rather, it's about developing awareness of your thoughts, feelings, and sensations as they arise, and learning to respond to them with intention rather than reacting automatically.

The benefits of regular mindfulness practice are well-documented. Research shows that mindfulness can reduce stress and anxiety, improve focus and concentration, enhance emotional regulation, and even boost physical health. These benefits don't require hours of meditation—even a few minutes of daily practice can make a meaningful difference.

Starting a mindfulness practice doesn't have to be complicated. Begin with simple breathing exercises: take a few moments each day to focus on your breath, noticing the sensation of air moving in and out of your body. When your mind wanders (and it will), gently bring your attention back to your breath without judgment.

Mindfulness can also be integrated into everyday activities. Whether you're eating, walking, or washing dishes, try to bring full attention to the experience. Notice the sensations, sounds, and details that you might normally overlook. This practice of present-moment awareness can transform mundane tasks into opportunities for peace and clarity.

As you develop your practice, you may notice subtle shifts in how you relate to challenges and stress. Rather than being swept away by difficult emotions or circumstances, you'll find yourself better able to pause, observe, and choose how to respond. This capacity for conscious choice is perhaps the greatest gift of mindfulness.`,
    category: 'Wellness',
    tags: ['mindfulness', 'mental health', 'wellness'],
    author: 'Lisa Thompson',
    date: '2024-02-05',
  },
  {
    slug: 'creative-writing-tips',
    title: 'Essential Tips for Aspiring Creative Writers',
    excerpt:
      'Unlock your creative potential with practical advice and techniques from experienced writers.',
    body: `Every writer starts somewhere, often staring at a blank page wondering how to transform the stories in their head into words on paper. While there's no single path to becoming a great writer, certain principles and practices can help aspiring writers develop their craft.

First and foremost: write regularly. Like any skill, writing improves with practice. Set aside dedicated time each day, even if it's just 15 minutes, to put words on the page. Don't worry about perfection in your first draft—the goal is simply to write. You can always revise and refine later.

Read voraciously and widely. Great writers are also great readers. Expose yourself to different genres, styles, and voices. Pay attention to how your favorite authors construct sentences, develop characters, and build tension. Reading teaches you the rhythms and possibilities of language in ways that writing guides never can.

Find your unique voice. While it's natural to be influenced by writers you admire, your most powerful asset is your own perspective and way of seeing the world. Don't try to imitate others—instead, focus on expressing your authentic self through your writing.

Embrace revision as part of the creative process. First drafts are rarely perfect, and that's okay. Some of the best writing happens during revision, when you can refine your ideas, strengthen your prose, and discover deeper meanings in your work. Be willing to cut, rearrange, and rewrite.

Seek feedback from trusted readers, but also learn to trust your own judgment. Constructive criticism can help you see blind spots and improve your work, but ultimately you must decide which suggestions to incorporate and which to set aside.

Finally, be patient with yourself. Developing as a writer takes time. Celebrate small victories, learn from setbacks, and remember that every word you write is a step forward on your creative journey.`,
    category: 'Writing',
    tags: ['creative writing', 'writing tips', 'creativity'],
    author: 'James Anderson',
    date: '2024-02-10',
  },
  {
    slug: 'exploring-cultural-diversity',
    title: 'Celebrating Cultural Diversity in a Globalized World',
    excerpt:
      'Understanding and appreciating cultural diversity enriches our lives and strengthens our communities.',
    body: `In an increasingly interconnected world, cultural diversity has become both more visible and more valuable. Our differences in traditions, languages, beliefs, and customs are not obstacles to overcome but treasures to celebrate and learn from.

Cultural diversity enriches society in countless ways. It brings together different perspectives and approaches to problem-solving, fostering innovation and creativity. When people from diverse backgrounds collaborate, they challenge assumptions and generate ideas that might never emerge in homogeneous groups.

Food is perhaps the most accessible gateway to experiencing other cultures. Every cuisine tells a story about geography, history, and values. Sharing meals across cultural boundaries creates opportunities for connection and understanding that transcend language barriers.

However, truly appreciating cultural diversity requires more than surface-level engagement. It demands curiosity, humility, and a willingness to step outside our comfort zones. We must be open to questioning our own assumptions and recognizing that our way of doing things is not the only valid approach.

Education plays a crucial role in fostering cultural understanding. By learning about different cultures, histories, and worldviews, we develop empathy and respect for people whose experiences differ from our own. This knowledge helps combat stereotypes and prejudice.

In our communities and workplaces, we can actively promote cultural diversity by creating inclusive spaces where everyone feels valued and heard. This means not just tolerating differences but actively celebrating them and ensuring that diverse voices have a seat at the table.

As we navigate the challenges of the 21st century, our ability to bridge cultural divides and work together across differences will be essential. By embracing diversity as a strength rather than viewing it as a challenge, we can build more resilient, creative, and compassionate societies.`,
    category: 'Culture',
    tags: ['diversity', 'culture', 'society'],
    author: 'Aisha Patel',
    date: '2024-02-15',
  },
  {
    slug: 'personal-finance-basics',
    title: 'Personal Finance Basics: Building a Strong Financial Foundation',
    excerpt:
      'Master the fundamentals of personal finance to achieve financial security and peace of mind.',
    body: `Financial literacy is a crucial life skill that unfortunately isn't taught in most schools. Understanding how to manage money effectively can mean the difference between financial stress and financial freedom. The good news is that the basics of personal finance are straightforward and accessible to everyone.

Start with budgeting. Knowing where your money goes each month is the foundation of financial health. Track your income and expenses for at least a month to understand your spending patterns. Then create a realistic budget that allocates money to necessities, savings, and discretionary spending.

Building an emergency fund should be a top priority. Aim to save three to six months of living expenses in an easily accessible account. This cushion protects you from unexpected expenses or income disruptions and provides peace of mind.

Debt management is another critical component. Not all debt is created equal—high-interest credit card debt should be paid off as quickly as possible, while low-interest debt like mortgages may be manageable over time. Develop a strategy to systematically reduce your debt burden.

Investing for the future is essential for long-term financial security. Take advantage of employer retirement plans, especially if they offer matching contributions. Even small, regular investments can grow significantly over time thanks to compound interest.

Insurance is often overlooked but crucial for protecting your financial foundation. Health, life, disability, and property insurance shield you from catastrophic financial losses that could derail your progress.

Finally, continue educating yourself about personal finance. The more you understand about money management, investing, and financial planning, the better equipped you'll be to make informed decisions that support your goals and values.

Remember, building financial security is a marathon, not a sprint. Small, consistent actions compound over time to create meaningful results.`,
    category: 'Finance',
    tags: ['personal finance', 'money management', 'financial planning'],
    author: 'Robert Kim',
    date: '2024-02-20',
  },
];

export function getAllStories(): Story[] {
  return stories;
}

export function getFeaturedStories(): Story[] {
  return stories.filter((story) => story.featured).slice(0, 3);
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set(stories.map((story) => story.category));
  return Array.from(categories).sort();
}
