<script lang="ts">
</script>

<main>
	<div style="background: url(./images/4-100.jpg) repeat;">
		<h1>鶴田 拓海のホームページ</h1>
		<nobr>
			<table cellspacing="0" cellpadding="0">
				<tbody>
					<tr>
						<td>
							<a href="https://www.free-counter.jp/">
								<img
									src="https://www.f-counter.net/ani1/46/1630003894/"
									alt="カウンター"
									style="margin:0px; padding:0px; border:0px; vertical-align:bottom"
								/>
							</a>
						</td>
						<td>
							<a href="https://www.free-counter.jp/">
								<img
									src="https://www.f-counter.net/ani2/46/1630003894/"
									alt="カウンター"
									style="margin:0px; padding:0px; border:0px; vertical-align:bottom"
								/>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</nobr>

		<br />

		<div class="window" style="width: 300px">
			<div class="title-bar">
				<div class="title-bar-text">ギャラリー</div>
				<div class="title-bar-controls">
					<button aria-label="Minimize" />
					<button aria-label="Maximize" />
					<button aria-label="Close" />
				</div>
			</div>
			<div class="window-body">
				<a href="./gallery.html">入室</a>
			</div>
		</div>

		<div class="window" style="margin: 32px; width: calc(100vw - 64px)">
			<div class="title-bar">
				<div class="title-bar-text">お知らせ</div>
				<div class="title-bar-controls">
					<button aria-label="Minimize" />
					<button aria-label="Maximize" />
					<button aria-label="Close" />
				</div>
			</div>
			<figure>
				<legend>
					<img alt="工事中の人" src="./images/pics2762.gif" />
					<p>ただいま工事中です。ご迷惑おかけします。</p>
					<img alt="工事中の人" src="./images/pics2762.gif" />
				</legend>
				<img src="./images/dancing_baby.gif" alt="踊る赤ちゃん" />
			</figure>
			<div class="window-body">
				<font face="ＭＳ Ｐ明朝">こんにちは！　今日の気分は？</font>
				<div class="field-row">
					<input id="radio1" type="radio" name="option-1" />
					<label for="radio1">最高！</label>
				</div>
				<div class="field-row">
					<input id="radio2" type="radio" name="option-2" />
					<label for="radio2">ふつう</label>
				</div>
				<div class="field-row">
					<input id="radio3" type="radio" name="option-3" />
					<label for="radio3">悪い</label>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
