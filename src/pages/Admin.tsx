
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader, Upload, Save, Package, Trash2 } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple admin check - in a real app, this should be done securely with proper authentication
    if (username === 'admin' && password === 'admin123') {
      setTimeout(() => {
        setIsLoading(false);
        navigate('/admin/dashboard');
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError('Invalid username or password');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-2xl font-montserrat font-bold text-charcoal mb-6 text-center">
              Admin Login
            </h1>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const AdminDashboard = () => {
  // Mock product data
  const [products, setProducts] = useState([
    { id: '1', name: 'Commercial Oven', category: 'cooking', price: 2499.99, image: 'https://images.unsplash.com/photo-1556910585-09baa3a3a8a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
    { id: '2', name: 'Professional Mixer', category: 'preparation', price: 899.99, image: 'https://images.unsplash.com/photo-1620811449164-c41e0789ef30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80' },
    { id: '3', name: 'Industrial Refrigerator', category: 'refrigeration', price: 3199.99, image: 'https://images.unsplash.com/photo-1601599916490-d6fc6c5c7288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80' },
  ]);

  // Add new product state
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: ''
  });

  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.image) {
      alert('Please fill in all fields');
      return;
    }

    // In a real app, we would upload the image and send data to the backend
    setIsUploading(true);
    
    setTimeout(() => {
      // Add new product
      const newId = (products.length + 1).toString();
      setProducts([
        ...products,
        {
          id: newId,
          name: newProduct.name,
          category: newProduct.category,
          price: parseFloat(newProduct.price),
          image: newProduct.image
        }
      ]);
      
      // Reset form
      setNewProduct({
        name: '',
        category: '',
        price: '',
        image: ''
      });
      
      setIsUploading(false);
    }, 1500);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-montserrat font-bold text-charcoal">
              Admin Dashboard
            </h1>
            <Button onClick={handleLogout} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Add Product Form */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-montserrat font-bold text-charcoal mb-6 flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Add New Product
                </h2>
                
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      name="category"
                      value={newProduct.category}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="cooking">Cooking Equipment</option>
                      <option value="preparation">Food Preparation</option>
                      <option value="refrigeration">Refrigeration</option>
                      <option value="dishwashing">Dishwashing</option>
                      <option value="workstation">Workstations</option>
                      <option value="specialty">Specialty Equipment</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="price">Price (USD)</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="image"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                        placeholder="Enter image URL or upload"
                        required
                        className="flex-grow"
                      />
                      <Button type="button" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Upload size={16} />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Note: For demo purposes, paste a URL. In a real app, you would upload files.
                    </p>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isUploading}>
                    {isUploading ? (
                      <>
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                        Adding Product...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Add Product
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Product List */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-montserrat font-bold text-charcoal mb-6">
                  Manage Products
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={product.image}
                                  alt={product.name}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {product.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              ${product.price.toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-900 hover:bg-red-50"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {products.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No products available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Admin = () => {
  // This component will render either the login page or dashboard based on the route
  return <AdminLogin />;
};

export default Admin;
export { AdminLogin, AdminDashboard };
