import React, { useState, useEffect } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Notification from "./Notification";

function Asonav({ cartItems, setCartItems, addToCart }) {  // addToCart qo'shildi
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [notification, setNotification] = useState(null);
    const [languageMenu, setLanguageMenu] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
    };

    // Til o'zgartirish
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguageMenu(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            showNotification(t('emptyCartError'), 'error');
            return;
        }
        
        showNotification(t('orderSuccess'), 'success');
        setCartItems([]);
        setCartOpen(false);
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const removeFromCart = (id) => {
        const product = cartItems.find(item => item.id === id);
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        showNotification(`${product.name} ${t('removedFromCart')}`, 'cart');
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <div className="aso-nav">
            {notification && (
                <Notification 
                    message={notification.message} 
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}

            <article className="bur-log">
                <button className={`burger-btn ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {/* Burger SVG - TO'G'RI */}
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.75" y1="0.75" x2="25.25" y2="0.75" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="0.75" y1="9.75" x2="18.1591" y2="9.75" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="0.75" y1="18.75" x2="12.25" y2="18.75" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <button className="logo-btn" onClick={() => navigate('/')}>
                    {/* Logo SVG - TO'G'RI */}
                    <svg width="138" height="28" viewBox="0 0 138 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4121 0.118268L10.7761 14.9757L5.14006 0.118268H0V21.0074H3.66717V5.41077L8.92747 19.189H12.6247L17.885 5.41077V21.0074H21.5522V0.118268H16.4121Z" fill="#008ECC" />
                        <path d="M32.6589 21.3031C35.1838 21.3031 37.1827 20.4308 38.821 18.642L36.296 16.4688C35.244 17.622 34.0416 18.0359 32.689 18.0359C30.3293 18.0359 29.2472 16.735 28.9316 14.7983H39.2418C39.3169 14.5913 39.377 13.9852 39.377 13.3791C39.377 10.0824 37.6787 5.92819 32.4184 5.92819C27.3385 5.92819 25.054 9.83105 25.054 13.6748C25.054 17.6515 27.4888 21.3031 32.6589 21.3031ZM28.9316 12.1964C29.2773 10.3485 30.2241 8.95882 32.3884 8.95882C33.9815 8.95882 35.274 9.74234 35.6497 11.265C35.7399 11.5607 35.77 11.8712 35.77 12.1964H28.9316Z" fill="#008ECC" />
                        <path d="M49.3566 18.7012C46.6813 18.3759 44.8327 18.3464 44.8327 17.1341C44.8327 16.7941 44.968 16.5428 45.2686 16.3506C46.1252 16.7202 47.0871 16.9271 48.1242 16.9271C51.4156 16.9271 54.2261 14.8279 54.2261 11.5312C54.2261 10.5702 54.0007 9.69799 53.5798 8.95882L55.7591 7.22914L53.8504 4.9377L51.5509 6.87434C50.5439 6.26822 49.3115 5.92819 48.0039 5.92819C44.6824 5.92819 41.8419 8.14572 41.8419 11.3537C41.8419 12.6547 42.3078 13.8226 43.0893 14.754C42.2026 15.5227 41.6916 16.4688 41.6916 17.7698C41.6916 19.189 42.2927 20.076 43.1645 20.6526L41.421 22.1014C41.391 22.2492 41.3609 22.397 41.3609 22.7371C41.3609 25.7677 43.8257 28 48.56 28C52.2873 28 55.203 26.4034 55.203 23.0623C55.203 19.6769 52.1971 19.0707 49.3566 18.7012ZM48.1242 8.72228C49.7323 8.72228 50.589 9.83105 50.589 11.3833C50.589 12.8912 49.7624 13.9852 48.1242 13.9852C46.501 13.9852 45.6293 12.8912 45.6293 11.3833C45.6293 9.83105 46.531 8.72228 48.1242 8.72228ZM48.5299 25.2207C46.7114 25.2207 45.1483 24.7033 44.7125 23.2249L44.6223 22.8258L45.4339 21.4952C46.3507 21.6727 47.2825 21.7466 48.064 21.8205C50.5589 22.0718 51.7312 22.3379 51.7312 23.4615C51.7312 24.6441 50.4687 25.2207 48.5299 25.2207Z" fill="#008ECC" />
                        <path d="M63.6646 5.92819C60.7038 5.92819 58.795 7.22914 57.3522 9.16579L60.1627 11.1616C60.809 10.0824 61.9662 9.07709 63.6946 9.07709C66.0843 9.07709 66.7456 10.0084 66.8207 12.1964H62.7478C59.3812 12.1964 56.7661 13.2608 56.7661 16.4688C56.7661 19.5586 59.1407 21.3031 62.2217 21.3031C63.9351 21.3031 65.934 20.5639 66.9109 19.0412L67.1364 21.0074H70.1573V12.0486C70.1573 8.44139 67.7526 5.92819 63.6646 5.92819ZM62.9582 18.2577C61.32 18.2577 60.5234 17.5628 60.5234 16.5871C60.5234 15.6558 61.2899 14.7983 62.9582 14.7983H66.8358V14.9166C66.6103 16.661 65.2126 18.2577 62.9582 18.2577Z" fill="#008ECC" />
                        <path d="M91.0481 0.118268L85.4121 14.9757L79.7761 0.118268H74.636V21.0074H78.3032V5.41077L83.5635 19.189H87.2607L92.521 5.41077V21.0074H96.1882V0.118268H91.0481Z" fill="#008ECC" />
                        <path d="M106.589 5.92819C103.628 5.92819 101.719 7.22914 100.276 9.16579L103.087 11.1616C103.733 10.0824 104.89 9.07709 106.619 9.07709C109.008 9.07709 109.67 10.0084 109.745 12.1964H105.672C102.305 12.1964 99.69 13.2608 99.69 16.4688C99.69 19.5586 102.065 21.3031 105.146 21.3031C106.859 21.3031 108.858 20.5639 109.835 19.0412L110.06 21.0074H113.081V12.0486C113.081 8.44139 110.677 5.92819 106.589 5.92819ZM105.882 18.2577C104.244 18.2577 103.447 17.5628 103.447 16.5871C103.447 15.6558 104.214 14.7983 105.882 14.7983H109.76V14.9166C109.534 16.661 108.137 18.2577 105.882 18.2577Z" fill="#008ECC" />
                        <path d="M117.004 21.0074H120.551V14.7687C120.551 11.0137 122.339 9.44667 124.053 9.44667C124.639 9.44667 125.195 9.62408 125.691 9.94931L127.359 6.99261C126.638 6.26822 125.601 5.92819 124.609 5.92819C122.925 5.92819 121.227 6.93347 120.581 8.72228V6.23865H117.004V21.0074Z" fill="#008ECC" />
                        <path d="M135.265 21.3031C136.362 21.3031 137.444 21.0665 138 20.8596V17.5924C137.504 17.8289 136.677 18.1246 135.911 18.1246C134.949 18.1246 134.243 17.7107 134.243 16.2914V9.25449H138V6.23865H134.243V0L130.636 2.57233V6.23865H128.156V9.25449H130.575V16.9271C130.575 19.6177 132.334 21.3031 135.265 21.3031Z" fill="#008ECC" />
                    </svg>
                </button>
                <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

                <div className={`sidebar-menu ${menuOpen ? "active" : ""}`}>
                    <button className="close-btn" onClick={() => setMenuOpen(false)}>
                        &times;
                    </button>
                    <ul className="burger-oyn">
                        <li onClick={() => { navigate('/'); setMenuOpen(false); }}>{t('home')}</li>
                        <li onClick={() => { navigate('/products'); setMenuOpen(false); }}>{t('products')}</li>
                        <li onClick={() => { navigate('/about'); setMenuOpen(false); }}>{t('about')}</li>
                        <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>{t('contact')}</li>
                        <li onClick={() => { navigate('/blog'); setMenuOpen(false); }}>{t('blog')}</li>
                        <li onClick={() => { navigate('/support'); setMenuOpen(false); }}>{t('support')}</li>
                    </ul>
                </div>
            </article>
            
            <article className="input">
                <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%' }}>
                    <button className="loop-btn" type="submit">
                        {/* Search SVG - TO'G'RI */}
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.82494 15.5664C12.5481 15.5664 15.5664 12.5481 15.5664 8.82494C15.5664 5.10176 12.5481 2.08353 8.82494 2.08353C5.10176 2.08353 2.08353 5.10176 2.08353 8.82494C2.08353 12.5481 5.10176 15.5664 8.82494 15.5664Z" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.5137 13.8639L16.1568 16.5" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <input 
                        type="text" 
                        placeholder={t('search')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                        style={{ flex: 1, padding: '10px' }}
                    />
                </form>
            </article>
            
            <article className="lan-up-page">
                <button className="dark-toggle darck-late" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "🌞" : "🌙"}
                </button>
                
                {/* Til tanlash tugmasi */}
                <div style={{ position: 'relative' }}>
                    <button 
                        className="lang"
                        onClick={() => setLanguageMenu(!languageMenu)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        {i18n.language === 'uz' ? '🇺🇿 Uz' : 
                         i18n.language === 'ru' ? '🇷🇺 Ru' : '🇬🇧 En'}
                    </button>
                    
                    {languageMenu && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            backgroundColor: 'white',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            borderRadius: '5px',
                            zIndex: 1000
                        }}>
                            <button
                                onClick={() => changeLanguage('en')}
                                style={{
                                    padding: '10px 20px',
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    width: '100%',
                                    textAlign: 'left'
                                }}
                            >
                                🇬🇧 English
                            </button>
                            <button
                                onClick={() => changeLanguage('uz')}
                                style={{
                                    padding: '10px 20px',
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    width: '100%',
                                    textAlign: 'left'
                                }}
                            >
                                🇺🇿 O'zbek
                            </button>
                            <button
                                onClick={() => changeLanguage('ru')}
                                style={{
                                    padding: '10px 20px',
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    width: '100%',
                                    textAlign: 'left'
                                }}
                            >
                                🇷🇺 Русский
                            </button>
                        </div>
                    )}
                </div>
                
                <Show when="signed-out">
                    <button className="su-in">
                        {/* User SVG - TO'G'RI */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="8" r="4.75" stroke="#008ECC" strokeWidth="1.5" />
                            <path d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <SignInButton /> / <SignUpButton />
                    </button>
                </Show>
                <Show when="signed-in">
                    <UserButton />
                </Show>
                
                <button className="savat" onClick={() => setCartOpen(!cartOpen)}>
                    {/* Cart SVG - TO'G'RI */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.42226 19.8203C7.84426 19.8203 8.18726 20.1633 8.18726 20.5853C8.18726 21.0073 7.84426 21.3493 7.42226 21.3493C7.00026 21.3493 6.65826 21.0073 6.65826 20.5853C6.65826 20.1633 7.00026 19.8203 7.42226 19.8203Z" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.1254 10.795H16.8984" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{t('cart')} {getTotalItems() > 0 && `(${getTotalItems()})`}</p>
                </button>
            </article>

            {cartOpen && (
                <div className="cart-modal">
                    <div className="cart-modal-content">
                        <div className="cart-header">
                            <h3>{t('cart')} ({getTotalItems()} {t('items')})</h3>
                            <button className="close-cart" onClick={() => setCartOpen(false)}>×</button>
                        </div>
                        
                        {cartItems.length === 0 ? (
                            <div className="cart-empty">
                                <p>{t('emptyCart')}</p>
                            </div>
                        ) : (
                            <>
                                <div className="cart-items">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="cart-item">
                                            <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                            <div className="cart-item-info">
                                                <h4>{item.name}</h4>
                                                <p>₹{item.price}</p>
                                                <div className="cart-item-controls">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                                        {t('remove')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="cart-footer">
                                    <div className="cart-total">
                                        <span>{t('total')}:</span>
                                        <span>₹{getTotalPrice()}</span>
                                    </div>
                                    <button className="checkout-btn" onClick={handleCheckout}>
                                        {t('checkout')}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Asonav;