import Link from 'next/link'
import React from 'react'

const menuItems = [
    {
        slug: '/connections',
        name: "Connections"
    },
    {
        slug: '/category-trees',
        name: "Category Trees"
    },
    {
        slug: '/product-catalogues',
        name: "Product Catalogues"
    }
]

const Sidebar = () => {
  return (
    <aside className="w-[300px] fixed top-[80px] left-0 h-full border-r">
        <div className="wrapper px-2 py-4">
            <ul>
                {
                    menuItems.map((item: any, index: number) => (
                        <li key={index} className="p-2 hover:text-red-600"><Link href={item.slug}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar