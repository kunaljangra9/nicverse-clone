'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Moon, Sun, Menu, X, Home, FolderOpen, User, Mail } from 'lucide-react'

export function Header() {
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Toggle dark class on document
    document.documentElement.classList.toggle('dark')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { name: 'Home', href: '/', isActive: true, icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/911983621/1117858943.png"
                alt="Nicverse Logo"
                className="w-8 h-8"
              />
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Nicverse
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 font-medium relative group transition-colors ${
                      item.isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg z-50 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 font-medium transition-colors ${
                      item.isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
