/**
 * selector
 */
export interface DownloadItem {

    // 页面url
    url: string
    // CSS selector
    selector?: string

    /**
     * id: 决定保存的文件名
     * (如果没有，会从title生成一个能用作文件名的)
     */
    id?: string

    /**
     * 标题
     */
    title: string
    title_zh: string

    /**
     * prefix: 分类，用于生成保存路径
     */
    prefix: "HPL" | "TODO"
}

type DownloadList = DownloadItem[];

/**
 * Item的保存文件名
 */
export function genFilename(item: DownloadItem) {
    return item.id || item.title.split(/[^0-9a-zA-Z]+/).join('-');
}

/**
 * Item的保存路径 (包括prefix)
 */
export function genFullname(item: DownloadItem) {
    return `${item.prefix || 'HPL'}/${genFilename(item)}`;
}

const download_list_HPL: DownloadList = [

    /**
     * 
<!--
* [炼金术士 / The Alchemist](Lovecraft/The Alchemist.md)
* [灰烬 / Ashes](Lovecraft/Ashes.md)
* [疯狂山脉 / At the Mountains of Madness](Lovecraft/At the Mountains of Madness.md)
* [阿撒托斯 / Azathoth](Lovecraft/Azathoth.md)
* [新世纪前夜的决战 / The Battle that Ended the Century](Lovecraft/The Battle that Ended the Century.md)
* [洞中兽 / The Beast in the Cave](Lovecraft/The Beast in the Cave.md)
* [翻越睡梦之墙 / Beyond the Wall of Sleep](Lovecraft/Beyond the Wall of Sleep.md)
* [书 / The Book](Lovecraft/The Book.md)
* [克苏鲁的呼唤 / The Call of Cthulhu](Lovecraft/The Call of Cthulhu.md)
* [查尔斯·迪克斯特·瓦德事件 / The Case of Charles Dexter Ward](Lovecraft/The Case of Charles Dexter Ward.md)
* [乌撒的猫 / The Cats of Ulthar](Lovecraft/The Cats of Ulthar.md)
* [塞勒菲斯 / Celephaïs](Lovecraft/Celephaïs.md)
* [来自彼方的挑战 / The Challenge from Beyond](Lovecraft/The Challenge from Beyond.md)
* [崩坏的宇宙 / Collapsing Cosmoses](Lovecraft/Collapsing Cosmoses.md)
* [星之彩 / The Colour Out of Space](Lovecraft/The Colour Out of Space.md)
* [寒气 / Cool Air](Lovecraft/Cool Air.md)
* [伏行的混沌 / The Crawling Chaos](Lovecraft/The Crawling Chaos.md)
* [伊格的诅咒 / The Curse of Yig](Lovecraft/The Curse of Yig.md)
* [达贡 / Dagon](Lovecraft/Dagon.md)
* [聋，哑，瞎 / Deaf, Dumb, and Blind](Lovecraft/Deaf, Dumb, and Blind.md)
* [后裔 / The Descendant](Lovecraft/The Descendant.md)
* [阿隆佐·泰普尔的日记 / The Diary of Alonzo Typer](Lovecraft/The Diary of Alonzo Typer.md)
* [掘墓 / The Disinterment](Lovecraft/The Disinterment.md)
* [降临在萨尔纳斯的灾殃 / The Doom That Came to Sarnath](Lovecraft/The Doom That Came to Sarnath.md)
* [秘境卡达斯梦寻记 / The Dream-Quest of Unknown Kadath](Lovecraft/The Dream-Quest of Unknown Kadath.md)
* [魔女屋中之梦 / The Dreams in the Witch House](Lovecraft/The Dreams in the Witch House.md)
* [敦威治恐怖事件 / The Dunwich Horror](Lovecraft/The Dunwich Horror.md)
* [电刑器 / The Electric Executioner](Lovecraft/The Electric Executioner.md)
* [邪恶的教士 / The Evil Clergyman](Lovecraft/The Evil Clergyman.md)
* [来自遗忘 / Ex Oblivione](Lovecraft/Ex Oblivione.md)
* [关于已故亚瑟·杰尔敏及其家系的事实 / Facts Concerning the Late Arthur Jermyn and His Family](Lovecraft/Facts Concerning the Late Arthur Jermyn and His Family.md)
* [魔宴 / The Festival](Lovecraft/The Festival.md)
* [自外而来 / From Beyond](Lovecraft/From Beyond.md)
* [噬鬼者 / The Ghost-Eater](Lovecraft/The Ghost-Eater.md)
* [绿色草原 / The Green Meadow](Lovecraft/The Green Meadow.md)
* [夜魔 / The Haunter of the Dark](Lovecraft/The Haunter of the Dark.md)
* [他 / He](Lovecraft/He.md)
* [尸体复活者赫伯特·威斯特 / Herbert West – Reanimator](Lovecraft/Herbert West – Reanimator.md)
* [《死灵之书》的历史 / History of the Necronomicon](Lovecraft/History of the Necronomicon.md)
* [巫兽的宝藏 / The Hoard of the Wizard-Beast](Lovecraft/The Hoard of the Wizard-Beast.md)
* [马丁海滩的怪物 / The Horror at Martin's Beach](Lovecraft/The Horror at Martin's Beach.md)
* [雷德胡克的恐怖 / The Horror at Red Hook](Lovecraft/The Horror at Red Hook.md)
* [墓园里的恐怖 / The Horror in the Burying-Ground](Lovecraft/The Horror in the Burying-Ground.md)
* [蜡像馆惊魂 / The Horror in the Museum](Lovecraft/The Horror in the Museum.md)
* [猎犬 / The Hound](Lovecraft/The Hound.md)
* [休普诺斯 / Hypnos](Lovecraft/Hypnos.md)
* [伊比德 / Ibid](Lovecraft/Ibid.md) -->
* [地窖中 / In the Vault](Lovecraft/In-the-Vault.md)

<!--

* [厄瑞克斯之墙 / In the Walls of Eryx](Lovecraft/In the Walls of Eryx.md)
* [最终测试 / The Last Test](Lovecraft/The Last Test.md)
* [小玻璃瓶 / The Little Glass Bottle](Lovecraft/The Little Glass Bottle.md)
* [可爱的死者 / The Loved Dead](Lovecraft/The Loved Dead.md)
* [潜伏的恐惧 / The Lurking Fear](Lovecraft/The Lurking Fear.md)
* [石像 / The Man of Stone](Lovecraft/The Man of Stone.md)
* [美杜莎的卷发 / Medusa's Coil](Lovecraft/Medusa's Coil.md)
* [记忆 / Memory](Lovecraft/Memory.md)
* [月之沼 / The Moon-Bog](Lovecraft/The Moon-Bog.md)
* [丘 / The Mound](Lovecraft/The Mound.md)
* [埃里奇·赞之曲 / The Music of Erich Zann](Lovecraft/The Music of Erich Zann.md)
* [神秘船 / The Mysterious Ship](Lovecraft/The Mysterious Ship.md)
* [墓园之谜 / The Mystery of the Grave-Yard](Lovecraft/The Mystery of the Grave-Yard.md)
* [无名都市 / The Nameless City](Lovecraft/The Nameless City.md)
* [夜之洋 / The Night Ocean](Lovecraft/The Night Ocean.md)
* [奈亚拉托提普 / Nyarlathotep](Lovecraft/Nyarlathotep.md)
* [老臭虫 / Old Bugs](Lovecraft/Old Bugs.md)
* [蕃神 / The Other Gods](Lovecraft/The Other Gods.md)
* [超越万古 / Out of the Aeons](Lovecraft/Out of the Aeons.md)
* [异乡人 / The Outsider](Lovecraft/The Outsider.md)
* [皮克曼的模特 / Pickman's Model](Lovecraft/Pickman's Model.md)
-->
* [屋中画 / The Picture in the House](/HPL/The-Picture-in-the-House.md)

<!--
* [诗与诸神 / Poetry and the Gods](Lovecraft/Poetry and the Gods.md)
* [北极星 / Polaris](Lovecraft/Polaris.md)
* [伊拉农的探求 / The Quest of Iranon](Lovecraft/The Quest of Iranon.md)
* [墙中之鼠 / The Rats in the Walls](Lovecraft/The Rats in the Walls.md)
* [回忆塞缪尔·约翰逊博士 / A Reminiscence of Dr. Samuel Johnson](Lovecraft/A Reminiscence of Dr. Samuel Johnson.md)
* [隐秘的洞穴，或约翰·李的冒险 / The Secret Cave or John Lees Adventure](Lovecraft/The Secret Cave or John Lees Adventure.md)
* [超越时间之影 / The Shadow Out of Time](Lovecraft/The Shadow Out of Time.md)
* [印斯茅斯之影 / The Shadow Over Innsmouth](Lovecraft/The Shadow Over Innsmouth.md)
* [畏避之屋 / The Shunned House](Lovecraft/The Shunned House.md)
* [银钥匙 / The Silver Key](Lovecraft/The Silver Key.md)
* [诛杀怪物 / The Slaying of the Monster](Lovecraft/The Slaying of the Monster.md)
* [兰道夫·卡特的供述 / The Statement of Randolph Carter](Lovecraft/The Statement of Randolph Carter.md)
* [雾中怪屋 / The Strange High House in the Mist](Lovecraft/The Strange High House in the Mist.md)
* [道路 / The Street](Lovecraft/The Street.md)
* [甜美的艾门嘉德 / Sweet Ermengarde](Lovecraft/Sweet Ermengarde.md)
* [神殿 / The Temple](Lovecraft/The Temple.md)
* [可怕的老人 / The Terrible Old Man](Lovecraft/The Terrible Old Man.md)
* [月下之物 / The Thing in the Moonlight](Lovecraft/The Thing in the Moonlight.md)
* [门口的东西 / The Thing on the Doorstep](Lovecraft/The Thing on the Doorstep.md)
* [穿越银匙之门 / Through the Gates of the Silver Key](Lovecraft/Through the Gates of the Silver Key.md)
* [直至诸海…… / Till A' the Seas](Lovecraft/Till A' the Seas.md)
* [坟墓 / The Tomb](Lovecraft/The Tomb.md)
* [胡安·罗梅洛的变貌 / The Transition of Juan Romero](Lovecraft/The Transition of Juan Romero.md)
* [圈套 / The Trap](Lovecraft/The Trap.md)
* [树 / The Tree](Lovecraft/The Tree.md)
* [山上的树 / The Tree on the Hill](Lovecraft/The Tree on the Hill.md)
* [两只黑瓶 / Two Black Bottles](Lovecraft/Two Black Bottles.md)
* [金字塔下 / Under the Pyramids](Lovecraft/Under the Pyramids.md)
* [不可名状 / The Unnamable](Lovecraft/The Unnamable.md)
* [远古的民族 / The Very Old Folk](Lovecraft/The Very Old Folk.md)
* [月光下 / What the Moon Brings](Lovecraft/What the Moon Brings.md)
* [暗夜呢喃 / The Whisperer in Darkness](Lovecraft/The Whisperer in Darkness.md)
* [白船 / The White Ship](Lovecraft/The White Ship.md)
* [有翼死神 / Winged Death](Lovecraft/Winged Death.md)
* [怪奇小说创作笔记 / Notes on Writing Weird Fiction](Lovecraft/Notes on Writing Weird Fiction.md)
* [文学中的超自然恐怖 / Supernatural Horror in Literature](Lovecraft/Supernatural Horror in Literature.md)
-->

<!-- 此列表来自玖羽: http://trow.cc/board/index.php?showtopic=19824 -->

     */
    // 以edelwiss的小说列表顺序
    {
        title: "The Picture in the House",
        title_zh: "屋中画",
        prefix: "HPL",

        url: "http://trow.cc/board/showtopic=24399",
        selector: "#post-149586",
    },


]

export const download_list = [

    download_list_HPL

].reduce(function (mem, v) {
    return mem.concat(v);
}, []);