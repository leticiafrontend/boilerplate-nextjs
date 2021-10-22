import { Main } from '../src/components/Main'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
} as Meta

const Template: Story = ({ title, description }) => (
  <Main title={title} description={description} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Next JS - Boilerplate',
  description:
    'TypeScript, Styled Components, Storybook, Eslint, Prettier, Husky, React Testing Library, Jest and Jest Styled Components!'
}
