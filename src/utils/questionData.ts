import type { Question } from '../features/quiz/quizSlice';

export const questionsData: Question[] = [
    // ==========================================
    // 1. PROGRAMMING (20 Questions)
    // ==========================================
    {
        id: 1,
        question: "Which primary frontend library are we using to build user interfaces in this app?",
        options: ["Vue", "React", "Angular", "Svelte"],
        correctAnswer: "React",
        category: "programming"
    },
    {
        id: 2,
        question: "Which tool is used for centralized global state management in our tech stack?",
        options: ["Context API", "Redux Toolkit", "Zustand", "MobX"],
        correctAnswer: "Redux Toolkit",
        category: "programming"
    },
    {
        id: 3,
        question: "Which CSS framework is built on a utility-first approach?",
        options: ["Tailwind CSS", "Bootstrap", "Sass", "Styled Components"],
        correctAnswer: "Tailwind CSS",
        category: "programming"
    },
    {
        id: 4,
        question: "What is the primary benefit of using TypeScript over plain JavaScript?",
        options: ["Type Safety", "Faster browser execution", "Smaller bundle size", "Eliminates need for React"],
        correctAnswer: "Type Safety",
        category: "programming"
    },
    {
        id: 5,
        question: "Which function in Redux Toolkit automatically generates action creators and action types?",
        options: ["createStore", "createSlice", "createReducer", "combineReducers"],
        correctAnswer: "createSlice",
        category: "programming"
    },
    {
        id: 6,
        question: "Which hook is used to extract data from the Redux store state in React components?",
        options: ["useDispatch", "useSelector", "useState", "useContext"],
        correctAnswer: "useSelector",
        category: "programming"
    },
    {
        id: 7,
        question: "What is the purpose of the `git status` command?",
        options: ["Push code to GitHub", "Display working directory and staging area state", "Create a new branch", "Discard local changes"],
        correctAnswer: "Display working directory and staging area state",
        category: "programming"
    },
    {
        id: 8,
        question: "Which JavaScript engine executes Node.js code?",
        options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
        correctAnswer: "V8",
        category: "programming"
    },
    {
        id: 9,
        question: "Which symbol marks a property as optional inside a TypeScript Interface?",
        options: ["?", "optional", "null", "undefined"],
        correctAnswer: "?",
        category: "programming"
    },
    {
        id: 10,
        question: "What is the most widely used data format for transmitting data in web APIs?",
        options: ["XML", "JSON", "CSV", "TXT"],
        correctAnswer: "JSON",
        category: "programming"
    },
    {
        id: 11,
        question: "Which React Hook handles side effects such as data fetching or subscriptions?",
        options: ["useState", "useEffect", "useMemo", "useCallback"],
        correctAnswer: "useEffect",
        category: "programming"
    },
    {
        id: 12,
        question: "What does DOM stand for in web development?",
        options: ["Document Object Model", "Data Object Management", "Digital Optimal Module", "Desktop Operating Mode"],
        correctAnswer: "Document Object Model",
        category: "programming"
    },
    {
        id: 13,
        question: "Which HTML5 tag is used to embed external JavaScript files?",
        options: ["<script>", "<js>", "<link>", "<code>"],
        correctAnswer: "<script>",
        category: "programming"
    },
    {
        id: 14,
        question: "Which hook in React is used to dispatch actions to the Redux store?",
        options: ["useDispatch", "useStore", "useAction", "useReducer"],
        correctAnswer: "useDispatch",
        category: "programming"
    },
    {
        id: 15,
        question: "Which method is used to combine multiple CSS class names conditionally in modern React UI libraries?",
        options: ["cn() / clsx", "concat()", "joinClasses()", "mergeCSS()"],
        correctAnswer: "cn() / clsx",
        category: "programming"
    },
    {
        id: 16,
        question: "What does JSX stand for in React?",
        options: ["JavaScript XML", "JavaScript Extension", "JSON XML", "Java Syntax Extension"],
        correctAnswer: "JavaScript XML",
        category: "programming"
    },
    {
        id: 17,
        question: "Which command builds a React/Vite application for production?",
        options: ["npm run build", "npm start", "npm run dev", "npm serve"],
        correctAnswer: "npm run build",
        category: "programming"
    },
    {
        id: 18,
        question: "Which HTTP method is typically used to create a new resource on a server?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correctAnswer: "POST",
        category: "programming"
    },
    {
        id: 19,
        question: "In CSS Flexbox, which property aligns items along the primary main axis?",
        options: ["justify-content", "align-items", "flex-direction", "align-content"],
        correctAnswer: "justify-content",
        category: "programming"
    },
    {
        id: 20,
        question: "Which TypeScript utility type makes all properties in a type required?",
        options: ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
        correctAnswer: "Required<T>",
        category: "programming"
    },

    // ==========================================
    // 2. HISTORY (20 Questions)
    // ==========================================
    {
        id: 21,
        question: "In which year did World War II end?",
        options: ["1939", "1945", "1918", "1950"],
        correctAnswer: "1945",
        category: "history"
    },
    {
        id: 22,
        question: "Which Pharaoh commissioned the Great Pyramid of Giza?",
        options: ["Khafre", "Khufu", "Menkaure", "Ramses II"],
        correctAnswer: "Khufu",
        category: "history"
    },
    {
        id: 23,
        question: "Which city served as the capital of the Byzantine Empire?",
        options: ["Athens", "Constantinople", "Rome", "Alexandria"],
        correctAnswer: "Constantinople",
        category: "history"
    },
    {
        id: 24,
        question: "Which military commander led the Muslim forces at the Battle of Hattin?",
        options: ["Khalid ibn al-Walid", "Saladin", "Tariq ibn Ziyad", "Qutuz"],
        correctAnswer: "Saladin",
        category: "history"
    },
    {
        id: 25,
        question: "In which year did the French Revolution begin?",
        options: ["1789", "1815", "1776", "1848"],
        correctAnswer: "1789",
        category: "history"
    },
    {
        id: 26,
        question: "Which ancient civilization initiated the construction of the Great Wall of China?",
        options: ["Mongol Empire", "Chinese Dynasties", "Japanese Empire", "Persian Empire"],
        correctAnswer: "Chinese Dynasties",
        category: "history"
    },
    {
        id: 27,
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Benjamin Franklin"],
        correctAnswer: "George Washington",
        category: "history"
    },
    {
        id: 28,
        question: "Which ancient civilization developed in the region between the Tigris and Euphrates rivers?",
        options: ["Egyptian", "Mesopotamian", "Greek", "Mayan"],
        correctAnswer: "Mesopotamian",
        category: "history"
    },
    {
        id: 29,
        question: "Which 1815 battle marked the final defeat of Napoleon Bonaparte?",
        options: ["Battle of Waterloo", "Battle of Tours", "Battle of Stalingrad", "Battle of Troy"],
        correctAnswer: "Battle of Waterloo",
        category: "history"
    },
    {
        id: 30,
        question: "Which famous 14th-century Moroccan explorer traveled extensively across Africa, Asia, and Europe?",
        options: ["Ibn Battuta", "Ibn Khaldun", "Al-Idrisi", "Ibn Majid"],
        correctAnswer: "Ibn Battuta",
        category: "history"
    },
    {
        id: 31,
        question: "Which modern nation state was historically known as Persia?",
        options: ["Turkey", "Iran", "Iraq", "Afghanistan"],
        correctAnswer: "Iran",
        category: "history"
    },
    {
        id: 32,
        question: "In which year did the Berlin Wall fall, leading to German reunification?",
        options: ["1989", "1991", "1975", "1980"],
        correctAnswer: "1989",
        category: "history"
    },
    {
        id: 33,
        question: "Which empire was ruled by Julius Caesar and later Augustus?",
        options: ["Ottoman Empire", "Roman Empire", "British Empire", "Mongol Empire"],
        correctAnswer: "Roman Empire",
        category: "history"
    },
    {
        id: 34,
        question: "Who was the famous Queen of the Ancient Egyptian Ptolemaic Kingdom?",
        options: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Sobekneferu"],
        correctAnswer: "Cleopatra VII",
        category: "history"
    },
    {
        id: 35,
        question: "Which historic document was signed in England in 1215 to limit the power of the King?",
        options: ["Magna Carta", "Declaration of Independence", "Treaty of Versailles", "Bill of Rights"],
        correctAnswer: "Magna Carta",
        category: "history"
    },
    {
        id: 36,
        question: "In which century did the Renaissance period begin in Europe?",
        options: ["12th Century", "14th Century", "17th Century", "19th Century"],
        correctAnswer: "14th Century",
        category: "history"
    },
    {
        id: 37,
        question: "Who discovered the sea route to India around the Cape of Good Hope in 1498?",
        options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
        correctAnswer: "Vasco da Gama",
        category: "history"
    },
    {
        id: 38,
        question: "Which battle in 1260 saw the Mamluk Sultanate defeat the Mongol army in Palestine?",
        options: ["Battle of Ain Jalut", "Battle of Yarmouk", "Battle of Hattin", "Battle of Qadisiyyah"],
        correctAnswer: "Battle of Ain Jalut",
        category: "history"
    },
    {
        id: 39,
        question: "What was the period of geopolitical tension between the US and USSR after World War II called?",
        options: ["The Cold War", "The Hundred Years' War", "The Great War", "The Crimean War"],
        correctAnswer: "The Cold War",
        category: "history"
    },
    {
        id: 40,
        question: "Which ancient wonder of the world was located in Alexandria, Egypt?",
        options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Statue of Zeus"],
        correctAnswer: "Lighthouse of Alexandria",
        category: "history"
    },

    // ==========================================
    // 3. GAMES (20 Questions)
    // ==========================================
    {
        id: 41,
        question: "What is the best-selling video game of all time?",
        options: ["GTA V", "Minecraft", "Tetris", "Super Mario Bros"],
        correctAnswer: "Minecraft",
        category: "games"
    },
    {
        id: 42,
        question: "What is the name of the main protagonist in 'The Legend of Zelda' series?",
        options: ["Zelda", "Link", "Ganon", "Mario"],
        correctAnswer: "Link",
        category: "games"
    },
    {
        id: 43,
        question: "Which gaming console brand was created and produced by Sony?",
        options: ["Xbox", "Nintendo", "PlayStation", "Sega"],
        correctAnswer: "PlayStation",
        category: "games"
    },
    {
        id: 44,
        question: "In Pac-Man, what entities pursue the player through the maze?",
        options: ["Monsters", "Demons", "Ghosts", "Cars"],
        correctAnswer: "Ghosts",
        category: "games"
    },
    {
        id: 45,
        question: "Which game engine was developed and published by Epic Games?",
        options: ["Unity", "Unreal Engine", "Godot", "CryEngine"],
        correctAnswer: "Unreal Engine",
        category: "games"
    },
    {
        id: 46,
        question: "What is the primary world setting for the events of 'The Witcher 3'?",
        options: ["Tamriel", "The Continent", "Hyrule", "Azeroth"],
        correctAnswer: "The Continent",
        category: "games"
    },
    {
        id: 47,
        question: "Which Battle Royale game features building mechanics and pop-culture emotes?",
        options: ["PUBG", "Apex Legends", "Fortnite", "Call of Duty: Warzone"],
        correctAnswer: "Fortnite",
        category: "games"
    },
    {
        id: 48,
        question: "Who is the protagonist of the 'Uncharted' action-adventure game series?",
        options: ["Lara Croft", "Nathan Drake", "Arthur Morgan", "Joel Miller"],
        correctAnswer: "Nathan Drake",
        category: "games"
    },
    {
        id: 49,
        question: "In 'Dark Souls', which item is used to replenish health (HP)?",
        options: ["Estus Flask", "Health Potion", "First Aid Kit", "Elixir"],
        correctAnswer: "Estus Flask",
        category: "games"
    },
    {
        id: 50,
        question: "What was Nintendo's first international 8-bit home console?",
        options: ["Super Nintendo", "NES (Nintendo Entertainment System)", "Nintendo 64", "Game Boy"],
        correctAnswer: "NES (Nintendo Entertainment System)",
        category: "games"
    },
    {
        id: 51,
        question: "What is the name of Nintendo's flagship Italian plumber mascot?",
        options: ["Luigi", "Mario", "Wario", "Toad"],
        correctAnswer: "Mario",
        category: "games"
    },
    {
        id: 52,
        question: "Which game won the official 'Game of the Year' (GOTY) award in 2022?",
        options: ["God of War Ragnarök", "Elden Ring", "Horizon Forbidden West", "Stray"],
        correctAnswer: "Elden Ring",
        category: "games"
    },
    {
        id: 53,
        question: "Which popular FPS game franchise features maps like 'Dust II' and 'Mirage'?",
        options: ["Call of Duty", "Counter-Strike", "VALORANT", "Overwatch"],
        correctAnswer: "Counter-Strike",
        category: "games"
    },
    {
        id: 54,
        question: "What is the primary currency used in 'Roblox'?",
        options: ["V-Bucks", "Minecoins", "Robux", "Gems"],
        correctAnswer: "Robux",
        category: "games"
    },
    {
        id: 55,
        question: "Which studio developed 'Red Dead Redemption 2'?",
        options: ["Ubisoft", "Bethesda", "Rockstar Games", "EA"],
        correctAnswer: "Rockstar Games",
        category: "games"
    },
    {
        id: 56,
        question: "In 'League of Legends', what is the main objective map called?",
        options: ["Summoner's Rift", "Howling Abyss", "Twisted Treeline", "Kings Canyon"],
        correctAnswer: "Summoner's Rift",
        category: "games"
    },
    {
        id: 57,
        question: "Which iconic character is known as the 'Blue Blur'?",
        options: ["Mega Man", "Sonic the Hedgehog", "Pac-Man", "Crash Bandicoot"],
        correctAnswer: "Sonic the Hedgehog",
        category: "games"
    },
    {
        id: 58,
        question: "What genre does 'Civilization VI' belong to?",
        options: ["Turn-based Strategy", "Real-Time Strategy", "First-Person Shooter", "MMORPG"],
        correctAnswer: "Turn-based Strategy",
        category: "games"
    },
    {
        id: 59,
        question: "Which game features a companion cube and a portal gun?",
        options: ["Half-Life 2", "Portal", "BioShock", "Halo"],
        correctAnswer: "Portal",
        category: "games"
    },
    {
        id: 60,
        question: "What is the highest-grossing media franchise of all time, including video games?",
        options: ["Star Wars", "Pokémon", "Marvel", "Harry Potter"],
        correctAnswer: "Pokémon",
        category: "games"
    },

    // ==========================================
    // 4. GENERALS (20 Questions)
    // ==========================================
    {
        id: 61,
        question: "Which river is recognized as the longest in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River",
        category: "generals"
    },
    {
        id: 62,
        question: "Which chemical element is represented by the letter 'O' on the periodic table?",
        options: ["Gold", "Oxygen", "Iron", "Hydrogen"],
        correctAnswer: "Oxygen",
        category: "generals"
    },
    {
        id: 63,
        question: "What is the largest continent on Earth by land area and population?",
        options: ["Africa", "Europe", "Asia", "North America"],
        correctAnswer: "Asia",
        category: "generals"
    },
    {
        id: 64,
        question: "How many planets are in our Solar System?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8",
        category: "generals"
    },
    {
        id: 65,
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo",
        category: "generals"
    },
    {
        id: 66,
        question: "What is the fastest land animal in the world?",
        options: ["Lion", "Cheetah", "Gazelle", "Leopard"],
        correctAnswer: "Cheetah",
        category: "generals"
    },
    {
        id: 67,
        question: "Which country is currently the most populous in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: "India",
        category: "generals"
    },
    {
        id: 68,
        question: "Which gas makes up the largest percentage of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: "Nitrogen",
        category: "generals"
    },
    {
        id: 69,
        question: "What is the official currency used across most European Union member states?",
        options: ["Dollar", "Pound Sterling", "Euro", "Franc"],
        correctAnswer: "Euro",
        category: "generals"
    },
    {
        id: 70,
        question: "What is the largest organ of the human body?",
        options: ["Liver", "Skin", "Lungs", "Brain"],
        correctAnswer: "Skin",
        category: "generals"
    },
    {
        id: 71,
        question: "At sea level, what is the boiling point of water in Celsius?",
        options: ["50°C", "90°C", "100°C", "120°C"],
        correctAnswer: "100°C",
        category: "generals"
    },
    {
        id: 72,
        question: "Which of Earth's oceans is the largest by surface area?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
        category: "generals"
    },
    {
        id: 73,
        question: "Which physicist formulated the Theory of General Relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
        category: "generals"
    },
    {
        id: 74,
        question: "What is the hardest natural substance found on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: "Diamond",
        category: "generals"
    },
    {
        id: 75,
        question: "Which planet in our solar system is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        category: "generals"
    },
    {
        id: 76,
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        category: "generals"
    },
    {
        id: 77,
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Brazil", "Australia", "Thailand", "Mexico"],
        correctAnswer: "Australia",
        category: "generals"
    },
    {
        id: 78,
        question: "What is the main chemical component of marble and chalk?",
        options: ["Calcium Carbonate", "Sodium Chloride", "Silicon Dioxide", "Magnesium Oxide"],
        correctAnswer: "Calcium Carbonate",
        category: "generals"
    },
    {
        id: 79,
        question: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        correctAnswer: "Barometer",
        category: "generals"
    },
    {
        id: 80,
        question: "How many bones are there in an adult human body?",
        options: ["180", "206", "250", "300"],
        correctAnswer: "206",
        category: "generals"
    }
];