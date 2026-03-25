# 柠健康 APP 用户手册

## 项目说明

本项目用于生成柠健康 APP 的网页版用户手册，方便用户在线查阅使用指南。

## 项目结构

```
NingHealth_App_Manual/
├── docs/              # 文档源文件
│   ├── README.md     # 首页
│   ├── getting-started.md  # 快速开始
│   ├── features/     # 功能说明
│   └── faq/          # 常见问题
├── public/            # 静态资源（图片、图标）
├── mkdocs.yml         # MkDocs 配置
└── requirements.txt   # Python 依赖
```

## 快速开始

### 安装依赖

```bash
pip install mkdocs mkdocs-material
```

### 本地预览

```bash
mkdocs serve
```

访问 http://localhost:8000 查看效果

### 部署到 GitHub Pages

```bash
mkdocs gh-deploy
```

## 功能章节规划

- **快速开始**
  - 下载安装
  - 注册/登录
  - 首次使用指引

- **核心功能**
  - 健康档案管理
  - 就医预约
  - 健康监测
  - 药品管理
  - 健康资讯

- **高级功能**
  - 家庭成员管理
  - 健康目标设置
  - 数据同步

- **帮助与支持**
  - 常见问题
  - 联系客服
  - 反馈建议
