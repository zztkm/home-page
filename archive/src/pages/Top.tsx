import { ReactElement, CSSProperties } from "react";
import Head from "../components/Head";
import Links from "../components/Links";
import "98.css"

const tableStyle: CSSProperties = {
	padding: "0px",
	borderSpacing: "0px",
	border: "0px",
};

const couterStyle: CSSProperties = {
	margin: "0px",
	padding: "0px",
	border: "0px",
	verticalAlign: "bottom",
};

export default function TopPage(): ReactElement {
	return (
		<>
			<Head title="鶴田 拓海のホームページ" />
			<h1>
				鶴田 拓海のホームページ
			</h1>
			<table style={tableStyle}>
				<tbody>
					<tr>
						<td><a href="https://www.free-counter.jp/">
							<img
								src="https://www.f-counter.net/ani1/46/1630003894/" alt="カウンター" style={couterStyle} /></a></td>
						<td><a href="https://www.free-counter.jp/">
							<img
								src="https://www.f-counter.net/ani2/46/1630003894/" alt="カウンター" style={couterStyle} /></a></td>
					</tr>
				</tbody>
			</table>

			<Links />

			<div className="window-body">
				<div className="title-bar">
					<div className="title-bar-text">最新の曲</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<iframe width="560" height="315"
					src="https://musiclab.chromeexperiments.com/Song-Maker/embed/4782585026183168" frameBorder={"0"}
					allowFullScreen></iframe>
			</div>
		</>
	)
}