import { PrismicRichText } from '@prismicio/react'

export default function Footer({ settings }) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 px-6 mt-auto">
      {settings?.footer ? (
        <PrismicRichText field={settings.footer} />
      ) : (
        <p>&copy; {year} Dashboard</p>
      )}
    </footer>
  )
}
