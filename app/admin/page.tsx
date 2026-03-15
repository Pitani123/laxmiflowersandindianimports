import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminDashboard } from "@/components/admin/dashboard"
import { getProducts } from "@/lib/products"

export default async function AdminPage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect("/admin/login")
  }

  const products = await getProducts()

  return <AdminDashboard user={user} initialProducts={products} />
}
