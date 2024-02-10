/**
 * Add settings for the module.
 */
export default async () => {
  return [{
    id: 'override-flags',
    title: 'Feature Flags',
    default: '',
    description: 'Comma seperated list of <a href="https://github.com/MHCommunity/mousehunt-improved/wiki/List-of-Feature-Flags" target="_blank">feature flags</a> to enable.',
    settings: {
      type: 'input',
    },
  }];
};
