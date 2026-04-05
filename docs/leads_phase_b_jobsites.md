# Phase B: 招聘网站渠道调研结果

> 调研时间：2026-04-05
> 调研方法：WebSearch + WebFetch
> 目标：寻找会中文/普通话、正在找工作的越南人公开简历或求职信息

## 一、各平台搜索情况

| 平台 | 中文岗位数(HCMC) | 可获取候选人详情 | 备注 |
|------|------------------|-----------------|------|
| TopCV | 488 | 0（简历需登录） | 越南最大求职平台，中文岗位丰富，但候选人简历不公开 |
| VietnamWorks | 672 | 0（简历需企业付费） | 高端岗位多，企业需购买"Resume Search"服务 |
| CareerLink | 2,133（全国） | 0（页面需会话） | 页面动态加载，session 过期无法抓取 |
| Vieclam24h | 4,946 | 0（简历不公开） | 数量最多但主要是岗位JD，非候选人简历 |
| Indeed Vietnam | 700+ | 0 | 岗位聚合站，无公开简历 |
| JobsGO | 142 | 0 | 同上 |
| 123job.vn | 918 | 0 | 同上 |
| CareerViet | 822（全国） | 0 | 同上 |
| LinkedIn | 大量 | 部分（见下文） | 个人profile公开可见，但fetch被封(HTTP 999) |
| Upwork | 少量 | 1（见下文） | 自由职业者profile有一定公开信息 |
| TimViecNhanh | 1 | 0 | 平台规模小 |
| Facebook Groups | 8+个专属群组 | 0（需加群） | 发现多个"中文求职"专属Facebook群，是重要线索源 |

### 关键发现

1. **越南招聘网站的候选人简历均不公开**：TopCV、VietnamWorks、CareerLink等平台的简历数据库仅向付费企业雇主开放，无法通过搜索引擎或公开页面获取求职者个人信息。

2. **中文人才供不应求**：据 VnExpress 报道，即使月薪开到 35-40 triệu VND（约合人民币 1 万元），仍难以招到精通中文的越南员工。这说明市场需求强劲。

3. **薪资区间参考**：
   - 入门级（无经验/HSK3-4）：7.5-12 triệu VND/月
   - 中级（1-3年/HSK5）：12-20 triệu VND/月
   - 高级（3年+/流利）：20-40 triệu VND/月
   - 资深/管理级：40-60 triệu VND/月

4. **LinkedIn 是最佳公开候选人信息源**：虽然 WebFetch 被 LinkedIn 封锁（HTTP 999），但通过搜索引擎可以获取 profile 摘要信息。

5. **Facebook 群组是最活跃的中文求职社区**：发现 8+ 个专门的中文求职 Facebook 群。

## 二、收集的求职线索

> 注意：由于越南招聘网站简历不公开、LinkedIn 封锁 WebFetch，以下线索主要来自搜索引擎可见的 LinkedIn profile 摘要和 Upwork 等自由职业平台。联系方式大多需要到对应平台查看。

### 线索 B001
- **称呼**: Nguyễn Võ Như Quỳnh
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 中文（翻译级别）、英文
- **学历**: 未知
- **工作经验**: 自由职业翻译/口译
- **期望岗位**: Interpreter、Translator、Assistant
- **所在地**: 胡志明市
- **原文摘要**: > Chinese interpreter at Freelance. Able to use two languages - Chinese and English. Seeking positions relating to interpreter, translator, and assistant roles.
- **来源**: [LinkedIn](https://www.linkedin.com/in/nguy%E1%BB%85n-v%C3%B5-nh%C6%B0-qu%E1%BB%B3nh-0638851a0/)
- **平台**: LinkedIn

### 线索 B002
- **称呼**: Nguyễn Nhật Mai Lê
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 中文、英文、越南文（三语口译）
- **学历**: Western Sydney University
- **工作经验**: 自由职业口译员
- **期望岗位**: Freelance Interpreter (Chinese-English-Vietnamese)
- **所在地**: 胡志明市都市区 (Ho Chi Minh City Metropolitan Area)
- **原文摘要**: > Freelance Interpreter specializing in Chinese-English-Vietnamese. Based in Ho Chi Minh City Metropolitan Area. Education from Western Sydney University.
- **来源**: [LinkedIn](https://www.linkedin.com/in/nguy%E1%BB%85n-nh%E1%BA%ADt-mai-l%C3%AA-40a49a29b/)
- **平台**: LinkedIn

### 线索 B003
- **称呼**: John Nguyen
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 中文（Mandarin）、英文、越南文
- **学历**: 未知
- **工作经验**: 6年翻译和本地化经验（英-中-越），涉及法律、技术、营销、娱乐、手游等领域
- **期望岗位**: Chinese & English Localization Specialist
- **所在地**: 胡志明市都市区
- **原文摘要**: > Chinese & English Localization Specialist with 6 years in translation and localization between English, Chinese and Vietnamese. Handles legal, technical, marketing, entertainment, mobile games content. Designed bilingual products for non-native speakers to learn Mandarin Chinese.
- **来源**: [LinkedIn](https://www.linkedin.com/in/john-nguyen-9a0339270/)
- **平台**: LinkedIn

### 线索 B004
- **称呼**: Huy Long Chấn (longchanhuy)
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 英文、普通话 (Mandarin)、粤语 (Cantonese) — 三语流利
- **学历**: HUFLIT（胡志明市外语信息技术大学）; CFA Level 1 候选人 (May 2024)
- **工作经验**: Ernst & Young Global Consulting Services 实习；法律文件中英翻译经验
- **期望岗位**: Accounting Internship / 财务相关
- **所在地**: 胡志明市
- **原文摘要**: > Recent graduate, CFA Level 1 candidate, seeking Accounting Internship. Experience at Ernst & Young Global Consulting Services. Fluency in English, Mandarin, and Cantonese. Translating legal documents and contracts from Chinese to English.
- **来源**: [LinkedIn](https://www.linkedin.com/in/longchanhuy/)
- **平台**: LinkedIn

### 线索 B005
- **称呼**: Nguyen T.
- **联系方式**: 需通过 Upwork 联系
- **语言能力**: 越南文（母语）、中文、英文
- **学历**: 未知
- **工作经验**: 7年翻译经验（越-中-英）；5年市场营销经验；7年科研和数据建模经验
- **期望岗位**: Vietnamese/Chinese Interpreter/Translator (自由职业)
- **所在地**: 胡志明市
- **原文摘要**: > Vietnamese/Chinese Interpreter/Translator on Upwork. Over 7 years experience in translating Vietnamese, Chinese, and English. Also has 5 years in marketing and 7 years in scientific research and data modeling.
- **来源**: [Upwork](https://www.upwork.com/freelancers/~01ce65b172dc512c15)
- **平台**: Upwork

### 线索 B006
- **称呼**: Quoc Trung (Hoang Quoc Trung)
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 中文-越南文翻译
- **学历**: 未知
- **工作经验**: 自由职业翻译/口译，提供同声传译、交替传译、耳语传译，含中越文件翻译
- **期望岗位**: Translator & Interpreter (Freelance)
- **所在地**: 越南（推测胡志明市）
- **原文摘要**: > Translator and interpreter offering simultaneous, whispered, and consecutive interpretation services, including Chinese-Vietnamese translation and document translation.
- **来源**: [LinkedIn](https://www.linkedin.com/in/hoangquoctrung/)
- **平台**: LinkedIn

### 线索 B007
- **称呼**: 黎宝玉 / Le Bao Ngoc
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 中文（从名字含中文字推断精通）
- **学历**: 未知
- **工作经验**: 在 PCVN 工作
- **期望岗位**: 未知
- **所在地**: 越南
- **原文摘要**: > LinkedIn profile with Chinese name 黎宝玉 alongside Vietnamese name Le Bao Ngoc. Works at PCVN. Profile suggests strong Chinese language capability.
- **来源**: [LinkedIn](https://www.linkedin.com/in/le-bao-ngoc-%E9%BB%8E%E5%AE%9D%E7%8E%89-35940b39/)
- **平台**: LinkedIn

### 线索 B008
- **称呼**: Khoi Nguyen
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 普通话 (Mandarin) — OPI/VRI 医疗口译级别
- **学历**: 未知
- **工作经验**: 多年医疗口译 (Mandarin medical interpreter) 经验，曾在高等教育领域工作
- **期望岗位**: Freelance translator / Medical interpreter
- **所在地**: 越南
- **原文摘要**: > Freelance translator with extensive experience as OPI/VRI medical Mandarin interpreter. Discovered that precision in translation directly impacts patient outcomes. Demonstrated history in higher education.
- **来源**: [LinkedIn](https://www.linkedin.com/in/khoi-nguyen-90052227/)
- **平台**: LinkedIn

### 线索 B009
- **称呼**: Kiều Nguyễn
- **联系方式**: 需通过 LinkedIn 联系
- **语言能力**: 中文（有英文/中文简历）
- **学历**: 未知
- **工作经验**: Digital Marketing Leader
- **期望岗位**: Junior position (base in HCMC)
- **所在地**: 胡志明市
- **原文摘要**: > Digital Marketing Leader. Has English/Chinese speaking CV looking for Junior position base in HCMC.
- **来源**: [LinkedIn](https://www.linkedin.com/in/ki%E1%BB%81u-nguy%E1%BB%85n-154a9b178/)
- **平台**: LinkedIn

### 线索 B010（招聘顾问 — 可合作渠道）
- **称呼**: Phạm Thúy
- **联系方式**: Email: thuypham@dtalent.vn | 电话: 0399449727
- **语言能力**: 招聘中文岗位（半导体行业）
- **学历**: 未知
- **工作经验**: Recruitment Consultant at DTalent
- **期望岗位**: N/A（她是猎头，非求职者）
- **所在地**: 越南
- **原文摘要**: > Recruitment Consultant at DTalent, posting job openings for semiconductor positions requiring Chinese language skills (tiếng Trung/Đài Loan). Contact: thuypham@dtalent.vn, 0399449727. 可作为合作渠道联系。
- **来源**: [LinkedIn](https://vn.linkedin.com/in/thuyphamdtalent)
- **平台**: LinkedIn

## 三、发现的 Facebook 中文求职群组

以下群组是寻找会中文越南求职者的最活跃渠道，建议加入后发布招聘信息：

| 群组名称 | 链接 | 备注 |
|----------|------|------|
| Việc Làm Tiếng Trung Tp.HCM 胡志明中文人才招聘求职总站 | https://www.facebook.com/groups/ViecLamTiengTrungTpHcm/ | 名称含中文，最对口 |
| Việc làm tiếng Trung tại TP Hồ Chí Minh | https://www.facebook.com/groups/1575202949426446/ | HCMC 专属 |
| Việc làm tiếng Trung TP Hồ Chí Minh | https://www.facebook.com/groups/588927481861149/ | HCMC 专属 |
| Việc Làm Tiếng Trung HCM | https://www.facebook.com/groups/ViecLamTiengTrungHCM/ | HCMC 专属 |
| VIỆC LÀM TIẾNG TRUNG - HỒ CHÍ MINH | https://www.facebook.com/groups/vieclamtiengtrungshz/ | HCMC 专属 |
| Việc Làm Tiếng Trung | https://www.facebook.com/groups/congdongvieclamtiengtrung/ | 全国性 |
| Việc làm tiếng Trung-Anh (Chinese-English) | https://www.facebook.com/groups/406279086688385/ | 中英双语 |
| HỘI VIỆC LÀM TIẾNG TRUNG | https://www.facebook.com/groups/1034197273266994/ | 全国性 |
| Tiếng Trung làm thêm Online tại nhà | https://www.facebook.com/groups/2644288542262032/ | 在线兼职 |

## 四、各平台岗位样本（薪资与中文要求参考）

以下摘自 TopCV 和 Vieclam24h 的实际岗位数据，可用于了解市场行情：

### TopCV HCMC 中文岗位样本（2026年4月）

| 岗位 | 公司 | 薪资(VND/月) | 中文要求 |
|------|------|-------------|---------|
| HR Manager (Chinese/English) | Keep Rise Trading | 面议 | 中英文流利 |
| Douyin直播主播 | Panda Agency | 15-30M | 中文必须 |
| 中文翻译 (HSK5+) | Damara Import-Export | 20M+ | HSK5以上 |
| 物流销售(中文) | Giang Huy Import-Export | 8-20M | 中文能力 |
| 总经理助理(中文) | Bode SCM Group | 面议 | 中文流利 |
| 税务会计(中文沟通) | Yeu Quan Ao Trading | 20-25M | 中文日常沟通 |
| 中文老师(兼职线上) | PORO Technology | 面议 | HSK5优先 |
| 行政翻译(中越) | KrakenOcean Vietnam | 10-12M | 无经验可 |
| 中文岗位(HSK4+夜班) | E-Guardian Vietnam | 16-20M | HSK4以上 |
| 首席会计(英/中) | Wu Shuang Asset | 30-40M | 3年经验 |
| 采购员(中文) | LC Foods | 面议 | 2年经验 |
| 客服(中英文) | CyberSellX Vietnam | 12-17.5M | 1年以下经验 |

### Vieclam24h HCMC 中文岗位样本

| 岗位 | 公司 | 薪资(VND/月) | 区域 | 中文要求 |
|------|------|-------------|------|---------|
| 商务助理(中文) | Hóa Sao Á Châu | 10-15M | 第5郡 | 中文口语流利 |
| 中文翻译 | GST | 9-15M | 第8郡 | HSK3同等 |
| 中文口译(中级) | Nam Bình Investment | 20-30M | 第3郡 | 工程技术中文 |
| 办公室文员(中文) | Đức Bổn Industrial | 10-20M | 第7郡 | 听说读写流利 |
| 口译/助理(机械) | SCR Vietnam | 14-15M | 平阳省 | 中文口语流利 |
| 翻译服务员 | Khái Niệm Mới Translation | 7-10M | 第10郡 | 专业中文翻译 |

## 五、调研小结

### 核心结论

1. **共收集 10 条线索**（9 位求职者/自由职业者 + 1 位可合作猎头），均来自 LinkedIn 和 Upwork 的公开信息。

2. **越南招聘网站简历全部不公开**：TopCV、VietnamWorks、CareerLink、Vieclam24h、Indeed Vietnam 等主流平台的候选人简历数据库仅向付费企业用户开放。通过搜索引擎无法获取求职者个人联系方式。这是本次调研最大的限制。

3. **中文人才市场极度供不应求**：
   - HCMC 各平台合计有 **2,000+ 个中文岗位**在招
   - VnExpress 报道即使 35-40M VND/月（约人民币1万）仍招不到人
   - 入职后候选人"答应了又放鸽子"现象普遍

4. **Facebook 群组是最有价值的免费渠道**：发现 **9 个中文求职专属群组**，其中多个以"胡志明"为定位。这些群组里有求职者主动发帖找工作，是最直接的线索来源（建议在 Phase A 中重点跟进）。

5. **LinkedIn 是唯一能获取候选人公开信息的主流平台**：虽然 WebFetch 被封锁，但搜索引擎索引了大量 profile 摘要。建议后续通过 LinkedIn 直接搜索 "tiếng Trung" + "Ho Chi Minh" 手动筛选候选人。

### 下一步建议

1. **立即行动**：加入上述 9 个 Facebook 群组，发布招聘需求贴
2. **付费渠道**：考虑购买 VietnamWorks 或 TopCV 的企业账号（Resume Search），获取完整简历数据库访问权限
3. **联系猎头 Phạm Thúy** (DTalent)：她专做中文岗位招聘，可探讨合作分成模式
4. **LinkedIn 精准搜索**：用 "tiếng Trung" "phiên dịch" "Ho Chi Minh" 等关键词手动搜索，通过 InMail 联系候选人
5. **实地拜访时**：携带上述岗位薪资数据，作为与 HR 公司谈判的市场参考
