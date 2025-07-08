import { PrismicRichText } from '@prismicio/react'

export default function Header({ settings }) {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto">
        {settings?.header ? (
          <PrismicRichText field={settings.header} />
        ) : (
          <h1 className="text-xl font-bold">Dashboard</h1>
        )}
      </div>
    </header>
  )
}
