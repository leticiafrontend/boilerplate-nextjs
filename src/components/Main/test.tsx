import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render page', () => {
    const { container } = render(<Main />)

    expect(screen.getByText('Next JS - Boilerplate')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#1f1635ff'
    })
  })
})
