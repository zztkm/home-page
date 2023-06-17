<section>

### マイクラ鯖運用 with GitHub

zztkm

</section><section>

### いきなり本題

僕はマイクラ鯖をGitHubで運用しています。
今日はどんな感じでやっているのかを紹介します。

</section><section>

従来のマイクラ鯖運用のここがだるい

- 環境の再現
- バージョンアップ

</section><section>

**Dockerなど使わずに運用していた時代**
- [ConoHa VPS Minecraft JAVA版テンプレートサーバー を Minecraft 1.17 にアップデートする](https://zenn.dev/tkm/articles/b802d5a8f9fffc6c4406)

</section><section>

ごみ

</section>
<section data-auto-animate>

### じゃあどうしたいか？

</section>
<section data-auto-animate>

### じゃあどうしたいか？
<h3 style="color: #3B82F6;">GitHub で `IaC` したいし、デプロイも簡単にしたい！</h3>


</section><section>

最終的な構成は以下のようになった。

- VPS: Vultr
- ソース管理 GitHub
- Docker & Docker Compose
    - Image: [itzg/minecraft-server](https://docker-minecraft-server.readthedocs.io/en/latest/)
- MCサーバー: PaperMC
    - なんか軽いらしいので採用した
    - 色々プラグインを導入している
- デプロイは [compose-cd](https://github.com/sksat/compose-cd) で自動化
- Docker image も Renovate で自動更新

</section><section>

### VPS について

</section><section>

VPS は [Vultr](https://www.vultr.com/) を使っている。

- Vultr Cloud Compute
- 月額20$
- 2 vCPU 4GB RAM 80GB SSD
- Oracle Cloud への移行も検討中
    - [How To Set Up and Run a (Really Powerful) Free Minecraft Server in the Cloud](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud)

</section><section>

MC鯖は Vultr に docker & docker compose をインストールして、そこで動かしている。

SSH 接続には、[Tailscale SSH](https://tailscale.com/tailscale-ssh/) を利用している。

Tailscale SSH を使うと鍵管理が不要になってめっちゃ楽。導入も楽なので、VPSとか借りてなんかやりたいって人におすすめです。

</section><section>

### GitHub でやってること

</section><section>

- MC鯖用 docker-compose.yml などのソース管理
- MC鯖のDockerイメージに更新があったら、[Renovate](https://docs.renovatebot.com/)がPRを作ってくれる
    - Renovate まじ便利
    - 自分はPRをレビューしてマージするだけ

https://github.com/pistachiostudio/genkai-mc-server/pull/42

</section><section>

### 自動デプロイ

[compose-cd](https://github.com/sksat/compose-cd) が git pull して更新があったら、docker compose down & up してくれる

</section><section>

### 監視

</section><section>

巷ではオブザーバビリティとか言われてますがなんもわかってないので、とにかく無料で使えてそれっぽいやつを使ってみてる。
わかってきたら良い感じに調整していくという方針で色々試してる。詳しい人いたら教えて[クレメンス](https://kotaete-clemens.veltiosoft.dev/#/)。

</section><section>

導入したやつ
- [NewRelic](https://newrelic.com/jp)
    - ログ監視に使ってる
- Prometheus
    - 直接導入はしていないが、UnifiedMetrics というプラグインで使われてる（はず）
- [Grafana](https://grafana.com/)
    - Prometheus と連携して使っている
    - 自前で建てずに、[Grafana Cloud](https://grafana.com/products/cloud/) を使っている
    - サーバーに何人入ってるとか、メモリの状態とか色々見れるようにしてる
        - 楽しい


</section><section>

Grafanaのダッシュボードはこんな感じ
![grafana dashboard](https://github.com/Cubxity/UnifiedMetrics/raw/dev/0.3.x/.github/assets/grafana.png)

</section><section>

### まだ解決できていない課題

</section><section>

- バックアップがでかくなっていくのでVPSのSSDを食いつぶしやがるのでどうにかしたい
- チート対策
- その他色々 GitHub Issues に書いてある
    - https://github.com/pistachiostudio/genkai-mc-server/issues

</section><section>

### まとめ

</section><section>

まとめ
- ゲームの鯖運用するだけでも色々学ぶきっかけになる
- マイクラ鯖管理してると、マイクラより楽しくなってきてマイクラをやらなくなる（諸説あり
- 監視などを導入すると、マイクラ鯖の状態がわかって楽しいし、オブザーバビリティを学ぶきっかけになる
- マイクラはやらなくなる
- プラグイン自作したくなってくる

</section><section>

ということでぜひ遊びにきてください！
- server address: `genkai.dev`
    - For Bedrock Edition
        - Port: 19132
- [online map: dynmap](https://genkai.dev) 
- [Pistachio Minecraft server · pistachiostudio/main Wiki](https://github.com/pistachiostudio/main/wiki/Pistachio-Minecraft-server)
- [pistachiostudio/genkai-mc-server: `Genkai mc server` from Pistachio Gaming](https://github.com/pistachiostudio/genkai-mc-server)

</section><section>

参考

- [マイクラサーバをGitHubで運用する - 重力に縋るな](https://sksat.hatenablog.com/entry/2021/08/26/015620)
    - 最初はここを参考にした
- [Minecraft Server on Docker (Java Edition)](https://docker-minecraft-server.readthedocs.io/en/latest/)


</section><section>

その他宣伝

- [inm](https://github.com/zztkm/inm): inventory manager
- [Kiboshin Kingdom](https://kiboshin.xyz)

</section>