import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();

    // Get cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total quantity in cart
    const calculateTotalQuantity = () => {
        return cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
    };

    // Plant data
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2a0e?auto=format&fit=crop&w=500&q=80",
                    description: "A beautiful indoor plant that helps purify the air.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
                    description: "Easy to grow and perfect for indoor spaces.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
                    description: "A lovely flowering plant that improves indoor air quality.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=500&q=80",
                    description: "A lush green plant that looks great in hanging baskets.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
                    description: "A stylish indoor plant with large glossy leaves.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8f8f5f2?auto=format&fit=crop&w=500&q=80",
                    description: "A useful succulent known for its soothing properties.",
                    cost: "$14"
                }
            ]
        },

        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
                    description: "A fragrant plant with beautiful purple flowers.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80",
                    description: "A fragrant flowering plant with beautiful white flowers.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80",
                    description: "An aromatic herb commonly used for cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148b1b8?auto=format&fit=crop&w=500&q=80",
                    description: "A refreshing herb with a cool and pleasant aroma.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=500&q=80",
                    description: "A fragrant herb with a pleasant lemon scent.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=500&q=80",
                    description: "A beautiful flowering plant with a sweet fragrance.",
                    cost: "$22"
                }
            ]
        },

        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
                    description: "A useful herb that can help repel some insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=500&q=80",
                    description: "A colorful flower known for helping repel garden pests.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "https://images.unsplash.com/photo-1597055181300-7a6c5e4d0f1c?auto=format&fit=crop&w=500&q=80",
                    description: "Beautiful flowering plants that can help keep insects away.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80",
                    description: "An aromatic herb useful in cooking and gardening.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
                    description: "A fragrant plant that is known to repel some insects.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=500&q=80",
                    description: "An aromatic plant that can help repel certain insects.",
                    cost: "$13"
                }
            ]
        },

        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8f8f5f2?auto=format&fit=crop&w=500&q=80",
                    description: "A popular medicinal succulent used for skin care.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://images.unsplash.com/photo-1603436326446-8e1c0c5c3b76?auto=format&fit=crop&w=500&q=80",
                    description: "A flowering plant traditionally used as a medicinal herb.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148b1b8?auto=format&fit=crop&w=500&q=80",
                    description: "A refreshing medicinal herb with a strong minty aroma.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=500&q=80",
                    description: "A fragrant herb traditionally used for relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=500&q=80",
                    description: "A flowering herb commonly used to make calming tea.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80",
                    description: "A bright flowering plant traditionally used in skin care.",
                    cost: "$12"
                }
            ]
        },

        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691144-7e710d3f2e45?auto=format&fit=crop&w=500&q=80",
                    description: "A hardy indoor plant that requires very little care.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
                    description: "An easy-care plant that grows well indoors.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2a0e?auto=format&fit=crop&w=500&q=80",
                    description: "A very hardy plant that can survive low-light conditions.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80",
                    description: "A durable indoor plant that needs minimal maintenance.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
                    description: "Small attractive plants that need little watering.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80",
                    description: "An attractive and easy-care indoor plant.",
                    cost: "$22"
                }
            ]
        }
    ];

    // Add plant to cart
    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    // Check whether product is already in cart
    const isProductInCart = (productName) => {
        return cartItems.some((item) => item.name === productName);
    };

    // Home button
    const handleHomeClick = (e) => {
        e.preventDefault();

        if (onHomeClick) {
            onHomeClick();
        }
    };

    // Plants button
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    // Cart button
    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    // Continue shopping
    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>

            {/* NAVBAR */}
            <div className="navbar">
                <div className="tag">
                    <div className="luxury">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
                            alt="Paradise Nursery Logo"
                            style={{
                                width: '50px',
                                height: '50px',
                                marginRight: '10px'
                            }}
                        />

                        <a
                            href="/"
                            onClick={handleHomeClick}
                            style={{ textDecoration: 'none' }}
                        >
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>
                                    Paradise Nursery
                                </h3>

                                <i style={{ color: 'white' }}>
                                    Where Green Meets Serenity
                                </i>
                            </div>
                        </a>

                    </div>
                </div>

                {/* NAVIGATION LINKS */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '40px'
                    }}
                >

                    {/* HOME */}
                    <div>
                        <a
                            href="/"
                            onClick={handleHomeClick}
                            style={{
                                color: 'white',
                                fontSize: '20px',
                                textDecoration: 'none'
                            }}
                        >
                            Home
                        </a>
                    </div>

                    {/* PLANTS */}
                    <div>
                        <a
                            href="#plants"
                            onClick={handlePlantsClick}
                            style={{
                                color: 'white',
                                fontSize: '20px',
                                textDecoration: 'none'
                            }}
                        >
                            Plants
                        </a>
                    </div>

                    {/* CART */}
                    <div>
                        <a
                            href="#cart"
                            onClick={handleCartClick}
                            style={{
                                color: 'white',
                                fontSize: '20px',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            🛒 Cart
                            <span
                                style={{
                                    backgroundColor: 'white',
                                    color: '#4CAF50',
                                    borderRadius: '50%',
                                    minWidth: '25px',
                                    height: '25px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}
                            >
                                {calculateTotalQuantity()}
                            </span>
                        </a>
                    </div>

                </div>
            </div>

            {/* CART PAGE */}
            {showCart ? (

                <CartItem
                    onContinueShopping={handleContinueShopping}
                />

            ) : (

                /* PLANTS PAGE */
                <div className="product-grid">

                    {plantsArray.map((category) => (

                        <div
                            key={category.category}
                            className="category-section"
                            id="plants"
                        >

                            <h2 className="category-title">
                                {category.category}
                            </h2>

                            <div className="plants-container">

                                {category.plants.map((product) => (

                                    <div
                                        className="plant-card"
                                        key={product.name}
                                    >

                                        <img
                                            className="plant-image"
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <div className="plant-details">

                                            <h3>
                                                {product.name}
                                            </h3>

                                            <p>
                                                {product.description}
                                            </p>

                                            <p className="plant-cost">
                                                {product.cost}
                                            </p>

                                            <button
                                                className="add-to-cart-button"
                                                onClick={() =>
                                                    handleAddToCart(product)
                                                }
                                                disabled={isProductInCart(
                                                    product.name
                                                )}
                                            >
                                                {isProductInCart(
                                                    product.name
                                                )
                                                    ? 'Added to Cart'
                                                    : 'Add to Cart'}
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default ProductList;
