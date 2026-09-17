import type { Question } from '../features/quiz/quizSlice';

export const questionsData: Question[] = [
    // ==========================================
    // 1. PROGRAMMING (13 Questions)
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

    // ==========================================
    // 2. HISTORY (12 Questions)
    // ==========================================
    {
        id: 14,
        question: "In which year did World War II end?",
        options: ["1939", "1945", "1918", "1950"],
        correctAnswer: "1945",
        category: "history"
    },
    {
        id: 15,
        question: "Which Pharaoh commissioned the Great Pyramid of Giza?",
        options: ["Khafre", "Khufu", "Menkaure", "Ramses II"],
        correctAnswer: "Khufu",
        category: "history"
    },
    {
        id: 16,
        question: "Which city served as the capital of the Byzantine Empire?",
        options: ["Athens", "Constantinople", "Rome", "Alexandria"],
        correctAnswer: "Constantinople",
        category: "history"
    },
    {
        id: 17,
        question: "Which military commander led the Muslim forces at the Battle of Hattin?",
        options: ["Khalid ibn al-Walid", "Saladin", "Tariq ibn Ziyad", "Qutuz"],
        correctAnswer: "Saladin",
        category: "history"
    },
    {
        id: 18,
        question: "In which year did the French Revolution begin?",
        options: ["1789", "1815", "1776", "1848"],
        correctAnswer: "1789",
        category: "history"
    },
    {
        id: 19,
        question: "Which ancient civilization initiated the construction of the Great Wall of China?",
        options: ["Mongol Empire", "Chinese Dynasties", "Japanese Empire", "Persian Empire"],
        correctAnswer: "Chinese Dynasties",
        category: "history"
    },
    {
        id: 20,
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Benjamin Franklin"],
        correctAnswer: "George Washington",
        category: "history"
    },
    {
        id: 21,
        question: "Which ancient civilization developed in the region between the Tigris and Euphrates rivers?",
        options: ["Egyptian", "Mesopotamian", "Greek", "Mayan"],
        correctAnswer: "Mesopotamian",
        category: "history"
    },
    {
        id: 22,
        question: "Which 1815 battle marked the final defeat of Napoleon Bonaparte?",
        options: ["Battle of Waterloo", "Battle of Tours", "Battle of Stalingrad", "Battle of Troy"],
        correctAnswer: "Battle of Waterloo",
        category: "history"
    },
    {
        id: 23,
        question: "Which famous 14th-century Moroccan explorer traveled extensively across Africa, Asia, and Europe?",
        options: ["Ibn Battuta", "Ibn Khaldun", "Al-Idrisi", "Ibn Majid"],
        correctAnswer: "Ibn Battuta",
        category: "history"
    },
    {
        id: 24,
        question: "Which modern nation state was historically known as Persia?",
        options: ["Turkey", "Iran", "Iraq", "Afghanistan"],
        correctAnswer: "Iran",
        category: "history"
    },
    {
        id: 25,
        question: "In which year did the Berlin Wall fall, leading to German reunification?",
        options: ["1989", "1991", "1975", "1980"],
        correctAnswer: "1989",
        category: "history"
    },

    // ==========================================
    // 3. GAMES (12 Questions)
    // ==========================================
    {
        id: 26,
        question: "What is the best-selling video game of all time?",
        options: ["GTA V", "Minecraft", "Tetris", "Super Mario Bros"],
        correctAnswer: "Minecraft",
        category: "games"
    },
    {
        id: 27,
        question: "What is the name of the main protagonist in 'The Legend of Zelda' series?",
        options: ["Zelda", "Link", "Ganon", "Mario"],
        correctAnswer: "Link",
        category: "games"
    },
    {
        id: 28,
        question: "Which gaming console brand was created and produced by Sony?",
        options: ["Xbox", "Nintendo", "PlayStation", "Sega"],
        correctAnswer: "PlayStation",
        category: "games"
    },
    {
        id: 29,
        question: "In Pac-Man, what entities pursue the player through the maze?",
        options: ["Monsters", "Demons", "Ghosts", "Cars"],
        correctAnswer: "Ghosts",
        category: "games"
    },
    {
        id: 30,
        question: "Which game engine was developed and published by Epic Games?",
        options: ["Unity", "Unreal Engine", "Godot", "CryEngine"],
        correctAnswer: "Unreal Engine",
        category: "games"
    },
    {
        id: 31,
        question: "What is the primary world setting for the events of 'The Witcher 3'?",
        options: ["Tamriel", "The Continent", "Hyrule", "Azeroth"],
        correctAnswer: "The Continent",
        category: "games"
    },
    {
        id: 32,
        question: "Which Battle Royale game features building mechanics and pop-culture emotes?",
        options: ["PUBG", "Apex Legends", "Fortnite", "Call of Duty: Warzone"],
        correctAnswer: "Fortnite",
        category: "games"
    },
    {
        id: 33,
        question: "Who is the protagonist of the 'Uncharted' action-adventure game series?",
        options: ["Lara Croft", "Nathan Drake", "Arthur Morgan", "Joel Miller"],
        correctAnswer: "Nathan Drake",
        category: "games"
    },
    {
        id: 34,
        question: "In 'Dark Souls', which item is used to replenish health (HP)?",
        options: ["Estus Flask", "Health Potion", "First Aid Kit", "Elixir"],
        correctAnswer: "Estus Flask",
        category: "games"
    },
    {
        id: 35,
        question: "What was Nintendo's first international 8-bit home console?",
        options: ["Super Nintendo", "NES (Nintendo Entertainment System)", "Nintendo 64", "Game Boy"],
        correctAnswer: "NES (Nintendo Entertainment System)",
        category: "games"
    },
    {
        id: 36,
        question: "What is the name of Nintendo's flagship Italian plumber mascot?",
        options: ["Luigi", "Mario", "Wario", "Toad"],
        correctAnswer: "Mario",
        category: "games"
    },
    {
        id: 37,
        question: "Which game won the official 'Game of the Year' (GOTY) award in 2022?",
        options: ["God of War Ragnarök", "Elden Ring", "Horizon Forbidden West", "Stray"],
        correctAnswer: "Elden Ring",
        category: "games"
    },

    // ==========================================
    // 4. GENERALS (13 Questions)
    // ==========================================
    {
        id: 38,
        question: "Which river is recognized as the longest in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River",
        category: "generals"
    },
    {
        id: 39,
        question: "Which chemical element is represented by the letter 'O' on the periodic table?",
        options: ["Gold", "Oxygen", "Iron", "Hydrogen"],
        correctAnswer: "Oxygen",
        category: "generals"
    },
    {
        id: 40,
        question: "What is the largest continent on Earth by land area and population?",
        options: ["Africa", "Europe", "Asia", "North America"],
        correctAnswer: "Asia",
        category: "generals"
    },
    {
        id: 41,
        question: "How many planets are in our Solar System?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8",
        category: "generals"
    },
    {
        id: 42,
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo",
        category: "generals"
    },
    {
        id: 43,
        question: "What is the fastest land animal in the world?",
        options: ["Lion", "Cheetah", "Gazelle", "Leopard"],
        correctAnswer: "Cheetah",
        category: "generals"
    },
    {
        id: 44,
        question: "Which country is currently the most populous in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: "India",
        category: "generals"
    },
    {
        id: 45,
        question: "Which gas makes up the largest percentage of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: "Nitrogen",
        category: "generals"
    },
    {
        id: 46,
        question: "What is the official currency used across most European Union member states?",
        options: ["Dollar", "Pound Sterling", "Euro", "Franc"],
        correctAnswer: "Euro",
        category: "generals"
    },
    {
        id: 47,
        question: "What is the largest organ of the human body?",
        options: ["Liver", "Skin", "Lungs", "Brain"],
        correctAnswer: "Skin",
        category: "generals"
    },
    {
        id: 48,
        question: "At sea level, what is the boiling point of water in Celsius?",
        options: ["50°C", "90°C", "100°C", "120°C"],
        correctAnswer: "100°C",
        category: "generals"
    },
    {
        id: 49,
        question: "Which of Earth's oceans is the largest by surface area?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
        category: "generals"
    },
    {
        id: 50,
        question: "Which physicist formulated the Theory of General Relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
        category: "generals"
    }
];