import { ReactElement, CSSProperties } from "react";
import Head from "../components/Head";
import "98.css"
import picsImgUrl from '../assets/pics2762.gif'
import dancingBaby from '../assets/dancing_baby.gif'

const windowStyle: CSSProperties = {
	margin: "32px",
	width: "calc(100vw - 64px)",
};

export default function News(): ReactElement {
	return (
		<>
			<Head title="お知らせ" />
			<h1>
				お知らせ
			</h1>
			<div className="window" style={windowStyle}>
				<div className="title-bar">
					<div className="title-bar-text">2022の目標とお知らせ</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<ul>
					<li>APEXマスター</li>
					<li>ダーツライブRt.10以上</li>
					<li>毎日水をたくさん飲む</li>
					<li>隔週で片付ける</li>
					<li>CSの独学でやりたいことを50%以上やる
						<ul>
							<li>
								<a href="https://github.com/zztkm/computer-science-learning/issues/1">
									GitHub Issue
								</a>
							</li>
						</ul>
					</li>

					<li>イラスト作成(手書きをスキャンしたやつ</li>
					<li>掲示板作成(このサイトにつける</li>
					<li>音楽作ってみたい</li>
					<li>creative coding 勉強する</li>
					<li>generative な映像制作</li>
					<li>GLSL とか</li>
				</ul>
				<img src={picsImgUrl} />
				<p>常に工事中です。ご迷惑おかけします。</p>
				<img src={picsImgUrl} />
				<img src={dancingBaby} alt="踊る赤ちゃん" />
			</div>
		</>
	)
}