import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

export default function Header({ settings }) {
  const { logo, nav_links, button_label, button_link, header } = settings || {}
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {logo && (
            <PrismicNextImage field={logo} className="h-8 w-auto" />
          )}
          {header ? (
            <PrismicRichText field={header} />
          ) : (
            <h1 className="text-xl font-bold">Dashboard</h1>
          )}
        </div>
        <nav className="flex-1 flex justify-center gap-4">
          {nav_links?.map((item, i) => (
            <PrismicNextLink key={i} field={item.link} className="hover:underline">
              {item.label}
            </PrismicNextLink>
          ))}
        </nav>
        {button_link && (
          <PrismicNextLink
            field={button_link}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {button_label}
          </PrismicNextLink>
        )}
      </div>
    </header>
  )
}
