export interface ProjectTranslation {
  title: string;
  excerpt: string;
  role: string;
  problem: string;
  solution: string;
  content: string;
  screenshotAlts?: string[];
}

export const projectTranslations: Record<string, Record<"en" | "ja", ProjectTranslation>> = {
  "todo-planner": {
    en: {
      title: "Todo Planner",
      excerpt:
        "A personal planning app for managing tasks, routines, subtasks, notes, and job applications, with offline support and optional synchronization.",
      role: "Mobile App · Fullstack",
      problem:
        "Personal planning can get scattered across apps. Users need one place to organize schedules and task progress, routines, notes, and job applications—even when their device is offline.",
      solution:
        "Todo Planner brings these planning tools together in an Expo/React Native app. Data is stored locally, with an optional Bun/Hono backend and PostgreSQL for synchronization.",
      screenshotAlts: [
        "Todo Planner home screen with an activity summary",
        "The first Todo Planner welcome screen",
        "The second Todo Planner introduction screen",
        "The third Todo Planner introduction screen",
        "Todo Planner task list",
        "Todo Planner task history",
        "Form for creating or editing a task",
        "Todo Planner overview and progress screen",
        "Todo Planner people screen",
        "Todo Planner settings",
        "Todo Planner theme color picker",
        "Recently used theme colors",
        "Todo Planner schedule and task calendar",
        "Task details opened from the calendar",
        "Todo Planner task reminder settings",
        "Language and app information settings",
      ],
      content: `<h2>Project overview</h2><p>Todo Planner is a personal planning app built primarily for Android, with web support. The project also includes iOS support, while some capabilities are Android-only.</p><h2>Key features</h2><ul><li>Create tasks, subtasks, schedules, deadlines, and daily or recurring routines.</li><li>View task progress, history, and a planning calendar.</li><li>Keep personal notes and track job applications.</li><li>Configure local reminders, app preferences, and an on-device app lock.</li><li>Store data offline on the device and optionally sync it through a backend and PostgreSQL.</li><li>Scan documents into PDFs or export pages as images on Android devices.</li></ul><h2>Architecture and technology</h2><p>The mobile app is built with Expo, React Native, and TypeScript. Local storage uses AsyncStorage. The optional backend uses Bun, Hono, and PostgreSQL, and can be run alongside the database using Docker Compose.</p><h2>Platform notes</h2><p>Android is the primary platform. Web support is partial, and native features such as Android reminders and document scanning require a device development build.</p>`,
    },
    ja: {
      title: "Todo Planner",
      excerpt:
        "タスク、ルーティン、サブタスク、メモ、求人応募を管理する個人向け計画アプリ。オフライン利用と任意の同期に対応。",
      role: "モバイルアプリ · フルスタック",
      problem:
        "個人の予定や計画が複数のアプリに分散しがちです。端末がオフラインでも、予定やタスクの進捗、ルーティン、メモ、求人応募を一か所で管理できる環境が必要です。",
      solution:
        "Todo Plannerは、これらの計画機能をExpo/React Nativeアプリに集約します。データは端末に保存され、必要に応じてBun/HonoバックエンドとPostgreSQLで同期できます。",
      screenshotAlts: [
        "アクティビティ概要を表示するTodo Plannerのホーム画面",
        "Todo Plannerの最初のウェルカム画面",
        "Todo Plannerの2番目の紹介画面",
        "Todo Plannerの3番目の紹介画面",
        "Todo Plannerのタスクリスト",
        "Todo Plannerのタスク履歴",
        "タスクの作成・編集フォーム",
        "Todo Plannerの概要と進捗画面",
        "Todo Plannerのユーザー画面",
        "Todo Plannerの設定画面",
        "Todo Plannerのテーマカラー選択画面",
        "最近使用したテーマカラー",
        "Todo Plannerの予定とタスクのカレンダー",
        "カレンダーから開いたタスクの詳細",
        "Todo Plannerのタスクリマインダー設定",
        "言語とアプリ情報の設定",
      ],
      content: `<h2>プロジェクト概要</h2><p>Todo Plannerは、Androidを主な対象とし、Webにも対応する個人向け計画アプリです。iOSにも対応していますが、一部の機能はAndroid専用です。</p><h2>主な機能</h2><ul><li>タスク、サブタスク、予定、期限、毎日または定期的なルーティンを作成。</li><li>タスクの進捗や履歴、計画カレンダーを確認。</li><li>個人メモを保存し、求人応募を管理。</li><li>ローカル通知、アプリ設定、端末内のアプリロックを設定。</li><li>データを端末にオフライン保存し、バックエンドとPostgreSQLを使って任意で同期。</li><li>Android端末で書類をPDFにスキャンしたり、ページを画像として書き出したりできます。</li></ul><h2>アーキテクチャと技術</h2><p>モバイルアプリはExpo、React Native、TypeScriptで構築しています。ローカルストレージにはAsyncStorageを使用します。任意のバックエンドはBun、Hono、PostgreSQLで構成され、Docker Composeでデータベースとともに起動できます。</p><h2>プラットフォームについて</h2><p>主な対象はAndroidです。Web対応は一部に限られ、Android通知や書類スキャンなどのネイティブ機能には、端末向けのDevelopment Buildが必要です。</p>`,
    },
  },
  "inventory-management": {
    en: {
      title: "Inventory & Money Management (In Progress)",
      excerpt:
        "A Laravel application with an API for managing products, inventory stock, financial accounts, and debit or credit transactions.",
      role: "Web App · Backend & API",
      problem:
        "Product records, stock quantities, account balances, and transactions need a consistent structure to make them easier to manage and extend.",
      solution:
        "This project provides a Laravel application foundation, models and migrations for products, inventory, accounts, and transactions, plus JSON endpoints for core data operations.",
      content: `<h2>Project overview</h2><p>Inventory &amp; Money Management is a Laravel backend application that combines product and stock management with account and financial transaction tracking.</p><h2>Features and data flow</h2><ul><li>Record products with a name, SKU, price, and quantity.</li><li>Provide endpoints for reading and adding product and account data.</li><li>Record credit or debit transactions on accounts with an amount and description.</li><li>Use migrations and Eloquent models to define the data structure.</li><li>Provide a Docker Compose setup for MySQL and phpMyAdmin in a local environment.</li></ul><h2>Technology</h2><p>The backend uses Laravel 12 and PHP 8.2. MySQL is configured through the project's Docker Compose setup. The repository also notes future work such as authentication and a frontend interface.</p>`,
    },
    ja: {
      title: "Inventory & Money Management（開発中）",
      excerpt:
        "商品、在庫、金融口座、入出金取引を管理するAPI付きLaravelアプリケーション。",
      role: "Webアプリ · バックエンド/API",
      problem:
        "商品情報、在庫数、口座残高、取引を一貫した構造で管理し、運用や拡張をしやすくする必要があります。",
      solution:
        "このプロジェクトはLaravelアプリケーションの基盤を提供します。商品、在庫、口座、取引のモデルとマイグレーション、および主要なデータ操作用JSONエンドポイントを備えています。",
      content: `<h2>プロジェクト概要</h2><p>Inventory &amp; Money Managementは、商品・在庫管理と口座・金融取引の記録を統合したLaravelバックエンドアプリケーションです。</p><h2>機能とデータフロー</h2><ul><li>商品名、SKU、価格、数量を記録。</li><li>商品や口座データの取得・追加用エンドポイントを提供。</li><li>金額と説明を含む口座の入金・出金取引を記録。</li><li>マイグレーションとEloquentモデルでデータ構造を定義。</li><li>ローカル環境向けにMySQLとphpMyAdminのDocker Compose設定を提供。</li></ul><h2>技術</h2><p>バックエンドにはLaravel 12とPHP 8.2を使用しています。MySQLはプロジェクトのDocker Compose設定で構成します。リポジトリには認証やフロントエンド画面など、今後の開発項目も記載されています。</p>`,
    },
  },
  "access-card-management": {
    en: {
      title: "Access Card Management",
      excerpt:
        "A CodeIgniter application for managing access cards, groups, users, devices, readers, and reports.",
      role: "Web App · Access Management",
      problem:
        "Access cards, user groups, devices, and readers need to be managed in one application so updates and operational status checks are more organized.",
      solution:
        "The application provides administration modules for cards and devices, including duplicate card-number prevention, reader management, and reporting pages.",
      content: `<h2>Project overview</h2><p>Access Card Management is a CodeIgniter-based administration application with modules for cards, readers, devices, users, groups, and reports.</p><h2>Repository features</h2><ul><li>Add cards and check that card numbers are not duplicated.</li><li>Change card status and associate cards with groups or devices.</li><li>Manage readers, including their names, IP addresses, and status.</li><li>Check reader connectivity using HTTP requests and network checks.</li><li>Manage users and groups, and view reports.</li></ul><h2>Technology</h2><p>The repository uses PHP with the CodeIgniter framework and a MySQL database. Reader checks use HTTP/cURL and ping in the application server environment.</p>`,
    },
    ja: {
      title: "Access Card Management",
      excerpt:
        "アクセスカード、グループ、ユーザー、デバイス、リーダー、レポートを管理するCodeIgniterアプリケーション。",
      role: "Webアプリ · アクセス管理",
      problem:
        "カード、ユーザーグループ、デバイス、リーダーを一つのアプリで管理し、更新や稼働状況の確認を整理する必要があります。",
      solution:
        "カードとデバイスの管理機能を提供します。カード番号の重複防止、リーダー管理、レポート画面などを備えています。",
      content: `<h2>プロジェクト概要</h2><p>Access Card Managementは、カード、リーダー、デバイス、ユーザー、グループ、レポートを管理するCodeIgniterベースのアプリケーションです。</p><h2>リポジトリに記載された機能</h2><ul><li>カードを追加し、カード番号の重複を確認。</li><li>カードのステータスを変更し、グループやデバイスとの関連を管理。</li><li>名前、IPアドレス、ステータスなどのリーダー情報を管理。</li><li>HTTPリクエストやネットワーク確認によってリーダーの接続状態を確認。</li><li>ユーザーとグループを管理し、レポートを表示。</li></ul><h2>技術</h2><p>PHP、CodeIgniterフレームワーク、MySQLを使用しています。アプリケーションサーバー環境ではHTTP/cURLとpingでリーダーを確認します。</p>`,
    },
  },
  "certainty-factor-expert-system": {
    en: {
      title: "Certainty Factor Expert System",
      excerpt:
        "A CodeIgniter application for managing symptoms, diseases, a knowledge base, and consultations using Certainty Factor calculations.",
      role: "Web App · Expert System",
      problem:
        "Knowledge rules and symptom confidence scores need a consistent workflow so consultation results can be calculated and clearly presented.",
      solution:
        "The application manages symptoms, diseases, and knowledge relationships, then accepts selected symptoms and condition weights to calculate and rank Certainty Factor results.",
      content: `<h2>Project overview</h2><p>Certainty Factor Expert System is a CodeIgniter application for consultations based on symptoms and knowledge rules stored in a database.</p><h2>Features and workflow</h2><ul><li>Administrators manage symptoms, diseases, and knowledge relationships with MB and MD values.</li><li>Users choose symptoms and condition levels during a consultation.</li><li>The system combines Certainty Factor values, ranks candidate results, and presents descriptions and suggestions stored with disease data.</li><li>Consultation results can be recorded with symptoms and CF values.</li><li>JSON endpoints are available for symptom, disease, and consultation data.</li></ul><h2>Technology and limitations</h2><p>The repository uses PHP, CodeIgniter, and MySQL. This is a rule-based expert system; its output reflects the entered knowledge base and is not a substitute for diagnosis or consultation with a qualified healthcare professional.</p>`,
    },
    ja: {
      title: "Certainty Factorエキスパートシステム",
      excerpt:
        "Certainty Factor計算を用いて、症状、病気、知識ベース、相談を管理するCodeIgniterアプリケーション。",
      role: "Webアプリ · エキスパートシステム",
      problem:
        "相談結果を明確に計算・表示するには、知識ルールと症状の確信度を一貫した手順で管理する必要があります。",
      solution:
        "症状、病気、知識の関連を管理し、選択された症状と状態の重みを受け取ってCertainty Factorの結果を計算・順位付けします。",
      content: `<h2>プロジェクト概要</h2><p>Certainty Factorエキスパートシステムは、データベースに保存された症状と知識ルールに基づいて相談を行うCodeIgniterアプリケーションです。</p><h2>機能とワークフロー</h2><ul><li>管理者はMB値とMD値を含む症状、病気、知識の関連を管理。</li><li>ユーザーは相談時に症状と状態レベルを選択。</li><li>Certainty Factor値を統合して候補を順位付けし、病気データに保存された説明や提案を表示。</li><li>症状とCF値を含めて相談結果を記録可能。</li><li>症状、病気、相談データ向けのJSONエンドポイントを提供。</li></ul><h2>技術と制約</h2><p>PHP、CodeIgniter、MySQLを使用しています。これはルールベースのエキスパートシステムであり、結果は登録された知識ベースに基づく情報です。医療従事者による診断や相談の代わりにはなりません。</p>`,
    },
  },
  "figma-simple-ecommerce": {
    en: {
      title: "Simple E-commerce — Figma Design",
      excerpt:
        "An e-commerce design project linked from a GitHub repository to a Figma design file.",
      role: "Product Design · E-commerce",
      problem:
        "The repository links to an e-commerce design in Figma, but does not yet describe its user needs or screen scope in writing.",
      solution:
        "The Figma file is the place to review the project design. Its goals, user flows, and design decisions should be documented based on the design file.",
      content: `<h2>Project overview</h2><p>The <strong>Figma-simple-ecommerce</strong> repository contains a link to a Figma design file for a simple e-commerce project.</p><h2>Available materials</h2><p>The repository only provides the project name and a Figma link. Open the design file to view its visuals; feature and design-flow details are not yet documented in the repository.</p>`,
    },
    ja: {
      title: "Simple E-commerce — Figmaデザイン",
      excerpt:
        "GitHubリポジトリからFigmaデザインファイルへリンクされたECデザインプロジェクト。",
      role: "プロダクトデザイン · EC",
      problem:
        "リポジトリにはFigma上のECデザインへのリンクがありますが、ユーザーのニーズや画面の範囲はまだ文章化されていません。",
      solution:
        "Figmaファイルでプロジェクトのデザインを確認できます。目的、ユーザーフロー、デザイン上の判断は、デザインファイルをもとに記録する必要があります。",
      content: `<h2>プロジェクト概要</h2><p><strong>Figma-simple-ecommerce</strong>リポジトリには、シンプルなECプロジェクトのFigmaデザインファイルへのリンクがあります。</p><h2>利用可能な資料</h2><p>リポジトリで公開されているのはプロジェクト名とFigmaリンクのみです。ビジュアルはデザインファイルで確認できます。機能やデザインフローの詳細は、まだリポジトリに記録されていません。</p>`,
    },
  },
};
