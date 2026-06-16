document.addEventListener('DOMContentLoaded', () => {
    const installationImages = [
        "_Bassington_ stove (2).jpg",
        "_Bassington_ stove.jpg",
        "_eReflex 55RW_ Electric Fire.jpg",
        "_Holsworthy_ freestanding stove.jpg",
        "_Huntingdon 30_ stove, _Geocast_ faux-wood beam.jpg",
        "_Sheraton 5_ Stove (2).jpg",
        "_Sheraton 5_ stove.jpg",
        "_Stockton 5 wide_ stove.jpg",
        "_Studio 1 Edge_ inset stove.jpg",
        "_Studio 2_ inset gas fire.jpg",
        "_Studio 3_ freestanding stove, stove bench.jpg",
        "_Vue Portrait_ stove.jpg",
        "_Westfire Uniq_ freestanding stove.jpg",
        "Carrara marble _Canonbury_ mantel, electric inset fire.jpg",
        "Carrara marble _Canonbury_ mantel, tiled insert.jpg",
        "Carrara marble _Corbel_ mantel, _Esse 105_ stove.jpg",
        "Carrara marble _Corbel_ mantel, _SLE 40i_ electric fire, slate back panel.jpg",
        "Carrara marble _Corbel_ mantel, arch insert, gas fire.jpg",
        "Carrara marble _Corbel_ mantel, original arch insert, gas fire.jpg",
        "Carrara marble _Corbel_ mantel, original arch insert.JPG",
        "Carrara marble _Corbel_ mantel, original Georgian insert.jpg",
        "Carrara marble _Corbel_ mantel, plain arch insert, bioethanol fire.jpg",
        "Carrara marble _Flat Victorian_ mantel, _Chesterfield 5_ stove.jpg",
        "Carrara marble _Flat Victorian_ mantel, _eReflex 55RW_ electric fire.jpg",
        "Carrara marble _Flat Victorian_ mantel, _Riva2 40_ inset stove.jpg",
        "Carrara marble _Flat Victorian_ mantel, _Riva2 500_ inset gas fire, slate back panel.jpg",
        "Carrara marble _Reeded Roundel_ mantel, slate slips.jpg",
        "Carrara marble _Roundel_ mantel, original insert.JPG",
        "Cast iron mantel, _Better Hearth Arch_ insert, gas fire.jpg",
        "Cast iron mantel, _Nordpeis Bergen_ stove.jpg",
        "Cast iron mantel, original insert.jpg",
        "Cast iron original mantel, highlight tiled insert.jpg",
        "Green marble _Bolection_ mantel, polished basket.jpg",
        "Limestone _Arts and Crafts_ mantel, inset gas fire, slate back panel.jpg",
        "Limestone _Bolection_ mantel, _Riva 2 600HL_ inset gas fire.jpg",
        "Limestone _Bolection_ mantel, slate slips.jpg",
        "Limestone _Canonbury_ mantel, basket, bioethanol fire.jpg",
        "Limestone _Canonbury_ mantel.jpg",
        "Limestone _Corbel_ mantel, original arch insert.jpg",
        "Limestone _Corbel_ mantel.jpg",
        "Limestone _Flat Victorian_ mantel, _Esse 500_ stove.jpg",
        "Limestone _Flat Victorian_ mantel, _Esse 550_ stove.jpg",
        "Limestone _Flat Victorian_ mantel, _Futura 5_ stove.jpg",
        "Limestone _Flat Victorian_ mantel, _Reflex 75T_ gas fire.jpg",
        "Limestone _Flat Victorian_ mantel, _Riva 2 600HL_ inset gas fire.jpg",
        "Limestone _Flat Victorian_ mantel, original insert.jpg",
        "Limestone _Flat Victorian_ mantel, tiled insert.jpg",
        "Limestone _Olvera_ mantel, basket.jpg",
        "Limestone _Vogue_ mantel, steel slips.png",
        "Nero Marquina _Corbel_ mantel.jpg",
        "Nero Marquina _Flat Victorian_ mantel, original arch insert.JPG",
        "Nero Marquina _Flat Victorian_ mantel, polished insert, gas fire.jpg",
        "Nero Marquina _Roundel_ mantel, original insert.jpg",
        "Original cast iron mantel, _Huntingdon 30_ stove.jpg",
        "Original cast iron register (2).jpg",
        "Original cast iron register.jpg",
        "Original tiled register (2).jpg",
        "Original tiled register, gas fire.jpg",
        "Original tiled register.jpg",
        "Plain cast iron arch, gas fire.jpg",
        "White marble _Bolection_ mantel, original arch insert.jpg",
        "White marble _Canonbury_ mantel, _Bassington_ stove.jpg",
        "White marble _Canonbury_ mantel, _Better Hearth Arch_ insert.jpg",
        "White marble _Canonbury_ mantel, _Provident_ electric fire arch.jpg",
        "White marble _Canonbury_ mantel, original insert.jpg",
        "White marble _Canonbury_ mantel, plain arch insert, gas fire.jpg",
        "White marble _Canonbury_ mantel, polished insert.jpg",
        "White marble _Charlotte_ mantel, _Better Hearth Arch_ insert, gas fire.jpg",
        "White marble _Charlotte_ mantel, _Better Hearth Arch_ insert, has fire.jpg",
        "White marble _Charlotte_ mantel, _Riva2 500_ inset gas fire, slate back panel.jpg",
        "White marble _Corbel_ mantel, _Better Hearth Arch_ insert, gas fire.JPG",
        "White marble _Corbel_ mantel, _Better Hearth Arch_ insert.jpg",
        "White marble _Corbel_ mantel, _Sheraton 5_ stove.jpg",
        "White marble _Corbel_ mantel, _Stockton 5 wide_ gas stove.jpg",
        "White marble _Corbel_ mantel, original arch insert, gas fire.jpg",
        "White marble _Corbel_ mantel, slate slips.png",
        "White marble _Flat Victorian_ mantel (2).jpg",
        "White marble _Flat Victorian_ mantel, _Bassington_ gas stove.jpg",
        "White marble _Flat Victorian_ mantel, _CL5_ gas stove.png",
        "White marble _Flat Victorian_ mantel, _Logic Chartwell_ insert gas fire, slate back panel.JPG",
        "White marble _Flat Victorian_ mantel, _Sheraton 5_ stove (AFTER).jpg",
        "White marble _Flat Victorian_ mantel, _Sheraton 5_ stove (BEFORE).jpg",
        "White marble _Flat Victorian_ mantel, original arch insert (2).jpg",
        "White marble _Flat Victorian_ mantel, original arch insert, gas fire.jpg",
        "White marble _Flat Victorian_ mantel, original insert.jpg",
        "White marble _Flat Victorian_ mantel, tiled insert.jpg",
        "White marble _Flat Victorian_ mantel.jpg",
        "White Marble _Louis XV_ mantel, _Riva2 500_ inset gas fire.jpg",
        "White marble _Pompadour_ mantel.jpg",
        "White marble _Roundel_ mantel, _Better Hearth Arch_ insert, gas fire.jpg",
        "White marble _Roundel_ mantel, _Cadogan_ basket.jpg",
        "White marble _Roundel_ mantel, arch insert.jpg",
        "White marble _Roundel_ mantel, basket, slate slips.jpg",
        "White marble _Roundel_ mantel, original arch insert.jpg",
        "White marble _Roundel_ mantel, original insert.jpg",
        "White marble _Roundel_ mantel, polished basket.jpg",
        "White marble _William IV_ mantel, _Nordpeis Bergen_ stove.jpg",
        "White marble _William IV_ mantel, _Riva 2 600HL_ inset gas fire.JPG",
        "White marble _William IV_ mantel, _Sheraton 5 wide_ stove (2).jpg",
        "White marble _William IV_ mantel, _Sheraton 5 wide_ stove.jpg",
        "White marble _William IV_ mantel, original arch insert.jpg",
        "White marble _William IV_ mantel, original polished arch insert.jpg",
        "White marble _William IV_ mantel, original tiled insert.jpg",
        "White marble ‘William IV’ mantel, highlight arch insert, gas fire.jpg",
        "White marble mantel (2).jpg",
        "White marble mantel, _Vogue Midi T_ gas stove.jpg",
        "White marble mantel, basket, gas fire.jpg",
        "White marble mantel.jpg",
        "Wooden _Bolection_ mantel, _eReflex 55RW_ electric fire.jpg",
        "Wooden _Corbel_ mantel, _Bassington_ gas stove.jpg",
        "Wooden _Corbel_ mantel, _Iconic 450_ electric fire, highlight cast iron front.jpeg",
        "Wooden _Flat Victorian_ mantel, _Better Hearth Arch_ insert, electric fire.jpg",
        "Wooden _Flat Victorian_ mantel, _Logic HE_ gas fire, granite back panel.jpg",
        "Wooden _Flat Victorian_ mantel, inset gas stove, slate back panel.jpg",
        "Wooden _Reeded Roundel_ mantel, _Stockton 5_ stove.jpg",
        "Wooden _Reeded Roundel_ mantel.png",
        "Wooden _Roundel_ mantel, highlight tiled insert.jpg",
        "Wooden _Roundel_ mantel, original Georgian insert.jpg",
        "Wooden _Roundel_ mantel, tiled insert (AFTER).jpg",
        "Wooden _Roundel_ mantel, tiled insert (BEFORE).jpg",
        "Wooden _Roundel_ mantel, tiled insert, gas fire.jpg",
        "Wooden mantel, _Loft_ gas stove.jpg",
        "Wooden mantel, _Logic HE Designio_ gas fire.jpg",
        "Wooden mantel, _Woodland_ stove.jpg",
        "Wooden mantel, tiled insert (2).JPG",
        "Wooden mantel, tiled insert.jpg"
    ];

    const installationCategories = [
        {
            name: "Cast iron inserts",
            matches: (title) => /\b(insert|register|arch|basket|cast iron insert|cast iron register)\b/i.test(title)
        },
        {
            name: "Mantels",
            matches: (title) => /\b(mantel|marble|limestone|wooden|slate slips)\b/i.test(title)
        },
        {
            name: "Gas fires",
            matches: (title) => /\b(gas fire|inset gas fire|logic|riva2|reflex)\b/i.test(title)
        },
        {
            name: "Stoves",
            matches: (title) => /\b(stove|freestanding|bassington|huntingdon|holsworthy|sheraton|stockton|studio|vue|westfire|esse|futura|vogue|nordpeis|loft|woodland)\b/i.test(title)
        },
        {
            name: "Electric fires",
            matches: (title) => /\b(electric|ereflex|emotiv|iconic|sle|provident)\b/i.test(title)
        }
    ];

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    const slider = document.querySelector('.hero-slider');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('active', slideIndex === index);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
        });

        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startSlider() {
        if (slides.length === 0) {
            return;
        }

        stopSlider();
        slideInterval = window.setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        if (slideInterval) {
            window.clearInterval(slideInterval);
        }
    }

    if (slides.length > 0 && dots.length > 0 && prevArrow && nextArrow && slider) {
        prevArrow.addEventListener('click', () => {
            prevSlide();
            startSlider();
        });

        nextArrow.addEventListener('click', () => {
            nextSlide();
            startSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                startSlider();
            });
        });

        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
        startSlider();
    }

    const installationItems = document.querySelectorAll('.installation-item');
    if (installationItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });

        installationItems.forEach((item) => observer.observe(item));
    }

    const installationsGrids = document.querySelectorAll('.installations-grid');
    const galleryModal = document.getElementById('galleryModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryCaption = document.getElementById('galleryCaption');
    const galleryCounter = document.getElementById('galleryCounter');
    const galleryActiveImage = document.getElementById('galleryActiveImage');
    let currentGalleryIndex = 0;

    function formatInstallationTitle(fileName) {
        return fileName
            .replace(/\.[^.]+$/, '')
            .replace(/\s*\(\d+\)\s*/g, ' ')
            .replace(/_/g, '')
            .replace(/\bhas fire\b/gi, 'gas fire')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function updateGalleryImage(index) {
        const safeIndex = (index + installationImages.length) % installationImages.length;
        const fileName = installationImages[safeIndex];
        const title = formatInstallationTitle(fileName);

        currentGalleryIndex = safeIndex;
        galleryActiveImage.src = `Installation photos/${fileName}`;
        galleryActiveImage.alt = title;
        galleryTitle.textContent = title;
        galleryCaption.textContent = title;
        galleryCounter.textContent = `${safeIndex + 1} / ${installationImages.length}`;
    }

    function openGallery(index) {
        if (!galleryModal || !galleryActiveImage) {
            return;
        }

        updateGalleryImage(index);
        galleryModal.classList.add('active');
        galleryModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function createInstallationCard(fileName, index) {
        const title = formatInstallationTitle(fileName);
        const card = document.createElement('article');
        card.className = 'installations-grid-item';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'installation-grid-button';
        button.setAttribute('aria-label', `Open ${title}`);
        button.addEventListener('click', () => openGallery(index));

        const image = document.createElement('img');
        image.className = 'installation-grid-image';
        image.src = `Installation photos/${fileName}`;
        image.alt = title;
        image.loading = 'lazy';

        const label = document.createElement('span');
        label.className = 'installation-grid-label';
        label.textContent = title;

        button.appendChild(image);
        button.appendChild(label);
        card.appendChild(button);

        return card;
    }

    function getInstallationCategoryName(fileName) {
        const title = formatInstallationTitle(fileName);
        const categoryPriority = ["Electric fires", "Gas fires", "Stoves", "Cast iron inserts", "Mantels"];
        const category = categoryPriority
            .map((categoryName) => installationCategories.find((categoryItem) => categoryItem.name === categoryName))
            .find((categoryItem) => categoryItem && categoryItem.matches(title));

        return category ? category.name : "Mantels";
    }

    function renderCategorizedInstallations(gridElement) {
        const groupedImages = new Map(installationCategories.map((category) => [category.name, []]));

        installationImages.forEach((fileName, index) => {
            const categoryName = getInstallationCategoryName(fileName);
            groupedImages.get(categoryName).push({ fileName, index });
        });

        installationCategories.forEach((category) => {
            const categoryImages = groupedImages.get(category.name);

            if (!categoryImages || categoryImages.length === 0) {
                return;
            }

            const categorySection = document.createElement('section');
            categorySection.className = 'installation-category';

            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'installation-category-title';
            categoryTitle.textContent = category.name;

            const categoryGrid = document.createElement('div');
            categoryGrid.className = 'installations-grid installation-category-grid';

            categoryImages.forEach(({ fileName, index }) => {
                categoryGrid.appendChild(createInstallationCard(fileName, index));
            });

            categorySection.appendChild(categoryTitle);
            categorySection.appendChild(categoryGrid);
            gridElement.appendChild(categorySection);
        });
    }

    function closeGallery() {
        if (!galleryModal) {
            return;
        }

        galleryModal.classList.remove('active');
        galleryModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function renderInstallationsGrid(gridElement) {
        if (!gridElement) {
            return;
        }

        if (gridElement.dataset.categorized === 'true') {
            renderCategorizedInstallations(gridElement);
            return;
        }

        installationImages.forEach((fileName, index) => {
            gridElement.appendChild(createInstallationCard(fileName, index));
        });
    }

    function updatePreviewGridHeight(gridElement) {
        if (gridElement.dataset.categorized === 'true') {
            return;
        }

        const previewRows = Number(gridElement.dataset.previewRows || 0);
        if (!previewRows) {
            return;
        }

        const firstItem = gridElement.querySelector('.installations-grid-item');
        if (!firstItem) {
            return;
        }

        const itemHeight = firstItem.getBoundingClientRect().height;
        const gridStyles = window.getComputedStyle(gridElement);
        const rowGap = Number.parseFloat(gridStyles.rowGap || gridStyles.gap || '0');
        const previewHeight = (itemHeight * previewRows) + (rowGap * (previewRows - 1));

        gridElement.style.maxHeight = `${previewHeight}px`;
    }

    if (installationsGrids.length > 0 && galleryModal && modalClose && modalOverlay && galleryPrev && galleryNext && galleryTitle && galleryCaption && galleryCounter && galleryActiveImage) {
        installationsGrids.forEach((gridElement) => {
            renderInstallationsGrid(gridElement);
            updatePreviewGridHeight(gridElement);
        });

        modalClose.addEventListener('click', closeGallery);
        modalOverlay.addEventListener('click', closeGallery);
        galleryPrev.addEventListener('click', () => updateGalleryImage(currentGalleryIndex - 1));
        galleryNext.addEventListener('click', () => updateGalleryImage(currentGalleryIndex + 1));

        window.addEventListener('resize', () => {
            installationsGrids.forEach((gridElement) => updatePreviewGridHeight(gridElement));
        });

        document.addEventListener('keydown', (event) => {
            if (!galleryModal.classList.contains('active')) {
                return;
            }

            if (event.key === 'Escape') {
                closeGallery();
            } else if (event.key === 'ArrowLeft') {
                updateGalleryImage(currentGalleryIndex - 1);
            } else if (event.key === 'ArrowRight') {
                updateGalleryImage(currentGalleryIndex + 1);
            }
        });
    }
});

