<!--
  Nes.css contains a lot of styles that are applied if you add the "is-dark" class to elements.
  This file applies the same styles when you are in dark mode, so that you don't have to add the class.

  The
-->
<style>
	@media (prefers-color-scheme: dark) {
		:global(.nes-container) {
			position: relative;
			margin: 4px;
			color: #fff;
			background-color: #212529;
			border-color: #fff;
		}

		:global(.nes-container::after) {
			position: absolute;
			top: -7.2px;
			right: -7.2px;
			bottom: -7.2px;
			left: -7.2px;
			z-index: -1;
			content: "";
			background-color: #212529;
		}

		:global(.nes-container.with-title > .title) {
			color: #fff;
			background-color: #212529;
		}

		:global(.nes-container.is-rounded) {
			border-image-slice: 3;
			border-image-width: 3;
			border-image-repeat: stretch;
			border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
			border-image-outset: 0;
		}

		:global(.nes-container.is-rounded::after) {
			content: none;
		}
		:global(.nes-container.is-rounded.with-title > .title) {
			margin-top: -1.3rem;
		}
		:global(.nes-container.is-rounded.with-title.is-centered > .title) {
			margin: -1.3rem auto 1rem;
		}
		:global(.nes-container.is-rounded.with-title.is-right > .title) {
			margin: -1.3rem 0 1rem auto;
		}

		@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
			.nes-container.is-rounded {
				border-image-repeat: space;
			}
		}
		@supports (-moz-appearance: meterbar) {
			.nes-container.is-rounded {
				border-image-repeat: stretch;
			}
		}

		:global(.nes-table) {
			color: #fff;
			background-color: #212529;
		}

		/* This applies some giant container, making it impossible to reach the input fields. */
		/*:global(.nes-table::before) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: "";
	}*/

		:global(.nes-table.is-bordered) {
			border-image-slice: 2;
			border-image-width: 2;
			border-image-repeat: stretch;
			border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
			border-image-outset: 0;
		}

		@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
			:global(.nes-table.is-bordered) {
				border-image-repeat: space;
			}
		}
		@supports (-moz-appearance: meterbar) {
			:global(.nes-table.is-bordered) {
				border-image-repeat: stretch;
			}
		}

		:global(.nes-table td, .nes-table th) {
			border-color: #fff;
		}

		:global(.nes-table td::after, .nes-table td::before, .nes-table
				th::after, .nes-table th::before) {
			display: none;
		}

		:global(.nes-input, .nes-textarea) {
			border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
			outline-color: #e7e7e7;
			color: #fff;
			background-color: #212529;
		}
	}
</style>
