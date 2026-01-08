export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  featured?: boolean;
  content?: {
    type: 'header' | 'paragraph' | 'conclusion-title' | 'conclusion-paragraph';
    text: string;
  }[];
}

export const categories = [
  'Short Stories',
  'Practices',
  'Articles'
];

export const articles: Article[] = [
  {
    id: 'emotional-waves',
    title: 'Understanding Emotional Waves',
    excerpt: 'Techniques to cultivate inner peace amidst daily chaos.',
    category: 'Articles',
    image: '/images/hero-beach.jpg',
    date: 'January 6, 2026',
    featured: true,
    content: [
      // Header
      { type: 'header', text: "Understanding Emotional Waves" },

      // Body paragraphs
      { type: 'paragraph', text: "Emotions are not fixed states; they move, shift, and change much like the ocean. At times they are gentle and barely noticeable, and at other times they rise powerfully, demanding our attention. Every emotion follows a natural rhythm — it rises, reaches a peak, and eventually settles. This movement is not a weakness of the mind; it is a fundamental part of being human." },
      { type: 'paragraph', text: "Many emotional struggles begin not because we feel deeply, but because we resist what we feel. When an emotion appears — sadness, anger, fear, or even joy — the instinct is often to suppress it, distract ourselves, or judge it as something that should not be there. This resistance is like fighting a strong current. The more we push against it, the more exhausted and overwhelmed we become. What could have passed naturally instead turns into an inner storm." },
      { type: 'paragraph', text: "Emotional intelligence starts with observation. Instead of asking, “How do I get rid of this feeling?” we learn to ask, “What is this emotion trying to show me?” When we pause and notice an emotion without reacting immediately, we create space between the wave and our response. In that space, clarity begins to form. The emotion still rises, but it does not control our actions." },
      { type: 'paragraph', text: "Just like waves, emotions gain strength when fueled by resistance, overthinking, or fear. When we replay situations repeatedly in our mind, judge ourselves harshly, or anticipate outcomes that have not happened, we add force to the wave. But when we allow the emotion to exist — without labeling it as good or bad — it slowly loses its intensity. Acceptance does not mean giving up; it means allowing the wave to move as it naturally should." },
      { type: 'paragraph', text: "With time and practice, you begin to trust the process. You learn that no emotion stays at its peak forever. Even the strongest waves eventually return to calm waters. This understanding builds resilience. You stop fearing emotions and start navigating them. You respond instead of react. You listen instead of suppress. You move with the tide instead of against it." },
      // Conclusion
      { type: 'conclusion-title', text: "Inner calm is not the absence of emotion" },
      { type: 'conclusion-paragraph', text: "Inner calm is not the absence of emotion; it is the ability to remain present while emotions pass through. When you allow feelings to rise and fall naturally, you discover a deeper sense of balance. The ocean within you becomes something you can understand, respect, and move with — not something you must fight."}
    ]
  },
  {
    id: 'letters-to-the-sea',
    title: 'Self-Awareness: Diving Beneath the Surface ',
    excerpt: 'Exploring the depths of our emotions to find clarity and balance.',
    category: 'Short Stories',
    image: '/images/self-awareness.jpg',
    date: 'January 4, 2026',
    content: [
      { type: 'header', text: "Self-Awareness: Diving Beneath the Surface " },
      { type: 'paragraph', text: "Self-awareness begins when we notice the difference between what we feel inside and what we show on the surface. Like the ocean, our outer expression can appear calm while deeper currents move unseen. Many emotions remain unspoken — not because they are unimportant, but because we have learned to hide, minimize, or ignore them." },
      { type: 'paragraph', text: "Emotional intelligence grows when we gently observe these inner currents. Instead of judging an emotion or pushing it away, we acknowledge it with curiosity. Asking simple questions such as “What am I feeling right now?” or “Why did this moment affect me?” helps us understand ourselves more clearly. Awareness does not demand immediate change; it simply invites honesty." },
      { type: 'conclusion-title', text: "Understanding Our Inner World" },
      { type: 'conclusion-paragraph', text: "When we understand our inner world, we gain the ability to act with intention rather than habit. We respond with clarity, communicate with authenticity, and move through situations with greater balance. True calm comes not from suppressing emotions, but from knowing them — and learning to navigate their depth with patience and respect." }
    ]
  },
  {
  id: 'navigating-the-tides',
  title: 'Navigating the Tides: The Art of Emotional Presence',
  excerpt: 'Learning to read our inner tides to move through life with intention and peace.',
  category: 'Wellness',
  image: '/images/emotional-presence.jpg',
  date: 'January 8, 2026',
  content: [
    { 
      type: 'header', 
      text: "Navigating the Tides: The Art of Emotional Presence" },
    { 
      type: 'paragraph', 
      text: "Healing begins the moment we stop fighting the waves and start learning how to float. We often feel pressured to be a 'still lake,' but human nature is much more like the tide—constantly rising and falling. When we experience stress or sadness, it isn't a sign that the 'ocean' is broken; it is simply a change in the current that deserves our attention." },
    { 
      type: 'paragraph', 
      text: "We cultivate emotional presence by becoming the observer on the shore. Instead of being swept away by a sudden surge of anxiety, we can practice saying, 'I notice a cold current arriving.' This small shift in language—from 'I am anxious' to 'I notice anxiety'—gives us the space to breathe. It allows us to investigate our feelings without letting them drown our sense of self." },
    { 
      type: 'conclusion-title', 
      text: "Sailing with Intention"},
    { 
      type: 'conclusion-paragraph', 
      text: "By acknowledging our inner weather, we stop reacting out of habit and start responding with grace. We realize that every storm eventually runs out of rain and every tide eventually turns. True mental resilience is built on this foundation: the quiet, steady confidence that we have the tools to navigate any sea, no matter how deep it may seem." }
  ]
  },
  {
    id: 'the-sea-breath-practice',
    title: 'The Sea-Breath: A Simple Practice for Daily Calm',
    excerpt: 'A rhythmic breathing exercise to help you find your center when the waves of life feel overwhelming.',
    category: 'Practices',
    image: '/images/ocean-breathe.jpeg',
    date: 'January 8, 2026',
    content: [
    { 
      type: 'header', 
      text: "The Sea-Breath: A Simple Practice for Daily Calm" 
    },
    { 
      type: 'paragraph', 
      text: "Just as the ocean has a natural rhythm of ebb and flow, our bodies have a built-in mechanism for returning to peace. This practice, often called 'Sea-Breathing,' uses a specific count to signal to your brain that it is safe to relax. By focusing on the breath, we drop an anchor into the present moment, preventing our thoughts from drifting into the stormy waters of the past or future." 
    },
    { 
      type: 'paragraph', 
      text: "To begin, find a comfortable seat and imagine you are sitting on a quiet shore. Inhale deeply through your nose for a count of 4, imagining a cool wave washing over your feet. Hold that breath for a count of 7, letting the stillness of the deep water settle within you. Finally, exhale forcefully through your mouth for a count of 8, making a 'whoosh' sound like a wave receding back into the ocean. Repeat this cycle four times whenever you feel the 'tide' of stress rising." 
    },
    { 
      type: 'conclusion-title', 
      text: "Your Portable Sanctuary" 
    },
    { 
      type: 'conclusion-paragraph', 
      text: "The beauty of this practice is that the 'ocean' is always with you. You don't need a quiet room or special equipment; you only need your breath. By returning to this rhythm throughout the day, you train your mind to remain steady. You learn that while you cannot control the weather of life, you can always choose how you navigate the waters." 
    }
  ]
}
  // Add remaining articles in same structure...
];
