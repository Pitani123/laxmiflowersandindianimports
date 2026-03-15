"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Spinner } from "@/components/ui/spinner"
import type { Product } from "@/lib/types"
import type { User } from "@supabase/supabase-js"
import { 
  LogOut, 
  Plus, 
  Pencil, 
  Trash2, 
  Package, 
  DollarSign, 
  ShoppingBag,
  Home,
  AlertCircle
} from "lucide-react"

const categories = [
  { value: "fresh-flowers", label: "Fresh Flowers" },
  { value: "garlands", label: "Garlands" },
  { value: "bouquets", label: "Bouquets" },
  { value: "gift-items", label: "Gift Items" },
  { value: "silver-items", label: "Silver Items" },
  { value: "brass-items", label: "Brass Items" },
  { value: "jewellery", label: "Jewellery" },
  { value: "traditional-dresses", label: "Traditional Dresses" },
  { value: "snacks", label: "Snacks" },
  { value: "wedding-decorations", label: "Wedding Decorations" },
  { value: "rentals", label: "Rentals" },
]

interface AdminDashboardProps {
  user: User
  initialProducts: Product[]
}

export function AdminDashboard({ user, initialProducts }: AdminDashboardProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  const handleAddProduct = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const newProduct = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price_in_cents: Math.round(parseFloat(formData.get("price") as string) * 100),
        image: formData.get("image") as string || "/placeholder.svg",
        category: formData.get("category") as string,
      }

      const { data, error } = await supabase
        .from("products")
        .insert(newProduct)
        .select()
        .single()

      if (error) throw error

      setProducts([data, ...products])
      setIsAddDialogOpen(false)
    } catch (err: any) {
      setError(err.message || "Failed to add product")
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateProduct = async (formData: FormData) => {
    if (!editingProduct) return
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const updatedProduct = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price_in_cents: Math.round(parseFloat(formData.get("price") as string) * 100),
        image: formData.get("image") as string,
        category: formData.get("category") as string,
      }

      const { error } = await supabase
        .from("products")
        .update(updatedProduct)
        .eq("id", editingProduct.id)

      if (error) throw error

      setProducts(products.map(p => 
        p.id === editingProduct.id ? { ...p, ...updatedProduct } : p
      ))
      setEditingProduct(null)
    } catch (err: any) {
      setError(err.message || "Failed to update product")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return
    setIsLoading(true)

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id)

      if (error) throw error

      setProducts(products.filter(p => p.id !== id))
    } catch (err: any) {
      setError(err.message || "Failed to delete product")
    } finally {
      setIsLoading(false)
    }
  }

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100)
  }

  const totalValue = products.reduce((sum, p) => sum + p.price_in_cents, 0)

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Laxmi Flowers Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-serif text-lg font-bold text-primary">Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Store
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">Product Management</h1>
            <p className="mt-1 text-muted-foreground">Add, edit, and manage your products</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <ProductForm 
                onSubmit={handleAddProduct} 
                isLoading={isLoading}
                error={error}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(products.map(p => p.category)).size}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Price</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {products.length > 0 
                  ? formatPrice(totalValue / products.length) 
                  : "$0.00"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Products ({products.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="relative h-12 w-12 overflow-hidden rounded-md">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                          {categories.find(c => c.value === product.category)?.label || product.category}
                        </span>
                      </TableCell>
                      <TableCell>{formatPrice(product.price_in_cents)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog 
                            open={editingProduct?.id === product.id} 
                            onOpenChange={(open) => !open && setEditingProduct(null)}
                          >
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setEditingProduct(product)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Product</DialogTitle>
                              </DialogHeader>
                              <ProductForm 
                                product={editingProduct || undefined}
                                onSubmit={handleUpdateProduct}
                                isLoading={isLoading}
                                error={error}
                              />
                            </DialogContent>
                          </Dialog>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                            disabled={isLoading}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

interface ProductFormProps {
  product?: Product
  onSubmit: (formData: FormData) => Promise<void>
  isLoading: boolean
  error: string | null
}

function ProductForm({ product, onSubmit, isLoading, error }: ProductFormProps) {
  return (
    <form action={onSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          name="name"
          defaultValue={product?.name}
          placeholder="Fresh Jasmine Flowers"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={product?.description || ""}
          placeholder="Describe your product..."
          rows={3}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price">Price ($)</Label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          min="0"
          defaultValue={product ? (product.price_in_cents / 100).toFixed(2) : ""}
          placeholder="9.99"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Select name="category" defaultValue={product?.category || ""} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          name="image"
          defaultValue={product?.image || ""}
          placeholder="/images/products/your-image.jpg"
        />
      </div>
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Saving...
          </>
        ) : product ? (
          "Update Product"
        ) : (
          "Add Product"
        )}
      </Button>
    </form>
  )
}
