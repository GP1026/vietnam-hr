# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目目标
在越南胡志明市开展「帮中国企业招聘懂普通话的本地越南员工」服务业务。

## 当前阶段
调研期 — 计划赴胡志明市实地拜访2周。

## 调研城市
胡志明市（Ho Chi Minh City），核心区域：第1郡、第4郡、第3郡

## 文件结构与关系

四个输出文件来自同一份数据，需保持同步：

| 文件 | 用途 | 更新方式 |
|------|------|----------|
| `docs/HCMC_HR_Companies_Report.md` | 主数据源，人工可读 | 直接编辑 |
| `index.html` / `src/HCMC_HR_Companies_Report.html` | HR 公司可视化报告（两文件内容完全相同） | 根据 .md 重新生成 |
| `jobs.html` | 中资企业招聘中文岗位调研页（独立页面，含页面导航栏） | 独立维护 |
| `src/HCMC_HR_Companies_Map.kml` | Google My Maps 导入文件（根目录有同名副本，两份内容相同） | 根据 .md 中的地址更新坐标，两份同步 |

**更新公司信息时**：先改 `.md`，再同步更新两个 HTML 文件和两份 `.kml`。

`index.html` 与 `src/HCMC_HR_Companies_Report.html` 内容完全相同，修改时需同时更新两份。

## HTML 报告结构

HTML 文件为纯静态单页，无构建步骤，直接用浏览器打开。结构：
- 顶部横幅 + 统计栏（公司数、郡区数、含地图链接数）
- 公司卡片列表（`.company-card`），每张卡片含国际/本土标签、联系表格、地图链接
- KML 下载按钮区
- 底部重点楼宇提示框（E.Town Central 同楼3家公司）

新增公司时，同步更新统计栏中的数字。

## KML 文件结构

`src/HCMC_HR_Companies_Map.kml` 用于导入 Google My Maps。
- 蓝色图标（`#international`）= 国际连锁公司
- 红色图标（`#local`）= 越南本土公司
- 每个 `<Placemark>` 包含：公司名、类型、地址、电话、邮箱、官网，坐标用 `<coordinates>经度,纬度,0</coordinates>` 格式

## 数据完整性规则

- **只收录经官网直接核实的信息**，不得推断或填充未经证实的字段
- 每家公司必须有：官网 URL、HCMC 实体地址、电话、邮箱、信息来源 URL
- 无法核实 HCMC 具体地址的公司（如 Aniday、Korn Ferry）不予收录
- 抵越前建议电话确认地址（商业地址偶有迁移）

## 重点公司（同一栋楼可一次拜访3家）

E.Town Central, 11 Doan Van Bo, District 4：
- CGP Vietnam（25F）
- Adecco Vietnam（14F）
- Navigos Group / VietnamWorks / Navigos Search（20F）

## 拜访核心问题

1. 是否有中文/普通话人才专项数据库？
2. 懂普通话的本地越南人薪资期望？
3. 是否愿意以合作/分成模式接中资企业招聘需求？
