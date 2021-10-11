import HelloWorld from './HelloWorld.vue';
import { generateHierarchy } from 'storybook/libs/generateHierarchy'

export default {
  title: generateHierarchy(import.meta.url),
  component: HelloWorld,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return {};
  },
  // Then, those values can be accessed directly in the template
  template: '<HelloWorld />',
});

export const Default = Template.bind({});
Default.args = {};

