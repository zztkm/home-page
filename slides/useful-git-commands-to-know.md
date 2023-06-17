<section>

# 知ってると便利な git command の紹介

### +α 開発プラクティスの共有

</section>
<section>

# 📖 概要

普段 VS Code などの GUI から git を操作している人に向けて、知っていると便利な git command を紹介します。
ユースケースに基づいて git コマンドやそのコマンドのオプションを紹介するのでなにかに役立つかなと思いますが、
特に深堀りはしないのであとはご自分で調べてください！(いつか深堀り版を出すかも

※注意
厳密にいうとちょっと違うみたいなやつも用途に合わせて説明を書いています。
(working tree とか index とかを出さないようにしています)

</section>
<section>

## 🎯 対象

- 普段 vscode で git を操作している人
- cli に慣れていない人

</section><section>

# 🚨 今回紹介しないこと

- git 自体について


そもそも git を知らない場合はまずは git について調べてください！

https://git-scm.com/

</section><section>

# 🔖 目次

1. リポジトリの初期化
	- git init
1. 変更のステージ
	- git add <path>
1. 変更を commit する
	- git commit
1. 現在の変更状態を確認したい
	- git status
</section><section>

# 🔖 目次2

5. commit 履歴を見たい
	- git log
1. 変更のステージングを取り消したい
	- git restore --staged <path>
1. 前回の commit を上書きしたい
	- git commit --amend
1. 特定の commit から branch を作成したい
	- git checkout <commit> -b <new branch>

</section><section>

# 🔖 目次3

1. 個人的な Git + GitHub 開発プラクティス

</section><section>

# リポジトリの初期化

基本以下でOK

```
git init
```

.git ディレクトリが作成されます
```
❯ ls -a
 .git   main.v   sub.v
```

https://git-scm.com/docs/git-init

</section><section>

# 変更のステージ

<path> に変更したいファイルPATHを指定します
```
git add <path>
```

今ある変更ファイルを全てステージ
```
git add -A
```

https://git-scm.com/docs/git-add

</section><section>

# 変更を commit する

以下のコマンドを実行するとデフォルトのエディターが開いて commit メッセージを編集することができます
```
git commit
```

cli でメッセージも指定する場合は以下(日本語の場合はダブルクオートで囲むと良い)
```
git commit -m <message>
```

https://git-scm.com/docs/git-commit

</section><section>

# 現在の変更状態を確認したい

```
❯ git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   main.v

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   sub.v
```
https://git-scm.com/docs/git-status

</section><section>

# commit 履歴を見たい

```
git log
```

短く表示したい
```
❯ git log --oneline
6e0ad11 (HEAD -> main) update main.v complete
3b757b3 update amend
d4da05f add sub
b712382 first
```

https://git-scm.com/docs/git-log

</section><section>

# 変更のステージングを取り消したい

git status コマンドを使います

```shell
# 特定のファイルのステージングを取り消す
git restore --staged <path>

# 現在のディレクトリ以下のファイルのステージングを取り消す
git restore --staged .

# ステージングされていないファイルの変更を取り消すときは `--staged` なしで実行する
git restore <path>
```

</section><section>

# 前回の commit を上書きしたい

前回のコミットを上書きするには `--amend` を使います

追加で修正を実施したので上書きしたい(複数ファイルを含む変更も可能
```
git add <path>
git commit --amend -m "fix: 追加修正"
```

commit メッセージだけ修正したい
```
git commit --amend -m "誤字を修正"
```

</section><section>

# 特定の commit から branch を作成したい

```
git checkout <commit> -b <new branch>
```

</section><section>

# 個人的な Git + GitHub 開発プラクティス

- commit
- Pull Request (出す側)
- Pull Request (見る側)

</section><section>

# commit

- 意味のある単位で commit する
- commit には Why を書く
	- commit にそれぞれ背景を書いておく
- メッセージテンプレート例
```
<type>(任意 スコープ): <タイトル>

[任意 本文]

[任意 フッター]
```
引用: [nice.dev](https://github.landscape.co.jp/pages/DBA/nice.dev/docs-for-developer/#commit-message-%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)

</section><section>

# Pull Request (出す側)

- できるだけ細かい単位で PR を出す
- 作業を開始したら Draft で PR を出しておく
	- 作業進捗が可視化される
- セルフレビューをする
	- ここで見つかるバグもある
- レビュー観点を PR にまとめておく
- commit log はキレイにしておく
	- `git rebase -i` とかが使える
		- [初心者でもわかる！リベースの使い方を解説します](https://liginc.co.jp/web/tool/79390)

</section><section>

# Pull Request (見る側)

- 共有された観点を確認する
- 危険な兆候には立ち止まる
	- 簡単に理解できない
		- 相手の方が詳しいからOKだろうは危険信号🚨
	- 未熟な実装
	- メンタルモデルと一致しない
- 友好的な態度でレビューする
	- テキストは口頭よりもきつめに感じてしまう場合があるので優しめにコメントを書く

</section><section>

# その他参考

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">コードには How<br>テストコードには What<br>コミットログには Why<br>コードコメントには Why not<br><br>を書こうという話をした</p>&mdash; Takuto Wada (@t_wada) <a href="https://twitter.com/t_wada/status/904916106153828352?ref_src=twsrc%5Etfw">September 5, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</section><section>

# その他参考

- [Git研修【ミクシィ22新卒技術研修】 - Speaker Deck](https://speakerdeck.com/mixi_engineers/2022-git-training)
- [コードレビューの生産性を上げるためのTips | Offers Tech Blog](https://zenn.dev/offers/articles/20230110-my_code_review_knowhow)
- [プログラマが知るべき97のこと/コードレビュー - Wikisource](https://ja.wikisource.org/wiki/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%8C%E7%9F%A5%E3%82%8B%E3%81%B9%E3%81%8D97%E3%81%AE%E3%81%93%E3%81%A8/%E3%82%B3%E3%83%BC%E3%83%89%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC)
- [git rebaseの具体的なメリット](https://zenn.dev/tana0102/articles/475d8952933af6)
- [やりなおしGit (re-git)](https://zenn.dev/mebiusbox/books/d7e6b96da51ed8)

</section>