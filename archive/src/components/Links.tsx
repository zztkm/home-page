import { ReactElement } from "react";
import "98.css"

export default function Links(): ReactElement {
	return (
		<>
			<div style={{ display: "flex" }}>
				<div className="window" style={{ width: "200px" }}>
					<div className="title-bar">
						<div className="title-bar-text">お知らせページ</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="/news">入室</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">ジャンボBBS</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="/bbs">入室</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">ギャラリー</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="/gallery">入室</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">東京回転寿司倶楽部 Blog</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="https://blog.tsurutatakumi.info/">見にいく</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">Twitter</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="https://twitter.com/tsurutaaaaaa_">見にいく</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">GitHub</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="https://github.com/zztkm">見にいく</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">Scrapbox</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="https://scrapbox.io/zztkm/">見にいく</a>
					</div>
					<div className="title-bar">
						<div className="title-bar-text">OpenProcessing</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<a href="https://openprocessing.org/user/283509/?view=sketches">見にいく</a>
					</div>
				</div>
			</div>
		</>
	)
}