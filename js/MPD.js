const newsData = [
  {
    id: 10001,
    category: 'protagonist',
    date: '2025-05-21',
    title: `江户川柯南（江戸川コナン，Edogawa Konan）`,
    desc: `初登场时6岁，在《计时引爆摩天楼》中过生日后7岁，名侦探柯南主角，侦探，少年侦探团实际领导者，原是知名高中生侦探工藤新一，被琴酒灌下APTX-4869变成小学生，为避免身份曝光化名江户川柯南寄住在毛利家，现就读于帝丹小学1年B班，调查黑衣组织并寻找恢复自己身体的方法。`,
    link: 'https://www.conanpedia.com/%E6%B1%9F%E6%88%B7%E5%B7%9D%E6%9F%AF%E5%8D%97',
    img: 'https://www.conanpedia.com/images/d/d8/CHARACTER_LIST_%E6%B1%9F%E6%88%B7%E5%B7%9D%E6%9F%AF%E5%8D%97.png'
  },
  {
    id: 10002,
    category: 'protagonist',
    date: '2025-05-21',
    title: `工藤新一（工藤新一，Kudō Shin'ichi）`,
    desc: `初登场时16岁，在《计时引爆摩天楼》中过生日后17岁，名侦探柯南主角，帝丹高中2年B班学生，知名高中生侦探，工藤优作与工藤有希子的独子，黑羽快斗的堂兄弟，毛利兰的青梅竹马兼男友，被称为“日本警察的救世主”、“平成年代的福尔摩斯现改称令和”，并与平次共称“关东的工藤”“关西的服部”。`,
    link: 'https://www.conanpedia.com/%E5%B7%A5%E8%97%A4%E6%96%B0%E4%B8%80',
    img: 'https://www.conanpedia.com/images/4/43/CHARACTER_LIST_%E5%B7%A5%E8%97%A4%E6%96%B0%E4%B8%80.png'
  },
  {
    id: 10003,
    category: 'protagonist',
    date: '2025-05-21',
    title: `毛利兰（毛利蘭，Mōri Ran）`,
    desc: `16岁，名侦探柯南女主角，帝丹高中2年B班学生，空手道部主将兼关东空手道大赛冠军，毛利小五郎与妃英理的独女，工藤新一的青梅竹马兼女友。`,
    link: 'https://www.conanpedia.com/%E6%AF%9B%E5%88%A9%E5%85%B0',
    img: 'https://www.conanpedia.com/images/1/15/CHARACTER_LIST_%E6%AF%9B%E5%88%A9%E5%85%B0.png'
  },
  {
    id: 10004,
    category: 'protagonist',
    date: '2025-05-21',
    title: `毛利小五郎（毛利小五郎，Mōri Kogorō）`,
    desc: `38岁，原警视厅刑事部搜查一课强行犯搜查三系刑警，警衔为巡查部长，经营毛利侦探事务所的知名侦探，妃英理的丈夫，毛利兰的父亲，因经常被柯南麻醉破案，被称为“沉睡的小五郎”。`,
    link: 'https://www.conanpedia.com/%E6%AF%9B%E5%88%A9%E5%B0%8F%E4%BA%94%E9%83%8E',
    img: 'https://www.conanpedia.com/images/4/4a/CHARACTER_LIST_%E6%AF%9B%E5%88%A9%E5%B0%8F%E4%BA%94%E9%83%8E.png'
  },
  {
    id: 10005,
    category: 'protagonist',
    date: '2025-05-21',
    title: `阿笠博士（阿笠博士，Agasa Hiroshi）`,
    desc: `初登场时52岁，在《众目睽睽之下的码头惨剧》中过生日后53岁，发明家，工藤新一的邻居，工藤优作与寺井黄之助的老相识，少年侦探团的协助者，芙莎绘·坎贝尔·木之下的初恋，自称“天才发明家”。`,
    link: 'https://www.conanpedia.com/%E9%98%BF%E7%AC%A0%E5%8D%9A%E5%A3%AB',
    img: 'https://www.conanpedia.com/images/f/fc/CHARACTER_LIST_%E9%98%BF%E7%AC%A0%E5%8D%9A%E5%A3%AB.png'
  },
  {
    id: 10006,
    category: 'protagonist',
    date: '2025-05-21',
    title: `灰原哀（灰原哀，Haibara Ai）`,
    desc: `约7岁，原是黑衣组织科学家宫野志保、代号雪莉，因宫野明美之死，向组织抗议被囚禁，服下APTX-4869变成小学生后被阿笠博士收养，现化名灰原哀并就读于帝丹小学1年B班。`,
    link: 'https://www.conanpedia.com/%E7%81%B0%E5%8E%9F%E5%93%80',
    img: 'https://www.conanpedia.com/images/8/8d/CHARACTER_LIST_%E7%81%B0%E5%8E%9F%E5%93%80.png'
  },
  {
    id: 10007,
    category: 'protagonist',
    date: '2025-05-21',
    title: `吉田步美（吉田歩美，Yoshida Ayumi）`,
    desc: `7岁，帝丹小学1年B班，少年侦探团成员。`,
    link: 'https://www.conanpedia.com/%E5%90%89%E7%94%B0%E6%AD%A5%E7%BE%8E',
    img: 'https://www.conanpedia.com/images/2/2a/CHARACTER_LIST_%E5%90%89%E7%94%B0%E6%AD%A5%E7%BE%8E.png'
  },
  {
    id: 10008,
    category: 'protagonist',
    date: '2025-05-21',
    title: `圆谷光彦（円谷光彦，Tsuburaya Mitsuhiko）`,
    desc: `7岁，帝丹小学1年B班，少年侦探团成员，圆谷朝美的弟弟。`,
    link: 'https://www.conanpedia.com/%E5%9C%86%E8%B0%B7%E5%85%89%E5%BD%A6',
    img: 'https://www.conanpedia.com/images/8/83/CHARACTER_LIST_%E5%9C%86%E8%B0%B7%E5%85%89%E5%BD%A6.png'
  },
  {
    id: 10009,
    category: 'protagonist',
    date: '2025-05-21',
    title: `小岛元太（小嶋元太，Kojima Genta）`,
    desc: `7岁，帝丹小学1年B班，自称少年侦探团团长，小岛元次的独子。`,
    link: 'https://www.conanpedia.com/%E5%B0%8F%E5%B2%9B%E5%85%83%E5%A4%AA',
    img: 'https://www.conanpedia.com/images/7/71/CHARACTER_LIST_%E5%B0%8F%E5%B2%9B%E5%85%83%E5%A4%AA.png'
  },
  {
    id: 10010,
    category: 'protagonist',
    date: '2025-05-21',
    title: `铃木园子（鈴木園子，Suzuki Sonoko）`,
    desc: `17岁，帝丹高中2年B班学生，铃木财团二千金，网球部成员，铃木史郎与铃木朋子的次女，铃木绫子的妹妹，京极真的女友。`,
    link: 'https://www.conanpedia.com/%E9%93%83%E6%9C%A8%E5%9B%AD%E5%AD%90',
    img: 'https://www.conanpedia.com/images/f/fe/CHARACTER_LIST_%E9%93%83%E6%9C%A8%E5%9B%AD%E5%AD%90.png'
  },
  {
    id: 10011,
    category: 'protagonist',
    date: '2025-05-21',
    title: `服部平次（服部平次，Hattori Heiji）`,
    desc: `17岁，改方学园高中2年级学生，知名高中生侦探，剑道部部长，服部平藏与服部静华的独子，远山和叶的青梅竹马兼男友，并与新一共称“关西的服部”“关东的工藤”。`,
    link: 'https://www.conanpedia.com/%E6%9C%8D%E9%83%A8%E5%B9%B3%E6%AC%A1',
    img: 'https://www.conanpedia.com/images/2/2b/CHARACTER_LIST_%E6%9C%8D%E9%83%A8%E5%B9%B3%E6%AC%A1.png'
  },
  {
    id: 10012,
    category: 'protagonist',
    date: '2025-05-21',
    title: `远山和叶（遠山和葉，Tōyama Kazuha）`,
    desc: `17岁，改方学园高中2年级学生，合气道二段兼歌牌部成员，远山银司郎的独女，服部平次的青梅竹马兼女友。`,
    link: 'https://www.conanpedia.com/%E8%BF%9C%E5%B1%B1%E5%92%8C%E5%8F%B6',
    img: 'https://www.conanpedia.com/images/f/fb/%E8%BF%9C%E5%B1%B1%E5%92%8C%E5%8F%B6.png'
  },
  {
    id: 10013,
    category: 'protagonist',
    date: '2025-05-21',
    title: `世良真纯（世良真純，Sera Masumi）`,
    desc: `约16-17岁，帝丹高中2年B班学生，侦探，赤井务武与赤井玛丽的长女，赤井秀一和羽田秀吉的妹妹。`,
    link: 'https://www.conanpedia.com/%E4%B8%96%E8%89%AF%E7%9C%9F%E7%BA%AF',
    img: 'https://www.conanpedia.com/images/8/8e/CHARACTER_LIST_%E4%B8%96%E8%89%AF%E7%9C%9F%E7%BA%AF_1.png'
  },
  {
    id: 10014,
    category: 'protagonist',
    date: '2025-05-21',
    title: `赤井秀一（赤井秀一，Akai Shūichi）`,
    desc: `32岁，化名诸星大，代号黑麦，FBI搜查官兼狙击手，曾潜伏在黑衣组织的卧底，赤井务武与赤井玛丽的长子，羽田秀吉与世良真纯的大哥，宫野明美与宫野志保的表亲，詹姆斯·布莱克的下属，茱蒂·斯泰琳的前男友兼同事，安德雷·卡迈尔的同事，琴酒的宿敌。`,
    link: 'https://www.conanpedia.com/%E8%B5%A4%E4%BA%95%E7%A7%80%E4%B8%80',
    img: 'https://www.conanpedia.com/images/a/a3/CHARACTER_LIST_%E8%B5%A4%E4%BA%95%E7%A7%80%E4%B8%80_1.png'
  },
  {
    id: 10015,
    category: 'protagonist',
    date: '2025-05-21',
    title: `安室透（安室透，Amuro Tōru）`,
    desc: `29岁，本名降谷零，代号波本，警察厅警备局警备企划课“零”的公安警察，警衔为警部，波洛咖啡厅服务员，私家侦探，潜伏在黑衣组织的卧底，与松田、萩原、景光、伊达为同期毕业生兼好友，朗姆与黑田兵卫的下属，风见裕也的上级，榎本梓的同事，毛利小五郎的大徒弟，被称为“秘密主义者”。`,
    link: 'https://www.conanpedia.com/%E5%AE%89%E5%AE%A4%E9%80%8F',
    img: 'https://www.conanpedia.com/images/4/44/CHARACTER_LIST_%E9%99%8D%E8%B0%B7%E9%9B%B6.png'
  },
  {
    id: 10016,
    category: 'protagonist',
    date: '2025-05-21',
    title: `怪盗基德（怪盗キッド，Kaitō Kiddo）`,
    desc: `怪盗魔术师，江户川柯南的对手兼伙伴，白马探的对手，中森银三、茶木神太郎与铃木次郎吉的抓捕对象，国际犯罪代号1412，被称为“日本的亚森·罗宾”、“平成的鲁邦”、“世纪末的魔术师”、“月光下的魔术师”与“令和的魔术师”。来自《魔术快斗》，第一代的真实身份是黑羽盗一，第二代的真实身份是黑羽快斗。`,
    link: 'https://www.conanpedia.com/%E6%80%AA%E7%9B%97%E5%9F%BA%E5%BE%B7',
    img: 'https://www.conanpedia.com/images/7/7b/CHARACTER_LIST_%E6%80%AA%E7%9B%97%E5%9F%BA%E5%BE%B7.png'
  },
  {
    id: 10017,
    category: 'protagonist',
    date: '2025-05-21',
    title: `工藤优作（工藤優作，Kudō Yūsaku）`,
    desc: `世界首屈一指的推理小说家，知名侦探，工藤有希子的丈夫，工藤新一的父亲，黑羽盗一的双胞胎弟弟兼对手，阿笠博士和目暮十三的老相识。`,
    link: 'https://www.conanpedia.com/%E5%B7%A5%E8%97%A4%E4%BC%98%E4%BD%9C',
    img: 'https://www.conanpedia.com/images/d/db/CHARACTER_LIST_%E5%B7%A5%E8%97%A4%E4%BC%98%E4%BD%9C.png'
  },
  {
    id: 10018,
    category: 'protagonist',
    date: '2025-05-21',
    title: `工藤有希子（工藤有希子，Kudō Yukiko）`,
    desc: `37岁，旧姓藤峰，前演员，工藤优作的妻子，工藤新一的母亲，黑羽盗一的徒弟，贝尔摩德的好友，山村操的偶像，自称“暗夜男爵夫人”，高中时期被称为“帝丹公主”，并与妃英理争夺“帝丹小姐”的宝座。`,
    link: 'https://www.conanpedia.com/%E5%B7%A5%E8%97%A4%E6%9C%89%E5%B8%8C%E5%AD%90',
    img: 'https://www.conanpedia.com/images/b/bd/%E5%B7%A5%E8%97%A4%E6%9C%89%E5%B8%8C%E5%AD%90.png'
  },
  {
    id: 10019,
    category: 'protagonist',
    date: '2025-05-21',
    title: `冲矢昴（沖矢昴，Okiya Subaru）`,
    desc: `27岁，东都大学工科研究生，工藤家房客，少年侦探团的伙伴，阿笠博士的朋友。真实身份是FBI搜查官赤井秀一。`,
    link: 'https://www.conanpedia.com/%E5%86%B2%E7%9F%A2%E6%98%B4',
    img: 'https://www.conanpedia.com/images/d/dd/CHARACTER_LIST_%E5%86%B2%E7%9F%A2%E6%98%B4.png'
  },
  {
    id: 10020,
    category: 'protagonist',
    date: '2025-05-21',
    title: `妃英理（妃英理，Kisaki Eri）`,
    desc: `初登场时37岁，在《最糟糕的生日》中过生日后38岁，婚后姓毛利，知名律师，“妃法律事务所”创办人，毛利小五郎的妻子，毛利兰的母亲，在法律界和高中时期分别被称为“法庭女王”与“帝丹女王”，并与工藤有希子争夺“帝丹小姐”的宝座。`,
    link: 'https://www.conanpedia.com/%E5%A6%83%E8%8B%B1%E7%90%86',
    img: 'https://www.conanpedia.com/images/7/78/%E5%A6%83%E8%8B%B1%E7%90%86.png'
  },
  {
    id: 10021,
    category: 'protagonist',
    date: '2025-05-21',
    title: `栗山绿（栗山緑，Kuriyama Midori）`,
    desc: `妃英理的秘书。`,
    link: 'https://www.conanpedia.com/%E6%A0%97%E5%B1%B1%E7%BB%BF',
    img: 'https://www.conanpedia.com/images/a/af/CHARACTER_LIST_%E6%A0%97%E5%B1%B1%E7%BB%BF.png'
  },
  {
    id: 10022,
    category: 'protagonist',
    date: '2025-05-21',
    title: `榎本梓（榎本梓，Enomoto Azusa）`,
    desc: `23岁，波洛咖啡厅女服务员，安室透的同事，怪盗基德的忠实粉丝，自称“月下的侍者”。`,
    link: 'https://www.conanpedia.com/%E6%A6%8E%E6%9C%AC%E6%A2%93',
    img: 'https://www.conanpedia.com/images/e/ed/CHARACTER_Enomoto_Azusa.png'
  },
  {
    id: 10023,
    category: 'protagonist',
    date: '2025-05-21',
    title: `胁田兼则（脇田兼則，Wakita Kanenori）`,
    desc: `56岁，伊吕波寿司店厨师，万马券事件后成为毛利小五郎的二弟子。真实身份是黑衣组织二把手朗姆。`,
    link: 'https://www.conanpedia.com/%E8%83%81%E7%94%B0%E5%85%BC%E5%88%99',
    img: 'https://www.conanpedia.com/images/3/31/CHARACTER_LIST_%E8%83%81%E7%94%B0%E5%85%BC%E5%88%99.png'
  },
  {
    id: 10024,
    category: 'terrorist',
    date: '2025-05-21',
    title: `乌丸莲耶（烏丸蓮耶，Karasuma Renya）`,
    desc: `大富豪，黑衣组织Boss，半世纪前99岁高龄时对外宣称去世，被组织成员称为“那位大人”。`,
    link: 'https://www.conanpedia.com/%E4%B9%8C%E4%B8%B8%E8%8E%B2%E8%80%B6',
    img: 'https://www.conanpedia.com/images/8/8a/CHARACTER_LIST_%E4%B9%8C%E4%B8%B8%E8%8E%B2%E8%80%B6.png'
  },
  {
    id: 10025,
    category: 'terrorist',
    date: '2025-05-21',
    title: `朗姆（ラム，Rum）`,
    desc: `黑衣组织二把手，乌丸莲耶的亲信，库拉索与宾加的上级，现阶段以胁田兼则的身份在寿司店打工，以此调查毛利小五郎。`,
    link: 'https://www.conanpedia.com/%E6%9C%97%E5%A7%86',
    img: 'https://www.conanpedia.com/images/3/31/%E6%9C%97%E5%A7%86.png'
  },
  {
    id: 10026,
    category: 'terrorist',
    date: '2025-05-21',
    title: `琴酒（ジン，Gin）`,
    desc: `疑似原名黑泽阵，黑衣组织成员，负责重要交易、处决不合格成员与间谍，伏特加的上级，赤井秀一的宿敌，爱尔兰的仇人，导致工藤新一变小的元凶，杀害宫野明美的凶手。`,
    link: 'https://www.conanpedia.com/%E7%90%B4%E9%85%92',
    img: 'https://www.conanpedia.com/images/1/1e/CHARACTER_LIST_%E7%90%B4%E9%85%92.png'
  },
  {
    id: 10027,
    category: 'terrorist',
    date: '2025-05-21',
    title: `伏特加（ウォッカ，Vodka）`,
    desc: `疑似原名鱼冢三郎，黑衣组织成员，负责重要交易买卖，琴酒的部下。`,
    link: 'https://www.conanpedia.com/%E4%BC%8F%E7%89%B9%E5%8A%A0',
    img: 'https://www.conanpedia.com/images/7/77/CHARACTER_Vodka.png'
  },
  {
    id: 10028,
    category: 'terrorist',
    date: '2025-05-21',
    title: `贝尔摩德（ベルモット，Vermouth）`,
    desc: `外表年龄约29岁，本名莎朗·温亚德，现用名克莉丝·温亚德，黑衣组织成员，已息影的著名女演员，负责情报搜集与暗杀，乌丸莲耶最宠爱的成员，黑羽盗一的徒弟，工藤有希子的好友，被琴酒称为“秘密主义者”。`,
    link: 'https://www.conanpedia.com/%E8%B4%9D%E5%B0%94%E6%91%A9%E5%BE%B7',
    img: 'https://www.conanpedia.com/images/a/a3/CHARACTER_LIST_%E8%B4%9D%E5%B0%94%E6%91%A9%E5%BE%B7.png'
  },
  {
    id: 10029,
    category: 'terrorist',
    date: '2025-05-21',
    title: `基安蒂（キャンティ，Chianti）`,
    desc: `黑衣组织狙击手，科恩的搭档。`,
    link: 'https://www.conanpedia.com/%E5%9F%BA%E5%AE%89%E8%92%82',
    img: 'https://www.conanpedia.com/images/5/51/CHARACTER_LIST_%E5%9F%BA%E5%AE%89%E8%92%82.png'
  },
  {
    id: 10030,
    category: 'terrorist',
    date: '2025-05-21',
    title: `科恩（コルン，Korn）`,
    desc: `黑衣组织狙击手，基安蒂的搭档。`,
    link: 'https://www.conanpedia.com/%E7%A7%91%E6%81%A9',
    img: 'https://www.conanpedia.com/images/e/e1/CHARACTER_LIST_%E7%A7%91%E6%81%A9.png'
  },
  {
    id: 10031,
    category: 'terrorist',
    date: '2025-05-21',
    title: `宫野厚司（宮野厚司，Miyano Atsushi）`,
    desc: `17年前去世时约37岁，原白鸠制药员工、宫野诊所医生，前黑衣组织科学家，负责开发药物“APTX-4869”，宫野艾莲娜的丈夫，宫野明美与宫野志保的父亲，皮斯克的好友，死于组织实验室的意外火灾。`,
    link: 'https://www.conanpedia.com/%E5%AE%AB%E9%87%8E%E5%8E%9A%E5%8F%B8',
    img: 'https://www.conanpedia.com/images/1/1b/CHARACTER_LIST_%E5%AE%AB%E9%87%8E%E5%8E%9A%E5%8F%B8.png'
  },
  {
    id: 10032,
    category: 'terrorist',
    date: '2025-05-21',
    title: `宫野艾莲娜（宮野エレーナ，Miyano Elena）`,
    desc: `17年前去世时约31岁，原名世良艾莲娜，原宫野诊所医生，前黑衣组织科学家，负责开发药物“APTX-4869”，玛丽·世良的妹妹，宫野厚司的妻子，宫野明美与宫野志保的母亲，皮斯克的好友，降谷零的初恋，死于组织实验室的意外火灾。`,
    link: 'https://www.conanpedia.com/%E5%AE%AB%E9%87%8E%E8%89%BE%E8%8E%B2%E5%A8%9C',
    img: 'https://www.conanpedia.com/images/e/e4/CHARACTER_LIST_%E5%AE%AB%E9%87%8E%E8%89%BE%E8%8E%B2%E5%A8%9C.png'
  },
  {
    id: 10033,
    category: 'terrorist',
    date: '2025-05-21',
    title: `宫野明美（宮野明美，Miyano Akemi）`,
    desc: `约25岁，化名广田雅美，前黑衣组织外围成员，帝丹小学第19届毕业生，宫野厚司与宫野艾莲娜的长女，宫野志保的姐姐，赤井秀一的表妹兼前女友，以脱离组织为条件抢劫十亿日元，事后被琴酒杀害。`,
    link: 'https://www.conanpedia.com/%E5%AE%AB%E9%87%8E%E6%98%8E%E7%BE%8E',
    img: 'https://www.conanpedia.com/images/4/49/CHARACTER_LIST_%E5%AE%AB%E9%87%8E%E6%98%8E%E7%BE%8E.png'
  },
  {
    id: 10034,
    category: 'terrorist',
    date: '2025-05-21',
    title: `宫野志保（宮野志保，Miyano Shiho）`,
    desc: `18岁，原黑衣组织科学家，代号雪莉，负责开发药物“APTX-4869”，宫野厚司与宫野艾莲娜的次女，宫野明美的妹妹，在明美死后向组织抗议被囚禁，服下药物变成小学生模样并化名灰原哀。`,
    link: 'https://www.conanpedia.com/%E5%AE%AB%E9%87%8E%E5%BF%97%E4%BF%9D',
    img: 'https://www.conanpedia.com/images/3/3e/%E5%AE%AB%E9%87%8E%E5%BF%97%E4%BF%9D1.png'
  },
  {
    id: 10035,
    category: 'terrorist',
    date: '2025-05-21',
    title: `火伤赤井（火傷の男，Yakedo no Otoko）`,
    desc: `由波本和贝尔摩德假扮，用以试探FBI、灰原哀与世良真纯的对象。`,
    link: 'https://www.conanpedia.com/%E7%81%AB%E4%BC%A4%E8%B5%A4%E4%BA%95',
    img: 'https://www.conanpedia.com/images/8/8a/CHARACTER_LIST_%E7%81%AB%E4%BC%A4%E8%B5%A4%E4%BA%95.png'
  },
  {
    id: 10036,
    category: 'terrorist',
    date: '2025-05-21',
    title: `龙舌兰（テキーラ，Tequila）`,
    desc: `前黑衣组织成员，负责招募研发计算机软件的程序员，与满天堂员工交易时拿错箱子被炸死。`,
    link: 'https://www.conanpedia.com/%E9%BE%99%E8%88%8C%E5%85%B0',
    img: 'https://www.conanpedia.com/images/7/72/%E9%BE%99%E8%88%8C%E5%85%B0.png'
  },
  {
    id: 10037,
    category: 'terrorist',
    date: '2025-05-21',
    title: `皮斯克（ピスコ，Pisco）`,
    desc: `71岁，本名枡山宪三，前黑衣组织元老成员，汽车公司董事长，宫野夫妇的好友，被称为“财经界的大人物”，在杯户城市饭店执行暗杀任务时不慎暴露组织，而被琴酒处决。`,
    link: 'https://www.conanpedia.com/%E7%9A%AE%E6%96%AF%E5%85%8B',
    img: 'https://www.conanpedia.com/images/8/85/CHARACTER_LIST_%E7%9A%AE%E6%96%AF%E5%85%8B.png'
  },
  {
    id: 10038,
    category: 'terrorist',
    date: '2025-05-21',
    title: `卡尔瓦多斯（カルバドス，Calvados）`,
    desc: `前黑衣组织狙击手，贝尔摩德的迷恋者，被赤井秀一调侃为“军火商”，在满月对决协助贝尔摩德时被赤井秀一偷袭重伤后自杀。`,
    link: 'https://www.conanpedia.com/%E5%8D%A1%E5%B0%94%E7%93%A6%E5%A4%9A%E6%96%AF',
    img: 'https://www.conanpedia.com/images/e/ef/CHARACTER_LIST_%E5%8D%A1%E5%B0%94%E7%93%A6%E5%A4%9A%E6%96%AF.png'
  },
  {
    id: 10039,
    category: 'terrorist',
    date: '2025-05-21',
    title: `爱尔兰（アイリッシュ，Irish）`,
    desc: `前黑衣组织成员，皮斯克的仰慕者，在调查卧底名单存储卡的下落时不慎暴露，而被基安蒂处决。`,
    link: 'https://www.conanpedia.com/%E7%88%B1%E5%B0%94%E5%85%B0',
    img: 'https://www.conanpedia.com/images/b/bd/CHARACTER_LIST_%E7%88%B1%E5%B0%94%E5%85%B0.png'
  },
  {
    id: 10040,
    category: 'terrorist',
    date: '2025-05-21',
    title: `库拉索（キュラソー，Curaçao）`,
    desc: `前黑衣组织成员，朗姆的心腹之一，侦探团三人的朋友，在盗取间谍名单时意外失忆并在恢复记忆后背叛组织，最后为保护侦探团三人被摩天轮辗毙身亡。`,
    link: 'https://www.conanpedia.com/%E5%BA%93%E6%8B%89%E7%B4%A2',
    img: 'https://www.conanpedia.com/images/d/de/%E5%BA%93%E6%8B%89%E7%B4%A2.png'
  },
  {
    id: 10041,
    category: 'terrorist',
    date: '2025-05-21',
    title: `宾加（ピンガ，Pinga）`,
    desc: `化名格蕾丝，前黑衣组织成员，朗姆的心腹之一，五年前以法国工程师的身份潜入国际刑警后加入太平洋浮标的核心团队，协助盗取老幼认证系统并绑架灰原哀，最后被琴酒暗算命丧在潜艇自爆中。`,
    link: 'https://www.conanpedia.com/%E5%AE%BE%E5%8A%A0',
    img: 'https://www.conanpedia.com/images/d/d4/%E5%AE%BE%E5%8A%A0.png'
  },
  {
    id: 10042,
    category: 'terrorist',
    date: '2025-05-21',
    title: `沼渊己一郎（沼淵己一郎，Numabuchi Kiichirō）`,
    desc: `原黑衣组织外围成员，连续杀人犯，现阶段被逮捕并等待死刑执行。`,
    link: 'https://www.conanpedia.com/%E6%B2%BC%E6%B8%8A%E5%B7%B1%E4%B8%80%E9%83%8E',
    img: 'https://www.conanpedia.com/images/2/2a/%E6%B2%BC%E6%B8%8A%E5%B7%B1%E4%B8%80%E9%83%8E.png'
  },
  {
    id: 10043,
    category: 'terrorist',
    date: '2025-05-21',
    title: `楠田陆道（楠田陸道，Kusuda Rikumichi）`,
    desc: `前黑衣组织外围成员，奉琴酒之命伪装病人在杯户中央医院调查基尔的下落，在身份暴露后的逃亡中开枪自杀。`,
    link: 'https://www.conanpedia.com/%E6%A5%A0%E7%94%B0%E9%99%86%E9%81%93',
    img: 'https://www.conanpedia.com/images/b/b1/CHARACTER_LIST_%E6%A5%A0%E7%94%B0%E9%99%86%E9%81%93.png'
  },
  {
    id: 10044,
    category: 'organization',
    date: '2025-05-21',
    title: `詹姆斯·布莱克（ジェイムズ·ブラック，James Black）`,
    desc: `FBI高级搜查官，赤井秀一、茱蒂·斯泰琳和安德雷·卡迈尔的上级。`,
    link: 'https://www.conanpedia.com/%E8%A9%B9%E5%A7%86%E6%96%AF%C2%B7%E5%B8%83%E8%8E%B1%E5%85%8B',
    img: 'https://www.conanpedia.com/images/5/56/CHARACTER_LIST_%E8%A9%B9%E5%A7%86%E6%96%AF%C2%B7%E5%B8%83%E8%8E%B1%E5%85%8B.png'
  },
  {
    id: 10045,
    category: 'organization',
    date: '2025-05-21',
    title: `茱蒂·斯泰琳（ジョディ·スターリング，Jodie Starling）`,
    desc: `28岁，化名茱蒂·圣提米利翁，FBI搜查官，前帝丹高中英语老师，詹姆斯·布莱克的下属，赤井秀一的前女友兼同事，安德雷·卡迈尔的同事，毛利兰和铃木园子的老师，贝尔摩德的仇人。`,
    link: 'https://www.conanpedia.com/%E8%8C%B1%E8%92%82%C2%B7%E6%96%AF%E6%B3%B0%E7%90%B3',
    img: 'https://www.conanpedia.com/images/4/40/CHARACTER_LIST_%E8%8C%B1%E8%92%82%C2%B7%E6%96%AF%E6%B3%B0%E7%90%B3.png'
  },
  {
    id: 10046,
    category: 'organization',
    date: '2025-05-21',
    title: `安德雷·卡迈尔（アンドレ·キャメル，Andre Camel）`,
    desc: `初登场时27岁，在《侦探团VS强盗团》中过生日后28岁，FBI搜查官，詹姆斯·布莱克的下属，赤井秀一和茱蒂·斯泰琳的同事。`,
    link: 'https://www.conanpedia.com/%E5%AE%89%E5%BE%B7%E9%9B%B7%C2%B7%E5%8D%A1%E8%BF%88%E5%B0%94',
    img: 'https://www.conanpedia.com/images/e/e5/CHARACTER_LIST_%E5%AE%89%E5%BE%B7%E9%9B%B7%C2%B7%E5%8D%A1%E8%BF%88%E5%B0%94.png'
  },
  {
    id: 10047,
    category: 'organization',
    date: '2025-05-21',
    title: `伊森·本堂（イーサン·本堂，Ethan Hondō）`,
    desc: `化名坪内、石井，前CIA谍报员，曾潜伏在黑衣组织的卧底，本堂瑛海与本堂瑛祐的父亲，4年前为保护身份暴露的瑛海自杀殉职。`,
    link: 'https://www.conanpedia.com/%E4%BC%8A%E6%A3%AE%C2%B7%E6%9C%AC%E5%A0%82',
    img: 'https://www.conanpedia.com/images/a/a1/CHARACTER_LIST_%E4%BC%8A%E6%A3%AE%C2%B7%E6%9C%AC%E5%A0%82.png'
  },
  {
    id: 10048,
    category: 'organization',
    date: '2025-05-21',
    title: `水无怜奈（水無怜奈，Mizunashi Rena）`,
    desc: `27岁，本名本堂瑛海，代号基尔，CIA谍报员、临时联络员，原日卖电视台主持人兼记者，潜伏在黑衣组织的卧底，伊森·本堂的长女，本堂瑛祐的姐姐，冲野洋子的好友，琴酒的下属。`,
    link: 'https://www.conanpedia.com/%E6%B0%B4%E6%97%A0%E6%80%9C%E5%A5%88',
    img: 'https://www.conanpedia.com/images/6/67/CHARACTER_LIST_%E6%B0%B4%E6%97%A0%E6%80%9C%E5%A5%88.png'
  },
  {
    id: 10049,
    category: 'organization',
    date: '2025-05-21',
    title: `赤井务武（赤井務武，Akai Tsutomu）`,
    desc: `MI6特工，赤井玛丽的丈夫，赤井秀一、羽田秀吉与世良真纯的父亲，羽田康晴的好友，17年前赴美调查羽田浩司案时失踪，现阶段生死不明。`,
    link: 'https://www.conanpedia.com/%E8%B5%A4%E4%BA%95%E5%8A%A1%E6%AD%A6',
    img: 'https://www.conanpedia.com/images/9/9c/CHARACTER_LIST_%E8%B5%A4%E4%BA%95%E5%8A%A1%E6%AD%A6.png'
  },
  {
    id: 10050,
    category: 'organization',
    date: '2025-05-21',
    title: `赤井玛丽（赤井メアリー，Akai Mearī）`,
    desc: `约53岁，原名玛丽·世良，外号领域外的妹妹，MI6特工，世良艾莲娜的姐姐，赤井务武的妻子，赤井秀一、羽田秀吉与世良真纯的母亲，几个月前在伦敦被假扮务武的贝尔摩德灌药变小，现阶段与世良返回日本试探柯南并争夺解药。`,
    link: 'https://www.conanpedia.com/%E8%B5%A4%E4%BA%95%E7%8E%9B%E4%B8%BD',
    img: 'https://www.conanpedia.com/images/0/01/CHARACTER_LIST_%E8%B5%A4%E4%BA%95%E7%8E%9B%E4%B8%BD.png'
  },
  {
    id: 10051,
    category: 'law',
    date: '2025-05-21',
    title: `小田切敏郎（小田切敏郎，Odagiri Toshirō）`,
    desc: `56岁，警视厅刑事部部长，警衔为警视长，居合斩高手，小田切敏也的父亲，毛利小五郎的前上级。`,
    link: 'https://www.conanpedia.com/%E5%B0%8F%E7%94%B0%E5%88%87%E6%95%8F%E9%83%8E',
    img: 'https://www.conanpedia.com/images/8/89/CHARACTER_LIST_%E5%B0%8F%E7%94%B0%E5%88%87%E6%95%8F%E9%83%8E.png'
  },
  {
    id: 10052,
    category: 'law',
    date: '2025-05-21',
    title: `松本清长（松本清長，Matsumoto Kiyonaga）`,
    desc: `54岁，前警视厅刑事部搜查一课管理官，警衔为警视，松本小百合的父亲，目暮十三的前上级，现阶段升至警视正。`,
    link: 'https://www.conanpedia.com/%E6%9D%BE%E6%9C%AC%E6%B8%85%E9%95%BF',
    img: 'https://www.conanpedia.com/images/a/a4/%E6%9D%BE%E6%9C%AC%E6%B8%85%E9%95%BF.png'
  },
  {
    id: 10053,
    category: 'law',
    date: '2025-05-21',
    title: `黑田兵卫（黒田兵衛，Kuroda Hyōe）`,
    desc: `50岁，前警察厅警备局警备企划课的公安警察，长野县警察本部刑事部搜查一课课长，警视厅刑事部搜查一课管理官，警衔为警视，目暮十三的现任上级，于17年前的秘密任务遭遇严重车祸重伤昏迷10年，苏醒后被暂时调至长野县，后回到东京接替松本清长的职务。`,
    link: 'https://www.conanpedia.com/%E9%BB%91%E7%94%B0%E5%85%B5%E5%8D%AB',
    img: 'https://www.conanpedia.com/images/f/fe/CHARACTER_LIST_%E9%BB%91%E7%94%B0%E5%85%B5%E5%8D%AB.png'
  },
  {
    id: 10054,
    category: 'law',
    date: '2025-05-21',
    title: `目暮十三（目暮十三，Megure Jūzō）`,
    desc: `约42岁，警视厅刑事部搜查一课强行犯搜查三系系长，警衔为警部，目暮绿的丈夫，中森银三的警校同期，白鸟任三郎的同事，毛利小五郎的前上级。`,
    link: 'https://www.conanpedia.com/%E7%9B%AE%E6%9A%AE%E5%8D%81%E4%B8%89',
    img: 'https://www.conanpedia.com/images/f/f8/CHARACTER_LIST_%E7%9B%AE%E6%9A%AE%E5%8D%81%E4%B8%89.png'
  },
  {
    id: 10055,
    category: 'law',
    date: '2025-05-21',
    title: `白鸟任三郎（白鳥任三郎，Shiratori Ninzaburō）`,
    desc: `约28岁，警视厅刑事部搜查一课强行犯搜查三系刑事，警衔为警部，职业组出身，绫小路文麿的警校同期，目暮十三的同事，小林澄子的青梅竹马兼男友。`,
    link: 'https://www.conanpedia.com/%E7%99%BD%E9%B8%9F%E4%BB%BB%E4%B8%89%E9%83%8E',
    img: 'https://www.conanpedia.com/images/f/f2/%E7%99%BD%E9%B8%9F%E4%BB%BB%E4%B8%89%E9%83%8E.png'
  },
  {
    id: 10056,
    category: 'law',
    date: '2025-05-21',
    title: `佐藤美和子（佐藤美和子，Satō Miwako）`,
    desc: `约28岁，警视厅刑事部搜查一课强行犯搜查三系刑事，警衔为警部补，佐藤正义的女儿，目暮十三的下属，高木涉的上级兼恋人，松田阵平的后辈、前同事兼搭档。`,
    link: 'https://www.conanpedia.com/%E4%BD%90%E8%97%A4%E7%BE%8E%E5%92%8C%E5%AD%90',
    img: 'https://www.conanpedia.com/images/e/e2/%E4%BD%90%E8%97%A4%E7%BE%8E%E5%92%8C%E5%AD%90.png'
  },
  {
    id: 10057,
    category: 'law',
    date: '2025-05-21',
    title: `高木涉（高木渉，Takagi Wataru）`,
    desc: `约26岁，警视厅刑事部搜查一课强行犯搜查三系刑警，警衔为巡查部长，目暮十三的下属，千叶和伸的同事，佐藤美和子的下属兼恋人，与前辈伊达航被称为“Wataru兄弟”。`,
    link: 'https://www.conanpedia.com/%E9%AB%98%E6%9C%A8%E6%B6%89',
    img: 'https://www.conanpedia.com/images/e/eb/CHARACTER_LIST_%E9%AB%98%E6%9C%A8%E6%B6%89.png'
  },
  {
    id: 10058,
    category: 'law',
    date: '2025-05-21',
    title: `千叶和伸（千葉和伸，Chiba Kazunobu）`,
    desc: `24岁，警视厅刑事部搜查一课强行犯搜查三系刑警，警衔为巡查部长，帝丹小学第20届毕业生，目暮十三的下属，高木涉的同事，三池苗子的青梅竹马、同班同学兼恋人。`,
    link: 'https://www.conanpedia.com/%E5%8D%83%E5%8F%B6%E5%92%8C%E4%BC%B8',
    img: 'https://www.conanpedia.com/images/a/a6/CHARACTER_LIST_%E5%8D%83%E5%8F%B6%E5%92%8C%E4%BC%B8.png'
  },
  {
    id: 10059,
    category: 'law',
    date: '2025-05-21',
    title: `佐藤正义（佐藤正義，Satō Masayoshi）`,
    desc: `前警视厅刑事部搜查一课强行犯搜查三系警部，佐藤美和子的父亲，18年前为拯救好友鹿野修二遭遇车祸殉职，死后被追授为警视正。`,
    link: 'https://www.conanpedia.com/%E4%BD%90%E8%97%A4%E6%AD%A3%E4%B9%89',
    img: 'https://www.conanpedia.com/images/a/ac/%E4%BD%90%E8%97%A4%E6%AD%A3%E4%B9%89.png'
  },
  {
    id: 10060,
    category: 'law',
    date: '2025-05-21',
    title: `弓长（弓長，Yuminaga）`,
    desc: `警视厅刑事部搜查一课纵火犯搜查一系长官，警衔为警部，毛利小五郎在纵火犯科系的上级，被称为“火灾老爹”。`,
    link: 'https://www.conanpedia.com/%E5%BC%93%E9%95%BF',
    img: 'https://www.conanpedia.com/images/2/2e/CHARACTER_LIST_%E5%BC%93%E9%95%BF.png'
  },
  {
    id: 10061,
    category: 'law',
    date: '2025-05-21',
    title: `茶木神太郎（茶木神太郎，Chaki Shintarō）`,
    desc: `49岁，警视厅刑事部搜查二课警视，中森银三的上级，以逮捕怪盗基德为终极目标。`,
    link: 'https://www.conanpedia.com/%E8%8C%B6%E6%9C%A8%E7%A5%9E%E5%A4%AA%E9%83%8E',
    img: 'https://www.conanpedia.com/images/4/44/%E8%8C%B6%E6%9C%A8%E7%A5%9E%E5%A4%AA%E9%83%8E.png'
  },
  {
    id: 10062,
    category: 'law',
    date: '2025-05-21',
    title: `中森银三（中森銀三，Nakamori Ginzō）`,
    desc: `初登场时41岁，现已42岁，警视厅刑事部搜查二课智能犯搜查系警部，茶木神太郎的下属，中森碧子的丈夫，中森青子的父亲，铃木次郎吉的合作伙伴，两代怪盗基德的对手。来自《魔术快斗》。`,
    link: 'https://www.conanpedia.com/%E4%B8%AD%E6%A3%AE%E9%93%B6%E4%B8%89',
    img: 'https://www.conanpedia.com/images/b/bd/%E4%B8%AD%E6%A3%AE%E9%93%B6%E4%B8%89.png'
  },
  {
    id: 10063,
    category: 'law',
    date: '2025-05-21',
    title: `百濑（百瀬，Momose）`,
    desc: `警视厅刑事部搜查三课警部，主管一般盗窃案。`,
    link: 'https://www.conanpedia.com/%E7%99%BE%E6%BF%91',
    img: 'https://www.conanpedia.com/images/7/7b/%E7%99%BE%E6%BF%91.png'
  },
  {
    id: 10064,
    category: 'law',
    date: '2025-05-21',
    title: `登米（トメさん，Tome-san）`,
    desc: `警视厅刑事部鉴识课鉴识官，负责验尸与收集案发现场的痕迹。`,
    link: 'https://www.conanpedia.com/%E7%99%BB%E7%B1%B3',
    img: 'https://www.conanpedia.com/images/2/23/CHARACTER_LIST_%E7%99%BB%E7%B1%B3.png'
  },
  {
    id: 10065,
    category: 'law',
    date: '2025-05-21',
    title: `宫本由美（宮本由美，Miyamoto Yumi）`,
    desc: `约28岁，警视厅交通部交通执行课女警，警衔为警部补，三池苗子的上级，佐藤美和子的好友，羽田秀吉的女友。`,
    link: 'https://www.conanpedia.com/%E5%AE%AB%E6%9C%AC%E7%94%B1%E7%BE%8E',
    img: 'https://www.conanpedia.com/images/e/ed/CHARACTER_LIST_%E5%AE%AB%E6%9C%AC%E7%94%B1%E7%BE%8E.png'
  },
  {
    id: 10066,
    category: 'law',
    date: '2025-05-21',
    title: `三池苗子（三池苗子，Miike Naeko）`,
    desc: `24岁，警视厅交通部交通执行课女警，警衔为巡查部长，帝丹小学第20届毕业生，宫本由美的下属，米原樱子的幼年玩伴兼同校同学，千叶和伸的青梅竹马、同班同学兼恋人。`,
    link: 'https://www.conanpedia.com/%E4%B8%89%E6%B1%A0%E8%8B%97%E5%AD%90',
    img: 'https://www.conanpedia.com/images/8/8d/%E4%B8%89%E6%B1%A0%E8%8B%97%E5%AD%90_1.png'
  },
  {
    id: 10067,
    category: 'law',
    date: '2025-05-21',
    title: `风见裕也（風見裕也，Kazami Yūya）`,
    desc: `30岁，化名飞田男六，警视厅公安部的公安警察，警衔为警部补，安室透的部下，冲野洋子的粉丝。`,
    link: 'https://www.conanpedia.com/%E9%A3%8E%E8%A7%81%E8%A3%95%E4%B9%9F',
    img: 'https://www.conanpedia.com/images/3/36/CHARACTER_LIST_%E9%A3%8E%E8%A7%81%E8%A3%95%E4%B9%9F.png'
  },
  {
    id: 10068,
    category: 'law',
    date: '2025-05-21',
    title: `伊织无我（伊織無我，Iori Muga）`,
    desc: `30岁，化名榊原与和田进一，原警察厅警备局警备企划课的公安警察，风见裕也的警校同期，大冈红叶的管家。`,
    link: 'https://www.conanpedia.com/%E4%BC%8A%E7%BB%87%E6%97%A0%E6%88%91',
    img: 'https://www.conanpedia.com/images/9/9a/CHARACTER_LIST_%E4%BC%8A%E7%BB%87%E6%97%A0%E6%88%91.png'
  },
  {
    id: 10069,
    category: 'law',
    date: '2025-05-21',
    title: `九条玲子（九条玲子，Kujō Reiko）`,
    desc: `33岁，东京地方检察厅检察官，妃英理的对手，被称为“司法界的麦当娜”。`,
    link: 'https://www.conanpedia.com/%E4%B9%9D%E6%9D%A1%E7%8E%B2%E5%AD%90',
    img: 'https://www.conanpedia.com/images/f/fb/CHARACTER_LIST_%E4%B9%9D%E6%9D%A1%E7%8E%B2%E5%AD%90.png'
  },
  {
    id: 10070,
    category: 'law',
    date: '2025-05-21',
    title: `服部平藏（服部平蔵，Hattori Heizō）`,
    desc: `大阪府警察本部长，警衔为警视监，剑道高手，服部静华的丈夫，服部平次的父亲，远山银司郎的上级、好友兼左右手。`,
    link: 'https://www.conanpedia.com/%E6%9C%8D%E9%83%A8%E5%B9%B3%E8%97%8F',
    img: 'https://www.conanpedia.com/images/0/08/CHARACTER_LIST_%E6%9C%8D%E9%83%A8%E5%B9%B3%E8%97%8F.png'
  },
  {
    id: 10071,
    category: 'law',
    date: '2025-05-21',
    title: `远山银司郎（遠山銀司郎，Tōyama Ginshirō）`,
    desc: `大阪府警察本部刑事部长，警衔为警视长，远山和叶的父亲，服部平藏的下属、好友兼左右手。`,
    link: 'https://www.conanpedia.com/%E8%BF%9C%E5%B1%B1%E9%93%B6%E5%8F%B8%E9%83%8E',
    img: 'https://www.conanpedia.com/images/b/bc/%E8%BF%9C%E5%B1%B1%E9%93%B6%E5%8F%B8%E9%83%8E.png'
  },
  {
    id: 10072,
    category: 'law',
    date: '2025-05-21',
    title: `大泷悟郎（大滝悟郎，Ōtaki Gorō）`,
    desc: `大阪府警察本部刑事部搜查一课刑警，警衔为警部，服部平藏与远山银司郎的下属兼好友。`,
    link: 'https://www.conanpedia.com/%E5%A4%A7%E6%B3%B7%E6%82%9F%E9%83%8E',
    img: 'https://www.conanpedia.com/images/0/00/%E5%A4%A7%E6%B3%B7%E6%82%9F%E9%83%8E.png'
  },
  {
    id: 10073,
    category: 'law',
    date: '2025-05-21',
    title: `绫小路文麿（綾小路文麿，Ayanokōji Fumimaro）`,
    desc: `28岁，京都府警察本部刑事部搜查一课刑警，警衔为警部，职业组出身，白鸟任三郎的警校同期，被称为“贵族警部”。`,
    link: 'https://www.conanpedia.com/%E7%BB%AB%E5%B0%8F%E8%B7%AF%E6%96%87%E9%BA%BF',
    img: 'https://www.conanpedia.com/images/a/a0/%E7%BB%AB%E5%B0%8F%E8%B7%AF%E6%96%87%E9%BA%BF.png'
  },
  {
    id: 10074,
    category: 'law',
    date: '2025-05-21',
    title: `诸伏高明（諸伏高明，Morofushi Takaaki）`,
    desc: `35岁，长野县警察本部刑事部搜查一课刑警，警衔为警部，诸伏景光的哥哥，黑田兵卫的前下属，大和敢助的好友兼竞争对手，上原由衣的同事，曾违抗上级命令被调往新野署，后再度调回原职。`,
    link: 'https://www.conanpedia.com/%E8%AF%B8%E4%BC%8F%E9%AB%98%E6%98%8E',
    img: 'https://www.conanpedia.com/images/9/90/CHARACTER_LIST_%E8%AF%B8%E4%BC%8F%E9%AB%98%E6%98%8E.png'
  },
  {
    id: 10075,
    category: 'law',
    date: '2025-05-21',
    title: `大和敢助（大和敢助，Yamato Kansuke）`,
    desc: `35岁，长野县警察本部刑事部搜查一课刑警，警衔为警部，黑田兵卫的前下属，诸伏高明的好友兼竞争对手，上原由衣的青梅竹马兼同事。`,
    link: 'https://www.conanpedia.com/%E5%A4%A7%E5%92%8C%E6%95%A2%E5%8A%A9',
    img: 'https://www.conanpedia.com/images/a/aa/CHARACTER_LIST_%E5%A4%A7%E5%92%8C%E6%95%A2%E5%8A%A9.png'
  },
  {
    id: 10076,
    category: 'law',
    date: '2025-05-21',
    title: `上原由衣（上原由衣，Uehara Yui）`,
    desc: `29岁，曾姓虎田，长野县警察本部刑事部搜查一课刑警，警衔为警部补，黑田兵卫的前下属，大和敢助的青梅竹马兼同事，诸伏高明的同事。`,
    link: 'https://www.conanpedia.com/%E4%B8%8A%E5%8E%9F%E7%94%B1%E8%A1%A3',
    img: 'https://www.conanpedia.com/images/8/8f/%E4%B8%8A%E5%8E%9F%E7%94%B1%E8%A1%A3.png'
  },
  {
    id: 10077,
    category: 'law',
    date: '2025-05-21',
    title: `山村操（山村ミサオ，Yamamura Misao）`,
    desc: `群马县警察本部刑事部搜查一课刑警，警衔为警部，山村美砂绘的孙子，诸伏景光的幼年玩伴，毛利小五郎的仰慕者，工藤有希子的粉丝，自称“阿山先生”，被称为“警察界第一麻瓜”。`,
    link: 'https://www.conanpedia.com/%E5%B1%B1%E6%9D%91%E6%93%8D',
    img: 'https://www.conanpedia.com/images/7/78/CHARACTER_LIST_%E5%B1%B1%E6%9D%91%E6%93%8D.png'
  },
  {
    id: 10078,
    category: 'law',
    date: '2025-05-21',
    title: `横沟参悟（横溝参悟，Yokomizo Sango）`,
    desc: `35岁，原埼玉县，现静冈县警察本部刑事部搜查一课刑警，警衔为警部，横沟重悟的双胞胎哥哥，毛利小五郎的仰慕者，自称“毛利的大弟子”。`,
    link: 'https://www.conanpedia.com/%E6%A8%AA%E6%B2%9F%E5%8F%82%E6%82%9F',
    img: 'https://www.conanpedia.com/images/6/6f/%E6%A8%AA%E6%B2%9F%E5%8F%82%E6%82%9F.png'
  },
  {
    id: 10079,
    category: 'law',
    date: '2025-05-21',
    title: `横沟重悟（横溝重悟，Yokomizo Jūgo）`,
    desc: `35岁，神奈川县警察本部刑事部搜查一课刑警，警衔为警部，横沟参悟的双胞胎弟弟，萩原千速的同事。`,
    link: 'https://www.conanpedia.com/%E6%A8%AA%E6%B2%9F%E9%87%8D%E6%82%9F',
    img: 'https://www.conanpedia.com/images/d/d3/%E6%A8%AA%E6%B2%9F%E9%87%8D%E6%82%9F.png'
  },
  {
    id: 10080,
    category: 'law',
    date: '2025-05-21',
    title: `萩原千速（萩原千速，Hagiwara Chihaya）`,
    desc: `31岁，神奈川县警察本部交通部第三交通机动队小队长，警衔为警部补，萩原研二的姐姐，横沟重悟的同事，松田阵平的初恋，大江忍的朋友。`,
    link: 'https://www.conanpedia.com/%E8%90%A9%E5%8E%9F%E5%8D%83%E9%80%9F',
    img: 'https://www.conanpedia.com/images/d/d8/CHARACTER_LIST_%E8%90%A9%E5%8E%9F%E5%8D%83%E9%80%9F.png'
  },
  {
    id: 10081,
    category: 'law',
    date: '2025-05-21',
    title: `西村京兵（西村京兵，Nishimura Kyōhē）`,
    desc: `北海道警察本部刑事部搜查一课刑警，警衔为警部。`,
    link: 'https://www.conanpedia.com/%E8%A5%BF%E6%9D%91%E4%BA%AC%E5%85%B5',
    img: 'https://www.conanpedia.com/images/1/1d/%E8%A5%BF%E6%9D%91%E4%BA%AC%E5%85%B5.png'
  },
  {
    id: 10082,
    category: 'law',
    date: '2025-05-21',
    title: `鬼冢八藏（鬼塚八蔵，Onidzuka Hachizō）`,
    desc: `约55岁，警视厅警察学校初任科鬼冢班教官，警校五人组的总教官；警衔为警部补。`,
    link: 'https://www.conanpedia.com/%E9%AC%BC%E5%86%A2%E5%85%AB%E8%97%8F',
    img: 'https://www.conanpedia.com/images/3/3d/CHARACTER_LIST_%E9%AC%BC%E5%86%A2%E5%85%AB%E8%97%8F.png'
  },
  {
    id: 10083,
    category: 'law',
    date: '2025-05-21',
    title: `诸伏景光（諸伏景光，Morofushi Hiromitsu）`,
    desc: `2-3年前去世时约26-27岁，代号苏格兰，前警视厅公安部的公安警察，曾潜伏在黑衣组织的卧底，与降谷、松田、萩原、伊达为同期毕业生兼好友，诸伏高明的弟弟，山村操的幼年玩伴，2年前12月7日卧底身份暴露为保护家人自杀殉职。`,
    link: 'https://www.conanpedia.com/%E8%AF%B8%E4%BC%8F%E6%99%AF%E5%85%89',
    img: 'https://www.conanpedia.com/images/8/85/CHARACTER_LIST_%E8%AF%B8%E4%BC%8F%E6%99%AF%E5%85%89.png'
  },
  {
    id: 10084,
    category: 'law',
    date: '2025-05-21',
    title: `松田阵平（松田阵平，Matsuda Jinpei）`,
    desc: `3年前去世时约26岁，前警视厅警备部机动队爆炸物处理班成员、警视厅刑事部搜查一课强行犯搜查三系刑警，警衔为巡查部长，与降谷、萩原、景光、伊达为同期毕业生兼好友，佐藤美和子的前辈、前同事兼搭档，萩原千速的初恋，3年前11月7日为传达另一处炸弹信息而殉职。`,
    link: 'https://www.conanpedia.com/%E6%9D%BE%E7%94%B0%E9%98%B5%E5%B9%B3',
    img: 'https://www.conanpedia.com/images/6/69/CHARACTER_LIST_%E6%9D%BE%E7%94%B0%E9%98%B5%E5%B9%B3.png'
  },
  {
    id: 10085,
    category: 'law',
    date: '2025-05-21',
    title: `萩原研二（萩原研二，Hagiwara Kenji）`,
    desc: `7年前去世时约22岁，前警视厅警备部机动队爆炸物处理班成员，与降谷、松田、景光、伊达为同期毕业生兼好友，萩原千速的弟弟，7年前11月7日在拆弹任务中遭犯人提前引爆炸弹而殉职。`,
    link: 'https://www.conanpedia.com/%E8%90%A9%E5%8E%9F%E7%A0%94%E4%BA%8C',
    img: 'https://www.conanpedia.com/images/f/f1/CHARACTER_LIST_%E8%90%A9%E5%8E%9F%E7%A0%94%E4%BA%8C.png'
  },
  {
    id: 10086,
    category: 'law',
    date: '2025-05-21',
    title: `伊达航（伊达航，Date Wataru）`,
    desc: `1年前去世时约28岁，前警视厅刑事部搜查一课强行犯搜查三系刑警，与降谷、松田、萩原、景光为同期毕业生兼好友，和后辈高木涉被称为“Wataru兄弟”，娜塔莉·来间的女友，1年前2月7日与高木办案时遭遇车祸殉职。`,
    link: 'https://www.conanpedia.com/%E4%BC%8A%E8%BE%BE%E8%88%AA',
    img: 'https://www.conanpedia.com/images/a/a3/CHARACTER_LIST_%E4%BC%8A%E8%BE%BE%E8%88%AA.png'
  },
  {
    id: 10087,
    category: 'protagonist',
    date: '2025-05-21',
    title: `冢本数美（塚本数美，Tsukamoto Kazumi）`,
    desc: `18岁，帝丹高中3年级学生，空手道部成员兼前主将，毛利兰的前辈。`,
    link: 'https://www.conanpedia.com/%E5%86%A2%E6%9C%AC%E6%95%B0%E7%BE%8E',
    img: 'https://www.conanpedia.com/images/3/3b/%E5%86%A2%E6%9C%AC%E6%95%B0%E7%BE%8E.png'
  },
  {
    id: 10088,
    category: 'protagonist',
    date: '2025-05-21',
    title: `本堂瑛祐（本堂瑛祐，Hondō Eisuke）`,
    desc: `17岁，原帝丹高中2年B班学生，前书法部成员，伊森·本堂的长子，本堂瑛海的弟弟。现阶段在美国留学并准备加入CIA。`,
    link: 'https://www.conanpedia.com/%E6%9C%AC%E5%A0%82%E7%91%9B%E7%A5%90',
    img: 'https://www.conanpedia.com/images/0/05/CHARACTER_LIST_%E6%9C%AC%E5%A0%82%E7%91%9B%E7%A5%90.png'
  },
  {
    id: 10089,
    category: 'protagonist',
    date: '2025-05-21',
    title: `中道（中道，Nakamichi）`,
    desc: `约16-17岁，帝丹高中2年B班学生，足球部成员。`,
    link: 'https://www.conanpedia.com/%E4%B8%AD%E9%81%93',
    img: 'https://www.conanpedia.com/images/e/ee/%E4%B8%AD%E9%81%93_1.png'
  },
  {
    id: 10090,
    category: 'protagonist',
    date: '2025-05-21',
    title: `京极真（京極真，Kyōgoku Makoto）`,
    desc: `18岁，原杯户高中3年级学生，铃木园子的男友，前空手道部主将，全日本空手道黑带冠军，拥有连胜400项大赛的记录，被称为“蹴击贵公子”和“冲撞王子”。现阶段在美国留学修行。`,
    link: 'https://www.conanpedia.com/%E4%BA%AC%E6%9E%81%E7%9C%9F',
    img: 'https://www.conanpedia.com/images/1/13/CHARACTER_LIST_%E4%BA%AC%E6%9E%81%E7%9C%9F.png'
  },
  {
    id: 10091,
    category: 'protagonist',
    date: '2025-05-21',
    title: `黑羽快斗（黒羽快斗，Kuroba Kaito）`,
    desc: `17岁，江古田高中2年B班学生，黑羽盗一与黑羽千影的独子，工藤新一的堂兄弟，中森青子的青梅竹马兼同学，白马探、小泉红子与桃井惠子的同学。来自《魔术快斗》，另一层身份是第二代怪盗基德。`,
    link: 'https://www.conanpedia.com/%E9%BB%91%E7%BE%BD%E5%BF%AB%E6%96%97',
    img: 'https://www.conanpedia.com/images/5/5f/%E9%BB%91%E7%BE%BD%E5%BF%AB%E6%96%97.png'
  },
  {
    id: 10092,
    category: 'protagonist',
    date: '2025-05-21',
    title: `中森青子（中森青子，Nakamori Aoko）`,
    desc: `17岁，江古田高中2年B班学生，中森银三的独女，黑羽快斗的青梅竹马兼同学，白马探、小泉红子与桃井惠子的同学。来自《魔术快斗》。`,
    link: 'https://www.conanpedia.com/%E4%B8%AD%E6%A3%AE%E9%9D%92%E5%AD%90',
    img: 'https://www.conanpedia.com/images/a/ad/%E4%B8%AD%E6%A3%AE%E9%9D%92%E5%AD%90.png'
  },
  {
    id: 10093,
    category: 'protagonist',
    date: '2025-05-21',
    title: `白马探（白馬探，Hakuba Saguru）`,
    desc: `17岁，江古田高中2年B班学生，侦探，白马警视总监的独子，黑羽快斗、中森青子、小泉红子与桃井惠子的同学，怪盗基德的对手。来自《魔术快斗》。`,
    link: 'https://www.conanpedia.com/%E7%99%BD%E9%A9%AC%E6%8E%A2',
    img: 'https://www.conanpedia.com/images/7/70/%E7%99%BD%E9%A9%AC%E6%8E%A2.png'
  },
  {
    id: 10094,
    category: 'protagonist',
    date: '2025-05-21',
    title: `冲田总司（沖田総司，Okita Sōshi）`,
    desc: `约16-17岁，京都泉心高中2年级学生，大冈红叶的同班同学，剑道部成员，服部平次的对手，暗恋铁刃的妹妹铁诸羽。来自《YAIBA》。`,
    link: 'https://www.conanpedia.com/%E5%86%B2%E7%94%B0%E6%80%BB%E5%8F%B8',
    img: 'https://www.conanpedia.com/images/7/70/%E5%86%B2%E7%94%B0%E6%80%BB%E5%8F%B8.png'
  },
  {
    id: 10095,
    category: 'protagonist',
    date: '2025-05-21',
    title: `大冈红叶（大岡紅葉，Ōoka Momiji）`,
    desc: `17岁，京都泉心高中2年级学生，冲田总司的同学，远山和叶的对手兼情敌，歌牌部成员，连续两年蝉联高中歌牌大赛的冠军，被称为“未来的女王”。`,
    link: 'https://www.conanpedia.com/%E5%A4%A7%E5%86%88%E7%BA%A2%E5%8F%B6',
    img: 'https://www.conanpedia.com/images/5/53/Momiji.png'
  },
  {
    id: 10096,
    category: 'protagonist',
    date: '2025-05-21',
    title: `植松龙司郎（植松竜司郎，Uematsu Ryūjirō）`,
    desc: `59岁，帝丹小学校长。`,
    link: 'https://www.conanpedia.com/%E6%A4%8D%E6%9D%BE%E9%BE%99%E5%8F%B8%E9%83%8E',
    img: 'https://www.conanpedia.com/images/4/41/%E6%A4%8D%E6%9D%BE%E9%BE%99%E5%8F%B8%E9%83%8E.png'
  },
  {
    id: 10097,
    category: 'protagonist',
    date: '2025-05-21',
    title: `小林澄子（小林澄子，Kobayashi Sumiko）`,
    desc: `26岁，帝丹小学1年B班班主任，第18届毕业生，自称少年侦探团顾问，白鸟任三郎的青梅竹马兼女友。`,
    link: 'https://www.conanpedia.com/%E5%B0%8F%E6%9E%97%E6%BE%84%E5%AD%90',
    img: 'https://www.conanpedia.com/images/3/33/%E5%B0%8F%E6%9E%97%E6%BE%84%E5%AD%90.png'
  },
  {
    id: 10098,
    category: 'protagonist',
    date: '2025-05-21',
    title: `若狭留美（若狭留美，Wakasa Rumi）`,
    desc: `37岁，帝丹小学1年B班副班主任。原为阿曼达·休斯的养女兼保镖蕾切尔·浅香。`,
    link: 'https://www.conanpedia.com/%E8%8B%A5%E7%8B%AD%E7%95%99%E7%BE%8E',
    img: 'https://www.conanpedia.com/images/9/94/%E8%8B%A5%E7%8B%AD%E7%95%99%E7%BE%8E.png'
  },
  {
    id: 10099,
    category: 'protagonist',
    date: '2025-05-21',
    title: `东尾玛利亚（東尾マリア，Higashio Maria）`,
    desc: `7岁，帝丹小学1年B班学生。`,
    link: 'https://www.conanpedia.com/%E4%B8%9C%E5%B0%BE%E7%8E%9B%E5%88%A9%E4%BA%9A',
    img: 'https://www.conanpedia.com/images/8/80/%E4%B8%9C%E5%B0%BE%E7%8E%9B%E5%88%A9%E4%BA%9A.png'
  },
  {
    id: 10100,
    category: 'protagonist',
    date: '2025-05-21',
    title: `坂本琢马（坂本琢馬，Sakamoto Takuma）`,
    desc: `7岁，帝丹小学1年B班学生。`,
    link: 'https://www.conanpedia.com/%E5%9D%82%E6%9C%AC%E7%90%A2%E9%A9%AC',
    img: 'https://www.conanpedia.com/images/4/4f/CHARACTER_LIST_%E5%9D%82%E6%9C%AC%E7%90%A2%E9%A9%AC.png'
  },
  {
    id: 10101,
    category: 'protagonist',
    date: '2025-05-21',
    title: `伊东惠（伊東めぐみ，Itō Megumi）`,
    desc: `7岁，帝丹小学1年级C班学生、玉之助一座旅行剧团演员，伊东玉之助的妹妹，江户川柯南的同年级同学。`,
    link: 'https://www.conanpedia.com/%E4%BC%8A%E4%B8%9C%E6%83%A0',
    img: 'https://www.conanpedia.com/images/2/23/CHARACTER_LIST_%E4%BC%8A%E4%B8%9C%E6%83%A0.png'
  },
  {
    id: 10102,
    category: 'protagonist',
    date: '2025-05-21',
    title: `铃木次郎吉（鈴木次郎吉，Suzuki Jirokichi）`,
    desc: `72岁，铃木财团顾问，铃木史郎的堂兄，铃木绫子与铃木园子的堂伯父，中森银三的合作伙伴，以擒拿怪盗基德为人生最重要的目标。`,
    link: 'https://www.conanpedia.com/%E9%93%83%E6%9C%A8%E6%AC%A1%E9%83%8E%E5%90%89',
    img: 'https://www.conanpedia.com/images/e/ea/%E9%93%83%E6%9C%A8%E6%AC%A1%E9%83%8E%E5%90%89.png'
  },
  {
    id: 10103,
    category: 'protagonist',
    date: '2025-05-21',
    title: `铃木史郎（鈴木史郎，Suzuki Shirō）`,
    desc: `51岁，铃木财团董事长，铃木朋子的丈夫，铃木绫子与铃木园子的父亲。`,
    link: 'https://www.conanpedia.com/%E9%93%83%E6%9C%A8%E5%8F%B2%E9%83%8E',
    img: 'https://www.conanpedia.com/images/3/34/%E9%93%83%E6%9C%A8%E5%8F%B2%E9%83%8E.png'
  },
  {
    id: 10104,
    category: 'protagonist',
    date: '2025-05-21',
    title: `铃木朋子（鈴木朋子，Suzuki Tomoko）`,
    desc: `43岁，铃木财团董事长夫人，铃木史郎的妻子，铃木绫子与铃木园子的母亲，十分热衷于抓住怪盗基德。`,
    link: 'https://www.conanpedia.com/%E9%93%83%E6%9C%A8%E6%9C%8B%E5%AD%90',
    img: 'https://www.conanpedia.com/images/e/ed/CHARACTER_LIST_%E9%93%83%E6%9C%A8%E6%9C%8B%E5%AD%90.png'
  },
  {
    id: 10105,
    category: 'protagonist',
    date: '2025-05-21',
    title: `铃木绫子（鈴木綾子，Suzuki Ayako）`,
    desc: `24岁，大学研究生，铃木财团大千金，铃木史郎与铃木朋子的长女，铃木园子的姐姐，富泽雄三的未婚妻。`,
    link: 'https://www.conanpedia.com/%E9%93%83%E6%9C%A8%E7%BB%AB%E5%AD%90',
    img: 'https://www.conanpedia.com/images/d/d0/%E9%93%83%E6%9C%A8%E7%BB%AB%E5%AD%901.png'
  },
  {
    id: 10106,
    category: 'protagonist',
    date: '2025-05-21',
    title: `新出智明（新出智明，Araide Tomoaki）`,
    desc: `25岁，新出医院医生兼帝丹高中校医，东京医科大学高材生，新出义辉的独子，新出阳子的继子，保本光的好友。`,
    link: 'https://www.conanpedia.com/%E6%96%B0%E5%87%BA%E6%99%BA%E6%98%8E',
    img: 'https://www.conanpedia.com/images/d/da/%E6%96%B0%E5%87%BA%E6%99%BA%E6%98%8E1.png'
  },
  {
    id: 10107,
    category: 'protagonist',
    date: '2025-05-21',
    title: `小仓功雅（小倉功雅，Ogura Katsumasa）`,
    desc: `49岁，小仓拉面店店主，“阎魔大王拉面”的发明者，曾在杯户町开店多年，后搬至米花町继续经营。`,
    link: 'https://www.conanpedia.com/%E5%B0%8F%E4%BB%93%E5%8A%9F%E9%9B%85',
    img: 'https://www.conanpedia.com/images/c/c6/%E5%B0%8F%E4%BB%93%E5%8A%9F%E9%9B%851.png'
  },
  {
    id: 10108,
    category: 'protagonist',
    date: '2025-05-21',
    title: `大桥彩代（大橋彩代，Ōhashi Sayo）`,
    desc: `28岁，小仓拉面店兼职女店员。`,
    link: 'https://www.conanpedia.com/%E5%A4%A7%E6%A1%A5%E5%BD%A9%E4%BB%A3',
    img: 'https://www.conanpedia.com/images/2/2c/%E5%A4%A7%E6%A1%A5%E5%BD%A9%E4%BB%A3.png'
  },
  {
    id: 10109,
    category: 'protagonist',
    date: '2025-05-21',
    title: `玉木裕次郎（玉木裕次郎，Tamaki Yūjirō）`,
    desc: `65岁，玉木书店店主，玉木一朗的父亲。`,
    link: 'https://www.conanpedia.com/%E7%8E%89%E6%9C%A8%E8%A3%95%E6%AC%A1%E9%83%8E',
    img: 'https://www.conanpedia.com/images/c/c0/%E7%8E%89%E6%9C%A8%E8%A3%95%E6%AC%A1%E9%83%8E.png'
  },
  {
    id: 10110,
    category: 'protagonist',
    date: '2025-05-21',
    title: `玉木一朗（玉木一朗，Tamaki Ichirō）`,
    desc: `35岁，玉木书店店员，玉木裕次郎的儿子。`,
    link: 'https://www.conanpedia.com/%E7%8E%89%E6%9C%A8%E4%B8%80%E6%9C%97',
    img: 'https://www.conanpedia.com/images/d/dd/%E7%8E%89%E6%9C%A8%E4%B8%80%E6%9C%97.png'
  },
  {
    id: 10111,
    category: 'protagonist',
    date: '2025-05-21',
    title: `吉川美知子（吉川美知子，Yoshikawa Michiko）`,
    desc: `27岁，玉木书店店员，玉木一朗的未婚妻。`,
    link: 'https://www.conanpedia.com/%E5%90%89%E5%B7%9D%E7%BE%8E%E7%9F%A5%E5%AD%90',
    img: 'https://www.conanpedia.com/images/c/cf/%E5%90%89%E5%B7%9D%E7%BE%8E%E7%9F%A5%E5%AD%90.png'
  },
  {
    id: 10112,
    category: 'protagonist',
    date: '2025-05-21',
    title: `金子圭太（金子圭太，Kaneko Keita）`,
    desc: `57岁，金子珠宝店店主，其经营的珠宝店经常遭遇抢劫。`,
    link: 'https://www.conanpedia.com/%E9%87%91%E5%AD%90%E5%9C%AD%E5%A4%AA',
    img: 'https://www.conanpedia.com/images/9/99/%E9%87%91%E5%AD%90%E5%9C%AD%E5%A4%AA.png'
  },
  {
    id: 10113,
    category: 'protagonist',
    date: '2025-05-21',
    title: `羽田浩司（羽田浩司，Haneda Kōji）`,
    desc: `17年前去世时28岁，职业将棋棋手，四冠王，羽田康晴与羽田市代的独子，羽田秀吉的义兄，阿曼达·休斯的偶像，17年前为保护浅香被朗姆殴打灌药致死。`,
    link: 'https://www.conanpedia.com/%E7%BE%BD%E7%94%B0%E6%B5%A9%E5%8F%B8',
    img: 'https://www.conanpedia.com/images/d/df/CHARACTER_LIST_%E7%BE%BD%E7%94%B0%E6%B5%A9%E5%8F%B8.png'
  },
  {
    id: 10114,
    category: 'protagonist',
    date: '2025-05-21',
    title: `羽田秀吉（羽田秀𠮷，Haneda Shūkichi）`,
    desc: `28岁，原姓赤井和世良，职业将棋棋手，六冠王，赤井务武与赤井玛丽的次子，赤井秀一的弟弟，世良真纯的二哥，羽田家养子，羽田浩司的义弟，宫本由美的男友。`,
    link: 'https://www.conanpedia.com/%E7%BE%BD%E7%94%B0%E7%A7%80%E5%90%89',
    img: 'https://www.conanpedia.com/images/b/b2/CHARACTER_Haneda_Shukichi.png'
  },
  {
    id: 10115,
    category: 'protagonist',
    date: '2025-05-21',
    title: `胜又力（勝又力，Katsumata Chikara）`,
    desc: `职业将棋棋手，羽田浩司与羽田秀吉的对手。`,
    link: 'https://www.conanpedia.com/%E8%83%9C%E5%8F%88%E5%8A%9B',
    img: 'https://www.conanpedia.com/images/7/7d/CHARACTER_Katsumata_Chikara.png'
  },
  {
    id: 10116,
    category: 'protagonist',
    date: '2025-05-21',
    title: `赤木英雄（赤木英雄，Akagi Hideo）`,
    desc: `19岁，米花高中毕业生，东京SPRIRTS队前锋，背号11，赤木守的哥哥，上村直树的队友兼同学，侦探团三人的偶像。`,
    link: 'https://www.conanpedia.com/%E8%B5%A4%E6%9C%A8%E8%8B%B1%E9%9B%84',
    img: 'https://www.conanpedia.com/images/3/3c/CHARACTER_%E8%B5%A4%E6%9C%A8%E8%8B%B1%E9%9B%84_1.png'
  },
  {
    id: 10117,
    category: 'protagonist',
    date: '2025-05-21',
    title: `上村直树（上村直樹，Uemura Naoki）`,
    desc: `约19岁，米花高中毕业生，东京SPRIRTS队前锋，背号9，赤木英雄的队友兼同学，侦探团三人的偶像。`,
    link: 'https://www.conanpedia.com/%E4%B8%8A%E6%9D%91%E7%9B%B4%E6%A0%91',
    img: 'https://www.conanpedia.com/images/3/33/CHARACTER_%E4%B8%8A%E6%9D%91%E7%9B%B4%E6%A0%91_1.png'
  },
  {
    id: 10118,
    category: 'protagonist',
    date: '2025-05-21',
    title: `比护隆佑（比護隆佑，Higo Ryūsuke）`,
    desc: `港南高中毕业生，BIG大阪队前锋，背号9，冲野洋子的学长，真田贵大的队友，灰原哀的偶像。`,
    link: 'https://www.conanpedia.com/%E6%AF%94%E6%8A%A4%E9%9A%86%E4%BD%91',
    img: 'https://www.conanpedia.com/images/3/32/CHARACTER_LIST_%E6%AF%94%E6%8A%A4%E9%9A%86%E4%BD%91.png'
  },
  {
    id: 10119,
    category: 'protagonist',
    date: '2025-05-21',
    title: `真田贵大（真田貴大，Sanada Takahiro）`,
    desc: `18岁，BIG大阪队替补前锋，背号19，比护隆佑的队友。`,
    link: 'https://www.conanpedia.com/%E7%9C%9F%E7%94%B0%E8%B4%B5%E5%A4%A7',
    img: 'https://www.conanpedia.com/images/d/de/%E7%9C%9F%E7%94%B0%E8%B4%B5%E5%A4%A7.png'
  },
  {
    id: 10120,
    category: 'protagonist',
    date: '2025-05-21',
    title: `黑羽盗一（黒羽盗一，Kuroba Tōichi）`,
    desc: `著名魔术师，黑羽千影的丈夫，黑羽快斗的父亲，工藤优作的双胞胎哥哥兼对手，工藤有希子与贝尔摩德的师傅。8年前在魔术表演中遭遇意外，表面上已经去世，实际上依旧存活并与工藤优作保持联系。来自《魔术快斗》，另两层身份是第一代怪盗基德和怪盗乌鸦。`,
    link: 'https://www.conanpedia.com/%E9%BB%91%E7%BE%BD%E7%9B%97%E4%B8%80',
    img: 'https://www.conanpedia.com/images/d/d1/%E9%BB%91%E7%BE%BD%E7%9B%97%E4%B8%80.png'
  },
  {
    id: 10121,
    category: 'protagonist',
    date: '2025-05-21',
    title: `怪盗乌鸦（怪盗コルボー，Kaitō Korubō）`,
    desc: `如乌鸦般一身漆黑的怪盗魔术师，外貌如同黑色的怪盗基德。来自《魔术快斗》，真实身份是黑羽盗一。`,
    link: 'https://www.conanpedia.com/%E6%80%AA%E7%9B%97%E4%B9%8C%E9%B8%A6',
    img: 'https://www.conanpedia.com/images/c/cb/%E6%80%AA%E7%9B%97%E4%B9%8C%E9%B8%A6.png'
  },
  {
    id: 10122,
    category: 'protagonist',
    date: '2025-05-21',
    title: `真田一三（真田一三，Sanada Kazumi）`,
    desc: `27岁。知名魔术师，奇迹魔术团的王牌成员。`,
    link: 'https://www.conanpedia.com/%E7%9C%9F%E7%94%B0%E4%B8%80%E4%B8%89',
    img: 'https://www.conanpedia.com/images/6/69/%E7%9C%9F%E7%94%B0%E4%B8%80%E4%B8%892.png'
  },
  {
    id: 10123,
    category: 'special',
    date: '2025-05-21',
    title: `冲野洋子（沖野ヨーコ，Okino Yōko）`,
    desc: `初登场时21岁，在《偶像们的秘密》中已22岁，港南高中毕业生，前地球淑女队成员，日卖电视台主持人，人气偶像兼当红歌手，比护隆佑的学妹，草野薰、岳野雪、星野辉美与水无怜奈的好友，毛利小五郎、灰原哀与风见裕也的偶像。`,
    link: 'https://www.conanpedia.com/%E5%86%B2%E9%87%8E%E6%B4%8B%E5%AD%90',
    img: 'https://www.conanpedia.com/images/9/91/CHARACTER_LIST_%E5%86%B2%E9%87%8E%E6%B4%8B%E5%AD%90.png'
  },
  {
    id: 10124,
    category: 'special',
    date: '2025-05-21',
    title: `剑崎修（剣崎修，Kenzaki Osamu）`,
    desc: `26岁，著名男演员兼主持人，人气推理剧《侦探左文字》的主演，岳野雪的未婚夫，冲野洋子、草野薰与星野辉美的好友。`,
    link: 'https://www.conanpedia.com/%E5%89%91%E5%B4%8E%E4%BF%AE',
    img: 'https://www.conanpedia.com/images/1/12/%E5%89%91%E5%B4%8E%E4%BF%AE.png'
  },
  {
    id: 10125,
    category: 'special',
    date: '2025-05-21',
    title: `岳野雪（岳野ユキ，Takeno Yuki）`,
    desc: `22岁，前地球淑女队成员，多栖明星，剑崎修的未婚妻，冲野洋子、草野薰与星野辉美的好友。`,
    link: 'https://www.conanpedia.com/%E5%B2%B3%E9%87%8E%E9%9B%AA',
    img: 'https://www.conanpedia.com/images/0/02/%E5%B2%B3%E9%87%8E%E9%9B%AA1.png'
  },
  {
    id: 10126,
    category: 'protagonist',
    date: '2025-05-21',
    title: `伊东玉之助（伊東玉之助，Itō Tamanosuke）`,
    desc: `17岁，原帝丹高中2年B班学生、玉之助一座旅行剧团座长，伊东惠的哥哥，毛利兰的同学。`,
    link: 'https://www.conanpedia.com/%E4%BC%8A%E4%B8%9C%E7%8E%89%E4%B9%8B%E5%8A%A9',
    img: 'https://www.conanpedia.com/images/f/f9/CHARACTER_LIST_%E4%BC%8A%E4%B8%9C%E7%8E%89%E4%B9%8B%E5%8A%A9.png'
  },
  {
    id: 10127,
    category: 'protagonist',
    date: '2025-05-21',
    title: `片冈莲华（片岡れんげ，Kataoka Renge）`,
    desc: `17岁，玉之助一座旅行剧团女演员，伊东玉之助的搭档。`,
    link: 'https://www.conanpedia.com/%E7%89%87%E5%86%88%E8%8E%B2%E5%8D%8E',
    img: 'https://www.conanpedia.com/images/4/4b/CHARACTER_LIST_%E7%89%87%E5%86%88%E8%8E%B2%E5%8D%8E.png'
  },
  {
    id: 10128,
    category: 'protagonist',
    date: '2025-05-21',
    title: `光本兵我（光本兵我，Kōmoto Hyōga）`,
    desc: `偶像组合“浪花少年”成员，著名男演员。`,
    link: 'https://www.conanpedia.com/%E5%85%89%E6%9C%AC%E5%85%B5%E6%88%91',
    img: 'https://www.conanpedia.com/images/e/e1/%E5%85%89%E6%9C%AC%E5%85%B5%E6%88%91.png'
  },
  {
    id: 10129,
    category: 'special',
    date: '2025-05-21',
    title: `板仓卓（板倉卓，Itakura Suguru）`,
    desc: `45岁，前电影CG特效制作师，软件工程师，2年前被龙舌兰胁迫开发“逆转时间”的软件，后在交易前被他人暗算，来不及吃药而死于心脏病。`,
    link: 'https://www.conanpedia.com/%E6%9D%BF%E4%BB%93%E5%8D%93',
    img: 'https://www.conanpedia.com/images/c/c2/%E6%9D%BF%E4%BB%93%E5%8D%93.png'
  },
  {
    id: 10130,
    category: 'protagonist',
    date: '2025-05-21',
    title: `芙莎绘·坎贝尔·木之下（フサエ·キャンベル·木之下，Fusae Campbell Kinoshita）`,
    desc: `约51岁，芙莎绘品牌公司社长，国际知名时尚设计师，阿笠博士的初恋。`,
    link: 'https://www.conanpedia.com/%E8%8A%99%E8%8E%8E%E7%BB%98%C2%B7%E5%9D%8E%E8%B4%9D%E5%B0%94%C2%B7%E6%9C%A8%E4%B9%8B%E4%B8%8B',
    img: 'https://www.conanpedia.com/images/d/da/%E8%8A%99%E8%8E%8E%E7%BB%98%C2%B7%E5%9D%8E%E8%B4%9D%E5%B0%94%C2%B7%E6%9C%A8%E4%B9%8B%E4%B8%8B.png'
  },
  {
    id: 10131,
    category: 'protagonist',
    date: '2025-05-21',
    title: `阿曼达·休斯（アマンダ·ヒューズ，Amanda Hughes）`,
    desc: `17年前去世时81岁，美国银行家，蕾切尔·浅香的养母，羽田浩司的狂热粉丝，在FBI与CIA之间相当有地位，17年前为保护浅香主动吞下APTX-4869自杀身亡。`,
    link: 'https://www.conanpedia.com/%E9%98%BF%E6%9B%BC%E8%BE%BE%C2%B7%E4%BC%91%E6%96%AF',
    img: 'https://www.conanpedia.com/images/8/89/CHARACTER_LIST_%E9%98%BF%E6%9B%BC%E8%BE%BE%C2%B7%E4%BC%91%E6%96%AF.png'
  },
  {
    id: 10132,
    category: 'protagonist',
    date: '2025-05-21',
    title: `山岸荣一（山岸栄一，Yamagishi Eiichi）`,
    desc: `冲野洋子的经纪人。`,
    link: 'https://www.conanpedia.com/%E5%B1%B1%E5%B2%B8%E8%8D%A3%E4%B8%80',
    img: 'https://www.conanpedia.com/images/3/3b/CHARACTER_LIST_%E5%B1%B1%E5%B2%B8%E8%8D%A3%E4%B8%80.png'
  },
  {
    id: 10133,
    category: 'protagonist',
    date: '2025-05-21',
    title: `步美的母亲（歩美の母親，Ayumi no Hahaoya）`,
    desc: `吉田步美的母亲，在《名侦探柯南》本篇从未露面。`,
    link: 'https://www.conanpedia.com/%E6%AD%A5%E7%BE%8E%E7%9A%84%E6%AF%8D%E4%BA%B2',
    // img: ''
  },
  {
    id: 10134,
    category: 'protagonist',
    date: '2025-05-21',
    title: `江户川文代（江戸川文代，Edogawa Fumiyo）`,
    desc: `自称江户川柯南的母亲。真实身份是工藤新一的母亲工藤有希子。`,
    link: 'https://www.conanpedia.com/%E6%B1%9F%E6%88%B7%E5%B7%9D%E6%96%87%E4%BB%A3',
    img: 'https://www.conanpedia.com/images/6/6d/%E6%B1%9F%E6%88%B7%E5%B7%9D%E6%96%87%E4%BB%A3.png'
  },
  {
    id: 10135,
    category: 'protagonist',
    date: '2025-05-21',
    title: `富泽雄三（富沢雄三，Tomizawa Yūzō）`,
    desc: `28岁，富泽财团三公子，铃木绫子的未婚夫。`,
    link: 'https://www.conanpedia.com/%E5%AF%8C%E6%B3%BD%E9%9B%84%E4%B8%89',
    img: 'https://www.conanpedia.com/images/d/d0/%E5%AF%8C%E6%B3%BD%E9%9B%84%E4%B8%891.png'
  },
  {
    id: 10136,
    category: 'protagonist',
    date: '2025-05-21',
    title: `美和子的母亲（美和子の母親，Miwako no Hahaoya）`,
    desc: `佐藤正义的妻子，佐藤美和子的母亲。`,
    link: 'https://www.conanpedia.com/%E7%BE%8E%E5%92%8C%E5%AD%90%E7%9A%84%E6%AF%8D%E4%BA%B2',
    img: 'https://www.conanpedia.com/images/b/b3/%E7%BE%8E%E5%92%8C%E5%AD%90%E7%9A%84%E6%AF%8D%E4%BA%B2.png'
  },
  {
    id: 10137,
    category: 'protagonist',
    date: '2025-05-21',
    title: `目暮绿（目暮みどり，Megure Midori）`,
    desc: `目暮十三的妻子，高中时期的不良少女。`,
    link: 'https://www.conanpedia.com/%E7%9B%AE%E6%9A%AE%E7%BB%BF',
    img: 'https://www.conanpedia.com/images/8/8b/%E7%9B%AE%E6%9A%AE%E7%BB%BF.png'
  },
  {
    id: 10138,
    category: 'protagonist',
    date: '2025-05-21',
    title: `寺井黄之助（寺井黄之助，Jii Kōnosuke）`,
    desc: `61岁，两代怪盗基德助手，台球酒吧老板，黑羽盗一生前的魔术助手，阿笠博士的老相识。来自《魔术快斗》。`,
    link: 'https://www.conanpedia.com/%E5%AF%BA%E4%BA%95%E9%BB%84%E4%B9%8B%E5%8A%A9',
    img: 'https://www.conanpedia.com/images/b/bd/%E5%AF%BA%E4%BA%95%E9%BB%84%E4%B9%8B%E5%8A%A9.png'
  },
  {
    id: 10139,
    category: 'protagonist',
    date: '2025-05-21',
    title: `服部静华（服部静華，Hattori Shizuka）`,
    desc: `42岁，旧姓池波，全职家庭主妇，剑道高手，前歌牌女王，服部平藏的妻子，服部平次的母亲。`,
    link: 'https://www.conanpedia.com/%E6%9C%8D%E9%83%A8%E9%9D%99%E5%8D%8E',
    img: 'https://www.conanpedia.com/images/f/f4/%E6%9C%8D%E9%83%A8%E9%9D%99%E5%8D%8E.png'
  },
  {
    id: 10140,
    category: 'protagonist',
    date: '2025-05-21',
    title: `鸭井五十吉（鴨井五十吉，Kamoi Isokichi）`,
    desc: `白鸟家管家。`,
    link: 'https://www.conanpedia.com/%E9%B8%AD%E4%BA%95%E4%BA%94%E5%8D%81%E5%90%89',
    img: 'https://www.conanpedia.com/images/e/e0/%E9%B8%AD%E4%BA%95%E4%BA%94%E5%8D%81%E5%90%89.png'
  },
  {
    id: 10141,
    category: 'protagonist',
    date: '2025-05-21',
    title: `圆谷朝美（円谷朝美，Tsuburaya Asami）`,
    desc: `初中生，圆谷光彦的姐姐，三途之Ⅲ乐团的歌迷。`,
    link: 'https://www.conanpedia.com/%E5%9C%86%E8%B0%B7%E6%9C%9D%E7%BE%8E',
    img: 'https://www.conanpedia.com/images/b/bb/CHARACTER_LIST_%E5%9C%86%E8%B0%B7%E6%9C%9D%E7%BE%8E.png'
  },
  {
    id: 10142,
    category: 'protagonist',
    date: '2025-05-21',
    title: `山村美砂绘（山村ミサエ，Yamamura Misae）`,
    desc: `85岁，山村操的奶奶，家乡在鸟取县八头町。`,
    link: 'https://www.conanpedia.com/%E5%B1%B1%E6%9D%91%E7%BE%8E%E7%A0%82%E7%BB%98',
    img: 'https://www.conanpedia.com/images/2/20/%E5%B1%B1%E6%9D%91%E7%BE%8E%E7%A0%82%E7%BB%98.png'
  },
  {
    id: 10143,
    category: 'protagonist',
    date: '2025-05-21',
    title: `小岛元次（小嶋元次，Kojima Genji）`,
    desc: `32岁，地道的江户人，小岛酒家老板，小岛元太的父亲。`,
    link: 'https://www.conanpedia.com/%E5%B0%8F%E5%B2%9B%E5%85%83%E6%AC%A1',
    img: 'https://www.conanpedia.com/images/a/ad/%E5%B0%8F%E5%B2%9B%E5%85%83%E6%AC%A1.png'
  },
  {
    id: 10144,
    category: 'protagonist',
    date: '2025-05-21',
    title: `黑羽千影（黒羽千影，Kuroba Chikage）`,
    desc: `黑羽盗一的妻子，黑羽快斗的母亲。来自《魔术快斗》，另一层身份是怪盗淑女。`,
    link: 'https://www.conanpedia.com/%E9%BB%91%E7%BE%BD%E5%8D%83%E5%BD%B1',
    img: 'https://www.conanpedia.com/images/0/03/CHARACTER_LIST_%E9%BB%91%E7%BE%BD%E5%8D%83%E5%BD%B1.png'
  },
  {
    id: 10145,
    category: 'protagonist',
    date: '2025-05-21',
    title: `怪盗淑女（怪盗淑女，Kaitō Shukujo）`,
    desc: `已然隐退的怪盗，被称为“昭和时代的女二十面相”，第二代怪盗基德曾向江户川柯南暗示怪盗淑女是自己的母亲。来自《魔术快斗》，真实身份是黑羽千影。`,
    link: 'https://www.conanpedia.com/%E6%80%AA%E7%9B%97%E6%B7%91%E5%A5%B3',
    img: 'https://www.conanpedia.com/images/c/c4/%E6%80%AA%E7%9B%97%E6%B7%91%E5%A5%B3.png'
  },
  {
    id: 10146,
    category: 'protagonist',
    date: '2025-05-21',
    title: `米原樱子（米原桜子，Yonehara Sakurako）`,
    desc: `23岁，女佣，三池苗子的好友。`,
    link: 'https://www.conanpedia.com/%E7%B1%B3%E5%8E%9F%E6%A8%B1%E5%AD%90',
    img: 'https://www.conanpedia.com/images/9/96/%E7%B1%B3%E5%8E%9F%E6%A8%B1%E5%AD%90.png'
  },
  {
    id: 10147,
    category: 'protagonist',
    date: '2025-05-21',
    title: `鬼丸猛（鬼丸猛，Onimaru Takeshi）`,
    desc: `高中生剑士，日本剑道冠军，冲田总司的友人。来自《YAIBA》。`,
    link: 'https://www.conanpedia.com/%E9%AC%BC%E4%B8%B8%E7%8C%9B',
    img: 'https://www.conanpedia.com/images/6/6d/%E9%AC%BC%E4%B8%B8%E7%8C%9B.png'
  },
  {
    id: 10148,
    category: 'protagonist',
    date: '2025-05-21',
    title: `远山樱（遠山桜，Tōyama Sakura）`,
    desc: `原大阪府警枪械对策部队的精锐，远山银司郎的妻子，远山和叶的母亲。`,
    link: 'https://www.conanpedia.com/%E8%BF%9C%E5%B1%B1%E6%A8%B1',
    // img: ''
  },
  {
    id: 10149,
    category: 'protagonist',
    date: '2025-05-21',
    title: `小麿（マロちゃん，Maro-chan）`,
    desc: `绫小路文麿饲养的花栗鼠。`,
    link: 'https://www.conanpedia.com/%E5%B0%8F%E9%BA%BF',
    img: 'https://www.conanpedia.com/images/4/43/%E5%B0%8F%E4%9C%86.png'
  },
  {
    id: 10150,
    category: 'protagonist',
    date: '2025-05-21',
    title: `鲁邦（ルパン，Rupan）`,
    desc: `雄性，铃木次郎吉饲养的爱犬。`,
    link: 'https://www.conanpedia.com/%E9%B2%81%E9%82%A6',
    img: 'https://www.conanpedia.com/images/1/11/CHARACTER_LIST_%E9%B2%81%E9%82%A6.png'
  },
  {
    id: 10151,
    category: 'protagonist',
    date: '2025-05-21',
    title: `咕噜（ゴロ，Goro）`,
    desc: `妃英理饲养的俄罗斯蓝猫。`,
    link: 'https://www.conanpedia.com/%E5%92%95%E5%99%9C',
    img: 'https://www.conanpedia.com/images/b/bc/%E5%92%95%E5%99%9C.png'
  },
  {
    id: 10152,
    category: 'protagonist',
    date: '2025-05-21',
    title: `大尉（たいい，Taii）`,
    desc: `雄性，榎本梓收养的三色猫。`,
    link: 'https://www.conanpedia.com/%E5%A4%A7%E5%B0%89',
    img: 'https://www.conanpedia.com/images/f/ff/CHARACTER_LIST_%E5%A4%A7%E5%B0%89.png'
  },
  {
    id: 10153,
    category: 'protagonist',
    date: '2025-05-21',
    title: `假面超人（仮面ヤイバー，Kamen Yaiba）`,
    desc: `剧中特摄剧《假面超人》的主角，在少年儿童中人气较高。`,
    link: 'https://www.conanpedia.com/%E5%81%87%E9%9D%A2%E8%B6%85%E4%BA%BA',
    img: 'https://www.conanpedia.com/images/a/aa/CHARACTER_LIST_%E5%81%87%E9%9D%A2%E8%B6%85%E4%BA%BA.png'
  },
  {
    id: 10154,
    category: 'protagonist',
    date: '2025-05-21',
    title: `暗夜男爵（闇の男爵，Night Baron）`,
    desc: `以工藤优作所著小说为原作的人气推理作品《暗夜男爵》的主角。`,
    link: 'https://www.conanpedia.com/%E6%9A%97%E5%A4%9C%E7%94%B7%E7%88%B5',
    img: 'https://www.conanpedia.com/images/2/28/CHARACTER_LIST_%E6%9A%97%E5%A4%9C%E7%94%B7%E7%88%B5.png'
  },
  {
    id: 10155,
    category: 'protagonist',
    date: '2025-05-21',
    title: `哥美拉（ゴメラ，Gomera）`,
    desc: `剧中怪兽特摄电影《大怪兽哥美拉》系列的主角。`,
    link: 'https://www.conanpedia.com/%E5%93%A5%E7%BE%8E%E6%8B%89',
    img: 'https://www.conanpedia.com/images/b/b3/CHARACTER_LIST_%E5%93%A5%E7%BE%8E%E6%8B%89.png'
  },
  {
    id: 10156,
    category: 'protagonist',
    date: '2025-05-21',
    title: `松田左文字（松田左文字，Matsuda Samonji）`,
    desc: `以新名任太朗、新名香保里所著小说为原作的人气推理作品《侦探左文字》的主角，真人剧中由剑崎修饰演。`,
    link: 'https://www.conanpedia.com/%E6%9D%BE%E7%94%B0%E5%B7%A6%E6%96%87%E5%AD%97',
    img: 'https://www.conanpedia.com/images/f/fe/CHARACTER_LIST_%E6%9D%BE%E7%94%B0%E5%B7%A6%E6%96%87%E5%AD%97.png'
  },
  {
    id: 10157,
    category: 'Wiki',
    date: '2025-05-22',
    title: `名侦探柯南：独眼的残像 2025剧场版`,
    desc: `《名侦探柯南：独眼的残像》（日语：名探偵コナン 隻眼の残像フラッシュバック，英语：Detective Conan: One-eyed Flashback），是2025年4月18日上映的日本动画电影，改编自日本漫画家青山刚昌漫画系列《名侦探柯南》的第28部剧场版，由重原克也执导，樱井武晴编剧。该电影是名侦探柯南剧场版系列第三部在日本突破100亿日圆票房的剧场版，同时该系列也成为日本影史首个连续三部作品百亿的系列电影。`,
    link: '/conan-movie/2025/Detective-Conan-One-eyed-Flashback.html',
    img: '/conan-movie/img/2025homelogo.png'
  }
];
