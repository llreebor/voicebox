// ============ GLOBAL Scripts ============
// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('open')
		body.classList.toggle('overflow-hidden')
	})

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('mobile-menu')) {
			menu.classList.remove('open')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('open')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
function toggleSubmenu() {
	const submenuTriggers = document.querySelectorAll('.with-submenu')

	submenuTriggers.forEach((trigger) => {
		trigger.addEventListener('click', (e) => {
			if (e.target.classList.contains('submenu-trigger')) {
				trigger.classList.toggle('active')
			}
		})
	})
}
if (document.getElementById('mobile-menu')) {
	burgerMenu()
	toggleSubmenu()
}

// Nav Stats
function toggleNavStats(btnId, submenuId) {
	const btn = document.getElementById(btnId)
	const submenu = document.querySelector(submenuId)

	btn.addEventListener('click', (event) => {
		event.stopPropagation() // Prevent the click from reaching the document
		btn.classList.toggle('active')
	})

	document.addEventListener('click', (event) => {
		// Check if the click is outside both the button and submenu
		if (!btn.contains(event.target) && !submenu.contains(event.target)) {
			btn.classList.remove('active')
		}
	})
}

// Stats Init
if (document.getElementById('stats-btn')) {
	toggleNavStats('stats-btn', '.stats-submenu')
}
// Notification Init
if (document.getElementById('notification-btn')) {
	toggleNavStats('notification-btn', '.notification-submenu')
}
// Profile Init
if (document.getElementById('profile-btn')) {
	toggleNavStats('profile-btn', '.profile-submenu')
}
// Drawer
function toggleDrawer(triggerId, drawerId, closeBtnId) {
	const trigger = document.getElementById(triggerId)
	const drawer = document.getElementById(drawerId)
	const content = drawer.querySelector('.drawer-content')
	const closeBtn = document.getElementById(closeBtnId)

	trigger.addEventListener('click', () => {
		drawer.classList.remove('translate-x-full')
		content.classList.remove('translate-x-full')

		drawer.classList.remove('opacity-0')
	})

	closeBtn.addEventListener('click', () => {
		drawer.classList.add('translate-x-full')
		content.classList.add('translate-x-full')

		drawer.classList.add('opacity-0')
	})

	drawer.addEventListener('click', (e) => {
		if (e.target.classList.contains(drawerId)) {
			drawer.classList.add('translate-x-full')
			content.classList.add('translate-x-full')

			drawer.classList.add('opacity-0')
		}
	})
}

// Copy to Clipboard
function copyToClipboard() {
	const copyText = document.getElementById('link')
	const tooltip = document.getElementById('link-tooltip')

	navigator.clipboard.writeText(copyText.textContent)
	tooltip.classList.remove('hidden')
	tooltip.classList.add('flex')

	const interval = setInterval(() => {
		tooltip.classList.add('hidden')
		tooltip.classList.remove('flex')
		clearInterval(interval)
	}, 1000)
}
// Custom Select
// init when you need ex. initializeCustomSelect('select', 'options', 'selected-option')
function initializeCustomSelect(selectId, optionsId, selectedOptionId) {
	const customSelect = document.getElementById(selectId)
	const selectedOption = document.getElementById(selectedOptionId)
	const customOptions = document.getElementById(optionsId)
	const options = customOptions.getElementsByClassName('option')

	customSelect.addEventListener('click', () => {
		customSelect.classList.toggle('active')
		customOptions.classList.toggle('hidden')
		const arrow = customSelect.querySelector('.arrow svg')
		arrow.style.transform = customOptions.classList.contains('hidden')
			? 'rotate(0deg)'
			: 'rotate(180deg)'
	})

	for (let option of options) {
		option.addEventListener('click', () => {
			selectedOption.innerText = option.innerText
			customOptions.classList.add('hidden')
			customSelect.classList.remove('active')
			const arrow = customSelect.querySelector('.arrow svg')
			arrow.style.transform = 'rotate(0deg)'
		})
	}

	document.addEventListener('click', (event) => {
		const target = event.target
		if (!customSelect.contains(target) && !customOptions.contains(target)) {
			customSelect.classList.remove('active')
			customOptions.classList.add('hidden')
			const arrow = customSelect.querySelector('.arrow svg')
			arrow.style.transform = 'rotate(0deg)'
		}
	})
}

// ================= INITS =================
// ================= Toggle ================
// Toggle Price
if (document.getElementById('toggle-price-btn')) {
	function togglePrice() {
		const btn = document.getElementById('toggle-price-btn')
		const items = document.querySelectorAll('.toggle-button')
		const bussinessPriceItem = document.getElementById('bussiness-price')
		const enterprisePriceItem = document.getElementById('enterprise-price')

		const prices = {
			bussiness: {
				monthly: 49,
				yearly: 399,
			},
			enterprise: {
				monthly: 149,
				yearly: 999,
			},
		}

		let isYearly = false

		btn.addEventListener('click', (e) => {
			e.preventDefault()
			isYearly = !isYearly

			items.forEach((item) => item.classList.toggle('active'))

			bussinessPriceItem.innerText = isYearly
				? prices.bussiness.yearly
				: prices.bussiness.monthly
			enterprisePriceItem.innerText = isYearly
				? prices.enterprise.yearly
				: prices.enterprise.monthly
		})
	}
	togglePrice()
}
// Toggle Preview
if (document.getElementById('toggle-preview-btn')) {
	function togglePrice() {
		const btn = document.getElementById('toggle-preview-btn')
		const items = document.querySelectorAll('.toggle-button')
		const result = document.getElementById('preview-result')

		btn.addEventListener('click', (e) => {
			e.preventDefault()
			items.forEach((item) => item.classList.toggle('active'))
			result.classList.toggle('flex-col')
		})
	}
	togglePrice()
}

// ============== SELECT Inputs ==============
if (document.getElementById('question-select')) {
	initializeCustomSelect(
		'question-select',
		'question-options',
		'question-selected-option',
	)
}
if (document.getElementById('question-type-select')) {
	initializeCustomSelect(
		'question-type-select',
		'question-type-options',
		'question-type-selected-option',
	)
}
if (document.getElementById('question-skip-select')) {
	initializeCustomSelect(
		'question-skip-select',
		'question-skip-options',
		'question-skip-selected-option',
	)
}

// ================ Tabs ==================
function toggleTabs(tabsId) {
	// Get main element
	const tabs = document.getElementById(tabsId)
	// Get all the tabs triggers and contents
	const tabsTriggers = tabs.querySelectorAll('.tab-trigger')
	const tabsContents = tabs.querySelectorAll('.tab-content')

	// Add a click event listener to each tabs trigger
	tabsTriggers.forEach((trigger, index) => {
		trigger.addEventListener('click', () => {
			// Remove the "active" class from all tabs triggers
			tabsTriggers.forEach((t) => t.classList.remove('active'))
			// Add the "activity" class to the clicked tabs trigger
			trigger.classList.add('active')

			// Hide all tabs contents
			tabsContents.forEach((content) => content.classList.add('hidden'))
			// Show the corresponding tabs content
			tabsContents[index].classList.remove('hidden')
		})
	})
}
if (document.getElementById('tabs-surveys')) {
	toggleTabs('tabs-surveys')
}

// =============== Drawers ===============
if (document.getElementById('new_survey_drawer')) {
	toggleDrawer(
		'new_survey_drawer_trigger',
		'new_survey_drawer',
		'new_survey_drawer_close',
	)
}
