
import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    cartTotal, 
    updateCartItemQuantity, 
    removeFromCart 
  } = useCart();

  // Find the associated product for each cart item
  const cartItemsWithProduct = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, product };
  });

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl animate-slide-in-right flex flex-col">
        {/* Cart Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-medium">Your Cart ({cartItems.length})</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-auto p-4">
          {cartItemsWithProduct.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button onClick={closeCart}>Continue Shopping</Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItemsWithProduct.map((item) => {
                if (!item.product) return null;
                
                const product = item.product;
                const itemPrice = product.salePrice || product.price;
                const itemTotal = itemPrice * item.quantity;
                
                return (
                  <li key={`${item.productId}-${item.color}-${item.size}`} className="flex border-b pb-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-20 h-24 object-cover rounded"
                    />
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{product.name}</h4>
                          <p className="text-sm text-gray-500">
                            {item.color}, Size: {item.size}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.productId)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center border rounded">
                          <button 
                            onClick={() => updateCartItemQuantity(item.productId, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:text-gray-700"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartItemQuantity(item.productId, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:text-gray-700"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-medium">{formatPrice(itemTotal)}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <Link to="/checkout" onClick={closeCart}>
                  Checkout
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
