(() => {
  const translations = {
    en: {
      brand_aria:"Botstudio home", nav_aria:"Main navigation", language_aria:"Language", skip:"Skip to content", nav_how:"How it works", nav_features:"Features", nav_examples:"Examples", nav_pricing:"Pricing", nav_cta:"Build your bot",
      hero_eyebrow:"YOUR IDEA, READY TO LAUNCH", hero_title_a:"Create your Telegram bot", hero_title_b:"in 5 minutes", hero_title_c:"with AI.",
      hero_lede:"Turn a simple description into a helpful bot for your business. No code, no complicated setup — just a clear idea and a few clicks.",
      start_free:"Start for free", see_how:"See how it works", hero_proof:"From idea to your first conversation", phone_aria:"A preview of a Telegram café bot",
      ai_architect:"AI architect", always_on:"Always on", bot_online:"bot · online", today:"TODAY", sample_greeting:"Hi! What can I get for you today?",
      sample_user:"Show me your bestsellers ☕", sample_menu:"Our favorites", coffee_one:"Flat white", coffee_two:"Honey latte", browse_menu:"Browse the menu", message_placeholder:"Message",
      trust_title:"MADE FOR YOUR NEXT BIG IDEA", trust_one:"No code needed", trust_two:"Ready in minutes", trust_three:"Works in Telegram",
      how_eyebrow:"A SIMPLE WAY TO START", how_title_a:"From “what if?” to", how_title_b:"“it’s live.”", how_intro:"Three easy steps. Your AI architect handles the heavy lifting.",
      step_one_title:"Describe your idea", step_one_text:"Tell us what your bot should do in everyday language. A few sentences are enough.",
      step_two_title:"AI designs the flow", step_two_text:"Your AI architect shapes the concept, conversations, and useful features with you.",
      step_three_title:"Launch your bot", step_three_text:"Connect your Telegram bot and let it welcome customers around the clock.",
      features_eyebrow:"LESS BUSYWORK, MORE MOMENTUM", features_title_a:"Small setup.", features_title_b:"Big possibilities.",
      features_intro:"Everything you need to turn a useful idea into a real Telegram experience.", features_link:"Meet your AI architect",
      feature_ai_title:"Smart AI", feature_ai_text:"Turn your goals into a clear, useful conversation flow with an AI architect.", feature_ai_label:"01 / THINK",
      feature_uptime_title:"24/7 uptime", feature_uptime_text:"Stay ready to answer, guide, and collect requests while you focus on work.", feature_uptime_label:"02 / STAY ON",
      feature_nocode_title:"No-code", feature_nocode_text:"Build from a conversation. No developer tools or technical background required.", feature_nocode_label:"03 / KEEP IT SIMPLE",
      examples_eyebrow:"A BOT FOR THE WAY YOU WORK", examples_title_a:"Good ideas come in", examples_title_b:"all kinds.", examples_intro:"Start with a use case. Make it yours as you go.",
      example_cafe_label:"HOSPITALITY", example_cafe_title:"Café bot", example_cafe_text:"Share your menu, answer quick questions, and make every visit easier.",
      example_fitness_art:"MOVE<br>BETTER", example_fitness_label:"WELLNESS", example_fitness_title:"Fitness bot", example_fitness_text:"Send workout plans, share helpful tips, and keep your community moving.",
      example_consulting_art:"Let's find<br>your next step.", example_consulting_label:"PROFESSIONAL SERVICES", example_consulting_title:"Consultant bot", example_consulting_text:"Welcome new clients, explain your services, and collect consultation requests.",
      pricing_eyebrow:"CLEAR, SIMPLE PRICING", pricing_title_a:"Choose your", pricing_title_b:"timeline.", pricing_intro:"Pay in Telegram Stars. Pick the plan that fits your idea.",
      yearly_label:"FLEXIBLE START", yearly_title:"Yearly", yearly_text:"A full year to grow your bot and see where it takes you.", yearly_amount:"From 450", yearly_period:"Stars / year",
      yearly_faq:"✓   FAQ bot — 450 Stars / year", yearly_ai:"✓   AI bot — 950 Stars / year", hosting_included:"✓   Hosting included",
      lifetime_badge:"✦   BEST FOR THE LONG RUN", lifetime_label:"ONE-TIME PAYMENT", lifetime_title:"Lifetime", lifetime_text:"Make your bot a lasting part of your business. Pay once and keep building.",
      lifetime_amount:"From 5,200", lifetime_period:"Stars · one time", lifetime_faq:"✓   FAQ bot — 5,200 Stars", lifetime_ai:"✓   AI bot — 10,000 Stars",
      build_bot:"Build your bot", price_note:"Try the idea first, then choose a plan inside Telegram.",
      final_eyebrow:"YOUR NEXT STEP IS A MESSAGE AWAY", final_title_a:"That idea of yours?", final_title_b:"Let's make it real.", final_text:"Start a conversation with the AI architect. Your first step is free.",
      footer_text:"Made for ideas that deserve to happen.", menu_open:"Open navigation", menu_close:"Close navigation"
    },
    ru: {
      brand_aria:"На главную Botstudio", nav_aria:"Главная навигация", language_aria:"Язык", skip:"Перейти к содержимому", nav_how:"Как это работает", nav_features:"Преимущества", nav_examples:"Примеры", nav_pricing:"Тарифы", nav_cta:"Создать бота",
      hero_eyebrow:"ВАША ИДЕЯ ГОТОВА К ЗАПУСКУ", hero_title_a:"Создайте Telegram-бота", hero_title_b:"за 5 минут", hero_title_c:"с помощью ИИ.",
      hero_lede:"Опишите задачу — и получите полезного бота для бизнеса. Без кода и сложной настройки: только идея и несколько простых шагов.",
      start_free:"Начать бесплатно", see_how:"Как это работает", hero_proof:"От идеи до первого диалога", phone_aria:"Пример Telegram-бота для кофейни",
      ai_architect:"ИИ-архитектор", always_on:"Всегда на связи", bot_online:"бот · онлайн", today:"СЕГОДНЯ", sample_greeting:"Здравствуйте! Что вам подсказать?",
      sample_user:"Покажите ваши хиты ☕", sample_menu:"Наши любимые напитки", coffee_one:"Флэт уайт", coffee_two:"Медовый латте", browse_menu:"Открыть меню", message_placeholder:"Сообщение",
      trust_title:"ДЛЯ ВАШЕЙ СЛЕДУЮЩЕЙ БОЛЬШОЙ ИДЕИ", trust_one:"Без программирования", trust_two:"Запуск за минуты", trust_three:"Работает в Telegram",
      how_eyebrow:"ПРОСТО НАЧАТЬ", how_title_a:"От идеи до", how_title_b:"готового бота.", how_intro:"Всего три шага. ИИ-архитектор поможет на каждом из них.",
      step_one_title:"Опишите идею", step_one_text:"Расскажите обычными словами, что должен делать бот. Достаточно нескольких предложений.",
      step_two_title:"ИИ подготовит концепцию", step_two_text:"ИИ поможет продумать сценарии общения, структуру и полезные функции.",
      step_three_title:"Запустите бота", step_three_text:"Подключите Telegram-бота — и он будет отвечать клиентам круглосуточно.",
      features_eyebrow:"МЕНЬШЕ РУТИНЫ — БОЛЬШЕ ВОЗМОЖНОСТЕЙ", features_title_a:"Простой старт.", features_title_b:"Большие идеи.",
      features_intro:"Всё необходимое, чтобы превратить задумку в работающего Telegram-помощника.", features_link:"Познакомиться с ИИ-архитектором",
      feature_ai_title:"Умный ИИ", feature_ai_text:"ИИ-архитектор превратит ваши задачи в понятный сценарий общения.", feature_ai_label:"01 / ПРОДУМАНО",
      feature_uptime_title:"Работает 24/7", feature_uptime_text:"Бот отвечает, помогает и принимает заявки, пока вы заняты другими делами.", feature_uptime_label:"02 / ВСЕГДА НА СВЯЗИ",
      feature_nocode_title:"Без кода", feature_nocode_text:"Создайте бота в диалоге — технические знания и инструменты разработчика не нужны.", feature_nocode_label:"03 / ПРОСТО",
      examples_eyebrow:"БОТ ДЛЯ ВАШЕГО ДЕЛА", examples_title_a:"Полезные боты для", examples_title_b:"разных задач.", examples_intro:"Выберите пример и адаптируйте его под себя.",
      example_cafe_label:"КОФЕЙНИ И КАФЕ", example_cafe_title:"Бот для кофейни", example_cafe_text:"Покажет меню, ответит на частые вопросы и сделает визит гостей удобнее.",
      example_fitness_art:"ДВИГАЙСЯ<br>К ЛУЧШЕМУ", example_fitness_label:"ФИТНЕС И ЗДОРОВЬЕ", example_fitness_title:"Фитнес-бот", example_fitness_text:"Отправит план тренировок, поделится советами и поддержит участников сообщества.",
      example_consulting_art:"Найдём<br>ваш следующий шаг.", example_consulting_label:"УСЛУГИ И КОНСУЛЬТАЦИИ", example_consulting_title:"Бот-консультант", example_consulting_text:"Познакомит клиентов с услугами и соберёт заявки на консультацию.",
      pricing_eyebrow:"ПОНЯТНЫЕ ТАРИФЫ", pricing_title_a:"Выберите", pricing_title_b:"свой срок.", pricing_intro:"Оплата в Telegram Stars. Выберите подходящий вариант.",
      yearly_label:"ГИБКИЙ СТАРТ", yearly_title:"На год", yearly_text:"Целый год, чтобы развивать бота и помогать клиентам.", yearly_amount:"От 450", yearly_period:"Stars в год",
      yearly_faq:"✓   FAQ-бот — 450 Stars в год", yearly_ai:"✓   ИИ-бот — 950 Stars в год", hosting_included:"✓   Хостинг включён",
      lifetime_badge:"✦   ВЫГОДНО НАДОЛГО", lifetime_label:"ОДИН ПЛАТЁЖ", lifetime_title:"Навсегда", lifetime_text:"Оставьте бота частью своего бизнеса. Оплатите один раз и пользуйтесь без ограничения срока.",
      lifetime_amount:"От 5 200", lifetime_period:"Stars · один раз", lifetime_faq:"✓   FAQ-бот — 5 200 Stars", lifetime_ai:"✓   ИИ-бот — 10 000 Stars",
      build_bot:"Создать бота", price_note:"Сначала попробуйте идею, а тариф выберите в Telegram.",
      final_eyebrow:"ВАШ СЛЕДУЮЩИЙ ШАГ — ОДНО СООБЩЕНИЕ", final_title_a:"Есть идея?", final_title_b:"Давайте воплотим её.", final_text:"Начните диалог с ИИ-архитектором. Первый шаг бесплатный.",
      footer_text:"Для идей, которым пора стать реальностью.", menu_open:"Открыть меню", menu_close:"Закрыть меню"
    }
  };
  const nav = document.querySelector('#nav');
  const menuButton = document.querySelector('.menu-toggle');

  function preferredLanguage() {
    const list = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    const first = list[0] || ''; return /^ru(?:-|$)/i.test(first) ? 'ru' : 'en';
  }

  function setMenuLabel(open, lang) {
    if (!menuButton) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', translations[lang][open ? 'menu_close' : 'menu_open']);
  }

  function applyLanguage(lang, persist = true) {
    if (!Object.prototype.hasOwnProperty.call(translations, lang)) lang = 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const text = translations[lang][element.dataset.i18n];
      if (typeof text === 'string') element.textContent = text;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const html = translations[lang][element.dataset.i18nHtml];
      if (typeof html === 'string') element.innerHTML = html;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const label = translations[lang][element.dataset.i18nAria];
      if (typeof label === 'string') element.setAttribute('aria-label', label);
    });
    document.querySelectorAll('[data-set-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.setLang === lang)));
    if (menuButton?.getAttribute('aria-expanded') === 'true') setMenuLabel(true, lang);
    document.title = lang === 'ru'
      ? 'ИИ-конструктор Telegram-ботов — создать бота без кода за 5 минут | Botstudio'
      : 'AI Telegram Bot Builder — Create a Bot Without Code in 5 Minutes | Botstudio';
    const description = lang === 'ru'
      ? 'ИИ-конструктор Telegram-ботов: создать бота без кода за 5 минут. ИИ поможет спроектировать бота, а хостинг уже включён.'
      : 'Create a Telegram bot without code in 5 minutes. An AI architect designs the flow, and hosting is included.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    if (persist) {
      try { localStorage.setItem('botstudio-language', lang); } catch (_) { /* Storage may be unavailable. */ }
    }
  }

  document.querySelectorAll('[data-set-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.setLang)));
  let initialLanguage = preferredLanguage();
  try {
    const savedLanguage = localStorage.getItem('botstudio-language');
    if (savedLanguage === 'ru' || savedLanguage === 'en') initialLanguage = savedLanguage;
  } catch (_) { /* Use the browser language when storage is unavailable. */ }
  applyLanguage(initialLanguage, false);

  document.documentElement.classList.add('js');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      setMenuLabel(!open, document.documentElement.lang);
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      setMenuLabel(false, document.documentElement.lang);
      nav.classList.remove('open');
    }));
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); current.unobserve(entry.target); }
    }), { threshold: 0.14, rootMargin: '0px 0px -28px 0px' });
    items.forEach((item) => observer.observe(item));
  } else items.forEach((item) => item.classList.add('visible'));
})();
