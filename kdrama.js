// Arrays containing different pieces of data
const adjectives = [
    'amazing', 'brilliant', 'creative', 'determined', 'energetic',
    'fearless', 'grateful', 'happy', 'inspiring', 'joyful'
  ];
  
  const nouns = [
    'life', 'journey', 'dreams', 'efforts', 'opportunities',
    'success', 'challenges', 'adventure', 'destiny', 'future'
  ];
  
  const encouragingWords = [
    'you can do it!', 'keep going!', 'believe in yourself!',
    'embrace the possibilities!', 'the sky is the limit!',
    'don\'t give up!', 'never stop trying!', 'stay positive!'
  ];
  
  // Function to generate a random message
  function generateRandomMessage() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomEncouragement = encouragingWords[Math.floor(Math.random() * encouragingWords.length)];
  
    return `You are ${randomAdjective} in this ${randomNoun}. Remember, ${randomEncouragement}`;
  }
  
  // Generating and displaying the random message
  const randomMessage = generateRandomMessage();
  console.log(randomMessage);
  