/**
 * This is your sidebar configuration.
 * You can mix and match automatically generated and custom sections.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'intro',
        'installation',
        // dacă vrei să readuci paginile default:
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
        'tutorial-basics/deploy-your-site',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};
