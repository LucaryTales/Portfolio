// --- OUTILS DE PERFORMANCE ---
const createVisibilityObserver = (element, callback) => {
    const observer = new IntersectionObserver((entries) => {
        callback(entries[0].isIntersecting);
    }, { threshold: 0.1 });
    observer.observe(element);
};

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};

// --- ANIMATION ICONES (HERO ET FOOTER) ---
const floatingiconsConfig = [
    // HERO GAUCHE
    { src: "../media/images/icons/brush-solid-full.svg", dataDist: "near", width: "53px", top: "-5%", left: "-80px", rotate: "-15deg", container: "hero" },
    { src: "../media/images/icons/pen-solid-full.svg", dataDist: "far", width: "29px", top: "15%", left: "-200px", rotate: "-20deg", container: "hero" },
    { src: "../media/images/icons/briefcase-solid-full.svg", dataDist: "mid", width: "43px", top: "35%", left: "-155px", rotate: "-8deg", container: "hero" },
    { src: "../media/images/icons/draw-polygon-solid-full.svg", dataDist: "far", width: "31px", top: "55%", left: "-230px", rotate: "-22deg", container: "hero" },
    { src: "../media/images/icons/cube-solid-full.svg", dataDist: "near", width: "45px", top: "70%", left: "-90px", rotate: "-5deg", container: "hero" },
    { src: "../media/images/icons/house-solid-full.svg", dataDist: "mid", width: "33px", top: "95%", left: "-160px", rotate: "-18deg", container: "hero" },
    // HERO DROITE
    { src: "../media/images/icons/code-solid-full.svg", dataDist: "mid", width: "41px", top: "0%", right: "-160px", rotate: "12deg", container: "hero" },
    { src: "../media/images/icons/file-code-solid-full.svg", dataDist: "far", width: "29px", top: "20%", right: "-210px", rotate: "20deg", container: "hero" },
    { src: "../media/images/icons/chart-simple-solid-full.svg", dataDist: "near", width: "49px", top: "38%", right: "-95px", rotate: "5deg", container: "hero" },
    { src: "../media/images/icons/bell-solid-full.svg", dataDist: "far", width: "27px", top: "58%", right: "-200px", rotate: "22deg", container: "hero" },
    { src: "../media/images/icons/chart-pie-solid-full.svg", dataDist: "mid", width: "39px", top: "75%", right: "-140px", rotate: "14deg", container: "hero" },
    { src: "../media/images/icons/map-solid-full.svg", dataDist: "near", width: "42px", top: "85%", right: "-65px", rotate: "8deg", container: "hero" },
    // HERO HAUT
    { src: "../media/images/icons/camera-solid-full.svg", dataDist: "far", width: "33px", top: "-70px", left: "-60px", rotate: "0deg", container: "hero" },
    { src: "../media/images/icons/fire-solid-full.svg", dataDist: "near", width: "45px", top: "-35px", left: "18%", rotate: "0deg", container: "hero" },
    { src: "../media/images/icons/dice-solid-full.svg", dataDist: "mid", width: "35px", top: "-65px", left: "35%", rotate: "0deg", container: "hero" },
    { src: "../media/images/icons/dumbbell-solid-full.svg", dataDist: "far", width: "29px", top: "-55px", left: "52%", rotate: "0deg", container: "hero" },
    { src: "../media/images/icons/arrow-pointer-solid-full.svg", dataDist: "near", width: "43px", top: "-30px", right: "20%", rotate: "0deg", container: "hero" },
    { src: "../media/images/icons/hand-peace-solid-full.svg", dataDist: "mid", width: "37px", top: "-60px", right: "-50px", rotate: "0deg", container: "hero" },
    // FOOTER LEFT
    { src: "../media/images/icons/code-solid-full.svg", dataDist: "far", width: "23px", top: "5%", left: "18%", rotate: "12deg", container: "footer-left" },
    { src: "../media/images/icons/chart-simple-solid-full.svg", dataDist: "far", width: "19px", top: "10%", left: "10%", rotate: "20deg", container: "footer-left" },
    { src: "../media/images/icons/chart-pie-solid-full.svg", dataDist: "mid", width: "30px", top: "16%", left: "48%", rotate: "15deg", container: "footer-left" },
    { src: "../media/images/icons/camera-solid-full.svg", dataDist: "mid", width: "28px", top: "22%", left: "35%", rotate: "8deg", container: "footer-left" },
    { src: "../media/images/icons/bell-solid-full.svg", dataDist: "far", width: "21px", top: "28%", left: "25%", rotate: "22deg", container: "footer-left" },
    { src: "../media/images/icons/map-solid-full.svg", dataDist: "far", width: "19px", top: "33%", left: "15%", rotate: "10deg", container: "footer-left" },
    { src: "../media/images/icons/file-code-solid-full.svg", dataDist: "mid", width: "34px", top: "38%", left: "65%", rotate: "18deg", container: "footer-left" },
    { src: "../media/images/icons/draw-polygon-solid-full.svg", dataDist: "mid", width: "32px", top: "44%", left: "50%", rotate: "5deg", container: "footer-left" },
    { src: "../media/images/icons/arrow-pointer-solid-full.svg", dataDist: "mid", width: "28px", top: "50%", left: "32%", rotate: "14deg", container: "footer-left" },
    { src: "../media/images/icons/fire-solid-full.svg", dataDist: "far", width: "21px", top: "55%", left: "22%", rotate: "20deg", container: "footer-left" },
    { src: "../media/images/icons/cube-solid-full.svg", dataDist: "near", width: "44px", top: "60%", left: "82%", rotate: "6deg", container: "footer-left" },
    { src: "../media/images/icons/house-solid-full.svg", dataDist: "near", width: "40px", top: "66%", left: "62%", rotate: "12deg", container: "footer-left" },
    { src: "../media/images/icons/dice-solid-full.svg", dataDist: "mid", width: "30px", top: "72%", left: "40%", rotate: "8deg", container: "footer-left" },
    { src: "../media/images/icons/brush-solid-full.svg", dataDist: "near", width: "46px", top: "78%", left: "85%", rotate: "16deg", container: "footer-left" },
    { src: "../media/images/icons/briefcase-solid-full.svg", dataDist: "mid", width: "34px", top: "84%", left: "55%", rotate: "4deg", container: "footer-left" },
    { src: "../media/images/icons/dumbbell-solid-full.svg", dataDist: "mid", width: "36px", top: "90%", left: "70%", rotate: "10deg", container: "footer-left" },
    // FOOTER RIGHT
    { src: "../media/images/icons/pen-solid-full.svg", dataDist: "far", width: "23px", top: "5%", left: "67%", rotate: "-12deg", container: "footer-right" },
    { src: "../media/images/icons/arrow-pointer-solid-full.svg", dataDist: "far", width: "19px", top: "10%", left: "75%", rotate: "-20deg", container: "footer-right" },
    { src: "../media/images/icons/brush-solid-full.svg", dataDist: "mid", width: "30px", top: "16%", left: "37%", rotate: "-15deg", container: "footer-right" },
    { src: "../media/images/icons/fire-solid-full.svg", dataDist: "mid", width: "28px", top: "22%", left: "50%", rotate: "-8deg", container: "footer-right" },
    { src: "../media/images/icons/dice-solid-full.svg", dataDist: "far", width: "21px", top: "28%", left: "60%", rotate: "-22deg", container: "footer-right" },
    { src: "../media/images/icons/map-solid-full.svg", dataDist: "far", width: "19px", top: "33%", left: "70%", rotate: "-10deg", container: "footer-right" },
    { src: "../media/images/icons/briefcase-solid-full.svg", dataDist: "mid", width: "34px", top: "38%", left: "20%", rotate: "-18deg", container: "footer-right" },
    { src: "../media/images/icons/draw-polygon-solid-full.svg", dataDist: "mid", width: "32px", top: "44%", left: "35%", rotate: "-5deg", container: "footer-right" },
    { src: "../media/images/icons/bell-solid-full.svg", dataDist: "mid", width: "28px", top: "50%", left: "48%", rotate: "-14deg", container: "footer-right" },
    { src: "../media/images/icons/camera-solid-full.svg", dataDist: "far", width: "21px", top: "55%", left: "63%", rotate: "-20deg", container: "footer-right" },
    { src: "../media/images/icons/house-solid-full.svg", dataDist: "near", width: "44px", top: "60%", left: "3%", rotate: "-6deg", container: "footer-right" },
    { src: "../media/images/icons/cube-solid-full.svg", dataDist: "near", width: "40px", top: "66%", left: "23%", rotate: "-12deg", container: "footer-right" },
    { src: "../media/images/icons/dumbbell-solid-full.svg", dataDist: "mid", width: "30px", top: "72%", left: "45%", rotate: "-8deg", container: "footer-right" },
    { src: "../media/images/icons/hand-peace-solid-full.svg", dataDist: "near", width: "46px", top: "78%", left: "2%", rotate: "-16deg", container: "footer-right" },
    { src: "../media/images/icons/file-code-solid-full.svg", dataDist: "mid", width: "34px", top: "84%", left: "30%", rotate: "-4deg", container: "footer-right" },
    { src: "../media/images/icons/pen-solid-full.svg", dataDist: "mid", width: "36px", top: "90%", left: "15%", rotate: "-10deg", container: "footer-right" }
];

let iconsVisible = false;
const containerElements = {
    hero: document.getElementById('heroWrapper'),
    'footer-left': document.querySelectorAll('.contact-icon-col')[0],
    'footer-right': document.querySelectorAll('.contact-icon-col')[1]
};

const floatingicons = [];

// Create icons
floatingiconsConfig.forEach((config, i) => {
    const img = document.createElement('img');
    img.src = config.src;
    img.className = 'floating-icon';
    img.dataset.dist = config.dataDist;
    img.style.width = config.width;
    img.style.top = config.top;
    if (config.left) img.style.left = config.left;
    if (config.right) img.style.right = config.right;
    img.style.transform = `rotate(${config.rotate})`;
    img.alt = '';
    containerElements[config.container].appendChild(img);
    floatingicons.push({
        element: img,
        baseRot: parseFloat(config.rotate) || 0,
        duration: 5000 + (i * 337) % 1800,
        delay: (i * 413) % 2000,
        ampY: 7 + (i * 197) % 9,
        ampX: 2 + (i * 131) % 5,
        ampR: 1 + (i * 89) % 3,
        start: null
    });
});

// Visibility observers
Object.values(containerElements).forEach(container => {
    createVisibilityObserver(container, (visible) => {
        if (visible) {
            iconsVisible = true;
            floatingicons.forEach(icon => {
                if (container.contains(icon.element)) {
                    icon.element.style.willChange = 'transform';
                }
            });
        } else {
            // Check if any container is visible
            const anyVisible = Object.values(containerElements).some(cont => cont.getBoundingClientRect().top < window.innerHeight && cont.getBoundingClientRect().bottom > 0);
            if (!anyVisible) {
                iconsVisible = false;
                floatingicons.forEach(icon => icon.element.style.willChange = 'auto');
            }
        }
    });
});

// Centralized animation loop
function animateicons(ts) {
    if (iconsVisible) {
        floatingicons.forEach(icon => {
            if (!icon.start) icon.start = ts - icon.delay;
            const t = (ts - icon.start) / icon.duration;
            const y = Math.sin(t * Math.PI * 2) * icon.ampY;
            const x = Math.cos(t * Math.PI * 2) * icon.ampX;
            const r = icon.baseRot + Math.sin(t * Math.PI * 2 + 1) * icon.ampR;
            icon.element.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
        });
    }
    requestAnimationFrame(animateicons);
}
requestAnimationFrame(animateicons);

// --- PROJECTS CAROUSEL ---
const carouselWrapper = document.getElementById('carouselWrapper');
const track = document.getElementById('carouselTrack');
const allCards = Array.from(track.querySelectorAll('.project-card'));
const N = allCards.length;

const CARD_WIDTH = 320;
const CARD_GAP = 40;
const CARD_HEIGHT = 400;
const RY = 130;
const RX = Math.max(620, (N * (CARD_WIDTH + CARD_GAP)) / (2 * Math.PI));

const CAROUSEL_BASE_SPEED = 0.0008;
const CAROUSEL_SLOW_SPEED = 0.0003;

let carouselAngle = 0;
let carouselSpeed = CAROUSEL_BASE_SPEED;
let carouselTargetSpeed = CAROUSEL_BASE_SPEED;
let hoveredCard = null;
let isCarouselVisible = false;
let rafId = null;

let cx = carouselWrapper.offsetWidth / 2;
const debouncedUpdateCx = debounce(() => {
    cx = carouselWrapper.offsetWidth / 2;
}, 100);
window.addEventListener('resize', debouncedUpdateCx);

function animateCarousel() {
    if (!isCarouselVisible) {
        rafId = null;
        return;
    }

    carouselSpeed += (carouselTargetSpeed - carouselSpeed) * 0.04;
    carouselAngle -= carouselSpeed;

    const cy = CARD_HEIGHT * 0.25;

    allCards.forEach((card, i) => {
        const theta = carouselAngle + (i / N) * Math.PI * 2;
        const cosVal = Math.cos(theta);
        const x = cx + RX * Math.sin(theta) - CARD_WIDTH / 2;
        const y = cy + RY * (1 - cosVal);
        const fade = Math.max(0, Math.min(1, (cosVal + 0.1) / 0.8));

        const isHovered = card === hoveredCard;
        const scale = isHovered ? 1.07 : 1;

        card.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        card.style.opacity = fade;
        card.style.zIndex = Math.round(cosVal * 10 + (isHovered ? 20 : 0));
        card.style.pointerEvents = fade < 0.1 ? 'none' : 'auto';
    });

    rafId = requestAnimationFrame(animateCarousel);
}

createVisibilityObserver(carouselWrapper, (visible) => {
    isCarouselVisible = visible;
    if (visible && !rafId) animateCarousel();
});

const carouselAbortController = new AbortController();
carouselWrapper.addEventListener('mouseenter', () => {
    carouselTargetSpeed = CAROUSEL_SLOW_SPEED;
}, { signal: carouselAbortController.signal });
carouselWrapper.addEventListener('mouseleave', () => {
    carouselTargetSpeed = CAROUSEL_BASE_SPEED;
    hoveredCard = null;
}, { signal: carouselAbortController.signal });

allCards.forEach(card => {
    card.addEventListener('mouseenter', () => hoveredCard = card, { signal: carouselAbortController.signal });
    card.addEventListener('mouseleave', () => hoveredCard = null, { signal: carouselAbortController.signal });
});


// --- PROGRESS BAR ---
const progressBar = document.getElementById('page-progress');
let ticking = false;

function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = scrollHeight > 0 ? Math.min(Math.max(Math.round((scrollTop / scrollHeight) * 10000), 0), 10000) : 0;
    
    progressBar.value = percent;
    progressBar.textContent = percent + "%";
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
    }
}, { passive: true });

// --- COMPETENCES ---
const SKILLS_ROW1 = [
    { name: 'JavaScript',       img: '../media/images/skills/javascript.svg' },
    { name: 'HTML',             img: '../media/images/skills/html.svg' },
    { name: 'CSS',              img: '../media/images/skills/css.svg' },
    { name: 'SVG',              img: '../media/images/skills/svg.svg' },
    { name: 'GitHub',           img: '../media/images/skills/github.webp' },
    { name: 'VS Code',          img: '../media/images/skills/vscode.svg' },
    { name: 'Figma',            img: '../media/images/skills/figma.svg' },
    { name: 'Notion',           img: '../media/images/skills/notion.svg' },
    { name: 'Suite Google',     img: '../media/images/skills/google_docs_logo.svg' },
    { name: 'Suite Microsoft',  img: '../media/images/skills/microsoft.svg' },
];

const SKILLS_ROW2 = [
    { name: 'Illustrator',      img: '../media/images/skills/illustrator.svg' },
    { name: 'Photoshop',        img: '../media/images/skills/photoshop.svg' },
    { name: 'Affinity',         img: '../media/images/skills/affinity.svg' },
    { name: 'Canva',            img: '../media/images/skills/canva.svg' },
    { name: 'Krita',            img: '../media/images/skills/krita.svg' },
    { name: 'Paint.net',        img: '../media/images/skills/paintnet.webp' },
    { name: 'DaVinci Resolve',  img: '../media/images/skills/davinci.webp' },
    { name: 'Audacity',         img: '../media/images/skills/audacity.svg' },
    { name: 'OBS',              img: '../media/images/skills/obs.svg' },
    { name: 'Blockbench',       img: '../media/images/skills/blockbench.webp' },
];

const SKILLS_BASE_SPEED = 0.5, SKILLS_SLOW_SPEED = 0.1, FRICTION = 0.92;
const FADE_ZONE = 150, LEFT_EDGE = 400, RIGHT_EDGE_OFFSET = 400;
let globalSkillsSpeedFactor = 1;

function buildTrack(trackEl, wrapperEl, direction, skills) {
    skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item mx-4 is-unselectable';
        item.innerHTML = `<div class="box p-3 has-text-centered" style="width:130px">
            <figure class="image is-square mb-2">
                <img src="${skill.img}" alt="${skill.name}" draggable="false">
            </figure>
            <p class="is-size-6 has-text-weight-bold">${skill.name}</p>
        </div>`;
        trackEl.appendChild(item);
    });

    const originals = Array.from(trackEl.children);
    originals.forEach(el => trackEl.appendChild(el.cloneNode(true)));

    let singleWidth = 0;
    const updateWidth = () => {
        singleWidth = originals.reduce((acc, el) => {
            const s = getComputedStyle(el);
            return acc + el.offsetWidth + parseFloat(s.marginLeft) + parseFloat(s.marginRight);
        }, 0);
    };
    const debouncedUpdateWidth = debounce(updateWidth, 100);
    window.addEventListener('resize', debouncedUpdateWidth);
    updateWidth();

    let x = -singleWidth / 2, isDragging = false, lastMouseX = 0, inertia = 0, isTrackVisible = false;
    let naturalSpeed = direction === 'ltr' ? SKILLS_BASE_SPEED : -SKILLS_BASE_SPEED;

    function animateTrack() {
        if (!isTrackVisible) return;

        if (isDragging) {
            if (x > FADE_ZONE) x -= singleWidth;
            if (x < -singleWidth - FADE_ZONE) x += singleWidth;
        } else {
            inertia *= FRICTION;
            if (Math.abs(inertia) < 0.01) inertia = 0;
            const target = (direction === 'ltr' ? SKILLS_BASE_SPEED : -SKILLS_BASE_SPEED) * globalSkillsSpeedFactor;
            naturalSpeed += (target - naturalSpeed) * 0.03;
            x += inertia + naturalSpeed;
            if (x > FADE_ZONE) x -= singleWidth;
            if (x < -singleWidth - FADE_ZONE) x += singleWidth;
        }

        const wrapperWidth = wrapperEl.offsetWidth;
        const rightEdge = wrapperWidth - RIGHT_EDGE_OFFSET;

        Array.from(trackEl.children).forEach(el => {
            const cardX = x + el.offsetLeft + el.offsetWidth / 2;
            let opacity = 1;
            if (cardX < LEFT_EDGE) opacity = Math.max(0, (cardX - (LEFT_EDGE - FADE_ZONE)) / FADE_ZONE);
            else if (cardX > rightEdge) opacity = Math.max(0, ((rightEdge + FADE_ZONE) - cardX) / FADE_ZONE);
            el.style.opacity = opacity;
        });

        trackEl.style.transform = `translate3d(${x}px, 0, 0)`;
        requestAnimationFrame(animateTrack);
    }

    createVisibilityObserver(wrapperEl, (visible) => {
        isTrackVisible = visible;
        if (visible) animateTrack();
    });

    const trackAbortController = new AbortController();
    wrapperEl.addEventListener('mousedown', e => {
        isDragging = true;
        lastMouseX = e.clientX;
        inertia = 0;
        wrapperEl.classList.add('is-dragging');
    }, { signal: trackAbortController.signal });

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const delta = e.clientX - lastMouseX;
        inertia = delta;
        x += delta;
        lastMouseX = e.clientX;
    }, { signal: trackAbortController.signal });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        wrapperEl.classList.remove('is-dragging');
    }, { signal: trackAbortController.signal });
}

const w1 = document.getElementById('wrapper1'), w2 = document.getElementById('wrapper2');
[w1, w2].forEach(w => {
    w.addEventListener('mouseenter', () => globalSkillsSpeedFactor = 0.1);
    w.addEventListener('mouseleave', () => globalSkillsSpeedFactor = 1);
});

buildTrack(document.getElementById('track1'), w1, 'rtl', SKILLS_ROW1);
buildTrack(document.getElementById('track2'), w2, 'ltr', SKILLS_ROW2);

const projectEntries = [
{
    "id": "podcast-radio-lia-face-a-lart",
    "title": "Podcast Radio: L'IA face à l'Art",
    "subtitle": "Émission Radio en Direct",
    "image": "../media/photos/podcast.webp",
    "summary": "Réalisé dans le cadre de ma formation universitaire, ce projet consistait à imaginer, organiser et animer une véritable émission de radio en direct.",
    "description": "Réalisé dans le cadre de ma formation universitaire, ce projet consistait à imaginer, organiser et animer une véritable émission de radio en direct. En tant que présentateur principal, ma mission était d'orchestrer un débat contradictoire complexe entre quatre intervenants sur l'impact de l'intelligence artificielle dans l'art. L'enjeu majeur reposait sur le respect d'un chronométrage extrêmement strict, exigeant de gérer les temps de parole et de conclure la chronique à la seconde près, tout en maintenant une dynamique fluide.",
    "bilan": "Un podcast dynamique et professionnel. J'ai appris à calibrer un texte pour l'oralité du format radio, à gérer mon stress en direct, et à maîtriser mon temps de parole avec une précision chirurgicale pour respecter les contraintes de flux.",
    "tools": "Audacity, Davinci, Suite Google"
},
{
    "id": "site-web-pokedex",
    "title": "Site web Pokédex",
    "subtitle": "Responsive Bulma",
    "image": "../media/photos/pokedex.webp",
    "summary": "Ce projet de développement web visait à concevoir de A à Z une application interactive et responsive.",
    "description": "Ce projet de développement web visait à concevoir de A à Z une application interactive et responsive. La contrainte technique majeure était d'exploiter au maximum le framework CSS Bulma pour structurer un site complet de trois pages (accueil, collection et détails). Avant même la phase d'intégration du code, j'ai mené une réflexion approfondie sur l'expérience utilisateur et réalisé des maquettes haute fidélité sur Figma pour garantir un rendu esthétique, moderne et parfaitement adapté aux mobiles.",
    "bilan": "Une application web fluide et visuellement soignée. Ce projet m'a permis de maîtriser Figma en partant de zéro et de comprendre le réel atout d'un framework CSS pour produire un code propre et structuré.",
    "tools": "Figma, HTML, CSS, JavaScript, VS Code, Canva"
},
{
    "id": "court-metrage-last-night",
    "title": "Court-métrage : Last Night",
    "subtitle": "Sécurité routière",
    "image": "../media/photos/lastnight.webp",
    "summary": "Projet de production audiovisuelle de bout en bout, de l'idéation à l'étalonnage.",
    "description": "Projet de production audiovisuelle de bout en bout, de l'idéation à l'étalonnage. Le but était de créer un film court abordant le sujet sensible de la sécurité routière avec originalité et impact. Sur ce tournage, j'ai eu l'opportunité d'endosser plusieurs casquettes critiques : l'écriture du scénario, le jeu d'acteur, ainsi que le montage. L'utilisation d'équipement professionnel nous a obligés à maintenir un haut niveau d'exigence visuelle et narrative tout au long du processus.",
    "bilan": "Un court-métrage percutant avec une trame claire. J'ai découvert toute la complexité de la gestion de projet audiovisuel et saisi à quel point le rythme du montage est crucial pour faire passer un message fort.",
    "tools": "Suite Google, Davinci"
},
{
    "id": "audit-festival-mmi",
    "title": "Audit : Festival MMI",
    "subtitle": "Campagne 360°",
    "image": "../media/photos/audit_alwestfest.webp",
    "summary": "Pour ce projet de communication institutionnelle, nous avons dû élaborer de zéro la stratégie globale d'un festival étudiant.",
    "description": "Pour ce projet de communication institutionnelle, nous avons dû élaborer de zéro la stratégie globale d'un festival étudiant. Il a fallu analyser les cibles et les enjeux de l'événement pour créer une identité visuelle forte et déclinable. Au-delà du design (création de la charte graphique et de l'affiche), nous avons rédigé les supports de presse officiels et mené des actions de prospection réelles pour trouver des sponsors, couvrant ainsi tout le spectre d'une campagne de communication professionnelle.",
    "bilan": "Production d'un kit de communication complet (print et digital) prêt à être déployé. Ce projet a consolidé ma capacité à fonder une direction artistique sur une réflexion stratégique rigoureuse.",
    "tools": "Canva, Suite Google"
},
{
    "id": "infographie-biodiversite-de-la-roche-jagu",
    "title": "Infographie: Biodiversité de la Roche-Jagu",
    "subtitle": "Biodiversité",
    "image": "../media/photos/infographie.webp",
    "summary": "Suite à l'intervention d'un expert scientifique en préservation naturelle, le défi était de concevoir un support de vulgarisation efficace.",
    "description": "Suite à l'intervention d'un expert scientifique en préservation naturelle, le défi était de concevoir un support de vulgarisation efficace. L'objectif : rendre des données environnementales complexes sur l'écosystème des marais littoraux de la Roche-Jagu accessibles et compréhensibles pour le grand public. J'ai donc dû analyser, synthétiser et hiérarchiser une grande quantité d'informations techniques avant de les traduire en illustrations vectorielles esthétiques et pédagogiques sur Affinity.",
    "bilan": "Création d'une infographie riche et lisible. Ce travail m'a appris à être un véritable pont entre l'expertise scientifique complexe et le design d'information destiné au public.",
    "tools": "Affinity, Illustrator, Photoshop"
},
{
    "id": "strategie-marketing-promotion-dune-ville",
    "title": "Stratégie Marketing: Promotion d'une Ville",
    "subtitle": "Promotion de ville",
    "image": "../media/photos/affiche_cavan.webp",
    "summary": "Projet ancré dans le marketing territorial avec un cas pratique bien réel : la ville de Cavan.",
    "description": "Projet ancré dans le marketing territorial avec un cas pratique bien réel : la ville de Cavan. Après une visite immersive sur le terrain et une étude historique approfondie, nous avons mené un audit de la communication existante (matrice SWOT). L'objectif final était d'imaginer un concept événementiel novateur capable de dynamiser le tourisme et de valoriser le patrimoine local. Nous avons ensuite dû défendre nos préconisations marketing lors d'un pitch formel devant le maire de la commune.",
    "bilan": "Un plan d'action validé par des élus locaux. J'ai pu expérimenter l'art de convaincre et d'identifier les atouts bruts d'un territoire pour les transformer en véritable stratégie d'attractivité.",
    "tools": "Suite Google, Canva"
},
{
    "id": "audit-de-marque-diagnostic-digital",
    "title": "Audit de Marque: Diagnostic Digital",
    "subtitle": "Diagnostic UX",
    "image": "../media/photos/audit_marque.webp",
    "summary": "Exercice d'analyse digitale poussé pour l'entreprise \"édicolor\".",
    "description": "Exercice d'analyse digitale poussé pour l'entreprise \"édicolor\". Le travail consistait à réaliser un scan intégral de leur site vitrine pour relever et catégoriser la moindre erreur : bugs techniques, failles d'ergonomie, ou encore défauts d'accessibilité web. En croisant ces données avec un benchmarking de leurs concurrents directs, l'objectif de cet audit était de formuler des recommandations stratégiques concrètes et priorisées pour optimiser leur positionnement et leur expérience utilisateur.",
    "bilan": "Un tableau d'audit exhaustif et directement actionnable. J'ai considérablement aiguisé mon œil critique et ma méthodologie d'analyse pour détecter les freins invisibles sur une interface web.",
    "tools": "Suite Google, Canva"
},
{
    "id": "simulation-dentreprise-serious-game",
    "title": "Simulation d'entreprise: \"Serious Game\"",
    "subtitle": "Simu management",
    "image": "../media/photos/serious_game_battimix.webp",
    "summary": "Plongée dans le grand bain lors d'un séminaire intensif de trois jours conçu comme un \"Serious Game\" de gestion d'entreprise.",
    "description": "Plongée dans le grand bain lors d'un séminaire intensif de trois jours conçu comme un \"Serious Game\" de gestion d'entreprise. En équipe de cinq, nous avions la lourde tâche de piloter virtuellement le lancement et la pérennité d'un produit sur un marché hautement disputé. Cela impliquait de gérer le mix-marketing, les stocks, les investissements et de réajuster notre stratégie en permanence pour faire face aux actions des autres équipes concurrentes et aux fluctuations économiques du logiciel.",
    "bilan": "Victoire de l'équipe qui a fini en tête des ventes. Une excellente mise en situation pour comprendre qu'une stratégie créative doit toujours s'appuyer sur une analyse froide et rigoureuse des données.",
    "tools": "Affinity, Figma, Suite Google, Paint.net"
},
{
    "id": "creation-daffiche-a-lwest-fest",
    "title": "Création d'Affiche \"A L'West Fest\"",
    "subtitle": "Design print",
    "image": "../media/photos/affiche_alwestfest.webp",
    "summary": "Ce projet de design graphique visait à créer le visuel clé d'un festival étudiant.",
    "description": "Ce projet de design graphique visait à créer le visuel clé d'un festival étudiant. Le cahier des charges exigeait une composition percutante, capable de capter l'attention du jeune public tout en respectant scrupuleusement l'esprit de l'événement. Pour me démarquer, j'ai opté pour une direction artistique en \"Mix-Media\", fusionnant mes propres prises de vues photographiques avec des illustrations numériques et un travail typographique soigné, jusqu'à la préparation finale du fichier pour l'imprimeur.",
    "bilan": "Une affiche de qualité professionnelle qui a servi de pilier à toute la communication visuelle. J'y ai validé ma capacité à matérialiser une intention artistique complexe en un livrable technique irréprochable.",
    "tools": "Photoshop, Illustrator, Krita"
},
{
    "id": "engagement-associatif-maison-des-lyceens",
    "title": "Engagement Associatif: Maison des Lycéens",
    "subtitle": "Événements associatifs",
    "image": "../media/photos/mdl.webp",
    "summary": "Bien plus qu'un simple passe-temps, mon engagement bénévole m'a placé au cœur du dynamisme de mon lycée.",
    "description": "Bien plus qu'un simple passe-temps, mon engagement bénévole m'a placé au cœur du dynamisme de mon lycée. J'étais en charge de la gestion logistique du foyer associatif et de l'orchestration de divers événements d'envergure réunissant de nombreux élèves. Cette responsabilité s'est prolongée par des collaborations stimulantes avec des ONG externes, comme l'organisation complexe de la \"Course contre la faim\", mêlant communication visuelle, coordination des équipes et logistique sur le terrain.",
    "bilan": "Des événements caritatifs fédérateurs et réussis. Cet investissement associatif a profondément ancré mon sens des responsabilités et ma sociabilité dans un cadre de travail de groupe.",
    "tools": "Canva, Suite Google, Krita"
},
{
    "id": "experience-freelance-prestation",
    "title": "Expérience Freelance & Prestation",
    "subtitle": "Builder Minecraft",
    "image": "../media/photos/builds.webp",
    "summary": "Activité professionnelle indépendante menée en parallèle de mes études, où je collabore avec de gros créateurs de contenu et des administrateurs de serveurs.",
    "description": "Activité professionnelle indépendante menée en parallèle de mes études, où je collabore avec de gros créateurs de contenu et des administrateurs de serveurs. En tant que \"Builder\", ma mission est de traduire un brief abstrait (narratif ou ludique) en un environnement 3D jouable, immersif et visuellement frappant sur Minecraft. Au-delà de l'aspect purement créatif et architectural, je gère intégralement mon activité : négociation contractuelle, relation client, devis et facturation.",
    "bilan": "La fierté de voir mes décors sur-mesure utilisés dans des vidéos cumulant des millions de vues. C'est une plongée concrète dans l'entrepreneuriat qui m'a offert un solide réseau et une grande maturité professionnelle.",
    "tools": "Notion, Blockbench"
},
{
    "id": "post-production-montage-strategie-video",
    "title": "Post-Production: Montage & Stratégie Vidéo",
    "subtitle": "Montage & timing",
    "image": "../media/photos/MontageVideo.webp",
    "summary": "Repéré grâce à mes travaux de Level Design, j'ai été intégré dans l'équipe de post-production d'un vidéaste majeur.",
    "description": "Repéré grâce à mes travaux de Level Design, j'ai été intégré dans l'équipe de post-production d'un vidéaste majeur. Ce rôle passionnant dépasse la simple technique logicielle sur DaVinci Resolve ; je participe à la vision globale des projets. De la recherche de documentations à l'écriture de la trame narrative (scripting), en passant par le découpage des séquences et la maîtrise du rythme, chaque cut est pensé pour captiver une audience exigeante et retenir l'attention.",
    "bilan": "Un projet qui cristallise mes ambitions actuelles. Il m'a fait réaliser que le montage est avant tout une stratégie de communication : la réflexion sur le message démarre bien avant d'ouvrir le logiciel.",
    "tools": "Notion, Davinci, OBS"
},
{
    "id": "gestion-devenement-en-ligne",
    "title": "Gestion d'évènement en ligne",
    "subtitle": "Plus de 100 joueurs",
    "image": "../media/photos/events.webp",
    "summary": "L'évolution logique de mon activité freelance : la conception et l'orchestration d'événements compétitifs de grande ampleur rassemblant plus d'une centaine de joueurs simultanés.",
    "description": "L'évolution logique de mon activité freelance : la conception et l'orchestration d'événements compétitifs de grande ampleur rassemblant plus d'une centaine de joueurs simultanés. Je ne me contente pas de modéliser le terrain de jeu ; j'assure la coordination des équipes techniques, la modération de la communauté sur Discord, l'assistance en direct pour résoudre les bugs, et je veille à ce que chaque action spectaculaire soit parfaitement capturée pour la vidéo finale.",
    "bilan": "Une masterclass en gestion de crise. Canaliser l'énergie de 100 participants m'a prouvé qu'aucune créativité ne peut survivre à un événement en direct sans une logistique et une communication en béton armé.",
    "tools": "OBS, Suite Google"
},
{
    "id": "doublage-amateur-interpretation-mixage",
    "title": "Doublage Amateur: Interprétation & Mixage",
    "subtitle": "Voix & mixage",
    "image": "../media/photos/doublage.webp",
    "summary": "Pratique artistique et technique passionnée, je prête ma voix à divers projets créatifs (animations, fictions sonores).",
    "description": "Pratique artistique et technique passionnée, je prête ma voix à divers projets créatifs (animations, fictions sonores). Cet exercice va bien au-delà de la simple lecture : c'est une véritable immersion psychologique où il faut saisir les enjeux émotionnels d'un personnage pour l'incarner avec justesse. Le travail se prolonge ensuite en post-production où je nettoie, égalise et mixe mes pistes audio pour garantir une intégration et une synchronisation labiale parfaites.",
    "bilan": "Un atout communicationnel insoupçonné. En apprenant à ressentir et projeter différentes émotions, j'ai développé une grande empathie, essentielle pour me mettre à la place de n'importe quel utilisateur final.",
    "tools": "Audacity, Davinci"
}
];

const grid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDescription = document.getElementById('modalDescription');
const modalBilan = document.getElementById('modalBilan');
const modalTools = document.getElementById('modalTools');
const closeButtons = [document.getElementById('modalClose'), document.getElementById('modalCloseAction'), document.querySelector('#projectModal .modal-background')];

function formatTools(tools) {
    return tools.split(',').map(t => `<span class="tag is-light mr-1">${t.trim()}</span>`).join(' ');
}

function openModal(project) {
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalDescription.textContent = project.description;
    modalBilan.textContent = project.bilan;
    modalTools.innerHTML = formatTools(project.tools);
    modal.classList.add('is-active');
}

function closeModal() {
    modal.classList.remove('is-active');
}

closeButtons.forEach(btn => btn && btn.addEventListener('click', closeModal));

const fragment = document.createDocumentFragment();
projectEntries.forEach(project => {
    const cardCol = document.createElement('div');
    cardCol.className = 'column is-half';

    const card = document.createElement('div');
    card.className = 'card project-tile';
    card.addEventListener('click', () => openModal(project));

    card.innerHTML = `
        <div class="card-image">
            <figure class="image is-16by9">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </figure>
        </div>
        <div class="card-content">
            <p class="title is-5">${project.title}</p>
            <p class="subtitle is-6">${project.subtitle}</p>
            <p class="content is-size-6 project-summary">${project.summary}</p>
        </div>
    `;

    cardCol.append(card);
    fragment.append(cardCol);
});
grid.append(fragment);

const oldBlocks = document.querySelectorAll('#projets > .container > .my-6, #projets > .container > .is-flex');
oldBlocks.forEach(el => el.remove());
