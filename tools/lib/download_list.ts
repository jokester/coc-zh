import { DownloadList } from './download';
export const download_list_HPL: DownloadList = [

    /**
     * 
<!--
* 炼金术士 / The Alchemist
* 灰烬 / Ashes
* 疯狂山脉 / At the Mountains of Madness
*/
    {
        title: "At the Mountains of Madness",
        title_zh: "疯狂山脉",
        prefix: "HPL",

        source: [
            {
                url: "http://trow.cc/board/index.php?showtopic=19122",
                selector: [
                    // part I
                    "#post-117797",
                    // part II
                    "#post-117798",
                    // part III
                    "#post-117799",
                    // part IV
                    "#post-117800",
                    // part V
                    "#post-117801",
                    // part VI
                    "#post-117802",
                    // part VII
                    "#post-117803",
                    // part VIII
                    "#post-117804",
                    // part IX
                    "#post-117805",
                    // part X
                    "#post-117806",
                    // part XI
                    "#post-117807",
                    // part XII
                    "#post-117808",
                    // 后记
                    "#post-117811",
                ]
            },
        ]
    },

    /*
    * 阿撒托斯 / Azathoth
    */
    {
        title: "Azathoth",
        title_zh: "阿撒托斯",

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22791',
            selector: ['#post-138259']
        }]
    },

    /* 新世纪前夜的决战 / The Battle that Ended the Century */
    {
        title: "The Battle that Ended the Century",
        title_zh: "新世纪前夜的决战",

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20938',
            selector: ['#post-127934']
        }]
    },
    /* 洞中兽 / The Beast in the Cave
    * 翻越睡梦之墙 / Beyond the Wall of Sleep
    */
    {
        title: "Beyond The Wall of Sleep",
        title_zh: "翻越睡梦之墙",

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21851',
            selector: ['#post-133081']
        }]
    },
    /* 书 / The Book */
    {
        title: "The Book",
        title_zh: "书",

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22117',
            selector: ['#post-134331']
        }]
    },
    /* 克苏鲁的呼唤 / The Call of Cthulhu */
    {
        // 竹子译版
        title: "The Call of Cthulhu",
        title_zh: "克苏鲁的呼唤",
        id: 'The-Call-of-Cthulhu-Frend',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23806',
            selector: ['#post-144875']
        }],
    },

    /*
    * 查尔斯·迪克斯特·瓦德事件 / The Case of Charles Dexter Ward
    */
    {
        // 竹子译版
        title: "The Case of Charles Dexter Ward",
        title_zh: "查尔斯·迪克斯特·瓦德事件",

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23401',
            selector: [
                // 开头
                '#post-141647',
                // Chapter I: A Result and a Prologue
                '#post-141648',
                // Chapter II: An Antecedent and a Horror
                '#post-141649',
                // Chapter III: A Search and an Evocation
                '#post-141650',
                // Chapter IV: A Mutation and a Madness
                '#post-141651',
                // Chapter V: A Nightmare and a Cataclysm
                '#post-141652',
                // 后记
                '#post-141653',

                // FIXME 内部有插图需要手动下载
            ]
        }],
    },
    /*
    * 乌撒的猫 / The Cats of Ulthar
    * 塞勒菲斯 / Celephaïs */
    {
        title: 'Celephaïs',
        title_zh: '塞勒菲斯',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21321',
            selector: ['#post-129957']
        }]
    },
    /* 来自彼方的挑战 / The Challenge from Beyond */
    {
        title: 'The Challenge from Beyond',
        title_zh: '彼方的挑战',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?act=ST&f=82&t=24464&st=0#entry149984',
            selector: ['#post-149984']
        }]
    },

    /* 崩坏的宇宙 / Collapsing Cosmoses
       与 诛杀怪物 / The Slaying of the Monster
       TODO 分成两个markdown */
    {
        title: 'The Slaying of the Monster',
        title_zh: '诛杀怪物',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/showtopic=20858&st=0&p=127543&#entry127543',
            selector: ['#post-127543']
        }]
    },
    /* 星之彩 / The Colour Out of Space */
    // TODO ask修白川@trow

    /* 寒气 / Cool Air */
    {
        title: 'Cool Air',
        title_zh: '寒气',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20253',
            selector: ['#post-124274']
        }]
    },

    /* 伏行的混沌 / The Crawling Chaos */
    {
        title: 'The Crawling Chaos',
        title_zh: '蠕行的混沌',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22686',
            selector: ['#post-137656']
        }]
    },

    /* 伊格的诅咒 / The Curse of Yig */
    {
        title: 'The Curse of Yig',
        title_zh: '伊格的诅咒',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22741',
            selector: [
                // 开头
                '#post-137938',
                // 正文
                '#post-137939',
                // 背景
                '#post-137940',
            ]
        }]
    },

    /* 达贡 / Dagon
    * 聋，哑，瞎 / Deaf, Dumb, and Blind
    * 后裔 / The Descendant */

    /* 阿隆佐·泰普尔的日记 / The Diary of Alonzo Typer */
    {
        title: 'The Diary of Alonzo Typer',
        title_zh: '阿隆佐·泰普尔的日记',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25526',
            selector: [
                // 全文
                '#post-156426',
            ]
        }]
    },

    /* 掘墓 / The Disinterment */
    {
        title: 'The Disinterment',
        title_zh: '掘墓',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24524',
            selector: [
                // 全文
                '#post-150385',
                // 背景
                '#post-150386',
            ]
        }]
    },

    /* 降临在萨尔纳斯的灾殃 / The Doom That Came to Sarnath */
    {
        title: 'The Doom That Came to Sarnath',
        title_zh: '降临在萨尔纳斯的灾殃',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21299',
            selector: [
                // 全文
                '#post-129794',
            ]
        }]
    },

    /* 秘境卡达斯梦寻记 / The Dream-Quest of Unknown Kadath */
    {
        title: 'The Dream-Quest of Unknown Kadath',
        title_zh: '梦寻秘境卡达斯',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21628',
            selector: [
                // 开头
                '#post-131797',
                // part1
                '#post-131798',
                // part2
                '#post-131799',
                // part3
                '#post-131800',
                // part4
                '#post-131801',
                // part5
                '#post-131802',
                // part6
                '#post-131803',
                // 背景
                '#post-131806'
            ]
        }]
    },

    /* 魔女屋中之梦 / The Dreams in the Witch House */
    {
        title: 'The Dreams in Witch-House',
        title_zh: '魔女屋中之梦',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=15666',
            selector: [
                // part1
                '#post-94320',
                // part2
                '#post-94321',
                // part3
                '#post-94322',
                // 背景
                '#post-94325',
                // 鸣谢
                '#post-94324'
            ]
        }]
    },

    /* 敦威治恐怖事件 / The Dunwich Horror */
    {
        title: 'The Dunwich Horror',
        title_zh: '敦威治恐怖事件',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=16480',
            selector: [
                // I
                '#post-99416',
                // II
                '#post-99417',
                // III
                '#post-99418',
                // IV
                '#post-99419',
                // V
                '#post-99420',
                // VI
                '#post-99421',
                // VII
                '#post-99422',
                // VIII
                '#post-99423',
                // IX
                '#post-99424',
                // X
                '#post-99425',
            ]
        }]
    },

    /* 电刑器 / The Electric Executioner */
    {
        title: 'The Electric Executioner',
        title_zh: '电刑器',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27016',
            selector: [
                // 正文
                '#post-164963',
                // 背景
                '#post-164964',
            ]
        }]
    },

    /* 邪恶的教士 / The Evil Clergyman */
    {
        title: 'The Evil Clergyman',
        title_zh: '邪恶的教士',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27499',
            selector: [
                // 正文
                '#post-167781',
                // 背景
                '#post-167782',
            ]
        }]
    },

    /* 来自遗忘 / Ex Oblivione */
    {
        title: 'Ex Oblivione',
        title_zh: '来自遗忘',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21933',
            selector: [
                // 正文
                '#post-133372',
            ]
        }]
    },

    /* 关于已故亚瑟·杰尔敏及其家系的事实 / Facts Concerning the Late Arthur Jermyn and His Family */
    {
        title: 'Facts Concerning the Late Arthur Jermyn and His Family',
        title_zh: '关于已故亚瑟·杰尔敏及其家系的事实',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22035',
            selector: [
                // 正文
                '#post-133856',
            ]
        }]
    },

    /* 魔宴 / The Festival */
    {
        title: 'The Festival',
        title_zh: '魔宴',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22523',
            selector: [
                // 正文
                '#post-136513',
            ]
        }]
    },

    /* 自外而来 / From Beyond */
    {
        title: 'From Beyond',
        title_zh: '自外而来',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=16890',
            selector: [
                // 正文
                '#post-102172',
                // 背景
                '#post-102173',
            ]
        }]
    },

    /* 噬鬼者 / The Ghost-Eater TODO */

    /* 绿色草原 / The Green Meadow */
    {
        title: 'The Green Meadow',
        title_zh: '绿色草原',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22014',
            selector: [
                // 正文
                '#post-133757',
                // 背景
                '#post-133759',
            ]
        }]
    },

    /* 夜魔 / The Haunter of the Dark */
    {
        // 竹子译版
        // FIXME 换个id, 不包含译者名
        title: 'The Haunter of the Dark',
        title_zh: '夜魔',
        id: 'The-Haunter-of-the-Dark-Frend',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21836',
            selector: [
                // 开头
                '#post-133045',
                // 正文
                '#post-133046',
                // 背景
                '#post-133047',
            ]
        }]
    },

    /* 他 / He */
    {
        title: 'He',
        title_zh: '他',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24153',
            selector: [
                // 正文
                '#post-147558',
                // 背景
                '#post-147559',
            ]
        }]
    },

    /* 尸体复活者赫伯特·威斯特 / Herbert West – Reanimator */
    {
        title: 'Herbert West—Reanimator',
        title_zh: '赫伯特•韦斯特 — 尸体复生者',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=28229',
            selector: [
                // 正文
                '#post-171573',
                // 背景
                '#post-171574',
            ]
        }]
    },

    /* 《死灵之书》的历史 / History of the Necronomicon */
    {
        title: 'History of the Necronomicon',
        title_zh: '《死灵之书》的历史',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=15904',
            selector: [
                // 正文
                '#post-95715',
                // 背景
                '#post-95716',
            ]
        }]
    },

    /* 巫兽的宝藏 / The Hoard of the Wizard-Beast*/
    {
        title: 'The Hoard of the Wizard-Beast',
        title_zh: '巫兽的宝藏',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24575',
            selector: [
                // 正文
                '#post-150729',
                // 背景
                '#post-150730',
            ]
        }]
    },
    /* 马丁海滩的怪物 / The Horror at Martin's Beach */
    {
        title: "The Horror at Martin's Beach",
        title_zh: '马丁海滩的怪物',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24043',
            selector: [
                // 正文
                '#post-146679',
                // 背景
                '#post-146680',
            ]
        }]
    },

    /* 雷德胡克的恐怖 / The Horror at Red Hook */
    {
        title: "The Horror at Red Hook",
        title_zh: '雷德胡克的恐怖',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25774',
            selector: [
                // 正文
                '#post-157946',
                // 背景
                '#post-157947',
            ]
        }]
    },

    /* 墓园里的恐怖 / The Horror in the Burying-Ground */
    {
        title: "The Horror in the Burying-Ground",
        title_zh: '墓园里的恐怖',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25143',
            selector: [
                // 正文
                '#post-154034',
                // 背景
                '#post-154035',
            ]
        }]
    },

    /* 蜡像馆惊魂 / The Horror in the Museum */
    {
        title: "The Horror in the Museum",
        title_zh: '蜡像馆惊魂',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22389',
            selector: [
                // 正文
                '#post-135634',
                // 背景
                '#post-135635',
            ]
        }]
    },

    /* 猎犬 / The Hound TODO 译者cimar */

    /* 休普诺斯 / Hypnos */
    {
        title: "Hypnos",
        title_zh: '休普诺斯',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22705',
            selector: [
                // 正文
                '#post-137757',
            ]
        }]
    },

    /* 伊比德 / Ibid */
    {
        title: "Ibid",
        title_zh: '伊比德',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20952',
            selector: [
                // 正文
                '#post-127988',
            ]
        }]
    },

    /* 地窖中 / In the Vault */
    {
        title: "In the Vault",
        title_zh: '地窖中',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=28115',
            selector: [
                // 正文
                '#post-170920',
                // 背景
                '#post-170921',
            ]
        }]
    },

    /* 厄瑞克斯之墙 / In the Walls of Eryx */
    {
        title: "In the Walls of Eryx",
        title_zh: '厄瑞克斯之墙',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22240',
            selector: [
                // 正文
                '#post-134833',
                // 背景
                '#post-134834',
            ]
        }]
    },

    /* 最终测试 / The Last Test */
    {
        title: "The Last Test",
        title_zh: '最终测试',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=26438',
            selector: [
                // I
                '#post-161685',
                // II
                '#post-161686',
                // III
                '#post-161687',
                // IV
                '#post-161688',
                // V
                '#post-161689',
                // 背景
                '#post-161690'
            ]
        }]
    },

    /* 小玻璃瓶 / The Little Glass Bottle */
    {
        // 竹子译版
        /*
          神秘船 / The Mysterious Ship
          墓园之谜 / The Mystery of the Grave-Yard
          隐秘的洞穴，或约翰·李的冒险 / The Secret Cave or John Lees Adventure
          FIXME 同一帖子中还有上面3篇HPL童年作品，应分成3个md
        */
        title: "The Little Glass Bottle",
        title_zh: '小玻璃瓶',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22696',
            selector: [
                // 正文
                '#post-137715',
                // 背景
                '#post-155832'
            ]
        }]

        // TODO 加上玖羽的翻译
    },

    /* 可爱的死者 / The Loved Dead
    * 潜伏的恐惧 / The Lurking Fear
    * 石像 / The Man of Stone */

    /* 美杜莎的卷发 / Medusa's Coil */
    {
        title: "Medusa’s Coil",
        title_zh: '美杜莎的卷发',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24859',
            selector: [
                // I
                '#post-152205',
                // II
                '#post-152206',
                // III
                '#post-152207',
                // IV
                '#post-152208',
                // V
                '#post-152209',
                // VI
                '#post-152210',
                // 背景
                '#post-152211',
            ]
        }]
    },
    /* 记忆 / Memory */
    {
        // 玖羽译版
        title: "Memory",
        title_zh: '记忆',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22785',
            selector: [
                // 正文
                '#post-138165',
            ]
        }]
        // TODO 还有个竹子校对的版本
    },

    /* 月之沼 / The Moon-Bog */

    /* 丘 / The Mound */
    {
        title: "The Mound",
        title_zh: '丘',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20897',
            selector: [
                // 背景
                '#post-127713',
                // I
                '#post-127714',
                // II
                '#post-127715',
                // III
                '#post-127716',
                // IV
                '#post-127717',
                // V
                '#post-127718',
                // VI
                '#post-127719',
                // VII
                '#post-127720',
            ]
        }]
    },

    /* 埃里奇·赞之曲 / The Music of Erich Zann */
    {
        title: "The Music of Erich Zann",
        title_zh: '埃里奇·赞之曲',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20511',
            selector: [
                // 正文
                '#post-125760',
                // 背景
                '#post-125761'
            ]
        }]
    },


    /* 无名都市 / The Nameless City */
    {
        title: "The Nameless City",
        title_zh: '无名之城',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20008',
            selector: [
                // 正文
                '#post-122960',
                // 背景
                '#post-122961'
            ]
        }]
    },

    /* 夜之洋 / The Night Ocean */

    /* 奈亚拉托提普 / Nyarlathotep */
    {
        title: "Nyarlathotep",
        title_zh: '奈亚拉托提普',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20915',
            selector: [
                // 正文
                '#post-127853',
            ]
        }]
    },

    /* 老臭虫 / Old Bugs */
    {
        title: "Old Bugs",
        title_zh: '老臭虫',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25138',
            selector: [
                // 正文
                '#post-154022',
                // 背景
                '#post-154023'
            ]
        }]
    },

    /* 蕃神 / The Other Gods */
    {
        title: "The Other Gods",
        title_zh: '蕃神',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/forum/index.php?showtopic=21392',
            selector: [
                // 正文
                '#post-130441',
            ]
        }]
    },

    /* 超越万古 / Out of the Aeons */
    {
        title: "Out of the Aeons",
        title_zh: '超越万古',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22841',
            selector: [
                // I
                '#post-138569',
                // II
                '#post-138570',
                // III
                '#post-138571',
                // VI
                '#post-138572',
                // V
                '#post-138573',
                // VI
                '#post-138574',
            ]
        }]
    },

    /* 异乡人 / The Outsider */
    {
        // 竹子译版
        title: "The Outsider",
        title_zh: '异乡人',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=17515',
            selector: [
                // content
                '#post-105741',
                // anecdote
                '#post-105743',
            ]
        }]

        // TODO 加上玖羽译版
    },

    /* 皮克曼的模特 / Pickman's Model */
    {
        title: "Pickman's Model",
        title_zh: '皮克曼的模特',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27185',
            selector: [
                // 正文
                '#post-166071',
            ]
        }]
    },

    /* [屋中画 / The Picture in the House](/HPL/The-Picture-in-the-House.md) */
    {
        title: "The Picture in the House",
        title_zh: '屋中画',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24399',
            selector: [
                // main
                '#post-149586',
                // background
                '#post-149587',
            ]
        }]
    },

    /* 诗与诸神 / Poetry and the Gods */
    {
        title: "Poetry and the Gods",
        title_zh: '诗与诸神',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25499',
            selector: [
                // 正文
                '#post-156329',
                // 背景
                '#post-156330'
            ]
        }]
    },

    /* 北极星 / Polaris */
    {
        title: "Polaris",
        title_zh: '北极星',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21543',
            selector: [
                // 正文
                '#post-131384',
            ]
        }]
    },

    /* 伊拉农的探求 / The Quest of Iranon */
    {
        title: "The Quest of Iranon",
        title_zh: '伊拉农的探求',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21374',
            selector: [
                // 正文
                '#post-130284',
            ]
        }]
    },

    /* 墙中之鼠 / The Rats in the Walls */
    {
        title: "The Rats in the Walls",
        title_zh: '墙中之鼠',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=16593',
            selector: [
                // conte t
                '#post-100152',
                // bg
                '#post-100153',
            ]
        }]
    },

    /* 回忆塞缪尔·约翰逊博士 / A Reminiscence of Dr. Samuel Johnson*/
    {
        title: "A Reminiscence of Dr. Samuel Johnson",
        title_zh: '回忆塞缪尔•约翰逊博士',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27906',
            selector: [
                // I
                '#post-169608',
                // II
                '#post-169609',
            ]
        }]
    },

    /* 超越时间之影 / The Shadow Out of Time */
    {
        title: "The Shadow Out of Time",
        title_zh: '超越时间之影',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=15357',
            selector: [
                // I
                '#post-92321',
                // II
                '#post-92322',
                // III
                '#post-92323',
                // VI
                '#post-92324',
                // V
                '#post-92325',
                // VI
                '#post-92326',
                // VII
                '#post-92327',
                // VII
                '#post-92328',
                // bg
                '#post-92329'
            ]
        }]
    },

    /* 印斯茅斯之影 / The Shadow Over Innsmouth */
    {
        title: "The Shadow Over Innsmouth",
        title_zh: '印斯茅斯的阴霾',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23012',
            selector: [
                // 0
                '#post-139425',
                // I
                '#post-139426',
                // II
                '#post-139427',
                // III
                '#post-139428',
                // IV
                '#post-139429',
                // V
                '#post-139430',
                // bg
                '#post-139431',
            ]
        }]
    },

    /* 畏避之屋 / The Shunned House */
    {
        title: "The Shunned House",
        title_zh: '畏避之屋',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25029',
            selector: [
                // I
                '#post-153482',
                // II
                '#post-153483',
                // III
                '#post-153485',
                // VI
                '#post-153486',
                // V
                '#post-153487',
                // bg
                '#post-153488',
            ]
        }]
    },

    /* 银钥匙 / The Silver Key */
    {
        title: "The Silver Key",
        title_zh: '银钥匙',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=18114',
            selector: [
                // I
                '#post-109750',
                // II
                '#post-109752',
            ]
        }]
    },

    /* 兰道夫·卡特的供述 / The Statement of Randolph Carter*/
    {
        title: "The Statement of Randolph Carter",
        title_zh: '伦道夫·卡特的供述',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23347',
            selector: [
                // I
                '#post-141326',
                // II
                '#post-141328',
            ]
        }]
    },

    /* 雾中怪屋 / The Strange High House in the Mist */
    {
        title: "The Strange High House in the Mist",
        title_zh: '雾中怪屋',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27395',
            selector: [
                // 正文
                '#post-167095',
            ]
        }]
    },

    /* 道路 / The Street */
    {
        title: "The Street",
        title_zh: '道路',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22120',
            selector: [
                // 正文
                '#post-134340',
            ]
        }]
    },

    /* 甜美的艾门嘉德 / Sweet Ermengarde */

    /* 神殿 / The Temple */
    {
        title: "The Temple",
        title_zh: '神殿',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=21250',
            selector: [
                // 正文
                '#post-129456',
            ]
        }]
    },

    /* 可怕的老人 / The Terrible Old Man */
    {
        title: "The Terrible Old Man",
        title_zh: '可怕的老人',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27394',
            selector: [
                // 正文
                '#post-167094',
            ]
        }]
    },

    /* 月下之物 / The Thing in the Moonlight
    * 门口的东西 / The Thing on the Doorstep */
    {
        title: "The Thing on the Doorstep",
        title_zh: '门外之物',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25297',
            selector: [
                // I
                '#post-155170',
                // II
                '#post-155171',
                // III
                '#post-155172',
                // IV
                '#post-155173',
                // V
                '#post-155174',
                // VI
                '#post-155175',
                // VII
                '#post-155176',
                // bg
                '#post-155177',
            ]
        }]
    },

    /* 穿越银匙之门 / Through the Gates of the Silver Key*/
    {
        title: "Through The Gates of Silver Key",
        title_zh: '穿越银匙之门',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=19738',
            selector: [
                // I
                '#post-121407',
                // II
                '#post-121408',
                // III
                '#post-121409',
                // IV
                '#post-121410',
                // V
                '#post-121411',
                // VI
                '#post-121412',
                // VII
                '#post-121413',
                // VIII
                '#post-121414',
                // bg
                '#post-121416',
            ]
        }]
    },

    /* 直至诸海…… / Till A' the Seas */
    {
        title: "Till A’ the Seas",
        title_zh: '直至诸海',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=24215',
            selector: [
                // I
                '#post-148046',
                // II
                '#post-148047',
            ]
        }]
    },

    /* 坟墓 / The Tomb */
    {
        title: "The Tomb",
        title_zh: '坟墓',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25216',
            selector: [
                // content
                '#post-154554',
                // bg
                '#post-154555',
            ]
        }]
    },

    /* 胡安·罗梅洛的变貌 / The Transition of Juan Romero */
    {
        title: "The Transition of Juan Romero",
        title_zh: '胡安·罗梅洛的变貌',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22530',
            selector: [
                // 正文
                '#post-136600',
            ]
        }]
    },

    /* 圈套 / The Trap */
    {
        title: "Trap",
        title_zh: '圈套',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=25549',
            selector: [
                // content
                '#post-156504',
                // bg
                '#post-156505',
            ]
        }]
    },

    /* 树 / The Tree */
    {
        title: "The Tree",
        title_zh: '树',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22717',
            selector: [
                // 正文
                '#post-137815',
            ]
        }]
    },

    /* 山上的树 / The Tree on the Hill*/
    {
        title: "The Tree on the Hill",
        title_zh: '山上的树',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23116',
            selector: [
                // I ~ III
                '#post-139992',
                // bg
                '#post-139993',
            ]
        }]
    },

    /* 两只黑瓶 / Two Black Bottles */
    {
        title: "Two Black Bottles",
        title_zh: '两只黑瓶',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=28039',
            selector: [
                // content + bg
                '#post-170439',
            ]
        }]
    },

    /* 金字塔下 / Under the Pyramids */
    {
        title: "The Tomb",
        title_zh: '坟墓',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22535',
            selector: [
                // 0
                '#post-136649',
                // 1
                '#post-136650',
                // bg
                '#post-136651',
            ]
        }]
    },

    /* 不可名状 / The Unnamable */
    {
        title: "The Unnamable",
        title_zh: '不可名状',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23320',
            selector: [
                // content
                '#post-141160',
                // bg
                '#post-141161',
            ]
        }]
    },

    /* 远古的民族 / The Very Old Folk */
    {
        title: "The Very Old Folk",
        title_zh: '远古的民族',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23298',
            selector: [
                // 正文
                '#post-141034',
            ]
        }]
    },

    /* 月光下 / What the Moon Brings */
    {
        title: "What the Moon Brings",
        title_zh: '月光下',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=23115',
            selector: [
                // content
                '#post-139984',
                // bg
                '#post-139985',
            ]
        }]
    },

    /* 暗夜呢喃 / The Whisperer in Darkness */
    {
        title: "The Whisperer in Darkness",
        title_zh: '暗夜呢喃',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=17411',
            selector: [
                // chapter 1
                '#post-105154',
                // chapter 2
                '#post-105155',
                // chapter 3
                '#post-105156',
                // chapter 4
                '#post-105157',
                // chapter 5
                '#post-105158',
                // chapter 6
                '#post-105159',
                // chapter 7
                '#post-105160',
                // chapter 8
                '#post-105161',
                // bg
                '#post-105164',
            ]
        }]
    },

    /* 白船 / The White Ship */
    {
        title: "The White Ship",
        title_zh: '白船',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27191',
            selector: [
                // 正文
                '#post-166094',
            ]
        }]
    },

    /* 有翼死神 / Winged Death*/
    {
        title: "Winged Death",
        title_zh: '有翼死神',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=27216',
            selector: [
                // content
                '#post-166211',
                // bg
                '#post-166212',
            ]
        }]
    },

    /* 怪奇小说创作笔记 / Notes on Writing Weird Fiction
    * 文学中的超自然恐怖 / Supernatural Horror in Literature
    -->
    
    <!-- 此列表来自玖羽: http://trow.cc/board/index.php?showtopic=19824 -->
    
         */
];

export const download_list = [

    download_list_HPL

].reduce(function (mem, v) {
    return mem.concat(v);
}, []).sort((a, b) => compare_str(a.title, b.title));

export function compare_str(a: string, b: string): number {
    if (a < b)
        return -1;
    else if (a === b)
        return 0;
    return 1;
}