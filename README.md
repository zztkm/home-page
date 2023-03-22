# Open Sea

おれのホームページ

## Theme color

https://coolors.co/palette/227c9d-17c3b2-ffcb77-fef9ef-fe6d73

## Build website

```shell
./scripts/build.sh
```

dist/index.html をブラウザで開くと確認できます

## Project structure

```
.
├── README.md
├── config.toml
├── dist
│   └── index.html
├── index.md
├── scripts
│   └── build.sh
└── vss
```

## Slide

Commands

```
# Convert slide deck into HTML
npx @marp-team/marp-cli@latest slide-deck.md --html
npx @marp-team/marp-cli@latest slide-deck.md -o output.html --html

# Convert slide deck into PDF
npx @marp-team/marp-cli@latest slide-deck.md --pdf --html
npx @marp-team/marp-cli@latest slide-deck.md -o output.pdf --html

# Convert slide deck into PowerPoint document (PPTX)
# --html でもHTMLがうまいこと表示されなかった。。。
npx @marp-team/marp-cli@latest slide-deck.md --pptx --html
npx @marp-team/marp-cli@latest slide-deck.md -o output.pptx

# Server mode (Pass directory to serve)
npx @marp-team/marp-cli@latest -s ./slides --html
```
参考: https://github.com/marp-team/marp-cli#try-it-now
