/* ============================================
   ATELIER ARÔME - ILLUMINATED INTERACTIONS
   Renaissance Manuscript JavaScript Architecture
   ============================================ */

/**
 * --------------------------------------------------------------------
 * SECTION 1: CONFIGURATION & CONSTANTS
 * --------------------------------------------------------------------
 */

// Animation & Performance Constants
const CONFIG = {
  // Animation Durations (ms)
  ANIMATION_FAST: 150,
  ANIMATION_BASE: 300,
  ANIMATION_SLOW: 500,
  ANIMATION_XSLOW: 800,
  
  // Debounce & Throttle Timings
  DEBOUNCE_SCROLL: 100,
  DEBOUNCE_RESIZE: 200,
  THROTTLE_ANIMATION: 16, // ~60fps
  
  // Intersection Observer Thresholds
  INTERSECTION_THRESHOLD: 0.1,
  INTERSECTION_ROOT_MARGIN: '50px',
  
  // Cart & State
  CART_STORAGE_KEY: 'atelier_arome_cart',
  MAX_CART_ITEMS: 12,
  
  // API Simulation (for demo)
  API_DELAY: 500,
  
  // Accessibility - ENHANCED
  FOCUS_TRAP: true,
  REDUCED_MOTION: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  
  // NEW: Device capability detection
  SUPPORTS_TOUCH: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  IS_LOW_POWER: navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false,
  
  // NEW: Animation capability (combines reduced motion + device power)
  get ANIMATIONS_ENABLED() {
    return !this.REDUCED_MOTION && !this.IS_LOW_POWER;
  }
};

// NEW: Listen for reduced motion preference changes
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
reducedMotionQuery.addEventListener('change', (e) => {
  CONFIG.REDUCED_MOTION = e.matches;
  State.animationsEnabled = CONFIG.ANIMATIONS_ENABLED;
  
  // Dispatch event for components to react
  Utils.dispatchEvent('motionPreferenceChange', { 
    reducedMotion: e.matches,
    animationsEnabled: State.animationsEnabled 
  });
  
  // Announce to screen readers
  if (e.matches) {
    A11y.announce('Animations have been reduced based on your system preferences');
  }
});

// Alchemical Symbols & Data
const ALCHEMICAL_DATA = {
  humours: {
    calming: { symbol: '☾', color: 'var(--color-lavender)', name: 'Calming' },
    uplifting: { symbol: '☀', color: 'var(--color-bergamot)', name: 'Uplifting' },
    grounding: { symbol: '♁', color: 'var(--color-sage)', name: 'Grounding' },
    clarifying: { symbol: '☁', color: 'var(--color-eucalyptus)', name: 'Clarifying' }
  },
  
  seasons: {
    spring: 'Early Spring',
    summer: 'High Summer', 
    autumn: 'Autumn',
    winter: 'Winter'
  },
  
  rarities: {
    common: { label: 'Common', color: 'var(--color-ink-muted)' },
    rare: { label: 'Rare', color: 'var(--color-gold)' },
    limited: { label: 'Limited', color: 'var(--color-rose)' }
  }
};

// Sample Essence Data (In a real app, this would come from an API)
const ESSENCES = [
  {
    id: 'lavender-724',
    folio: 'I',
    latinName: 'Lavandula × intermedia',
    commonName: 'Provence Lavender',
    humour: 'calming',
    rarity: 'rare',
    season: 'summer',
    description: 'Harvested at dawn in the Provençal hills, this lavender possesses a sweetness found only in blossoms kissed by the morning\'s first light.',
    notes: ['Floral', 'Herbaceous', 'Sweet'],
    extraction: 'Steam Distillation',
    price: 42,
    featured: true
  },
  {
    id: 'eucalyptus-511',
    folio: 'II',
    latinName: 'Eucalyptus globulus',
    commonName: 'Tasmanian Eucalyptus',
    humour: 'clarifying',
    rarity: 'common',
    season: 'autumn',
    description: 'The crisp, clean scent of Tasmania\'s ancient forests. This essence clears the mind as morning mist clears from mountain valleys.',
    notes: ['Camphorous', 'Fresh', 'Clean'],
    extraction: 'Steam Distillation',
    price: 36,
    featured: false
  },
  {
    id: 'bergamot-328',
    folio: 'III',
    latinName: 'Citrus bergamia',
    commonName: 'Calabrian Bergamot',
    humour: 'uplifting',
    rarity: 'limited',
    season: 'winter',
    description: 'From Italy\'s sun-drenched Calabrian coast, this essence captures the joyful brightness of citrus groves at harvest.',
    notes: ['Citrus', 'Bright', 'Spicy'],
    extraction: 'Cold Press',
    price: 48,
    featured: false
  },
  // Additional essences would be loaded dynamically
];

// Testimonial Data
const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    author: 'Isabelle Moreau',
    title: 'Writer & Historian, Paris',
    quote: 'The Provence Lavender has transformed my evening ritual into a sacred practice. Its scent is not merely pleasant—it is profound, layered, and seems to hold within it the very quiet of the Provençal hills at dusk.',
    verified: true,
    folio: 'Folio VII, Entry 12',
    illuminated: true
  },
  {
    id: 'testimonial-2', 
    author: 'Marco Ferrara',
    title: 'Michelin-starred Chef, Florence',
    quote: 'As a chef, I understand transformation. What Atelier Arôme achieves with botanicals is culinary artistry for the soul. The Calabrian Bergamot is sunshine captured—it brightens not just a room, but one\'s very disposition.',
    verified: false,
    illuminated: false
  },
  {
    id: 'testimonial-3',
    author: 'Dr. Evelyn Reed',
    title: 'Botanical Researcher, Oxford',
    quote: 'The attention to detail is evident in every aspect. From the wax seal on the phial to the complexity of the scent itself—this is craftsmanship of the highest order. Each essence tells a story.',
    verified: false,
    illuminated: false
  }
];

/**
 * --------------------------------------------------------------------
 * SECTION 2: DOM STATE & CACHING
 * --------------------------------------------------------------------
 */

// Global DOM Cache
const DOM = {
  // Navigation
  header: null,
  mobileMenuToggle: null,
  mobileNav: null,
  headerNavLinks: [],
  
  // Cart & Vial
  cartButton: null,
  vialDrawer: null,
  vialClose: null,
  vialContent: null,
  vialTotal: null,
  
  // Compendium
  compendiumGrid: null,
  filterButtons: [],
  sortSelect: null,
  loadMoreButton: null,
  
  // Testimonials
  testimonialEntries: null,
  testimonialNavPrev: null,
  testimonialNavNext: null,
  testimonialPagination: null,
  
  // Correspondence
  correspondenceForm: null,
  
  // UI Elements
  backToTop: null,
  toast: null,
  toastMessage: null,
  
  // Observers
  intersectionObservers: [],
  resizeObservers: []
};

// Application State
const State = {
  // UI State
  mobileMenuOpen: false,
  cartDrawerOpen: false,
  headerScrolled: false,
  
  // Data State
  cart: [],
  activeFilter: 'all',
  activeSort: 'folio',
  testimonialPage: 1,
  loadedEssences: 3, // Starting with 3 essences
  
  // Animation State
  animationsEnabled: !CONFIG.REDUCED_MOTION,
  scrollY: 0,
  
  // Cleanup References
  focusTrapCleanup: null,
  
  // Methods
  updateCart(newCart) {
    const previousCount = this.getCartCount();
    this.cart = newCart;
    this.persistCart();
    this.updateCartUI?.();  // Optional chaining for safety
    this.updateCartButton?.();
    
    // Dispatch event for analytics or other listeners
    Utils.dispatchEvent('atelier:cartUpdate', { 
      cart: this.cart,
      previousCount: previousCount,
      currentCount: this.getCartCount(),
      total: this.getCartTotal() 
    });
  },
  
  persistCart() {
    try {
      localStorage.setItem(CONFIG.CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  },
  
  restoreCart() {
    try {
      const saved = localStorage.getItem(CONFIG.CART_STORAGE_KEY);
      if (saved) {
        this.cart = JSON.parse(saved);
        updateCartUI();
        updateCartButton();
      }
    } catch (e) {
      console.warn('Could not restore cart from localStorage:', e);
    }
  },
  
  addToCart(essence) {
    if (this.cart.length >= CONFIG.MAX_CART_ITEMS) {
      showToast('Collection vial is at capacity (12 essences maximum)', 'warning');
      A11y.announce('Cannot add item. Collection vial is at maximum capacity of 12 essences.', 'assertive');
      return false;
    }
    
    const existingIndex = this.cart.findIndex(item => item.id === essence.id);
    
    if (existingIndex > -1) {
      // Update quantity
      this.cart[existingIndex].quantity += 1;
      showToast(`Added another phial of ${essence.commonName} to collection`, 'success');
      A11y.announceCartUpdate('update', essence.commonName, this.getCartCount());
    } else {
      // Add new item - FIXED SPREAD SYNTAX
      this.cart.push({
        ...essence,  // Correct spread syntax
        quantity: 1,
        addedAt: new Date().toISOString()
      });
      showToast(`${essence.commonName} added to collection vial`, 'success');
      A11y.announceCartUpdate('add', essence.commonName, this.getCartCount());
    }
    
    // FIXED: Proper spread syntax for array copy
    this.updateCart([...this.cart]);
    return true;
  },
  
  removeFromCart(essenceId) {
    const removedItem = this.cart.find(item => item.id === essenceId);
    const itemName = removedItem ? removedItem.commonName : 'Item';
    
    this.cart = this.cart.filter(item => item.id !== essenceId);
    this.updateCart([...this.cart]);
    
    showToast(`${itemName} removed from collection`, 'info');
    A11y.announceCartUpdate('remove', itemName, this.getCartCount());
  },
  
  updateCartQuantity(essenceId, newQuantity) {
    if (newQuantity < 1) {
      this.removeFromCart(essenceId);
      return;
    }
    
    const itemIndex = this.cart.findIndex(item => item.id === essenceId);
    if (itemIndex > -1) {
      this.cart[itemIndex].quantity = newQuantity;
      this.updateCart([...this.cart]);
      A11y.announceCartUpdate('update', this.cart[itemIndex].commonName, this.getCartCount());
    }
  },
  
  getCartTotal() {
    return this.cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  },
  
  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
};

/**
 * --------------------------------------------------------------------
 * SECTION 3: CORE UTILITIES
 * --------------------------------------------------------------------
 */

// Performance Utilities
const Utils = {
  // Debounce function for scroll/resize events
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function for animation frame updates
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Smooth scroll to element
  smoothScrollTo(target, offset = 0) {
    const element = typeof target === 'string' 
      ? document.querySelector(target)
      : target;
    
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  },
  
  // Generate unique ID
  generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Format currency
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  },
  
  // Parse currency
  parseCurrency(currencyString) {
    return parseInt(currencyString.replace(/[^0-9]/g, ''), 10);
  },
  
  // Check if element is in viewport
  isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight * (1 - threshold) &&
      rect.bottom >= windowHeight * threshold
    );
  },
  
  // Create element with attributes
  createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else if (key === 'innerHTML') {
        element.innerHTML = value;
      } else if (key.startsWith('data-')) {
        element.setAttribute(key, value);
      } else if (key === 'style') {
        Object.assign(element.style, value);
      } else {
        element.setAttribute(key, value);
      }
    });
    
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        element.appendChild(child);
      }
    });
    
    return element;
  },
  
  // Add CSS class with animation consideration
  addClass(element, className) {
    if (!element || !className) return;
    
    if (State.animationsEnabled) {
      element.classList.add(className);
    } else {
      // For reduced motion, add class without transition
      const originalTransition = element.style.transition;
      element.style.transition = 'none';
      element.classList.add(className);
      // Force reflow
      element.offsetHeight;
      element.style.transition = originalTransition;
    }
  },
  
  // Remove CSS class with animation consideration
  removeClass(element, className) {
    if (!element || !className) return;
    
    if (State.animationsEnabled) {
      element.classList.remove(className);
    } else {
      const originalTransition = element.style.transition;
      element.style.transition = 'none';
      element.classList.remove(className);
      element.offsetHeight;
      element.style.transition = originalTransition;
    }
  },
  
  // Toggle CSS class with animation consideration
  toggleClass(element, className, force) {
    if (!element || !className) return;
    
    if (State.animationsEnabled) {
      element.classList.toggle(className, force);
    } else {
      const originalTransition = element.style.transition;
      element.style.transition = 'none';
      element.classList.toggle(className, force);
      element.offsetHeight;
      element.style.transition = originalTransition;
    }
  },
  
  // Dispatch custom event
  dispatchEvent(name, detail = {}) {
    const event = new CustomEvent(`atelier:${name}`, {
      detail,
      bubbles: true
    });
    document.dispatchEvent(event);
  },
  
  // Get query parameter
  getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },
  
  // Set query parameter
  setQueryParam(name, value) {
    const urlParams = new URLSearchParams(window.location.search);
    if (value) {
      urlParams.set(name, value);
    } else {
      urlParams.delete(name);
    }
    
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }
};

// Accessibility Utilities
const A11y = {
  // Trap focus within element
  trapFocus(element) {
    if (!CONFIG.FOCUS_TRAP || !element) return () => {};
    
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return () => {};
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    const trapHandler = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    
    element.addEventListener('keydown', trapHandler);
    
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', trapHandler);
    };
  },
  
  // Set ARIA attributes for modal/drawer
  setModalAttributes(element, isOpen) {
    if (!element) return;
    
    element.setAttribute('aria-hidden', !isOpen);
    element.setAttribute('aria-modal', isOpen);
    
    if (isOpen) {
      element.removeAttribute('inert');
    } else {
      element.setAttribute('inert', '');
    }
  },
  
  // ENHANCED: Announce to screen readers with priority support
  announce(message, priority = 'polite') {
    // Get or create announcer element
    let announcer = document.getElementById('a11y-announcer');
    if (!announcer) {
      announcer = Utils.createElement('div', {
        id: 'a11y-announcer',
        className: 'visually-hidden',
        'aria-live': priority,
        'aria-atomic': 'true',
        role: 'status'
      });
      document.body.appendChild(announcer);
    }
    
    announcer.setAttribute('aria-live', priority);
    announcer.textContent = '';
    
    // Force reflow for announcement
    setTimeout(() => {
      announcer.textContent = message;
    }, 100);
  },
  
  // NEW: Announce cart updates specifically
  announceCartUpdate(action, itemName, count) {
    let message;
    switch (action) {
      case 'add':
        message = `Added ${itemName} to collection. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
        break;
      case 'remove':
        message = `Removed ${itemName} from collection. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
        break;
      case 'update':
        message = `Updated quantity for ${itemName}. Cart now has ${count} item${count !== 1 ? 's' : ''}.`;
        break;
      default:
        message = `Cart updated. ${count} item${count !== 1 ? 's' : ''} in collection.`;
    }
    
    this.announce(message, 'polite');
  },
  
  // NEW: Associate error message with input
  associateError(input, errorElement) {
    if (!input || !errorElement) return;
    
    const errorId = errorElement.id || `error-${input.id}`;
    if (!errorElement.id) {
      errorElement.id = errorId;
    }
    
    let describedBy = input.getAttribute('aria-describedby') || '';
    if (!describedBy.includes(errorId)) {
      describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;
      input.setAttribute('aria-describedby', describedBy);
    }
    
    input.setAttribute('aria-invalid', 'true');
  },
  
  // NEW: Clear error association
  clearError(input, errorElement) {
    if (!input) return;
    
    if (errorElement && errorElement.id) {
      const describedBy = input.getAttribute('aria-describedby') || '';
      const updated = describedBy.replace(errorElement.id, '').trim();
      
      if (updated) {
        input.setAttribute('aria-describedby', updated);
      } else {
        input.removeAttribute('aria-describedby');
      }
    }
    
    input.setAttribute('aria-invalid', 'false');
  }
};

/**
 * --------------------------------------------------------------------
 * SECTION 4: MOBILE NAVIGATION SYSTEM
 * --------------------------------------------------------------------
 */

function initMobileNavigation() {
  if (!DOM.mobileMenuToggle || !DOM.mobileNav) return;
  
  // Toggle mobile menu
  DOM.mobileMenuToggle.addEventListener('click', () => {
    toggleMobileMenu(!State.mobileMenuOpen);
  });
  
  // Close menu when clicking on links (mobile)
  DOM.mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (State.mobileMenuOpen) {
        toggleMobileMenu(false);
      }
    });
  });
  
  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && State.mobileMenuOpen) {
      toggleMobileMenu(false);
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!State.mobileMenuOpen) return;
    
    const isClickInside = DOM.mobileNav.contains(e.target) || 
                         DOM.mobileMenuToggle.contains(e.target);
    
    if (!isClickInside) {
      toggleMobileMenu(false);
    }
  });
}

function toggleMobileMenu(open) {
  State.mobileMenuOpen = open;
  
  // Update toggle button
  DOM.mobileMenuToggle.setAttribute('aria-expanded', open);
  DOM.mobileMenuToggle.setAttribute('aria-label', 
    open ? 'Close atelier menu' : 'Open atelier menu'
  );
  
  // Update mobile nav
  A11y.setModalAttributes(DOM.mobileNav, open);
  Utils.toggleClass(DOM.mobileNav, 'active', open);
  
  // Update body scroll
  document.body.style.overflow = open ? 'hidden' : '';
  
  // Trap focus when open
  if (open) {
    A11y.trapFocus(DOM.mobileNav);
    // Focus first focusable element in mobile nav
    const firstFocusable = DOM.mobileNav.querySelector('a, button');
    if (firstFocusable) firstFocusable.focus();
  } else {
    // Return focus to toggle button
    DOM.mobileMenuToggle.focus();
  }
  
  // Dispatch event
  Utils.dispatchEvent('mobileMenuToggle', { open });
}

/**
 * --------------------------------------------------------------------
 * SECTION 5: CART & VIAL DRAWER SYSTEM
 * --------------------------------------------------------------------
 */

function initCartSystem() {
  if (!DOM.cartButton || !DOM.vialDrawer || !DOM.vialClose) return;
  
  // Open cart drawer
  DOM.cartButton.addEventListener('click', () => {
    toggleCartDrawer(true);
  });
  
  // Close cart drawer
  DOM.vialClose.addEventListener('click', () => {
    toggleCartDrawer(false);
  });
  
  // Close drawer with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && State.cartDrawerOpen) {
      toggleCartDrawer(false);
    }
  });
  
  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!State.cartDrawerOpen) return;
    
    const isClickInside = DOM.vialDrawer.contains(e.target) || 
                         DOM.cartButton.contains(e.target);
    
    if (!isClickInside) {
      toggleCartDrawer(false);
    }
  });
  
  // Dispatch button (checkout simulation)
  const dispatchButton = DOM.vialDrawer.querySelector('.vial-drawer__dispatch');
  if (dispatchButton) {
    dispatchButton.addEventListener('click', handleCheckout);
  }
  
  // Restore cart from localStorage
  State.restoreCart();
}

function toggleCartDrawer(open) {
  State.cartDrawerOpen = open;
  
  // Update vial drawer
  A11y.setModalAttributes(DOM.vialDrawer, open);
  Utils.toggleClass(DOM.vialDrawer, 'active', open);
  
  // Update body scroll
  document.body.style.overflow = open ? 'hidden' : '';
  
  // Trap focus when open
  if (open) {
    // Store cleanup function
    State.focusTrapCleanup = A11y.trapFocus(DOM.vialDrawer);
    // Focus first focusable element in drawer
    const firstFocusable = DOM.vialDrawer.querySelector('button, [href]');
    if (firstFocusable) firstFocusable.focus();
    
    // Announce drawer open to screen readers
    A11y.announce('Collection vial drawer opened', 'polite');
  } else {
    // Execute cleanup
    if (State.focusTrapCleanup) {
      State.focusTrapCleanup();
      State.focusTrapCleanup = null;
    }
    // Return focus to cart button
    DOM.cartButton.focus();
    
    // Announce drawer close
    A11y.announce('Collection vial drawer closed', 'polite');
  }
  
  // Dispatch event
  Utils.dispatchEvent('atelier:cartDrawerToggle', { open });
}

function updateCartUI() {
  if (!DOM.vialContent || !DOM.vialTotal) return;
  
  // Clear current content
  DOM.vialContent.innerHTML = '';
  
  if (State.cart.length === 0) {
    // Show empty state
    const emptyState = Utils.createElement('div', {
      className: 'vial-drawer__empty'
    }, [
      Utils.createElement('div', {
        className: 'vial-drawer__empty-icon',
        'aria-hidden': 'true'
      }, ['⚱']),
      Utils.createElement('p', {
        className: 'vial-drawer__empty-text'
      }, ['Your collection vial awaits'])
    ]);
    
    DOM.vialContent.appendChild(emptyState);
    DOM.vialTotal.textContent = Utils.formatCurrency(0);
    return;
  }
  
  // Create cart items
  const fragment = document.createDocumentFragment();
  
  State.cart.forEach((item, index) => {
    const cartItem = createCartItemElement(item, index);
    fragment.appendChild(cartItem);
  });
  
  DOM.vialContent.appendChild(fragment);
  DOM.vialTotal.textContent = Utils.formatCurrency(State.getCartTotal());
  
  // Add event listeners for quantity controls
  DOM.vialContent.querySelectorAll('.cart-item__quantity-btn').forEach(btn => {
    btn.addEventListener('click', handleQuantityChange);
  });
  
  DOM.vialContent.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', handleRemoveItem);
  });
}

function createCartItemElement(item, index) {
  const element = Utils.createElement('div', {
    className: 'cart-item',
    'data-id': item.id
  });
  
  element.innerHTML = `
    <div class="cart-item__header">
      <div class="cart-item__info">
        <h4 class="cart-item__name">${item.commonName}</h4>
        <div class="cart-item__meta">
          <span class="cart-item__latin">${item.latinName}</span>
          <span class="cart-item__humour" data-humour="${item.humour}">
            ${ALCHEMICAL_DATA.humours[item.humour]?.symbol || '✦'} ${ALCHEMICAL_DATA.humours[item.humour]?.name || item.humour}
          </span>
        </div>
      </div>
      <button class="cart-item__remove" aria-label="Remove ${item.commonName} from collection">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <div class="cart-item__details">
      <div class="cart-item__quantity">
        <button class="cart-item__quantity-btn" data-action="decrease" aria-label="Decrease quantity">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <span class="cart-item__quantity-value">${item.quantity}</span>
        <button class="cart-item__quantity-btn" data-action="increase" aria-label="Increase quantity">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <span class="cart-item__quantity-label">phial${item.quantity !== 1 ? 's' : ''}</span>
      </div>
      
      <div class="cart-item__price">
        <span class="cart-item__price-value">${Utils.formatCurrency(item.price * item.quantity)}</span>
        <span class="cart-item__price-unit">${item.quantity} × ${Utils.formatCurrency(item.price)}</span>
      </div>
    </div>
  `;
  
  return element;
}

function updateCartButton() {
  if (!DOM.cartButton) return;
  
  const count = State.getCartCount();
  DOM.cartButton.setAttribute('data-count', count);
  DOM.cartButton.setAttribute('aria-label', 
    count > 0 
      ? `Collection vial with ${count} essence${count !== 1 ? 's' : ''}`
      : 'Collection vial'
  );
}

function handleQuantityChange(e) {
  const button = e.currentTarget;
  const cartItem = button.closest('.cart-item');
  const itemId = cartItem?.dataset.id;
  const action = button.dataset.action;
  
  if (!itemId || !action) return;
  
  const item = State.cart.find(item => item.id === itemId);
  if (!item) return;
  
  let newQuantity = item.quantity;
  
  if (action === 'increase') {
    newQuantity += 1;
  } else if (action === 'decrease') {
    newQuantity -= 1;
  }
  
  State.updateCartQuantity(itemId, newQuantity);
}

function handleRemoveItem(e) {
  const button = e.currentTarget;
  const cartItem = button.closest('.cart-item');
  const itemId = cartItem?.dataset.id;
  
  if (!itemId) return;
  
  State.removeFromCart(itemId);
}

function handleCheckout() {
  if (State.cart.length === 0) {
    showToast('Your collection vial is empty', 'warning');
    return;
  }
  
  showToast('Dispatching your essence collection to the atelier...', 'info');
  
  // Simulate API call
  setTimeout(() => {
    showToast('Your collection has been dispatched. The atelier will contact you shortly.', 'success');
    
    // Clear cart after successful "checkout"
    State.updateCart([]);
    toggleCartDrawer(false);
    
    A11y.announce('Collection dispatched successfully. The atelier will contact you shortly.');
  }, CONFIG.API_DELAY * 2);
}

/**
 * --------------------------------------------------------------------
 * SECTION 6: ESSENCE COMPENDIUM SYSTEM
 * --------------------------------------------------------------------
 */

function initCompendium() {
  if (!DOM.compendiumGrid || DOM.filterButtons.length === 0 || !DOM.sortSelect) return;
  
  // Filter buttons
  DOM.filterButtons.forEach(button => {
    button.addEventListener('click', handleFilterClick);
  });
  
  // Sort select
  DOM.sortSelect.addEventListener('change', handleSortChange);
  
  // Load more button
  if (DOM.loadMoreButton) {
    DOM.loadMoreButton.addEventListener('click', handleLoadMore);
  }
  
  // Initial render
  renderEssences();
  
  // Check URL for initial filter/sort
  const urlFilter = Utils.getQueryParam('filter');
  const urlSort = Utils.getQueryParam('sort');
  
  if (urlFilter && DOM.filterButtons.some(btn => btn.dataset.filter === urlFilter)) {
    State.activeFilter = urlFilter;
    updateFilterButtons();
  }
  
  if (urlSort) {
    State.activeSort = urlSort;
    DOM.sortSelect.value = urlSort;
  }
  
  // Apply initial filter/sort
  applyFiltersAndSort();
}

function handleFilterClick(e) {
  const button = e.currentTarget;
  const filter = button.dataset.filter;
  
  if (!filter || filter === State.activeFilter) return;
  
  State.activeFilter = filter;
  updateFilterButtons();
  applyFiltersAndSort();
  
  // Update URL
  Utils.setQueryParam('filter', filter === 'all' ? null : filter);
  
  // Announce filter change
  A11y.announce(`Filtered to ${filter === 'all' ? 'all essences' : filter} essences`);
}

function updateFilterButtons() {
  DOM.filterButtons.forEach(button => {
    const isActive = button.dataset.filter === State.activeFilter;
    button.setAttribute('aria-pressed', isActive);
    Utils.toggleClass(button, 'active', isActive);
  });
}

function handleSortChange(e) {
  const sort = e.target.value;
  
  if (!sort || sort === State.activeSort) return;
  
  State.activeSort = sort;
  applyFiltersAndSort();
  
  // Update URL
  Utils.setQueryParam('sort', sort === 'folio' ? null : sort);
  
  // Announce sort change
  A11y.announce(`Sorted by ${getSortLabel(sort)}`);
}

function getSortLabel(sort) {
  const labels = {
    folio: 'folio order',
    humour: 'humour',
    rarity: 'rarity',
    season: 'season'
  };
  return labels[sort] || sort;
}

function applyFiltersAndSort() {
  let filteredEssences = [...ESSENCES];
  
  // Apply filter
  if (State.activeFilter !== 'all') {
    filteredEssences = filteredEssences.filter(essence => 
      essence.humour === State.activeFilter
    );
  }
  
  // Apply sort
  filteredEssences.sort((a, b) => {
    switch (State.activeSort) {
      case 'humour':
        return a.humour.localeCompare(b.humour);
      case 'rarity':
        const rarityOrder = { rare: 0, limited: 1, common: 2 };
        return rarityOrder[a.rarity] - rarityOrder[b.rarity];
      case 'season':
        const seasonOrder = { spring: 0, summer: 1, autumn: 2, winter: 3 };
        return seasonOrder[a.season] - seasonOrder[b.season];
      case 'folio':
      default:
        return parseInt(a.folio) - parseInt(b.folio);
    }
  });
  
  // Limit to currently loaded count
  const visibleEssences = filteredEssences.slice(0, State.loadedEssences);
  
  // Render
  renderEssences(visibleEssences);
  
  // Update counter
  updateEssenceCounter(filteredEssences.length);
}

function renderEssences(essences = ESSENCES.slice(0, State.loadedEssences)) {
  if (!DOM.compendiumGrid) return;
  
  const fragment = document.createDocumentFragment();
  
  essences.forEach(essence => {
    // Check if element already exists
    const existing = DOM.compendiumGrid.querySelector(`[data-id="${essence.id}"]`);
    
    if (existing) {
      fragment.appendChild(existing.cloneNode(true));
      existing.remove();
    } else {
      const essenceCard = createEssenceCard(essence);
      fragment.appendChild(essenceCard);
    }
  });
  
  // Clear and append new elements
  DOM.compendiumGrid.innerHTML = '';
  DOM.compendiumGrid.appendChild(fragment);
  
  // Add event listeners to action buttons
  DOM.compendiumGrid.querySelectorAll('.essence-card__action').forEach(button => {
    button.addEventListener('click', handleAddToCart);
  });
}

function createEssenceCard(essence) {
  const element = Utils.createElement('article', {
    className: `essence-card ${essence.featured ? 'essence-card--featured' : ''}`,
    'data-id': essence.id,
    'data-humour': essence.humour,
    'data-rarity': essence.rarity,
    'data-season': essence.season
  });
  
  const humourData = ALCHEMICAL_DATA.humours[essence.humour];
  const rarityData = ALCHEMICAL_DATA.rarities[essence.rarity];
  
  element.innerHTML = `
    <div class="essence-card__illumination">
      <div class="essence-card__illustration">
        <svg class="essence-card__botanical-svg" viewBox="0 0 200 200" aria-hidden="true">
          <!-- Botanical illustration would be specific to each essence -->
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1"/>
          <path d="M100 180 L100 80" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="100" cy="60" r="15" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      
      <div class="essence-card__folio">
        <span class="essence-card__folio-number">${essence.folio}</span>
      </div>
      
      ${essence.rarity !== 'common' ? `
        <div class="essence-card__badge" aria-label="${rarityData.label} essence">
          <span class="essence-card__badge-text">${rarityData.label}</span>
          <div class="essence-card__badge-ornament"></div>
        </div>
      ` : ''}
    </div>
    
    <div class="essence-card__content">
      <div class="essence-card__latin">
        <span class="essence-card__latin-name">${essence.latinName}</span>
        <div class="essence-card__latin-rule"></div>
      </div>
      
      <h3 class="essence-card__title">${essence.commonName}</h3>
      
      <div class="essence-card__humour">
        <span class="essence-card__humour-icon" aria-label="${humourData.name} essence">
          ${humourData.symbol}
        </span>
        <span class="essence-card__humour-label">${humourData.name}</span>
      </div>
      
      <p class="essence-card__description">
        ${essence.description}
      </p>
      
      <div class="essence-card__notes">
        <div class="essence-card__note">
          <span class="essence-card__note-label">Season</span>
          <span class="essence-card__note-value">${ALCHEMICAL_DATA.seasons[essence.season] || essence.season}</span>
        </div>
        <div class="essence-card__note">
          <span class="essence-card__note-label">Notes</span>
          <span class="essence-card__note-value">${essence.notes.join(' • ')}</span>
        </div>
        <div class="essence-card__note">
          <span class="essence-card__note-label">Extraction</span>
          <span class="essence-card__note-value">${essence.extraction}</span>
        </div>
      </div>
      
      <div class="essence-card__footer">
        <div class="essence-card__pricing">
          <span class="essence-card__price">$${essence.price}</span>
          <span class="essence-card__measure">per 5ml phial</span>
        </div>
        <button class="essence-card__action" aria-label="Add ${essence.commonName} to collection vial">
          <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          <span class="essence-card__action-text">To Vial</span>
        </button>
      </div>
    </div>
  `;
  
  return element;
}

function handleAddToCart(e) {
  const button = e.currentTarget;
  const essenceCard = button.closest('.essence-card');
  const essenceId = essenceCard?.dataset.id;
  
  if (!essenceId) return;
  
  const essence = ESSENCES.find(e => e.id === essenceId);
  if (!essence) return;
  
  State.addToCart(essence);
  
  // Add visual feedback
  Utils.addClass(button, 'essence-card__action--added');
  setTimeout(() => {
    Utils.removeClass(button, 'essence-card__action--added');
  }, CONFIG.ANIMATION_BASE);
}

function updateEssenceCounter(total) {
  const counter = document.querySelector('.compendium__counter-current');
  const totalEl = document.querySelector('.compendium__counter-total');
  
  if (counter) {
    counter.textContent = Math.min(State.loadedEssences, total);
  }
  
  if (totalEl) {
    totalEl.textContent = total;
  }
  
  // Show/hide load more button
  if (DOM.loadMoreButton) {
    const hasMore = State.loadedEssences < total;
    DOM.loadMoreButton.style.display = hasMore ? 'flex' : 'none';
  }
}

function handleLoadMore() {
  // Simulate loading more essences
  showToast('Loading more essences from the compendium...', 'info');
  
  setTimeout(() => {
    State.loadedEssences = Math.min(State.loadedEssences + 3, ESSENCES.length);
    applyFiltersAndSort();
    
    if (State.loadedEssences >= ESSENCES.length) {
      showToast('All essences loaded from the compendium', 'success');
    }
    
    // Smooth scroll to newly loaded items
    const lastCard = DOM.compendiumGrid.lastElementChild;
    if (lastCard) {
      lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    A11y.announce(`Loaded ${State.loadedEssences} of ${ESSENCES.length} essences`);
  }, CONFIG.API_DELAY);
}

/**
 * --------------------------------------------------------------------
 * SECTION 7: TESTIMONIAL MANUSCRIPT SYSTEM
 * --------------------------------------------------------------------
 */

function initTestimonials() {
  if (!DOM.testimonialEntries || !DOM.testimonialNavPrev || !DOM.testimonialNavNext) return;
  
  // Navigation buttons
  DOM.testimonialNavPrev.addEventListener('click', () => {
    changeTestimonialPage(-1);
  });
  
  DOM.testimonialNavNext.addEventListener('click', () => {
    changeTestimonialPage(1);
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      changeTestimonialPage(-1);
    } else if (e.key === 'ArrowRight') {
      changeTestimonialPage(1);
    }
  });
  
  // Initial render
  renderTestimonials();
}

function renderTestimonials() {
  if (!DOM.testimonialEntries) return;
  
  // Clear current content
  DOM.testimonialEntries.innerHTML = '';
  
  // Get testimonials for current page (3 per page)
  const testimonialsPerPage = 3;
  const startIndex = (State.testimonialPage - 1) * testimonialsPerPage;
  const pageTestimonials = TESTIMONIALS.slice(startIndex, startIndex + testimonialsPerPage);
  
  // Create testimonial elements
  const fragment = document.createDocumentFragment();
  
  pageTestimonials.forEach(testimonial => {
    const testimonialEl = createTestimonialElement(testimonial);
    fragment.appendChild(testimonialEl);
  });
  
  DOM.testimonialEntries.appendChild(fragment);
  
  // Update pagination
  updateTestimonialPagination();
}

function createTestimonialElement(testimonial) {
  const element = Utils.createElement('article', {
    className: `manuscript-entry ${testimonial.illuminated ? 'manuscript-entry--illuminated' : ''}`,
    'data-id': testimonial.id
  });
  
  const border = testimonial.illuminated ? `
    <div class="manuscript-entry__border">
      <div class="manuscript-entry__corner manuscript-entry__corner--tl"></div>
      <div class="manuscript-entry__corner manuscript-entry__corner--tr"></div>
      <div class="manuscript-entry__corner manuscript-entry__corner--bl"></div>
      <div class="manuscript-entry__corner manuscript-entry__corner--br"></div>
    </div>
  ` : '';
  
  const initial = testimonial.illuminated ? `
    <div class="manuscript-entry__initial">${testimonial.author.charAt(0)}</div>
  ` : '';
  
  const seal = testimonial.verified ? `
    <div class="manuscript-entry__seal">
      <span class="manuscript-entry__seal-text">Verified Patron</span>
    </div>
  ` : '';
  
  const folio = testimonial.folio ? `
    <div class="manuscript-entry__folio">
      <span class="manuscript-entry__folio-number">${testimonial.folio}</span>
    </div>
  ` : '';
  
  element.innerHTML = `
    ${border}
    
    <div class="manuscript-entry__content">
      ${initial}
      
      <blockquote class="manuscript-entry__quote">
        <p>${testimonial.quote}</p>
      </blockquote>
      
      <div class="manuscript-entry__attribution">
        <div class="manuscript-entry__author">
          <cite class="manuscript-entry__name">${testimonial.author}</cite>
          <span class="manuscript-entry__title">${testimonial.title}</span>
        </div>
        ${seal}
      </div>
      
      ${folio}
    </div>
  `;
  
  return element;
}

function changeTestimonialPage(delta) {
  const totalPages = Math.ceil(TESTIMONIALS.length / 3);
  const newPage = State.testimonialPage + delta;
  
  if (newPage < 1 || newPage > totalPages) return;
  
  State.testimonialPage = newPage;
  renderTestimonials();
  
  // Update URL
  Utils.setQueryParam('page', newPage === 1 ? null : newPage.toString());
  
  // Announce page change
  A11y.announce(`Page ${newPage} of ${totalPages}`);
}

function updateTestimonialPagination() {
  if (!DOM.testimonialPagination) return;
  
  const totalPages = Math.ceil(TESTIMONIALS.length / 3);
  const currentEl = DOM.testimonialPagination.querySelector('.manuscript__page-current');
  const totalEl = DOM.testimonialPagination.querySelector('.manuscript__page-total');
  
  if (currentEl) {
    currentEl.textContent = State.testimonialPage;
  }
  
  if (totalEl) {
    totalEl.textContent = totalPages;
  }
  
  // Update button states
  DOM.testimonialNavPrev.disabled = State.testimonialPage === 1;
  DOM.testimonialNavNext.disabled = State.testimonialPage === totalPages;
  
  DOM.testimonialNavPrev.setAttribute('aria-label', 
    State.testimonialPage === 1 ? 'No previous entries' : 'Previous entry'
  );
  
  DOM.testimonialNavNext.setAttribute('aria-label',
    State.testimonialPage === totalPages ? 'No more entries' : 'Next entry'
  );
}

/**
 * --------------------------------------------------------------------
 * SECTION 8: CORRESPONDENCE FORM SYSTEM
 * --------------------------------------------------------------------
 */

function initCorrespondenceForm() {
  if (!DOM.correspondenceForm) return;
  
  DOM.correspondenceForm.addEventListener('submit', handleCorrespondenceSubmit);
  
  // Add input validation
  const inputs = DOM.correspondenceForm.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', clearInputError);
  });
}

function validateInput(e) {
  const input = e.target;
  const field = input.closest('.correspondence__field');
  
  if (!field) return;
  
  // Clear previous error
  clearInputError(e);
  
  // Validate based on input type
  let isValid = true;
  let errorMessage = '';
  
  if (input.type === 'text' && input.id === 'correspondenceName') {
    if (!input.value.trim()) {
      isValid = false;
      errorMessage = 'Please enter your name';
    } else if (input.value.trim().length < 2) {
      isValid = false;
      errorMessage = 'Name must be at least 2 characters';
    }
  } else if (input.type === 'email') {
    if (!input.value.trim()) {
      isValid = false;
      errorMessage = 'Please enter your email address';
    } else if (!isValidEmail(input.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }
  
  if (!isValid) {
    showInputError(field, errorMessage);
  }
  
  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showInputError(field, message) {
  Utils.addClass(field, 'correspondence__field--error');
  
  // Create or update error message
  let errorEl = field.querySelector('.correspondence__field-error');
  
  if (!errorEl) {
    errorEl = Utils.createElement('span', {
      className: 'correspondence__field-error',
      'aria-live': 'polite'
    });
    field.appendChild(errorEl);
  }
  
  errorEl.textContent = message;
  errorEl.setAttribute('role', 'alert');
}

function clearInputError(e) {
  const input = e.target;
  const field = input.closest('.correspondence__field');
  
  if (!field) return;
  
  Utils.removeClass(field, 'correspondence__field--error');
  
  const errorEl = field.querySelector('.correspondence__field-error');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.removeAttribute('role');
  }
}

function handleCorrespondenceSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const nameInput = form.querySelector('#correspondenceName');
  const emailInput = form.querySelector('#correspondenceEmail');
  const consentInput = form.querySelector('#correspondenceConsent');
  
  // Validate all inputs
  const nameValid = validateInput({ target: nameInput });
  const emailValid = validateInput({ target: emailInput });
  
  if (!consentInput.checked) {
    showToast('Please agree to receive correspondence', 'warning');
    consentInput.focus();
    return;
  }
  
  if (!nameValid || !emailValid) {
    showToast('Please correct the errors in the form', 'warning');
    return;
  }
  
  // Get form data
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    subscribedAt: new Date().toISOString()
  };
  
  // Show loading state
  const submitButton = form.querySelector('.correspondence__submit');
  const originalText = submitButton.querySelector('.correspondence__submit-text').textContent;
  submitButton.querySelector('.correspondence__submit-text').textContent = 'Subscribing...';
  submitButton.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitButton.querySelector('.correspondence__submit-text').textContent = originalText;
    submitButton.disabled = false;
    
    // Show success
    showToast('Thank you for subscribing to our correspondence', 'success');
    
    // Reset form
    form.reset();
    
    // Announce success
    A11y.announce('Successfully subscribed to the quarterly folio');
    
    // Dispatch custom event
    Utils.dispatchEvent('correspondenceSubscribe', formData);
    
    console.log('Correspondence subscription:', formData);
  }, CONFIG.API_DELAY);
}

/**
 * --------------------------------------------------------------------
 * SECTION 9: SCROLL & ANIMATION SYSTEM
 * --------------------------------------------------------------------
 */

function initScrollAnimations() {
  // Check if animations should be enabled
  if (!CONFIG.ANIMATIONS_ENABLED) {
    // Still initialize observers but without animation classes
    const animatedElements = document.querySelectorAll(
      '.essence-card, .alchemy-step, .manuscript-entry, .apparatus__item'
    );
    // Make elements immediately visible when reduced motion is on
    animatedElements.forEach(el => Utils.addClass(el, 'in-view'));
    return;
  }
  
  // Initialize Intersection Observer for scroll animations
  initIntersectionObserver();
  
  // Handle scroll events with debouncing
  window.addEventListener('scroll', Utils.debounce(handleScroll, CONFIG.DEBOUNCE_SCROLL));
  
  // Initial scroll check
  handleScroll();
}

function initIntersectionObserver() {
  // Create observer for elements that should animate when in view
  const observerOptions = {
    root: null,
    rootMargin: CONFIG.INTERSECTION_ROOT_MARGIN,
    threshold: CONFIG.INTERSECTION_THRESHOLD
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Utils.addClass(entry.target, 'in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll(
    '.essence-card, .alchemy-step, .manuscript-entry, .apparatus__item'
  );
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Store observer for cleanup
  DOM.intersectionObservers.push(observer);
}

function handleScroll() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  State.scrollY = scrollY;
  
  // Update header shadow
  updateHeaderShadow(scrollY);
  
  // Update back-to-top button
  updateBackToTop(scrollY);
  
  // Update active navigation link
  updateActiveNavLink(scrollY);
  
  // Parallax effects
  updateParallaxElements(scrollY);
}

function updateHeaderShadow(scrollY) {
  const showShadow = scrollY > 20;
  
  if (showShadow !== State.headerScrolled) {
    State.headerScrolled = showShadow;
    Utils.toggleClass(DOM.header, 'scrolled', showShadow);
  }
}

function updateBackToTop(scrollY) {
  if (!DOM.backToTop) return;
  
  const showButton = scrollY > 500;
  Utils.toggleClass(DOM.backToTop, 'visible', showButton);
}

function updateActiveNavLink(scrollY) {
  if (DOM.headerNavLinks.length === 0) return;
  
  // Find current section
  const sections = Array.from(DOM.headerNavLinks).map(link => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return null;
    
    const section = document.querySelector(href);
    if (!section) return null;
    
    const rect = section.getBoundingClientRect();
    return {
      link,
      section,
      top: rect.top + scrollY,
      bottom: rect.bottom + scrollY
    };
  }).filter(Boolean);
  
  // Find active section
  const buffer = 100; // Offset from top
  const currentSection = sections.find(section => 
    scrollY + buffer >= section.top && scrollY + buffer < section.bottom
  );
  
  // Update active state
  DOM.headerNavLinks.forEach(link => {
    const isActive = currentSection && link === currentSection.link;
    Utils.toggleClass(link, 'active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : null);
  });
}

function updateParallaxElements(scrollY) {
  // Gold leaf parallax
  const goldLeafs = document.querySelectorAll('.gold-leaf');
  goldLeafs.forEach((leaf, index) => {
    const speed = 0.2 + (index * 0.1);
    const yOffset = scrollY * speed;
    leaf.style.transform = `translateY(${yOffset}px)`;
  });
  
  // Hero vessel parallax
  const vesselContainer = document.querySelector('.hero__vessel-container');
  if (vesselContainer && Utils.isInViewport(vesselContainer)) {
    const speed = 0.1;
    const yOffset = scrollY * speed;
    vesselContainer.style.transform = `translateY(${yOffset}px)`;
  }
}

/**
 * --------------------------------------------------------------------
 * SECTION 10: BACK-TO-TOP & HEADER EFFECTS
 * --------------------------------------------------------------------
 */

function initBackToTop() {
  if (!DOM.backToTop) return;
  
  DOM.backToTop.addEventListener('click', () => {
    Utils.smoothScrollTo('#hero');
    
    // Announce for screen readers
    A11y.announce('Returned to top of page');
  });
}

function initHeaderEffects() {
  if (!DOM.header) return;
  
  // Add click handlers to header nav links for smooth scrolling
  DOM.headerNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        Utils.smoothScrollTo(href, 100); // Offset for fixed header
        
        // Update URL without page reload
        history.pushState({}, '', href);
        
        // Announce for screen readers
        const sectionName = link.querySelector('.header__nav-label')?.textContent || 'section';
        A11y.announce(`Navigated to ${sectionName}`);
      }
    });
  });
}

/**
 * --------------------------------------------------------------------
 * SECTION 11: TOAST NOTIFICATION SYSTEM
 * --------------------------------------------------------------------
 */

function initToastSystem() {
  if (!DOM.toast || !DOM.toastMessage) return;
  
  // Auto-hide toast after timeout
  DOM.toast.addEventListener('animationend', (e) => {
    if (e.animationName.includes('fadeOut')) {
      Utils.removeClass(DOM.toast, 'active');
    }
  });
}

function showToast(message, type = 'info') {
  if (!DOM.toast || !DOM.toastMessage) return;
  
  // Update message and type
  DOM.toastMessage.textContent = message;
  DOM.toast.className = `toast toast--${type}`;
  
  // Show toast
  Utils.addClass(DOM.toast, 'active');
  
  // Auto-hide after delay
  setTimeout(() => {
    Utils.removeClass(DOM.toast, 'active');
  }, 5000);
  
  // Announce to screen readers
  A11y.announce(message, 'assertive');
}

/**
 * --------------------------------------------------------------------
 * SECTION 12: INITIALIZATION & EVENT BINDING
 * --------------------------------------------------------------------
 */

function cacheDOM() {
  // Cache all frequently accessed DOM elements
  DOM.header = document.getElementById('header');
  DOM.mobileMenuToggle = document.getElementById('menuToggle');
  DOM.mobileNav = document.getElementById('mobileNav');
  DOM.headerNavLinks = document.querySelectorAll('.header__nav-link');
  
  DOM.cartButton = document.getElementById('cartButton');
  DOM.vialDrawer = document.getElementById('vialDrawer');
  DOM.vialClose = document.getElementById('vialClose');
  DOM.vialContent = document.getElementById('vialContent');
  DOM.vialTotal = document.querySelector('.vial-drawer__total-value');
  
  DOM.compendiumGrid = document.querySelector('.compendium__grid');
  DOM.filterButtons = Array.from(document.querySelectorAll('.compendium__filter'));
  DOM.sortSelect = document.querySelector('.compendium__sort-select');
  DOM.loadMoreButton = document.getElementById('loadMoreEssences');
  
  DOM.testimonialEntries = document.querySelector('.manuscript__entries');
  DOM.testimonialNavPrev = document.querySelector('.manuscript__nav-button:first-child');
  DOM.testimonialNavNext = document.querySelector('.manuscript__nav-button:last-child');
  DOM.testimonialPagination = document.querySelector('.manuscript__pagination');
  
  DOM.correspondenceForm = document.getElementById('correspondenceForm');
  
  DOM.backToTop = document.getElementById('backToTop');
  DOM.toast = document.getElementById('toast');
  DOM.toastMessage = document.getElementById('toastMessage');
}

function initEventListeners() {
  // Window events
  window.addEventListener('resize', Utils.debounce(handleResize, CONFIG.DEBOUNCE_RESIZE));
  
  // Prevent broken images from showing error
  document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
      e.target.style.display = 'none';
    }
  }, true);
}

function handleResize() {
  // Close mobile menu on desktop resize
  if (window.innerWidth >= 1024 && State.mobileMenuOpen) {
    toggleMobileMenu(false);
  }
  
  // Close cart drawer on mobile resize if it overlaps
  if (window.innerWidth < 640 && State.cartDrawerOpen) {
    toggleCartDrawer(false);
  }
}

function cleanup() {
  // Comprehensive cleanup on page unload
  window.addEventListener('beforeunload', () => {
    // Clean up intersection observers
    DOM.intersectionObservers.forEach(observer => {
      observer.disconnect();
    });
    
    // Clean up resize observers
    DOM.resizeObservers.forEach(observer => {
      observer.disconnect();
    });
    
    // Clean up focus trap if active
    if (State.focusTrapCleanup) {
      State.focusTrapCleanup();
      State.focusTrapCleanup = null;
    }
    
    // Remove event listeners
    reducedMotionQuery.removeEventListener('change', () => {});
  });
}

function init() {
  console.log('✨ Atelier Arôme - Initializing Alchemical Interactions');
  
  // Cache DOM elements
  cacheDOM();
  
  // Initialize all systems
  initEventListeners();
  initMobileNavigation();
  initCartSystem();
  initCompendium();
  initTestimonials();
  initCorrespondenceForm();
  initScrollAnimations();
  initBackToTop();
  initHeaderEffects();
  initToastSystem();
  
  // Set up cleanup
  cleanup();
  
  // Dispatch ready event
  Utils.dispatchEvent('ready');
  
  console.log('🎨 Atelier Arôme - Fully Illuminated');
}

/**
 * --------------------------------------------------------------------
 * ENTRY POINT
 * --------------------------------------------------------------------
 */

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Make Utils and State available globally for debugging (optional)
window.AtelierUtils = Utils;
window.AtelierState = State;
