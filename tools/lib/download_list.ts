import { DownloadList } from './download';
export const download_list_HPL: DownloadList = [

    /**
     * 
<!--
* [炼金术士 / The Alchemist](Lovecraft/The Alchemist.md)
* [灰烬 / Ashes](Lovecraft/Ashes.md)
* [疯狂山脉 / At the Mountains of Madness](Lovecraft/At the Mountains of Madness.md)
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
    * [阿撒托斯 / Azathoth](Lovecraft/Azathoth.md)
    * [新世纪前夜的决战 / The Battle that Ended the Century](Lovecraft/The Battle that Ended the Century.md)
    * [洞中兽 / The Beast in the Cave](Lovecraft/The Beast in the Cave.md)
    * [翻越睡梦之墙 / Beyond the Wall of Sleep](Lovecraft/Beyond the Wall of Sleep.md)
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

    /*
    * [书 / The Book](Lovecraft/The Book.md)
    * [克苏鲁的呼唤 / The Call of Cthulhu](Lovecraft/The Call of Cthulhu.md)
    */
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
    * [查尔斯·迪克斯特·瓦德事件 / The Case of Charles Dexter Ward](Lovecraft/The Case of Charles Dexter Ward.md)
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
    * [乌撒的猫 / The Cats of Ulthar](Lovecraft/The Cats of Ulthar.md)
    * [塞勒菲斯 / Celephaïs](Lovecraft/Celephaïs.md)
    */
    {
        title: 'The Challenge from Beyond',
        title_zh: '彼方的挑战',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?act=ST&f=82&t=24464&st=0#entry149984',
            selector: ['#post-149984']
        }]
    },

    /*
    * [来自彼方的挑战 / The Challenge from Beyond](Lovecraft/The Challenge from Beyond.md)
    * [崩坏的宇宙 / Collapsing Cosmoses](Lovecraft/Collapsing Cosmoses.md)
    * [星之彩 / The Colour Out of Space](Lovecraft/The Colour Out of Space.md)
    * [寒气 / Cool Air](Lovecraft/Cool Air.md)
    */
    {
        title: 'Cool Air',
        title_zh: '寒气',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=20253',
            selector: ['#post-124274']
        }]
    },

    /* [伏行的混沌 / The Crawling Chaos](Lovecraft/The Crawling Chaos.md) */
    {
        title: 'The Crawling Chaos',
        title_zh: '蠕行的混沌',

        prefix: 'HPL',
        source: [{
            url: 'http://trow.cc/board/index.php?showtopic=22686',
            selector: ['#post-137656']
        }]
    },

    /* [伊格的诅咒 / The Curse of Yig](Lovecraft/The Curse of Yig.md) */
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

    /* [达贡 / Dagon](Lovecraft/Dagon.md)
    * [聋，哑，瞎 / Deaf, Dumb, and Blind](Lovecraft/Deaf, Dumb, and Blind.md)
    * [后裔 / The Descendant](Lovecraft/The Descendant.md)
    * [阿隆佐·泰普尔的日记 / The Diary of Alonzo Typer](Lovecraft/The Diary of Alonzo Typer.md) */

    /* [掘墓 / The Disinterment](Lovecraft/The Disinterment.md) */

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

    /* [降临在萨尔纳斯的灾殃 / The Doom That Came to Sarnath](Lovecraft/The Doom That Came to Sarnath.md)
    * [秘境卡达斯梦寻记 / The Dream-Quest of Unknown Kadath](Lovecraft/The Dream-Quest of Unknown Kadath.md) */

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

    /* [魔女屋中之梦 / The Dreams in the Witch House](Lovecraft/The Dreams in the Witch House.md) */
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

    /* [敦威治恐怖事件 / The Dunwich Horror](Lovecraft/The Dunwich Horror.md) */
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

    /* [电刑器 / The Electric Executioner](Lovecraft/The Electric Executioner.md) */
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

    /* [邪恶的教士 / The Evil Clergyman](Lovecraft/The Evil Clergyman.md) */
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

    /* [来自遗忘 / Ex Oblivione](Lovecraft/Ex Oblivione.md)
    * [关于已故亚瑟·杰尔敏及其家系的事实 / Facts Concerning the Late Arthur Jermyn and His Family](Lovecraft/Facts Concerning the Late Arthur Jermyn and His Family.md)
    * [魔宴 / The Festival](Lovecraft/The Festival.md) */
    /* [自外而来 / From Beyond](Lovecraft/From Beyond.md) */
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

    /* [噬鬼者 / The Ghost-Eater](Lovecraft/The Ghost-Eater.md)
    * [绿色草原 / The Green Meadow](Lovecraft/The Green Meadow.md) */
    /* [夜魔 / The Haunter of the Dark](Lovecraft/The Haunter of the Dark.md) */
    {
        // 竹子译版
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

    /* [他 / He](Lovecraft/He.md) */
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

    /* [尸体复活者赫伯特·威斯特 / Herbert West – Reanimator](Lovecraft/Herbert West – Reanimator.md) */
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

    /* [《死灵之书》的历史 / History of the Necronomicon](Lovecraft/History of the Necronomicon.md) */
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

    /* [巫兽的宝藏 / The Hoard of the Wizard-Beast](Lovecraft/The Hoard of the Wizard-Beast.md)*/
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
    /* [马丁海滩的怪物 / The Horror at Martin's Beach](Lovecraft/The Horror at Martin's Beach.md) */
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

    /* [雷德胡克的恐怖 / The Horror at Red Hook](Lovecraft/The Horror at Red Hook.md) */
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

    /* [墓园里的恐怖 / The Horror in the Burying-Ground](Lovecraft/The Horror in the Burying-Ground.md) */
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

    /* [蜡像馆惊魂 / The Horror in the Museum](Lovecraft/The Horror in the Museum.md) */
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

    /* [猎犬 / The Hound](Lovecraft/The Hound.md) TODO 译者cimar
    * [休普诺斯 / Hypnos](Lovecraft/Hypnos.md) TODO 译者玖羽
    * [伊比德 / Ibid](Lovecraft/Ibid.md) TODO 译者玖羽
    * [地窖中 / In the Vault](Lovecraft/In-the-Vault.md) */
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

    /* [厄瑞克斯之墙 / In the Walls of Eryx](Lovecraft/In the Walls of Eryx.md) */
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

    /* [最终测试 / The Last Test](Lovecraft/The Last Test.md) */
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

    /* [小玻璃瓶 / The Little Glass Bottle](Lovecraft/The Little Glass Bottle.md) */
    {
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

        // TODO 玖羽翻译
    },
    /* [可爱的死者 / The Loved Dead](Lovecraft/The Loved Dead.md)
    * [潜伏的恐惧 / The Lurking Fear](Lovecraft/The Lurking Fear.md)
    * [石像 / The Man of Stone](Lovecraft/The Man of Stone.md)
    * [美杜莎的卷发 / Medusa's Coil](Lovecraft/Medusa's Coil.md) */
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
    /* [记忆 / Memory](Lovecraft/Memory.md)
    * [月之沼 / The Moon-Bog](Lovecraft/The Moon-Bog.md)
    * [丘 / The Mound](Lovecraft/The Mound.md) */
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

    /* [埃里奇·赞之曲 / The Music of Erich Zann](Lovecraft/The Music of Erich Zann.md) */
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

    /*
      [神秘船 / The Mysterious Ship](Lovecraft/The Mysterious Ship.md)
      [墓园之谜 / The Mystery of the Grave-Yard](Lovecraft/The Mystery of the Grave-Yard.md)
      [隐秘的洞穴，或约翰·李的冒险 / The Secret Cave or John Lees Adventure](Lovecraft/The Secret Cave or John Lees Adventure.md)
      TODO 这3篇也是HPL童年作品，和<<小玻璃瓶>>是同一帖子，应分成3个md
    */

    /* [无名都市 / The Nameless City](Lovecraft/The Nameless City.md) */
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

    /* [夜之洋 / The Night Ocean](Lovecraft/The Night Ocean.md)
    * [奈亚拉托提普 / Nyarlathotep](Lovecraft/Nyarlathotep.md) */

    /* [老臭虫 / Old Bugs](Lovecraft/Old Bugs.md) */
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

    /* [蕃神 / The Other Gods](Lovecraft/The Other Gods.md) */

    /* [超越万古 / Out of the Aeons](Lovecraft/Out of the Aeons.md) */
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

    /* [异乡人 / The Outsider](Lovecraft/The Outsider.md) */
    {
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
    },
    /* [皮克曼的模特 / Pickman's Model](Lovecraft/Pickman's Model.md)
    -->
    * [屋中画 / The Picture in the House](/HPL/The-Picture-in-the-House.md) */
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

    /* [诗与诸神 / Poetry and the Gods](Lovecraft/Poetry and the Gods.md)
    * [北极星 / Polaris](Lovecraft/Polaris.md)
    * [伊拉农的探求 / The Quest of Iranon](Lovecraft/The Quest of Iranon.md)
    * [墙中之鼠 / The Rats in the Walls](Lovecraft/The Rats in the Walls.md) */
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

    /* [回忆塞缪尔·约翰逊博士 / A Reminiscence of Dr. Samuel Johnson](Lovecraft/A Reminiscence of Dr. Samuel Johnson.md)*/
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

    /* [超越时间之影 / The Shadow Out of Time](Lovecraft/The Shadow Out of Time.md) */
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

    /* [印斯茅斯之影 / The Shadow Over Innsmouth](Lovecraft/The Shadow Over Innsmouth.md) */
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

    /* [畏避之屋 / The Shunned House](Lovecraft/The Shunned House.md) */
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

    /* [银钥匙 / The Silver Key](Lovecraft/The Silver Key.md) */
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

    /* [诛杀怪物 / The Slaying of the Monster](Lovecraft/The Slaying of the Monster.md)
    * [兰道夫·卡特的供述 / The Statement of Randolph Carter](Lovecraft/The Statement of Randolph Carter.md)*/
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

    /* [雾中怪屋 / The Strange High House in the Mist](Lovecraft/The Strange High House in the Mist.md)
    * [道路 / The Street](Lovecraft/The Street.md)
    * [甜美的艾门嘉德 / Sweet Ermengarde](Lovecraft/Sweet Ermengarde.md)
    * [神殿 / The Temple](Lovecraft/The Temple.md)
    * [可怕的老人 / The Terrible Old Man](Lovecraft/The Terrible Old Man.md)
    * [月下之物 / The Thing in the Moonlight](Lovecraft/The Thing in the Moonlight.md)
    * [门口的东西 / The Thing on the Doorstep](Lovecraft/The Thing on the Doorstep.md) */
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

    /* [穿越银匙之门 / Through the Gates of the Silver Key](Lovecraft/Through the Gates of the Silver Key.md)*/
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

    /* [直至诸海…… / Till A' the Seas](Lovecraft/Till A' the Seas.md) */
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

    /* [坟墓 / The Tomb](Lovecraft/The Tomb.md) */
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

    /* [胡安·罗梅洛的变貌 / The Transition of Juan Romero](Lovecraft/The Transition of Juan Romero.md)
    * [圈套 / The Trap](Lovecraft/The Trap.md) */
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

    /* [树 / The Tree](Lovecraft/The Tree.md)
    * [山上的树 / The Tree on the Hill](Lovecraft/The Tree on the Hill.md)*/
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

    /* [两只黑瓶 / Two Black Bottles](Lovecraft/Two Black Bottles.md) */
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

    /* [金字塔下 / Under the Pyramids](Lovecraft/Under the Pyramids.md) */
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

    /* [不可名状 / The Unnamable](Lovecraft/The Unnamable.md) */
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

    /* [远古的民族 / The Very Old Folk](Lovecraft/The Very Old Folk.md)
    * [月光下 / What the Moon Brings](Lovecraft/What the Moon Brings.md) */
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

    /* [暗夜呢喃 / The Whisperer in Darkness](Lovecraft/The Whisperer in Darkness.md) */
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

    /* [白船 / The White Ship](Lovecraft/The White Ship.md)
    * [有翼死神 / Winged Death](Lovecraft/Winged Death.md)*/
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

    /* [怪奇小说创作笔记 / Notes on Writing Weird Fiction](Lovecraft/Notes on Writing Weird Fiction.md)
    * [文学中的超自然恐怖 / Supernatural Horror in Literature](Lovecraft/Supernatural Horror in Literature.md)
    -->
    
    <!-- 此列表来自玖羽: http://trow.cc/board/index.php?showtopic=19824 -->
    
         */
];

export const download_list = [

    download_list_HPL

].reduce(function (mem, v) {
    return mem.concat(v);
}, []);
