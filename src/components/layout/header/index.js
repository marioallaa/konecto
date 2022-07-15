import { Logo } from '@/components/common/svgs'
import NextLink from 'next/link'

const navigation = [
  { name: 'Things', href: '#' },
  { name: 'News', href: '#' },
  { name: 'F.A.Q', href: '#' },
  { name: 'Contact', href: '#' },
]

const Header = () => {
  return (
    <header className="bg-transparent">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <NextLink href="/">
              <a>
                <span className="sr-only">Konecto</span>
                <Logo />
              </a>
            </NextLink>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <NextLink href="/">
              <a className="btn-dark">Create account</a>
            </NextLink>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
