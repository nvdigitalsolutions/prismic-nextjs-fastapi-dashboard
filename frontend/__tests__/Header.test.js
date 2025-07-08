import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

jest.mock('@prismicio/next', () => ({
  PrismicNextImage: ({ children, ...props }) => <img {...props} />,
  PrismicNextLink: ({ children, ...props }) => <a {...props}>{children}</a>,
}))

jest.mock('@prismicio/react', () => ({
  PrismicRichText: ({ field }) => <div>{field && field[0]?.text}</div>,
}))

describe('Header component', () => {
  it('displays default title when no header is provided', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()
  })

  it('renders provided header text', () => {
    const settings = { header: [{ type: 'heading1', text: 'Custom Header' }] }
    render(<Header settings={settings} />)
    expect(screen.getByText('Custom Header')).toBeInTheDocument()
  })
})
