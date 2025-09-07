import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ShoppingCart, 
  Filter,
  Star,
  Heart,
  Eye,
  Plus,
  Minus
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'toys', label: 'Toys & Games' },
    { value: 'books', label: 'Books' },
    { value: 'feeding', label: 'Feeding' },
    { value: 'safety', label: 'Safety' },
    { value: 'clothing', label: 'Clothing' }
  ];

  const ageRanges = [
    { value: 'all', label: 'All Ages' },
    { value: '0-6months', label: '0-6 months' },
    { value: '6-12months', label: '6-12 months' },
    { value: '1-2years', label: '1-2 years' },
    { value: '2-3years', label: '2-3 years' },
    { value: '3-5years', label: '3-5 years' }
  ];

  const products = [
    {
      id: '1',
      name: 'Montessori Wooden Stacking Rings',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 127,
      category: 'toys',
      ageRange: '6-12months',
      image: '',
      description: 'Natural wooden stacking toy that helps develop hand-eye coordination',
      inStock: true,
      recommended: true
    },
    {
      id: '2',
      name: 'Baby-Safe Silicone Feeding Set',
      price: 18.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 203,
      category: 'feeding',
      ageRange: '6-12months',
      image: '',
      description: 'BPA-free silicone plates and utensils perfect for self-feeding',
      inStock: true,
      recommended: false
    },
    {
      id: '3',
      name: 'First Words Picture Book',
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.7,
      reviews: 89,
      category: 'books',
      ageRange: '1-2years',
      image: '',
      description: 'Interactive board book with vibrant illustrations for early language development',
      inStock: true,
      recommended: true
    },
    {
      id: '4',
      name: 'Corner Safety Guards (8-Pack)',
      price: 9.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      category: 'safety',
      ageRange: 'all',
      image: '',
      description: 'Soft foam corner protectors to keep little ones safe from sharp edges',
      inStock: false,
      recommended: false
    },
    {
      id: '5',
      name: 'Organic Cotton Pajama Set',
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.8,
      reviews: 94,
      category: 'clothing',
      ageRange: '2-3years',
      image: '',
      description: '100% organic cotton sleepwear with fun animal prints',
      inStock: true,
      recommended: false
    },
    {
      id: '6',
      name: 'Learning Shapes Puzzle',
      price: 16.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 178,
      category: 'toys',
      ageRange: '1-2years',
      image: '',
      description: 'Wooden shape sorter that teaches colors, shapes, and problem-solving',
      inStock: true,
      recommended: true
    }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Smart Store</h1>
            <p className="text-muted-foreground">Age-appropriate products curated for your child's development</p>
          </div>
          
          <Button className="relative">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart ({getTotalItems()})
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedAge} onValueChange={setSelectedAge}>
              <SelectTrigger>
                <SelectValue placeholder="Age Range" />
              </SelectTrigger>
              <SelectContent>
                {ageRanges.map((age) => (
                  <SelectItem key={age.value} value={age.value}>
                    {age.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-elegant transition-smooth">
              <CardHeader className="relative">
                {product.recommended && (
                  <Badge className="absolute top-2 left-2 bg-gradient-primary text-white">
                    Recommended
                  </Badge>
                )}
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🧸</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                    <CardDescription className="mt-1">{product.description}</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {ageRanges.find(a => a.value === product.ageRange)?.label}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {cart[product.id] ? (
                      <div className="flex items-center space-x-2 flex-1">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-3 py-1 bg-muted rounded text-sm font-medium">
                          {cart[product.id]}
                        </span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addToCart(product.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        className="flex-1"
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? (
                          <>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </>
                        ) : (
                          'Out of Stock'
                        )}
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personalized Recommendations */}
        <Card className="mt-8 bg-gradient-subtle">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Personalized for Emma (2 years 3 months)
            </CardTitle>
            <CardDescription>
              Based on your child's age and development stage, we recommend these products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {products
                .filter(p => p.recommended)
                .slice(0, 3)
                .map((product) => (
                  <div key={product.id} className="p-4 bg-background rounded-lg border">
                    <h4 className="font-medium mb-2">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">${product.price}</span>
                      <Button size="sm" onClick={() => addToCart(product.id)}>
                        Add
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Store;