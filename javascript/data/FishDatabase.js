/**
 * Справочник (база данных) видов рыбы для игры "Русская Рыбалка 1.6"
 */
const FishDatabase = {
    beloglazka: {
        id: 'beloglazka',
        name: 'Белоглазка',
        minWeight: 50,      // в граммах
        maxWeight: 1000,    // в граммах
        evalWeight: 400,    // Вес для оценки (гр)
        pricePer100g: 50,   // Цена за 100 г ($)
        expPer50g: 2000,    // Опыт за 50 г
        minDepth: 400,      // Мин. глубина (см)
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['moth', 'bread'],
        otherBaits: ['worm', 'semolina', 'dough'],
        activity: { day: 'low', night: 'high' },
        habitats: ['Волга 11 лока', 'Северский Донец 5, 8 лока']
    },

    beluga: {
        id: 'beluga',
        name: 'Белуга',
        minWeight: 30000,   // 30 кг в граммах
        maxWeight: 700000,  // 700 кг в граммах
        evalWeight: 30000,  // Оценивается с 30 кг
        pricePer1kg: 30,    // Цена за 1 кг
        expPer1kg: 445,     // Опыт за 1 кг
        minDepth: 400,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['mollusk'],
        otherBaits: ['live_bait'],
        isPredator: true,   // Хищник. 
        activity: { day: 'high', night: 'low' },
        habitats: ['Ахтуба 2 лока', 'Волга 1 лока', 'Станица Вешенская 5 лока']
    },

    bely_amur: {
        id: 'bely_amur',
        name: 'Белый Амур',
        minWeight: 500,     // 0.5 кг в граммах
        maxWeight: 40000,   // 40 кг в граммах
        evalWeight: 7000,   // Оценивается с 7 кг
        pricePer1kg: 60,    // Цена за 1 кг
        expPer500g: 250,    // Опыт за 500 г
        minDepth: 150,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['greens'],
        otherBaits: ['corn', 'peas', 'worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Ахтуба 1 лока', 'Рыбхоз 3 лока', 'Волга 10 лока']
    },

    bersh: {
        id: 'bersh',
        name: 'Берш',
        minWeight: 250,     // грамм
        maxWeight: 2000,    // грамм (2 кг)
        evalWeight: 800,    // Оценивается с 800 гр
        pricePer100g: 25,   // Цена за 100 г
        expPer100g: 1110,   // Опыт за 100 г
        minDepth: 100,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['live_bait'],
        otherBaits: ['wobbler', 'spinner', 'twister', 'worm'],
        isPredator: true,
        activity: { day: 'high', night: 'low' },
        habitats: ['Ахтуба 5, 7 лока', 'Волга 5 лока']
    },

    bychok: {
        id: 'bychok',
        name: 'Бычок',
        minWeight: 10,      // грамм
        maxWeight: 200,     // грамм
        evalWeight: 0,      // Оценивается сразу
        pricePer50g: 3,     // Цена за 50 г
        expPer10g: 150,     // Опыт за 10 г
        minDepth: 30,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['worm', 'moth'],
        otherBaits: ['maggot', 'caviar', 'mollusk', 'corn', 'semolina', 'dough'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Ахтуба 8, 3, 7 лока']
    },

    karas: {
        id: 'karas',
        name: 'Карась',
        minWeight: 100,
        maxWeight: 4500,
        evalWeight: 1800,
        pricePer100g: 10,
        expPer100g: 110,
        minDepth: 30,
        maxDepth: 800,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['semolina'],
        otherBaits: ['potato', 'dough', 'maggot', 'worm', 'bread', 'moth'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Северский Донец 10, 11 лока', 'Станица Вешенская 8 лока']
    },

    karas_zolotoy: {
        id: 'karas_zolotoy',
        name: 'Карась золотой',
        minWeight: 100,
        maxWeight: 4000,
        evalWeight: 1200,
        pricePer100g: 15,
        expPer100g: 165,
        minDepth: 100,
        maxDepth: 700,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['bread'],
        otherBaits: ['potato', 'maggot', 'worm', 'semolina', 'dough', 'moth'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Северский Донец 11 лока', 'Рыбхоз 1 лока', 'Приток Донца 5 лока']
    },

    karp: {
        id: 'karp',
        name: 'Карп',
        minWeight: 400,
        maxWeight: 35000,
        evalWeight: 8500,
        pricePer500g: 30,
        expPer500g: 240,
        minDepth: 150,
        maxDepth: 900,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['corn'],
        otherBaits: ['potato', 'cheese_cube', 'semolina', 'dough', 'worm', 'bread'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Рыбхоз 1 лока', 'Приток Донца 4 лока', 'Подкаменная Тунгуска 8 лока']
    },

    karp_goly: {
        id: 'karp_goly',
        name: 'Карп голый',
        minWeight: 400,
        maxWeight: 30000,
        evalWeight: 8000,
        pricePer500g: 60,
        expPer500g: 830,
        minDepth: 150,
        maxDepth: 900,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['corn'],
        otherBaits: ['potato', 'cheese_cube', 'semolina', 'dough', 'worm', 'bread'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Дон 10 лока']
    },

    karp_zerkalny: {
        id: 'karp_zerkalny',
        name: 'Карп зеркальный',
        minWeight: 400,
        maxWeight: 30000,
        evalWeight: 8000,
        pricePer500g: 60,
        expPer500g: 1110,
        minDepth: 150,
        maxDepth: 900,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['corn', 'semolina'],
        otherBaits: ['potato', 'cheese_cube', 'dough', 'worm', 'bread'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Ахтуба 3 лока', 'Волга 3 лока']
    },

    kizhuch: {
        id: 'kizhuch',
        name: 'Кижуч',
        minWeight: 500,
        maxWeight: 14000,
        evalWeight: 3000,
        pricePer500g: 40,
        expPer500g: 7145,
        minDepth: 130,
        methods: ['spinning'],
        mainBait: ['champ_med_koleb'],
        otherBaits: ['spoon_big_med_koleb', 'vobler_big_med', 'spinner_all', 'twister_all'],
        isPredator: true,
        activity: { day: 'high', night: 'none' },
        habitats: ['Дон 9 лока']
    },

    kolyushka: {
        id: 'kolyushka',
        name: 'Колюшка',
        minWeight: 20,
        maxWeight: 200,
        evalWeight: 150,
        pricePer50g: 20,
        expPer10g: 625,
        minDepth: 160,
        maxDepth: 350,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['caviar'],
        otherBaits: ['moth', 'caddis', 'mayfly'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Верхняя Томь 6 лока', 'Подкаменная Тунгуска 10 лока']
    },

    kolyushka_devyatiiglaya: {
        id: 'kolyushka_devyatiiglaya',
        name: 'Колюшка девятииглая',
        minWeight: 20,
        maxWeight: 200,
        evalWeight: 150,
        pricePer50g: 20,
        expPer10g: 625,
        minDepth: 160,
        maxDepth: 350,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['caviar'],
        otherBaits: ['moth', 'caddis', 'mayfly'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Аган 1 лока']
    },

    koryushka: {
        id: 'koryushka',
        name: 'Корюшка',
        minWeight: 20,
        maxWeight: 200,
        evalWeight: 120,
        pricePer20g: 20,
        expPer10g: 780,
        minDepth: 500,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['bark_beetle_larva'],
        otherBaits: ['caviar', 'fish_pieces'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Подкаменная Тунгуска 4 лока']
    },

    krasnoperka: {
        id: 'krasnoperka',
        name: 'Красноперка',
        minWeight: 100,
        maxWeight: 2200,
        evalWeight: 500,
        pricePer100g: 25,
        expPer100g: 285,
        minDepth: 100,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['bark_beetle_larva'],
        otherBaits: ['moth', 'caddis', 'grasshopper', 'bread', 'worm'],
        groundbait: ['Отруби+геркулес+подс.масло', 'Манка+опарыш+подс.масло'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Пруд 2 локация', 'Ока 4, 2 локация']
    },

    lenok: {
        id: 'lenok',
        name: 'Ленок',
        minWeight: 400,
        maxWeight: 8000,
        evalWeight: 600,
        pricePer100g: 30,
        expPer200g: 520,
        minDepth: 100,
        maxDepth: 500,
        methods: ['spinning', 'fly', 'bottom', 'float'],
        mainBait: ['mayfly', 'spinner_med_fast'],
        otherBaits: ['worm', 'spoon_med_koleb', 'spinner_sredнее', 'caviar'],
        isPredator: true,
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 5 лока', 'Енисей 5 лока']
    },

    leshch: {
        id: 'leshch',
        name: 'Лещ',
        minWeight: 1000,
        maxWeight: 9000,
        evalWeight: 3500,
        pricePer1kg: 50,
        expPer200g: 715,
        minDepth: 400,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['peas'],
        otherBaits: ['semolina', 'worm', 'maggot', 'bread'],
        activity: { day: 'high', night: 'medium' },
        habitats: ['Северский Донец 8 лока', 'Ахтуба 2 лока', 'Ока 12 лока']
    },

    leshch_vostochnosibirskiy: {
        id: 'leshch_vostochnosibirskiy',
        name: 'Лещ Восточносибирский',
        minWeight: 200,
        maxWeight: 4000,
        evalWeight: 1800,
        pricePer200g: 35,
        expPer100g: 1250,
        minDepth: 400,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['bark_beetle_larva'],
        otherBaits: ['peas', 'semolina', 'worm', 'mollusk'],
        groundbait: ['Отруби/жмых + личинка короеда + конопля / анисовое масло'],
        isPredator: true,
        activity: { day: 'low', night: 'high' },
        habitats: ['Аган 4 лока', 'Нижняя Томь 3 лока', 'Подкаменная Тунгуска 8 лока']
    },

    lin: {
        id: 'lin',
        name: 'Линь',
        minWeight: 300,
        maxWeight: 8000,
        evalWeight: 3000,
        pricePer100g: 5,
        expPer200g: 415,
        minDepth: 150,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['crayfish_neck'],
        otherBaits: ['crab_meat', 'worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Кундрючья 3 лока', 'Волга 5, 9 лока']
    },

    muksun: {
        id: 'muksun',
        name: 'Муксун',
        minWeight: 400,
        maxWeight: 13000,
        evalWeight: 6000,
        pricePer500g: 50,
        expPer500g: 1925,
        minDepth: 250,
        maxDepth: 1000,
        methods: ['float_midwater', 'fly', 'bottom'],
        mainBait: ['mayfly'],
        otherBaits: ['mollusk'],
        isPredator: true,
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 10 лока', 'Енисей 8 лока']
    },

    nalim: {
        id: 'nalim',
        name: 'Налим',
        minWeight: 500,
        maxWeight: 16000,
        evalWeight: 6500,
        pricePer1kg: 50,
        expPer500g: 390,
        minDepth: 300,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['live_bait'],
        otherBaits: ['frog', 'meat_pieces', 'worm'],
        isPredator: true,
        activity: { day: 'low', night: 'high' },
        habitats: ['Нижняя Томь 4 лока', 'Енисей 12 лока', 'Подкаменная Тунгуска 8 лока']
    },

    nelma: {
        id: 'nelma',
        name: 'Нельма',
        minWeight: 500,
        maxWeight: 50000,
        evalWeight: 10000,
        pricePer500g: 30,
        expPer500g: 1250,
        minDepth: 250,
        methods: ['bottom', 'spinning', 'float_midwater', 'fly', 'float'],
        mainBait: ['live_bait', 'spinner_big_vert'],
        otherBaits: ['spoon_all_koleb', 'vobler_all', 'spinner_med_vert', 'twister_all', 'frog', 'meat_pieces'],
        isPredator: true,
        activity: { day: 'high', night: 'none' },
        habitats: ['Енисей 5 лока', 'Подкаменная Тунгуска 8 лока', 'Подкаменная Тунгуска 10 лока']
    },

    ozernaya_forel: {
        id: 'ozernaya_forel',
        name: 'Озерная форель',
        minWeight: 200,
        maxWeight: 7000,
        evalWeight: 3000,
        pricePer100g: 15,
        expPer200g: 475,
        minDepth: 50,
        methods: ['spinning', 'fly', 'float'],
        mainBait: ['mouse_spinner_med', 'spinner_med_vert'],
        otherBaits: ['mouse_spinner_small', 'live_bait', 'spoon_med_koleb', 'grasshopper', 'caviar', 'beetle'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Волга 6 лока', 'Ахтуба 6 лока']
    },

    okun: {
        id: 'okun',
        name: 'Окунь',
        minWeight: 50,
        maxWeight: 3500,
        evalWeight: 1000,
        pricePer100g: 7,
        expPer100g: 165,
        minDepth: 60,
        methods: ['spinning', 'bottom', 'fly', 'float'],
        mainBait: ['spinner_med_vert', 'spoon_med_koleb', 'twister_med'],
        otherBaits: ['worm', 'grasshopper', 'spinner_big_sred_vert', 'twister_small_big', 'spoon_sred_mal_koleb'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 6 лока', 'Уча 11 лока', 'Енисей 10 лока']
    },

    omul: {
        id: 'omul',
        name: 'Омуль',
        minWeight: 100,
        maxWeight: 2000,
        evalWeight: 900,
        pricePer100g: 30,
        expPer100g: 280,
        minDepth: 150,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['caddis'],
        otherBaits: ['live_bait', 'small_spinner', 'small_koleb', 'vobler_small', 'twister_small', 'fish_pieces', 'caviar', 'bark_beetle_larva'],
        isPredator: true,
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 6 лока', 'Енисей 6 лока']
    },

    omul_baykalskiy: {
        id: 'omul_baykalskiy',
        name: 'Омуль Байкальский',
        minWeight: 100,
        maxWeight: 2000,
        evalWeight: 700,
        pricePer100g: 80,
        expPer100g: 280,
        minDepth: 150,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['caddis'],
        otherBaits: ['live_bait', 'small_spinner', 'small_koleb', 'vobler_small', 'twister_small', 'fish_pieces', 'caviar', 'bark_beetle_larva'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 7 лока', 'Нижняя Томь 6 лока']
    },

    osetr: {
        id: 'osetr',
        name: 'Осётр',
        minWeight: 5000,
        maxWeight: 120000,
        evalWeight: 10000,
        pricePer1kg: 30,
        expPer1kg: 385,
        minDepth: 350,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['mollusk'],
        otherBaits: [],
        activity: { day: 'high', night: 'low' },
        habitats: ['Волга 8 лока', 'Ахтуба 5, 8 лока']
    },

    osetr_vostochnosibirskiy: {
        id: 'osetr_vostochnosibirskiy',
        name: 'Осётр Восточносибирский',
        minWeight: 5000,
        maxWeight: 120000,
        evalWeight: 10000,
        pricePer1kg: 50,
        expPer1kg: 1740,
        minDepth: 350,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['mollusk'],
        otherBaits: ['caddis', 'live_bait'],
        isPredator: true,
        activity: { day: 'high', night: 'low' },
        habitats: ['Енисей 7, 8 лока', 'Подкаменная Тунгуска 8 лока']
    },

    pelyad: {
        id: 'pelyad',
        name: 'Пелядь',
        minWeight: 200,
        maxWeight: 3000,
        evalWeight: 1300,
        pricePer100g: 20,
        expPer100g: 615,
        minDepth: 450,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['crayfish_neck'],
        otherBaits: ['live_bait', 'fish_pieces', 'bark_beetle_larva', 'caddis', 'caviar'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 8 лока', 'Аган 4, 5 лока']
    },

    peskar: {
        id: 'peskar',
        name: 'Пескарь',
        minWeight: 20,
        maxWeight: 100,
        evalWeight: 100,
        pricePer50g: 10,
        expPer5g: 155,
        minDepth: 40,
        maxDepth: 150,
        methods: ['bottom', 'float_midwater', 'fly'],
        mainBait: ['moth'],
        otherBaits: ['maggot', 'worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Кундрючья 5 лока', 'Быстрая 4 лока', 'Уча 5 лока']
    },

    plotva: {
        id: 'plotva',
        name: 'Плотва',
        minWeight: 100,
        maxWeight: 2000,
        evalWeight: 400,
        pricePer100g: 10,
        expPer100g: 285,
        minDepth: 100,
        maxDepth: 400,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['dough', 'moth', 'bread'],
        otherBaits: ['worm', 'hercules', 'semolina', 'maggot', 'grasshopper', 'caddis', 'bark_beetle_larva'],
        groundbait: ['отруби'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Енисей 13 лока', 'Подкаменная Тунгуска 3 лока', 'Уча 9 лока']
    },

    podleshchik: {
        id: 'podleshchik',
        name: 'Подлещик',
        minWeight: 100,
        maxWeight: 1000,
        evalWeight: 600,
        pricePer100g: 50,
        expPer50g: 285,
        minDepth: 150,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['cheese_cube', 'peas'],
        otherBaits: ['semolina', 'worm', 'maggot', 'bread'],
        activity: { day: 'high', night: 'medium' },
        habitats: ['Дон 8 лока', 'Северский Донец 7, 8 лока']
    },

    podust: {
        id: 'podust',
        name: 'Подуст',
        minWeight: 100,
        maxWeight: 1500,
        evalWeight: 700,
        pricePer100g: 50,
        expPer100g: 3335,
        minDepth: 250,
        maxDepth: 400,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['moth'],
        otherBaits: ['worm', 'corn', 'barley'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Быстрая 3, 5 лока', 'Волга 2 лока']
    },

    pokryshka: {
        id: 'pokryshka',
        name: 'Покрышка',
        minWeight: 4500,
        maxWeight: 45000,
        evalWeight: 20000,
        pricePer1kg: 5,
        expPer500g: 25,
        methods: ['bottom', 'spinning'],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'high', night: 'high' },
        habitats: ['Пруд 11 лока', 'Ахтуба 7 лока', 'Ахтуба 3 лока']
    },

    puzanok: {
        id: 'puzanok',
        name: 'Пузанок',
        minWeight: 20,
        maxWeight: 100,
        evalWeight: 70,
        pricePer10g: 2,
        expPer5g: 3335,
        minDepth: 20,
        maxDepth: 150,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['bread', 'fly'],
        otherBaits: ['moth'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Приток Донца 4 лока']
    },

    pizhyan: {
        id: 'pizhyan',
        name: 'Пыжьян',
        minWeight: 200,
        maxWeight: 5000,
        evalWeight: 2000,
        pricePer100g: 300,
        expPer200g: 1000,
        minDepth: 450,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['hironomida'],
        otherBaits: ['mollusk', 'beetle', 'fly'],
        isPredator: true,
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 3 лока']
    },

    raduzhnaya_forel: {
        id: 'raduzhnaya_forel',
        name: 'Радужная форель',
        minWeight: 200,
        maxWeight: 5000,
        evalWeight: 2000,
        pricePer100g: 15,
        expPer200g: 665,
        minDepth: 50,
        methods: ['spinning', 'bottom', 'fly', 'float'],
        mainBait: ['spoon_med_koleb_fast'],
        otherBaits: ['mouse_spinner_med_small', 'fly', 'grasshopper', 'caviar'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Подкаменная Тунгуска 9, 7, 5 лока']
    },

    rak: {
        id: 'rak',
        name: 'Рак',
        minWeight: 20,
        maxWeight: 500,
        evalWeight: 300,
        pricePer50g: 3,
        expPer10g: 80,
        minDepth: 30,
        maxDepth: 500,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['worm', 'moth'],
        otherBaits: ['maggot', 'mollusk'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Пахра 3 лока', 'Уча 10 лока', 'Приток Донца 11 лока']
    },

    rogatka: {
        id: 'rogatka',
        name: 'Рогатка',
        minWeight: 20,
        maxWeight: 100,
        evalWeight: 30,
        pricePer10g: 5,
        expPer5g: 315,
        minDepth: 30,
        maxDepth: 600,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['worm', 'moth'],
        otherBaits: ['maggot', 'mollusk'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Верхняя Томь 2, 4, 5 лока']
    },

    rotan: {
        id: 'rotan',
        name: 'Ротан',
        minWeight: 20,
        maxWeight: 200,
        evalWeight: 0,
        pricePer50g: 3,
        expPer10g: 100,
        minDepth: 30,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['worm', 'moth'],
        otherBaits: ['maggot', 'mollusk'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Река Москва 4 лока', 'Каширка 6 лока', 'Северский Донец 1 лока']
    },

    ruchevaya_forel: {
        id: 'ruchevaya_forel',
        name: 'Ручьевая форель',
        minWeight: 200,
        maxWeight: 2000,
        evalWeight: 800,
        pricePer100g: 15,
        expPer100g: 830,
        minDepth: 50,
        methods: ['fly', 'spinning', 'bottom', 'float'],
        mainBait: ['fly', 'spoon_med_koleb_fast', 'grasshopper'],
        otherBaits: ['worm', 'caviar'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Верхняя Томь 1, 4, 5 лока']
    },

    rybec: {
        id: 'rybec',
        name: 'Рыбец',
        minWeight: 100,
        maxWeight: 1000,
        evalWeight: 500,
        pricePer100g: 50,
        expPer50g: 1000,
        minDepth: 250,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['mayfly'],
        otherBaits: ['worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Приток Донца 6 лока', 'Северский Донец 8 лока', 'Ахтуба 4 лока']
    },

    ryapushka: {
        id: 'ryapushka',
        name: 'Ряпушка',
        minWeight: 40,
        maxWeight: 1200,
        evalWeight: 150,
        pricePer50g: 10,
        expPer10g: 155,
        minDepth: 100,
        maxDepth: 500,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['caviar'],
        otherBaits: [],
        activity: { day: 'high', night: 'none' },
        habitats: ['Верхняя Томь 3, 7 лока', 'Нижняя Томь 4 лока']
    },

    sazan: {
        id: 'sazan',
        name: 'Сазан',
        minWeight: 500,
        maxWeight: 480000,
        evalWeight: 7000,
        pricePer500g: 20,
        expPer500g: 210,
        minDepth: 200,
        methods: ['bottom', 'float_midwater', 'fly'],
        mainBait: ['corn'],
        otherBaits: ['potato', 'hercules', 'dough', 'peas', 'barley', 'worm', 'mollusk', 'cheese_cube'],
        activity: { day: 'medium', night: 'high' },
        habitats: ['Рыбхоз 2 лока', 'Ахтуба 4, 6 лока']
    },

    sevanskaya_forel: {
        id: 'sevanskaya_forel',
        name: 'Севанская форель',
        minWeight: 200,
        maxWeight: 2000,
        evalWeight: 600,
        pricePer100g: 30,
        expPer100g: 1110,
        minDepth: 100,
        maxDepth: 500,
        methods: ['fly', 'spinning', 'bottom', 'float'],
        mainBait: ['fly', 'grasshopper', 'spoon_med_koleb_fast'],
        otherBaits: ['worm', 'caviar'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Верхняя Томь 1, 2 лока', 'Рыбхоз 3 лока']
    },

    sevryuga: {
        id: 'sevryuga',
        name: 'Севрюга',
        minWeight: 4000,
        maxWeight: 50000,
        evalWeight: 10000,
        pricePer1kg: 50,
        expPer500g: 1040,
        minDepth: 400,
        methods: ['float_midwater', 'fly', 'bottom'],
        mainBait: ['mollusk'],
        otherBaits: [],
        activity: { day: 'high', night: 'low' },
        habitats: ['Волга 8, 3 лока', 'Ахтуба 7 лока']
    },

    sinec: {
        id: 'sinec',
        name: 'Синец',
        minWeight: 80,
        maxWeight: 600,
        evalWeight: 350,
        pricePer100g: 70,
        expPer50g: 3335,
        minDepth: 450,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['worm'],
        otherBaits: ['moth', 'bread', 'semolina', 'dough'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Волга 1 лока', 'Северский Донец 8 лока', 'Станица Вешенская 2 лока']
    },

    som: {
        id: 'som',
        name: 'Сом обыкновенный',
        minWeight: 2000,
        maxWeight: 400000,
        evalWeight: 5000,
        pricePer1kg: 20,
        expPer1kg: 125,
        minDepth: 400,
        methods: ['bottom', 'spinning', 'fly', 'float'],
        mainBait: ['meat_pieces'],
        otherBaits: ['frog', 'mollusk', 'vobler_med_big', 'spoon_big_koleb'],
        activity: { day: 'low', night: 'high' },
        habitats: ['Река Москва 6 лока', 'Ока 9 лока', 'Ахтуба 9 лока']
    },

    som_amurskiy: {
        id: 'som_amurskiy',
        name: 'Сом Амурский',
        minWeight: 1000,
        maxWeight: 200000,
        evalWeight: 5000,
        pricePer1kg: 20,
        expPer1kg: 250,
        minDepth: 400,
        methods: ['bottom', 'spinning', 'fly', 'float'],
        mainBait: ['fish_pieces'],
        otherBaits: ['meat_pieces', 'mollusk', 'vobler_med_big', 'spoon_big_koleb'],
        activity: { day: 'low', night: 'high' },
        habitats: ['Подкаменная Тунгуска 3 лока']
    },

    sterlyad: {
        id: 'sterlyad',
        name: 'Стерлядь',
        minWeight: 500,
        maxWeight: 16000,
        evalWeight: 6000,
        pricePer1kg: 30,
        expPer500g: 1565,
        minDepth: 300,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['bark_beetle_larva'],
        otherBaits: ['maggot'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Река Москва 6 лока', 'Волга 11 лока', 'Ахтуба 6 лока']
    },

    sterlyad_sibirskaya: {
        id: 'sterlyad_sibirskaya',
        name: 'Стерлядь Сибирская',
        minWeight: 500,
        maxWeight: 13000,
        evalWeight: 6000,
        pricePer1kg: 40,
        expPer500g: 1925,
        minDepth: 450,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['bark_beetle_larva'],
        otherBaits: ['maggot', 'mollusk', 'caviar'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Енисей 8, 10, 11 лока']
    },

    sudak: {
        id: 'sudak',
        name: 'Судак',
        minWeight: 400,
        maxWeight: 20000,
        evalWeight: 5000,
        pricePer1kg: 40,
        expPer500g: 415,
        minDepth: 200,
        maxDepth: 700,
        methods: ['bottom', 'spinning', 'fly', 'float'],
        mainBait: ['live_bait'],
        otherBaits: ['vobler_all', 'spoon_all_koleb', 'spinner_all_vert', 'twister_all', 'worm'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Река Москва 1 лока', 'Дон 5 лока', 'Ока 1 лока']
    },

    taymen: {
        id: 'taymen',
        name: 'Таймень',
        minWeight: 0,
        maxWeight: 80000,
        evalWeight: 20000,
        pricePer500g: 18,
        expPer1kg: 625,
        minDepth: 55,
        methods: ['bottom', 'fly', 'float', 'spinning'],
        mainBait: ['live_bait', 'mouse_spinner_big'],
        otherBaits: ['spoon_all_koleb', 'spinner_all_vert', 'vobler_all', 'twister_all', 'frog', 'fish_pieces', 'mouse_spinner_med_small'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Енисей 5, 3 лока', 'Подкаменная Тунгуска 5 лока']
    },

    taran: {
        id: 'taran',
        name: 'Тарань',
        minWeight: 50,
        maxWeight: 1000,
        evalWeight: 400,
        pricePer100g: 30,
        expPer50g: 250,
        minDepth: 100,
        maxDepth: 300,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['caddis'],
        otherBaits: ['moth', 'worm', 'maggot'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Кундрючья 2 лока', 'Станица Вешенская 6, 2 лока']
    },

    tolstolobik: {
        id: 'tolstolobik',
        name: 'Толстолобик',
        minWeight: 500,
        maxWeight: 35000,
        evalWeight: 5000,
        pricePer1kg: 60,
        expPer500g: 240,
        minDepth: 150,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['greens'],
        otherBaits: ['peas', 'corn', 'worm'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Рыбхоз 3 лока', 'Ахтуба 1, 3 лока']
    },

    tugun: {
        id: 'tugun',
        name: 'Тугун',
        minWeight: 20,
        maxWeight: 110,
        evalWeight: 30,
        pricePer10g: 5,
        expPer5g: 4165,
        minDepth: 300,
        methods: ['float_midwater', 'fly', 'bottom'],
        mainBait: ['hironomida'],
        otherBaits: ['mayfly'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 8, 2 лока', 'Енисей 2 лока']
    },

    tuphlya: {
        id: 'tuphlya',
        name: 'Туфля',
        minWeight: 0,
        maxWeight: 10000,
        evalWeight: 0,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    ugor: {
        id: 'ugor',
        name: 'Угорь',
        minWeight: 400,
        maxWeight: 9000,
        evalWeight: 3800,
        pricePer500g: 60,
        expPer200g: 2220,
        minDepth: 160,
        maxDepth: 350,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['caviar'],
        otherBaits: ['live_bait', 'crayfish_neck', 'meat_pieces', 'mollusk'],
        activity: { day: 'low', night: 'high' },
        habitats: ['Волга 2, 11 лока', 'Ахтуба 4 лока']
    },

    ukleyka: {
        id: 'ukleyka',
        name: 'Уклейка',
        minWeight: 20,
        maxWeight: 200,
        evalWeight: 70,
        pricePer10g: 2,
        expPer100g: 110,
        minDepth: 20,
        maxDepth: 150,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['fly', 'bread'],
        otherBaits: ['moth'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Пахра 5 лока', 'Кундрючья 5 лока', 'Уча 3 лока']
    },

    usach: {
        id: 'usach',
        name: 'Усач',
        minWeight: 500,
        maxWeight: 12000,
        evalWeight: 3500,
        pricePer500g: 28,
        expPer500g: 4165,
        minDepth: 100,
        maxDepth: 400,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['worm'],
        otherBaits: ['maggot', 'mollusk'],
        activity: { day: 'low', night: 'high' },
        habitats: ['Волга 5 лока', 'Ахтуба 5 лока', 'Станица Вешенская 3 лока']
    },

    kharius: {
        id: 'kharius',
        name: 'Хариус',
        minWeight: 200,
        maxWeight: 2200,
        evalWeight: 1500,
        pricePer300g: 50,
        expPer100g: 1000,
        minDepth: 80,
        methods: ['spinning', 'fly', 'bottom', 'float'],
        mainBait: ['spinner_med_vert_fast'],
        otherBaits: ['live_bait', 'vobler_all', 'spoon_all_koleb', 'spinner_all_vert', 'twister_all', 'worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Нижняя Томь 9 лока', 'Верхняя Томь 9, 7 лока']
    },

    kharius_sibirskiy: {
        id: 'kharius_sibirskiy',
        name: 'Хариус Сибирский',
        minWeight: 200,
        maxWeight: 1200,
        evalWeight: 600,
        pricePer100g: 40,
        expPer50g: 1000,
        minDepth: 80,
        methods: ['spinning', 'fly', 'bottom', 'float'],
        mainBait: ['spinner_med_vert_fast'],
        otherBaits: ['live_bait', 'vobler_all', 'spoon_all_koleb', 'spinner_all_vert', 'twister_all', 'worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Подкаменная Тунгуска 1 лока', 'Нижняя Томь 9 лока', 'Верхняя Томь 6 лока']
    },

    chebak: {
        id: 'chebak',
        name: 'Чебак',
        minWeight: 50,
        maxWeight: 650,
        evalWeight: 300,
        pricePer100g: 150,
        expPer50g: 1040,
        minDepth: 50,
        methods: ['float_midwater', 'fly', 'bottom'],
        mainBait: ['caddis'],
        otherBaits: ['greens', 'worm', 'moth'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Ахтуба 8 лока', 'Волга 3, 6 лока']
    },

    cherniy_amur: {
        id: 'cherniy_amur',
        name: 'Черный Амур',
        minWeight: 500,
        maxWeight: 26000,
        evalWeight: 3000,
        pricePer1kg: 100,
        expPer500g: 830,
        minDepth: 220,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['mollusk'],
        otherBaits: ['worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Волга 9 лока', 'Ахтуба 9 лока', 'Рыбхоз 3 лока']
    },

    chekhon: {
        id: 'chekhon',
        name: 'Чехонь',
        minWeight: 150,
        maxWeight: 1500,
        evalWeight: 700,
        pricePer100g: 20,
        expPer100g: 1330,
        minDepth: 150,
        methods: ['float_midwater', 'fly', 'bottom'],
        mainBait: ['fly', 'grasshopper'],
        otherBaits: ['beetle', 'maggot', 'worm'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Северский Донец 3 лока', 'Волга 1, 4 лока']
    },

    chir: {
        id: 'chir',
        name: 'Чир',
        minWeight: 400,
        maxWeight: 11000,
        evalWeight: 6000,
        pricePer500g: 40,
        expPer500g: 760,
        minDepth: 250,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['crayfish_neck'],
        otherBaits: ['caddis', 'mayfly', 'mollusk', 'crab_meat'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Аган 3 лока', 'Подкаменная Тунгуска 4 лока', 'Енисей 7 лока']
    },

    shemaya: {
        id: 'shemaya',
        name: 'Шемая',
        minWeight: 30,
        maxWeight: 300,
        evalWeight: 120,
        pricePer50g: 25,
        expPer10g: 1665,
        minDepth: 10,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['fly', 'grasshopper'],
        otherBaits: ['moth', 'beetle'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Приток Донца 2, 3 лока', 'Дон 9 лока']
    },

    ship: {
        id: 'ship',
        name: 'Шип',
        minWeight: 5000,
        maxWeight: 135000,
        evalWeight: 10000,
        pricePer1kg: 30,
        expPer1kg: 385,
        minDepth: 350,
        methods: ['bottom', 'fly', 'float'],
        mainBait: ['mollusk'],
        otherBaits: [],
        activity: { day: 'high', night: 'low' },
        habitats: ['Ахтуба 2 лока', 'Волга 11, 3 лока']
    },

    shchuka: {
        id: 'shchuka',
        name: 'Щука',
        minWeight: 500,
        maxWeight: 25000,
        evalWeight: 6000,
        pricePer500g: 15,
        expPer500g: 250,
        minDepth: 65,
        methods: ['bottom', 'spinning', 'fly', 'float'],
        mainBait: ['live_bait', 'spoon_big_koleb_fast_slow'],
        otherBaits: ['spoon_med_small_koleb', 'vobler_all', 'spinner_all_vert', 'twister_all', 'frog', 'fish_pieces'],
        activity: { day: 'high', night: 'low' },
        habitats: ['Подкаменная Тунгуска 2 лока', 'Енисей 6 лока', 'Ока 7 лока']
    },

    yaz: {
        id: 'yaz',
        name: 'Язь',
        minWeight: 200,
        maxWeight: 8000,
        evalWeight: 3000,
        pricePer100g: 10,
        expPer200g: 415,
        minDepth: 250,
        maxDepth: 500,
        methods: ['fly', 'bottom', 'float'],
        mainBait: ['beetle', 'grasshopper'],
        otherBaits: ['moth', 'worm', 'maggot', 'caddis', 'bark_beetle_larva', 'peas', 'bread', 'hercules', 'spoon_med_koleb'],
        activity: { day: 'high', night: 'none' },
        habitats: ['Аган 3 лока', 'Енисей 4 лока', 'Дон 7 лока']
    },

    bluegill_sunfish: {
        id: 'bluegill_sunfish',
        name: 'Bluegill Sunfish',
        nameRu: 'Синежаберный солнечник',
        maxWeight: 1500,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    catfish: {
        id: 'catfish',
        name: 'Catfish',
        nameRu: 'Кошачий сом (канальный сомик)',
        maxWeight: 4000,
        evalWeight: 7000,
        pricePer1kg: 20,
        methods: ['bottom'],
        mainBait: ['meat_pieces'],
        otherBaits: ['insects', 'fish_pieces', 'plants'],
        isPredator: true,
        activity: { day: 'low', night: 'high' },
        habitats: ['Сырдарья', 'Ташкентская область']
    },

    crappie: {
        id: 'crappie',
        name: 'Crappie',
        nameRu: 'Краппи (белый и черный)',
        maxWeight: 3500,
        evalWeight: 2350,
        methods: ['spinning', 'float'],
        mainBait: ['jig_head', 'spinnerbait', 'vobler_all', 'live_minnow'],
        otherBaits: ['zooplankton', 'insects', 'crustaceans'],
        activity: { day: 'low', night: 'high' },
        habitats: ['Северная Америка (Канада, США)']
    },

    golden_shiner: {
        id: 'golden_shiner',
        name: 'Golden Shiner',
        nameRu: 'Золотистый синец',
        maxWeight: 500,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    green_sunfish: {
        id: 'green_sunfish',
        name: 'Green Sunfish',
        nameRu: 'Зеленый солнечный окунь',
        maxWeight: 1000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    largemouth_bass: {
        id: 'largemouth_bass',
        name: 'Largemouth Bass',
        nameRu: 'Большеротый окунь',
        maxWeight: 5000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    minnow: {
        id: 'minnow',
        name: 'Minnow',
        nameRu: 'Гольян / Мальковка',
        maxWeight: 120,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    northern_pike: {
        id: 'northern_pike',
        name: 'Northern Pike',
        nameRu: 'Северная щука',
        maxWeight: 20000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    pickerel: {
        id: 'pickerel',
        name: 'Pickerel',
        nameRu: 'Маленькая щука (пикерель)',
        maxWeight: 5000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    pumpkinseed_sunfish: {
        id: 'pumpkinseed_sunfish',
        name: 'Pumpkinseed Sunfish',
        nameRu: 'Солнечный окунь',
        maxWeight: 1000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    rock_bass: {
        id: 'rock_bass',
        name: 'Rock Bass',
        nameRu: 'Каменный окунь',
        maxWeight: 1500,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    smallmouth_bass: {
        id: 'smallmouth_bass',
        name: 'Smallmouth Bass',
        nameRu: 'Черный малоротый окунь',
        maxWeight: 4000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    snapping_turtle: {
        id: 'snapping_turtle',
        name: 'Snapping Turtle',
        nameRu: 'Каймановая черепаха',
        maxWeight: 25000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    walleye: {
        id: 'walleye',
        name: 'Walleye',
        nameRu: 'Пучеглаз (американский судак)',
        maxWeight: 7000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: ['Северная Америка (США, Канада)']
    },

    white_perch: {
        id: 'white_perch',
        name: 'White Perch',
        nameRu: 'Белый окунь',
        maxWeight: 2000,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    },

    whitefish: {
        id: 'whitefish',
        name: 'Whitefish',
        nameRu: 'Сиг',
        maxWeight: 5500,
        methods: [],
        mainBait: [],
        otherBaits: [],
        activity: { day: 'medium', night: 'medium' },
        habitats: []
    }
};

window.FishDatabase = FishDatabase;