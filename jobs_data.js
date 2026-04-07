// 胡志明市中资企业中文岗位数据
// 数据来源：中资企业胡志明市中文岗位-客户交付-2026-04-07.md
// 按行业分类（对应报告第六节）

const JOBS_DATA = {
  meta: {
    updateTime: "2026-04-07",
    round: "第六轮（6 渠道全量）",
    sources: "TopCV / VietnamWorks / LinkedIn / Indeed / 企业官网",
    filterNote: "筛选条件：① 中资企业（含港资/国企/民企）+ ② 岗位要求中文能力（两条同时满足）"
  },
  sections: [
    // ============================================================
    // 6.1 跨境电商 / 数字营销 / 直播代播
    // ============================================================
    {
      id: "ecommerce",
      title: "跨境电商 / 数字营销 / 直播代播",
      jobs: [
        // NEXTAD STUDIO（TikTok 海外代播 / 深圳系）
        { title: "Senior UA / 广告投放专员（中文优先）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-chay-quang-cao-senior-ua-uu-tien-biet-tieng-trung-quan-2/2046439.html" },
        { title: "行政人事（HSK4+）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/hanh-chinh-nhan-su-biet-tieng-trung-hsk4-tro-len-quan-2/2107949.html" },
        { title: "会计主管（中文，月薪到 40 triệu）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-truong-biet-tieng-trung-thu-nhap-den-40-trieu-quan-2/2108034.html" },
        { title: "Content Researcher（HSK4+）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/content-researcher-chuyen-vien-nghien-cuu-noi-dung-yeu-cau-biet-tieng-trung-hsk4-tro-len-quan-2/2078433.html" },
        { title: "中文助理（HSK4+）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung-biet-tieng-trung-hsk4-tro-len-quan-2/2102763.html" },
        { title: "对外事务助理（中文）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-doi-ngoai-tieng-trung-thanh-thao-tieng-trung-quan-2/2096451.html" },
        { title: "社媒运营实习生（中文优先）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/thuc-tap-sinh-van-hanh-social-media-operations-intern-uu-tien-biet-tieng-trung-quan-2/2091180.html" },
        { title: "广告投放员（中文，Q7）", company: "NEXTAD STUDIO", location: "Q7, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-chay-quang-cao-ads-biet-tieng-trung-quan-7-ho-chi-minh/2041930.html" },
        { title: "游戏翻译 & 本地化（中越）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-dich-thuat-ban-dia-hoa-game-trung-viet-uu-tien-biet-tieng-trung-quan-2/2046254.html" },
        { title: "游戏翻译实习生（中文）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/thuc-tap-sinh-dich-thuat-game-tieng-trung-tot-tro-cap-6-trieu-tai-lakeview-2-gan-cau-thu-thiem-hcm/2031298.html" },
        { title: "ADS 投放员（不强制中文）", company: "NEXTAD STUDIO", location: "Q7, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-chay-ads-luong-cung-den-15-trieu-khong-bat-buoc-tieng-trung-tu-1-nam-kinh-nghiem-tai-phuong-tan-hung-hcm-quan-7-cu/2069765.html" },
        { title: "社媒运营专员（中文优先）", company: "NEXTAD STUDIO", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-van-hanh-social-media-operations-executive-uu-tien-biet-tieng-trung-quan-2/2078388.html" },
        // Mạng Lưới Thông Minh（智能网络，深圳系跨境代运营）
        { title: "内部会计（中文，13–20 triệu）", company: "智能网络 Mạng Lưới Thông Minh", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-biet-tieng-trung-luong-tu-13-20-trieu-thang/2093023.html" },
        { title: "内部会计（中文）", company: "智能网络 Mạng Lưới Thông Minh", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-biet-tieng-trung-co-the-nhan-viec-sau/2065207.html" },
        { title: "Social Media 运营（中文 / Fresher）", company: "智能网络 Mạng Lưới Thông Minh", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-social-media-biet-tieng-trung-khong-yeu-cau-kinh-nghiem-fresher/2093184.html" },
        { title: "Content Creator（中文）", company: "智能网络 Mạng Lưới Thông Minh", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-content-creator-biet-tieng-trung/2102755.html" },
        { title: "产品支持（中 / 英文）", company: "智能网络 Mạng Lưới Thông Minh", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ho-tro-san-pham-biet-tieng-anh-hoac-tieng-trung/2068616.html" },
        // BIGSELLER TECHNOLOGY
        { title: "CSKH 中文（电商行业）", company: "BigSeller Technology", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-cham-soc-khach-hang-cskh-tieng-trung-nganh-thuong-mai-dien-tu/1606490.html" },
        // BLUEMEDIA VIETNAM
        { title: "Mediabuy Account Executive (Chinese)", company: "BlueMedia Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/mediabuy-account-executive-chinese/2107246.html" },
        // CHICMAX VIETNAM
        { title: "行政人事专员（中文）", company: "ChicMax Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-hanh-chinh-nhan-su-tieng-trung/2095453.html" },
        { title: "TikTok 平台运营", company: "ChicMax Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-tiktok-tu-2-nam-kinh-nghiem-biet-tieng-trung-hoac-tieng-anh/2084581.html" },
        // FOCUS MEDIA 分众传媒
        { title: "总账会计（中文）", company: "Focus Media 分众传媒", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-tong-hop-tieng-trung/2110148.html" },
        { title: "仓库管理员（中文）", company: "Focus Media 分众传媒", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-quan-kho-tieng-trung/2098923.html" },
        { title: "Media Plan 运营（中文）", company: "Focus Media 分众传媒", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-phong-media-plan-tieng-trung/2076851.html" },
        // HELLOWORLD / 51Talk
        { title: "Sales Team Leader（教育，HSK5）", company: "HelloWorld 51Talk", location: "Q1, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/team-leader-sales-nganh-giao-duc-luong-30tr5-hoa-hong-quan-1-biet-tieng-trung-hsk5/2042217.html" },
        // JOYOUNG 九阳
        { title: "仓库员工（基础中文）", company: "Joyoung 九阳", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nam-nhan-vien-kho-biet-tieng-trung/1923173.html" },
        { title: "平台运营助理（中文）", company: "Joyoung 九阳", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-van-hanh-san-biet-tieng-trungduoc-dao-tao/1929851.html" },
        // LANBENA 蓝玫娜
        { title: "C&B 专员（中文优先）", company: "Lanbena 蓝玫娜", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-cb-uu-tien-tieng-trung/1671539.html" },
        { title: "内部会计（中文）", company: "Lanbena 蓝玫娜", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-noi-bo-tieng-trung/1853652.html" },
        { title: "仓库员工（中文）", company: "Lanbena 蓝玫娜", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-kho-tieng-trung/2056075.html" },
        { title: "打单员（基础中文）", company: "Lanbena 蓝玫娜", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-in-don-biet-chut-tieng-trung/2056059.html" },
        { title: "HR 综合（中文）", company: "Lanbena 蓝玫娜", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/hr-tong-hop-tieng-trung/1671547.html" },
        { title: "Shopee 平台运营（中文）", company: "Lanbena 蓝玫娜", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-san-shopee-tieng-trung/2073801.html" },
        // PANDA AGENCY
        { title: "抖音直播主播（远程，必中文）", company: "Panda Agency", location: "Remote", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/idol-livestream-tren-nen-tang-douyin-part-time-full-time-bat-buoc-tieng-trung-lam-viec-remote-luong-15-100-trieu-thuong/2100745.html" },
        // TOKBOOST MEDIA
        { title: "商务翻译（中文）", company: "TokBoost Media", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/phien-dich-thuong-mai-tieng-trung/2085822.html" },
        { title: "对外事务助理（中文）", company: "TokBoost Media", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-doi-ngoai-tieng-trung/2085812.html" },
        // WINTOK MEDIA
        { title: "TikTok 直播运营", company: "Wintok Media", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=80f8f460d582d496" },
        { title: "TikTok Streamer / Talent", company: "Wintok Media", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=4453230090e5462e" },
        // ZIBUYU 子不语
        { title: "Merchandise 专员（中文）", company: "Zibuyu 子不语", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-merchandise-biet-tieng-trung/1989788.html" },
        // GGBINGO 供应链
        { title: "跨境电商运营总监", company: "GGBingo", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=a558d529d1087c22" },
        { title: "跨境电商高级运营", company: "GGBingo", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=c05664fbeac9d53c" },
        { title: "业务发展总监 BD", company: "GGBingo", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=6cc14e15d4828643" },
        // KINGDEN TRADING
        { title: "Content Creator（中文）", company: "Kingden Trading", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/content-creator-tieng-trung-tot/2109456.html" },
        { title: "CEO 助理（中 / 英文）", company: "Kingden Trading", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-ceo-tieng-anh-hoac-tieng-trung-tot/2084976.html" },
        { title: "E-Commerce Assistant", company: "Kingden Trading", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/e-commerce-assistant-good-english-or-chinese/1976136.html" },
        // FOCALLURE 菲鹿儿
        { title: "视频剪辑（中 / 英文）", company: "Focallure 菲鹿儿", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-video-editor-biet-tieng-trung-hoac-anh/1207751.html" },
        { title: "Merchandise（中 / 英文）", company: "Focallure 菲鹿儿", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-merchandise-biet-tieng-anh-tieng-trung/2033902.html" },
        { title: "Sales Admin Cosmetic（中文）", company: "Focallure 菲鹿儿", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/sales-admin-cosmetic-biet-tieng-trung/1954948.html" },
        // VEO VIETNAM
        { title: "平面设计师（中文）", company: "VEO Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-thiet-ke-do-hoa-biet-tieng-trung-thu-nhap-hap-dan-nhan-viec-ngay/2087636.html" },
        { title: "人事行政经理（中文）", company: "VEO Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/quan-ly-hanh-chinh-nhan-su-biet-tieng-trung-thu-nhap-den-20-trieu-di-lam-ngay/2083543.html" },
        { title: "内部会计（中文）", company: "VEO Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-biet-tieng-trung/2084270.html" },
        // CITY WISDOM
        { title: "Trade Marketing Admin (Chinese)", company: "City Wisdom", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/trade-marketing-admin-chinese-welcomed-fresher/1897183.html" },
        { title: "商务助理（中文）", company: "City Wisdom", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-kinh-doanh-tieng-trung/2068641.html" },
        // BLOOMEDGE
        { title: "会计主管（中 / 英文，30-35 triệu）", company: "Bloomedge", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=9614e8c490bbad34" },
        { title: "会计主管（30-35 triệu，3 年财税经验）", company: "Bloomedge", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=feb183315e43ef4a" },
        // VIỆT GLOBAL
        { title: "Sales（钢铁，中 / 英文）", company: "Việt Global", location: "Q1, HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=09df15b9f88792f5" },
        // COLORKEY 珂拉琪 (LinkedIn)
        { title: "AR Accountant", company: "Colorkey 珂拉琪", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/hcm-accountant-receivable-at-colorkey-vietnam-4390415127" },
        // BlueFocus 蓝色光标 (LinkedIn)
        { title: "Admin Executive (Chinese)", company: "BlueFocus 蓝色光标", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/admin-executive-chinese-at-bluefocus-4396061568" },
        // PingPong Payments (LinkedIn)
        { title: "Sales Specialist", company: "PingPong Payments", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/sales-specialist-at-pingpong-payments-4359221250" },
        { title: "POS Local Implementation Specialist", company: "PingPong Payments", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/pos-local-implementation-and-maintenance-specialist-1-year-contract-at-pingpong-payments-4391689677" },
        // Alibaba.com (LinkedIn)
        { title: "Sales Supervisor", company: "Alibaba.com 阿里巴巴", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/sales-supervisor-at-alibaba-com-4393532813" },
        // Alibaba Cloud (LinkedIn)
        { title: "Channel Business Development", company: "Alibaba Cloud 阿里云", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/channel-business-development-ho-chi-minh-city-vietnam-at-alibaba-cloud-4354153192" },
        // ByteDance (LinkedIn)
        { title: "BytePlus Sales Specialist（Mandarin）", company: "ByteDance 字节跳动", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/innovation-tech-solution-sales-specialist-byteplus-vietnam-philippines-mandarin-speaking-at-bytedance-4384282529" },
        // JD.COM 京东 (LinkedIn)
        { title: "Sales Support", company: "JD.COM 京东", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/sales-support-at-jd-com-4385667864" },
        { title: "Operations Manager (JD YOUNG)", company: "JD.COM 京东", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/operations-manager-jd-young-internship-program-at-jd-com-4388945818" },
      ]
    },

    // ============================================================
    // 6.2 物流货代 / 仓储 / 供应链
    // ============================================================
    {
      id: "logistics",
      title: "物流货代 / 仓储 / 供应链",
      jobs: [
        // CHAINVALUE VIETNAM
        { title: "商务助理（中文）", company: "Chainvalue Vietnam", location: "HCM", channel: "TopCV+VW", url: "https://www.topcv.vn/viec-lam/tro-ly-kinh-doanh-thanh-thao-tieng-trung/2105174.html" },
        { title: "中文进出口单证员", company: "Chainvalue Vietnam", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/nhan-vien-chung-tu-xuat-nhap-khau-thanh-thao-tieng-trung-2034951-jv" },
        { title: "CSKH Logistics / Kho vận（中文）", company: "Chainvalue Vietnam", location: "HCM", channel: "VW+LinkedIn", url: "https://www.vietnamworks.com/nhan-vien-cham-soc-khach-hang-logisticskho-van-yeu-cau-tieng-trung-2025878-jv" },
        // HAISTONG 海仕通
        { title: "Customer Service Logistics（中文）", company: "Haistong 海仕通", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/customer-service-logistic-tieng-trung/1988963.html" },
        { title: "Operation / Documentation (Booking-SI)", company: "Haistong 海仕通", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=e1bc108aaeb57d59" },
        // COLUMBUS FREIGHT
        { title: "操作部主管（中文）", company: "Columbus Freight", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/truong-phong-thao-tac-tieng-trung/2091375.html" },
        { title: "操作员（中文）", company: "Columbus Freight", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-thao-tac-tieng-trung/2086334.html" },
        // LINKTRANS LOGISTICS
        { title: "行政人事专员（中文）", company: "Linktrans Logistics", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-hanh-chinh-nhan-su-giao-tiep-tot-tieng-trung-luong-up-to-20-trieu-tp-hcm/2094907.html" },
        { title: "Logistics Sales Executive（中文）", company: "Linktrans Logistics", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/logistics-sales-executive-nhan-vien-kinh-doanh-logistics-tieng-trung-giao-tiep-tot-luong-up-to-18-trieu-tp-hcm/2102781.html" },
        // ADP LOXSON LOGISTICS
        { title: "CSKH Logistics（HSK5+）", company: "ADP Loxson Logistics", location: "Bình Thạnh, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-cskh-nganh-logistics-tieng-trung-hsk5-tro-len-luong-12-16-trieu-quan-binh-thanh-tphcm/2105464.html" },
        { title: "CSKH 中文（有经验）", company: "ADP Loxson Logistics", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/cham-soc-khach-hang-tieng-trung-co-kinh-nghiem/1486637.html" },
        // SOONDONE LOGISTICS
        { title: "内部会计（中文）", company: "Soondone Logistics", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-noi-bo-tieng-trung/1914954.html" },
        // XWILL SUPPLY CHAIN
        { title: "会计（中文）", company: "Xwill Supply Chain", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-tieng-trung/1383093.html" },
        // SHANHAIMAP 山海图
        { title: "CSKH 中文（周一至五）", company: "Shanhaimap 山海图", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/cham-soc-khach-hang-tieng-trung-lam-viec-tu-thu-2-den-thu-6/2106638.html" },
        { title: "CSKH 中文（试用 100% 工资）", company: "Shanhaimap 山海图", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=a7edb9f0ae38193d" },
        // SINOTRANS 中外运
        { title: "Operation & Equipment Control", company: "Sinotrans 中外运", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=fd466b127816f549" },
        // TOP ONE BEST / 百世物流 (Indeed)
        { title: "进出口单证员", company: "百世物流 Top One Best", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=960d281a3e1bcb6d" },
        // YUNYI 运易物流
        { title: "运营助理（中文）", company: "Yunyi 运易物流", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-van-hanh-tieng-trung/1781696.html" },
        { title: "文秘（基础中文）", company: "Yunyi 运易物流", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-thu-biet-tieng-trung/1678929.html" },
        { title: "总经理助理（中文）", company: "Yunyi 运易物流", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-li-tong-giam-doc-thanh-thao-tieng-trung/1716361.html" },
        { title: "运输调度实习生（中文）", company: "Yunyi 运易物流", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/thuc-tap-sinh-dieu-phoi-van-tai-tieng-trung/1829131.html" },
        { title: "物流市场拓展员", company: "Yunyi 运易物流", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=f01311546a5edba8" },
        // EBAO NETWORK
        { title: "Sales Logistics", company: "Ebao Network", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=a4946b274f5c79a3" },
        { title: "内部会计", company: "Ebao Network", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=52d106a520064c9b" },
        // DAYA 国际货运
        { title: "Sales Logistics（中文）", company: "Daya 国际货运", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=ffdb95da11bd7552" },
        { title: "单证实习生（中文）", company: "Daya 国际货运", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=9f9bae6849b77df2" },
        { title: "Sales Logistics 实习生（中文）", company: "Daya 国际货运", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=9d20435324536873" },
        { title: "单证员（中文）", company: "Daya 国际货运", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=b0ae8995d37af294" },
        { title: "销售 / Sales Logistics（中文）", company: "Daya 国际货运", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=adc82a74e214f5d1" },
        // J&T CARGO
        { title: "网络绩效主管（中文）", company: "J&T Cargo", location: "HCM", channel: "TopCV+Indeed", url: "https://www.topcv.vn/viec-lam/chu-quan-hieu-suat-mang-luoi-tieng-trung/2106150.html" },
        { title: "采购主管（中文）", company: "J&T Cargo", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/giam-sat-thu-mua-tieng-trung-hcm/2109008.html" },
        { title: "招聘专员（中文）", company: "J&T Cargo", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-tuyen-dung-biet-tieng-trung-hcm/2074629.html" },
        // FASTOCK 跨境仓储
        { title: "中文翻译助理", company: "Fastock 跨境仓储", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-phien-dich-tieng-trung/2096492.html" },
        { title: "市场拓展员（中文）", company: "Fastock 跨境仓储", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-phat-trien-thi-truong-biet-tieng-trung/2107757.html" },
        { title: "中文员工", company: "Fastock 跨境仓储", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-tieng-trung/2107715.html" },
        // CHIJUN 智运
        { title: "中文助理", company: "Chijun 智运", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung/1831448.html" },
        { title: "中文助理 - 市场拓展", company: "Chijun 智运", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung-mang-phat-trien-thi-truong/2066626.html" },
        // JINGDONG Logistics 京东物流 (LinkedIn)
        { title: "Talent Acquisition Partner（双语）", company: "京东物流 JINGDONG Logistics", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/talent-acquisition-partner-bilingual-english-mandarin-at-jingdong-logistics-4387101299" },
        // KLN 嘉里大通 (LinkedIn)
        { title: "2026 Graduate Trainee", company: "KLN 嘉里大通", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/2026-graduate-trainee-management-trainee-program-at-kln-logistics-group-4394471155" },
        // BEST LOGISTICS 百世 (VW)
        { title: "总经理助理（中文）", company: "百世物流 Best Logistics", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/tro-ly-tong-giam-djoc-tieng-trung-2032639-jv" },
      ]
    },

    // ============================================================
    // 6.3 消费电子 / 家电 / 智能硬件
    // ============================================================
    {
      id: "electronics",
      title: "消费电子 / 家电 / 智能硬件",
      jobs: [
        // GREE 格力
        { title: "销售（中 / 英文）", company: "Gree 格力", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-kinh-doanh-nu-tieng-trung-tieng-anh/1302237.html" },
        { title: "售后保修助理（中文）", company: "Gree 格力", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-bao-hanh-tieng-trung/2095879.html" },
        { title: "商务助理（中文）", company: "Gree 格力", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-kinh-doanh-tieng-trung/1398992.html" },
        // OPPO VIETNAM
        { title: "实习会计", company: "OPPO Vietnam", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=6e1b6ed19834ee27" },
        { title: "Call Center Agent（中文）", company: "OPPO Vietnam", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=f56e1e66d3e70e76" },
        { title: "CEO Assistant", company: "OPPO Vietnam", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=b38a37d77b65b7a0" },
        { title: "服务平台运营专员（中文）", company: "OPPO Vietnam", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-hanh-nen-tang-dich-vu-tieng-trung/2091889.html" },
        { title: "系统运营（中文）", company: "OPPO Vietnam", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/chuy%C3%AAn-vi%C3%AAn-v%E1%BA%ADn-h%C3%A0nh-h%E1%BB%87-th%E1%BB%91ng-ti%E1%BA%BFng-trung-at-vk-careers-oppo-authorized-exclusive-distributor-vietnam-4322056717" },
        // FOTON 福田
        { title: "卡车配件销售（中文）", company: "Foton 福田汽车", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/kinh-doanh-phu-tung-biet-tieng-trung-xe-tai/2058272.html" },
        // WCAR 新能源汽车
        { title: "实习生（中文）", company: "Wcar 新能源汽车", location: "HCM", channel: "TopCV+Indeed", url: "https://www.topcv.vn/viec-lam/thuc-tap-sinh-tieng-trung-internship/2085317.html" },
        { title: "中文实习生", company: "Wcar 新能源汽车", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=67fdc771459069fd" },
        // TECHTRONIC / TTI 创科
        { title: "中文翻译", company: "Techtronic / TTI 创科", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/bien-phien-dich-tieng-trung-tai-ho-chi-minh-thu-nhap-hap-dan/1490421.html" },
        { title: "Asst. Merchandising Manager", company: "Techtronic / TTI 创科", location: "Củ Chi", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/assistant-merchandising-manager-merchandising-executive-at-techtronic-industries-tti-4388052412" },
        // LENOVO 联想
        { title: "ECAT(PCBA) Supplier Quality Engineer（普通话）", company: "Lenovo 联想", location: "Q1, HCM", channel: "Indeed+LinkedIn", url: "https://vn.linkedin.com/jobs/view/ecat-pcba-supplier-quality-engineer-mandarin-speaking-at-lenovo-4330242462" },
        // HUAWEI 华为 (VW)
        { title: "Project Manager", company: "Huawei 华为", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/project-manager--2023028-jv" },
        { title: "RF Engineer", company: "Huawei 华为", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/rf-engineer--2021114-jv" },
        // CHOHO Industrial (LinkedIn)
        { title: "销售经理", company: "CHOHO Industrial", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/%E9%94%80%E5%94%AE%E7%BB%8F%E7%90%86-at-choho-industrial-4392341705" },
        // TP-Link (LinkedIn)
        { title: "Key Account Executive", company: "TP-Link 普联", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/key-account-executive-retail-thi%E1%BA%BFt-b%E1%BB%8B-%C4%91i%E1%BB%87n-t%E1%BB%AD-c%C3%B4ng-ngh%E1%BB%87-at-tp-link-4392850014" },
        // BYD (LinkedIn)
        { title: "HR Supervisor (中文)", company: "BYD Oway Auto 比亚迪", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/hcm-hr-supervisor-ti%E1%BA%BFng-trung-at-byd-oway-auto-4389898059" },
        // Midea (LinkedIn)
        { title: "Customs Officer", company: "Midea 美的", location: "Hòa Thới", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/customs-officer-junior-mid-level-at-midea-vietnam-4383533330" },
        // Sungrow (LinkedIn)
        { title: "Operational Specialist", company: "Sungrow 阳光电源", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/operational-specialist-at-sungrow-4370082223" },
        // vivo (LinkedIn)
        { title: "礼宾行政（中文）", company: "vivo Vietnam", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/l%E1%BB%85-t%C3%A2n-h%C3%A0nh-ch%C3%ADnh-ti%E1%BA%BFng-trung-at-vivo-vietnam-career-4394448348" },
        // vivo 官方招聘页 (8 jobs)
        { title: "总经理助理（中文）", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "TikTok 视频剪辑 - KOL", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "Media Monitoring", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "Marketing Assistant", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "Website Promotion", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "Designer", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "Visual Supervisor", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        { title: "Trade Marketing Supervisor / Executive", company: "vivo Vietnam", location: "HCM", channel: "官网", url: "https://www.vivosmartphone.vn/tuyen-dung.html" },
        // TCL 官方 (VW)
        { title: "Key Account Sales - MT Channel (All Levels)", company: "TCL Vietnam", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/key-account-sales-mt-channel-all-levels-2028103-jv" },
        { title: "GT Sales - All Levels", company: "TCL Vietnam", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/gt-sales-all-levels-2028059-jv" },
        { title: "2026 Management Trainee", company: "TCL Vietnam", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/2026-management-trainee--2027433-jv" },
        { title: "Head of Product (Air-Conditioner)", company: "TCL Vietnam", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/head-of-product-air-conditioner--2025446-jv" },
      ]
    },

    // ============================================================
    // 6.4 制造业（机电 / 纺织 / 美妆生产 / 工程）
    // ============================================================
    {
      id: "manufacturing",
      title: "制造业（机电 / 纺织 / 美妆生产 / 工程）",
      jobs: [
        // CHINA EQUIPMENT GROUP
        { title: "总经理助理（中文）", company: "China Equipment Group", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tong-giam-doc-tieng-trung/1587208.html" },
        { title: "人力行政专员（中文）", company: "China Equipment Group", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-hcns-tieng-trung/1860926.html" },
        // YAGUAN BIOTECH
        { title: "销售 / 商务谈判（中文）", company: "Yaguan Biotech", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-kinh-doanh-dam-phan-biet-tieng-trung/2095381.html" },
        // KIN LONG 坚朗
        { title: "销售（家具 / 中文优先）", company: "Kin Long 坚朗五金", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-kinh-doanh-nam-luong-cung-8-10-trieu-hoa-hong-ko-gioi-han-uu-tien-biet-tieng-trung-sales-tu-van-ban-hang-noi-that/2090927.html" },
        { title: "仓库主管（中文）", company: "Kin Long 坚朗五金", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=ca28edaaa52d81d3" },
        // KESAI EAGROW
        { title: "内部会计（中文）", company: "Kesai Eagrow", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-noi-bo-tieng-trung/2097248.html" },
        // POWERCHINA 中国电建
        { title: "中文翻译（3 年经验）", company: "PowerChina 中国电建", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/phien-dich-tieng-trung-3-nam-kinh-nghiem-phong-van-di-lam-ngay/1826074.html" },
        // MOTINOVA
        { title: "设备 / 工艺工程师（中文）", company: "Motinova", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=359069e4e9625a41" },
        { title: "维护与生产改进员（中文）", company: "Motinova", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=4600cc3c62cbada9" },
        // TENGLONG TEXTILE 腾龙纺织
        { title: "订单跟单员（中文）", company: "Tenglong Textile 腾龙纺织", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-theo-doi-don-hang-tieng-trung/1222605.html" },
        { title: "业务员（中 / 英文）", company: "Tenglong Textile 腾龙纺织", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nv-kinh-doanh-tieng-trung-hoac-anh/1627755.html" },
        // DONEWIN TECHNOLOGIES 笃恒
        { title: "采购员（中文）", company: "Donewin Technologies 笃恒", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-thu-mua-biet-tieng-trung/2037108.html" },
        { title: "商务助理（中文）", company: "Donewin Technologies 笃恒", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-kinh-doanh-tieng-trung/2079588.html" },
        // WANXING 万星
        { title: "CSKH（中文）", company: "Wanxing 万星网络科技", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-cham-soc-khach-hang-biet-tieng-trung/1806832.html" },
        // HORIZON / 远东宏信 (VW)
        { title: "C&B 专员（中文）", company: "远东宏信 Horizon", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/chuyen-vien-candb-thanh-thao-tieng-trung-2034931-jv" },
        { title: "税务会计（中 / 英文）", company: "远东宏信 Horizon", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/ke-toan-thue-giao-tiep-tot-tieng-anh-hoac-tieng-hoa-luong-upto-30-million-2028598-jv" },
        { title: "设备销售总监（中文）", company: "远东宏信 Horizon", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/giam-djoc-kinh-doanh-thiet-bi-tieng-trung-2021219-jv" },
        // Bodor Laser 博特激光 (LinkedIn)
        { title: "人力资源经理", company: "Bodor Laser 博特激光", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E7%BB%8F%E7%90%86-at-bodor-laser-4382955471" },
        // Shanghai Weixing 上海伟星 (LinkedIn)
        { title: "Sales / Sales Assistant", company: "上海伟星 Shanghai Weixing", location: "HCM", channel: "LinkedIn", url: "https://vn.linkedin.com/jobs/view/nh%C3%A2n-vi%C3%AAn-tr%E1%BB%A3-l%C3%BD-kinh-doanh-4394249701" },
      ]
    },

    // ============================================================
    // 6.5 互联网 / 软件 / 云服务
    // ============================================================
    {
      id: "internet",
      title: "互联网 / 软件 / 云服务",
      jobs: [
        // YONYOU 用友
        { title: "CSKH 中文", company: "Yonyou 用友", location: "HCM", channel: "TopCV+Indeed", url: "https://www.topcv.vn/viec-lam/cham-soc-khach-hang-tieng-trung/2100211.html" },
        { title: "ERP 软件顾问（中文）", company: "Yonyou 用友", location: "HCM", channel: "TopCV+Indeed+LinkedIn", url: "https://www.topcv.vn/viec-lam/chuyen-vien-tu-van-phan-mem-erp-tieng-trung/1535301.html" },
        { title: "中文实习生", company: "Yonyou 用友", location: "HCM", channel: "TopCV+Indeed", url: "https://www.topcv.vn/viec-lam/thuc-tap-sinh-tieng-trung/2106148.html" },
        // ITECHWX
        { title: "Executive Assistant to President (Chinese)", company: "Itechwx", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/executive-assistant-to-president-chinese-fluency-up-to-28mil/2065886.html" },
        // WANTONG TECHNOLOGY 万通科技 (VW)
        { title: "财务活动策划专员", company: "Wantong 万通科技", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/chuyen-vien-lap-ke-hoach-su-kien-tai-chinh-financial-event-planner-2033472-jv" },
        { title: "内部会计", company: "Wantong 万通科技", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/ke-toan-noi-bo-internal-accountant-2033467-jv" },
        { title: "财务数据分析师", company: "Wantong 万通科技", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/chuyen-vien-phan-tich-tai-chinh-financial-data-analyst-2033437-jv" },
        // PORO 科技
        { title: "中文教师（兼职 / 在线）", company: "Poro Technology", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/giao-vien-tieng-trung-part-time-online-hoa-ngu-dac-nhan/2090575.html" },
        { title: "中文教师（兼职 / 在线）", company: "Poro Technology", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/giao-vien-tieng-trung-part-time-online/2106145.html" },
      ]
    },

    // ============================================================
    // 6.6 银行 / 金融 / 资管
    // ============================================================
    {
      id: "finance",
      title: "银行 / 金融 / 资管",
      jobs: [
        // SQ INTERNATIONAL TRADE
        { title: "中文会计 / Accountant (Mandarin)", company: "SQ International Trade", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-tieng-trung-accountant-mandarin/2093509.html" },
        { title: "总账会计（中文）", company: "SQ International Trade", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-tong-hop-tieng-trung/2088345.html" },
        { title: "采购专员（中文）", company: "SQ International Trade", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-mua-hang-tieng-trung/2078826.html" },
        // WU SHUANG ASSET
        { title: "财务主管（中 / 英文）", company: "Wu Shuang Asset 资管", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-truong-co-the-su-dung-tieng-anh-hoac-tieng-trung/2093689.html" },
        // BANK OF CHINA (HK) HCM (官方)
        { title: "Marketing Staff（中文优先）", company: "Bank of China (HK) HCM", location: "HCM", channel: "官网", url: "https://www.bankofchina.com.vn/vi-vn/top/aboutus/careers/job-opening.html" },
        { title: "Risk Management Staff（中文优先）", company: "Bank of China (HK) HCM", location: "HCM", channel: "官网", url: "https://www.bankofchina.com.vn/vi-vn/top/aboutus/careers/job-opening.html" },
        { title: "Financial Accounting Staff（中文优先）", company: "Bank of China (HK) HCM", location: "HCM", channel: "官网", url: "https://www.bankofchina.com.vn/vi-vn/top/aboutus/careers/job-opening.html" },
        { title: "Trader（中文优先）", company: "Bank of China (HK) HCM", location: "HCM", channel: "官网", url: "https://www.bankofchina.com.vn/vi-vn/top/aboutus/careers/job-opening.html" },
        // CHINA CONSTRUCTION BANK (VW)
        { title: "Relationship Manager", company: "中国建设银行 CCB HCM", location: "HCM", channel: "VW", url: "https://www.vietnamworks.com/relationship-manager-2024931-jv" },
      ]
    },

    // ============================================================
    // 6.7 餐饮 / 酒店 / 服务业 / 航空
    // ============================================================
    {
      id: "service",
      title: "餐饮 / 酒店 / 服务业 / 航空",
      jobs: [
        // HAI DI LAO 海底捞
        { title: "仓库管理员（中文）", company: "Hai Di Lao 海底捞", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-quan-kho-tieng-trung/2059785.html" },
        { title: "HR 实习生（要求中文）", company: "Hai Di Lao 海底捞", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/thuc-tap-sinh-nhan-su-yeu-cau-biet-tieng-trung/1528086.html" },
        // WAH FU PALACE 华富宫
        { title: "中文前台", company: "Wah Fu Palace 华富宫", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=ab48f3c7cf9b41fb" },
        // HUAZHU 华住
        { title: "采购员", company: "Huazhu 华住酒店", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=277f5eb220861756" },
        // SPRING AIRLINES 春秋航空
        { title: "Airport Ground Service", company: "Spring Airlines 春秋航空", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=3563ba0e2f21656f" },
      ]
    },

    // ============================================================
    // 6.8 贸易 / 综合 / 其他
    // ============================================================
    {
      id: "other",
      title: "贸易 / 综合 / 其他",
      jobs: [
        // DABBSON 达布森
        { title: "渠道分销代理（懂中文 / 英文 / 技术产品）", company: "Dabbson 达布森", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=ae6b01644336d228" },
        // BODE SCM GROUP
        { title: "总经理助理（懂中文）", company: "Bode SCM Group", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-giam-doc-biet-tieng-trung-nhan-viec-ngay/2071704.html" },
        // ENGU TECHNOLOGY
        { title: "HR 助理（中文）", company: "Engu Technology", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-hcns-biet-tieng-trung/1999466.html" },
        // XDS TECHNOLOGY
        { title: "中文助理（流利沟通）", company: "XDS Technology", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung-giao-tiep-luu-loat-khong-yeu-cau-kinh-nghiem-thu-nhap-10-20-trieu/1979323.html" },
        // ZHENG DA 正大科技
        { title: "中文翻译助理（HSK5）", company: "Zheng Da 正大科技", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-phien-dich-tieng-trung-hsk5/1884727.html" },
        // ZHOUJIQIAO 周记桥
        { title: "行政人事（中 / 英文）", company: "Zhoujiqiao 周记桥", location: "HCM", channel: "TopCV+Indeed", url: "https://www.topcv.vn/viec-lam/hanh-chinh-nhan-su-tieng-trung-tieng-anh/2102731.html" },
        { title: "内部会计（中文）", company: "Zhoujiqiao 周记桥", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-biet-tieng-trung/2094210.html" },
        { title: "招聘专员", company: "Zhoujiqiao 周记桥", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=31232050e433e9ec" },
        { title: "行政人事", company: "Zhoujiqiao 周记桥", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=6a7976a694bdfb50" },
        // ASIA LINK
        { title: "CSKH 中文（女）", company: "Asia Link", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-cham-soc-khach-hang-tieng-trung-nu/2102291.html" },
        // DATONG TRADING
        { title: "总账会计（中文）", company: "Datong Trading", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-ke-toan-tong-hop-tieng-trung/2091730.html" },
        // JIA XIANG TRADING 家祥
        { title: "Sales Admin（中文）", company: "Jia Xiang 家祥", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/sales-admin-biet-tieng-trung/2095204.html" },
        // GUICUIHUI
        { title: "内部会计（中文）", company: "Guicuihui", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-ke-toan-noi-bo-biet-tieng-trung/2096232.html" },
        // XIYI MEDIA 西意传媒
        { title: "中文助理", company: "Xiyi Media 西意传媒", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung/2026705.html" },
        // WANDEFU
        { title: "中文翻译", company: "Wandefu", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/phien-dich-tieng-trung/2075752.html" },
        // WANYI
        { title: "中文翻译（化妆品）", company: "Wanyi Vietnam", location: "Q2, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/phien-dich-tieng-trung-nganh-my-pham-thu-nhap-14-trieu-lam-viec-tai-quan-2/2065247.html" },
        // XU XIAOYING
        { title: "中文翻译", company: "Xu Xiaoying", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/phien-dich-tieng-trung/2074223.html" },
        // IABER
        { title: "助理兼中文翻译", company: "Iaber", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-kiem-phien-dich-vien-tieng-trung-nu-luong-upto-38-trieu/2097341.html" },
        // SHENZHEN LITHTECH ENERGY
        { title: "储能系统工程师 (BESS)", company: "Shenzhen Lithtech Energy", location: "HCM", channel: "Indeed", url: "https://vn.indeed.com/viewjob?jk=08f762a75a2bedcf" },
        // ENRICHMENT RISE
        { title: "总账会计（中文）", company: "Enrichment Rise", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-tong-hop-tieng-trung/2030028.html" },
        { title: "中文翻译助理", company: "Enrichment Rise", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-phien-dich-tieng-trung/2030013.html" },
        { title: "直播运营（中文）", company: "Enrichment Rise", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/van-hanh-livestream-tieng-trung/2030006.html" },
        { title: "中文员工（无经验）", company: "Enrichment Rise", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-tieng-trung-khong-yeu-cau-kinh-nghiem/2083188.html" },
        // KEEP RISE
        { title: "人事经理（中 / 英文，Q7）", company: "Keep Rise", location: "Q7, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/truong-phong-nhan-su-biet-tieng-trung-tieng-anh-nhan-viec-ngay-quan-7/2088602.html" },
        { title: "C&B 专员（中 / 英文）", company: "Keep Rise", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-cb-biet-tieng-trung-hoac-anh/2048640.html" },
        // HỒNG TƯỜNG 红堂
        { title: "中文助理", company: "Hồng Tường 红堂", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung/2105262.html" },
        { title: "中文会计", company: "Hồng Tường 红堂", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-biet-tieng-trung/2105188.html" },
        { title: "中文助理（无需经验）", company: "Hồng Tường 红堂", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung-khong-yeu-cau-kinh-nghiem/2086229.html" },
        // BUSY MING 忙明
        { title: "中文助理", company: "Busy Ming 忙明", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-tieng-trung/2045820.html" },
        { title: "公关 PR 专员（中文）", company: "Busy Ming 忙明", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/chuyen-vien-quan-he-cong-chung-pr-tieng-trung/2090652.html" },
        { title: "HRBP - Chinese Communication", company: "Busy Ming 忙明", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/hrbp-chinese-communication/2078907.html" },
        // BẰNG TRÌNH 邦程
        { title: "仓库员工（中文）", company: "Bằng Trình 邦程", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-kho-biet-tieng-trung/2095098.html" },
        { title: "中文助理（兼 / 全职）", company: "Bằng Trình 邦程", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/tro-ly-part-time-fulltime-biet-tieng-trung/2095096.html" },
        // NI HAO 你好
        { title: "中文教师 - 全职", company: "Ni Hao 你好", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/giao-vien-tieng-trung-full-time/1797078.html" },
        { title: "中文教师 - 兼职", company: "Ni Hao 你好", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/giao-vien-tieng-trung-part-time/1950012.html" },
        // TỶ THẠC 比硕
        { title: "文员（中 / 英文，KCN Tân Tạo）", company: "Tỷ Thạc 比硕", location: "Bình Tân, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-phong-tieng-anh-hoac-tieng-trung-kcn-tan-tao-binh-tan-di-lam-ngay/2108047.html" },
        { title: "文员（中 / 英文）", company: "Tỷ Thạc 比硕", location: "Bình Tân, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-phong-tieng-anh-hoac-tieng-trung-kcn-tan-tao-binh-tan/1276532.html" },
        // KHẢI THỊNH 凯盛
        { title: "中文文员 / Customer Service / Sales", company: "Khải Thịnh 凯盛", location: "Q7, HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/nhan-vien-van-phong-tieng-trung-nu-customer-service-sales-telesales-tu-van-thu-nhap-1019-trieu-khong-yeu-cau-kinh-nghiem-di-lam-ngay-quan-7/2095963.html" },
        // GXB / LAZBAO GROUP
        { title: "总账会计（中文优先）", company: "GXB / LazBao Group", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/ke-toan-tong-hop-uu-tien-biet-tieng-trung/1511060.html" },
        { title: "中文翻译兼助理", company: "GXB / LazBao Group", location: "HCM", channel: "TopCV", url: "https://www.topcv.vn/viec-lam/phien-dich-kiem-tro-ly-tieng-trung/1994003.html" },
      ]
    }
  ]
};
