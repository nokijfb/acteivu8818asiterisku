---
layout: me
title: Message
date: 2024-07-07
---

<div class="form-container">
	<p>Need help with your Development? Please fill out the form below</p>
	<form action="https://formspree.io/f/mzzpzdre" method="POST" enctype="multipart/form-data">
		<div class="form-group">
			<label for="email">Your email:</label><br>
			<input type="email" id="email" name="email" placeholder="insert your active email here..." required>
		</div>

		<div class="form-group">
			<label for="phone">Whatsapp/Telegram:</label><br>
			<input type="tel" name="phone" pattern="\+[0-9]{1,3}[0-9]{10,15}" placeholder="e.g. +62 81234567890" required>
		</div>

		<div class="form-group">
			<label for="message">Message:</label><br>
			<textarea id="message" name="message" rows="7" placeholder="please explain what it is about?..." required></textarea>
		</div>

		<button type="submit" class="submit-btn">Send</button>
	</form>
</div>
