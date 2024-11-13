// ============ GLOBAL Scripts ============
// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('hidden')
		menu.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.add('hidden')
			menu.classList.remove('flex')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()
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
toggleSubmenu()

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

// ============ PRICE PAGE Scripts ============
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

		btn.addEventListener('click', () => {
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

// ============ CONTACTS PAGE Scripts ============
if (document.getElementById('question-select')) {
	initializeCustomSelect(
		'question-select',
		'question-options',
		'question-selected-option',
	)
}
