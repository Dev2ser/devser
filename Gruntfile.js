module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        metadata: '',
        regExp: false,
      },
    },
    changelog: {
      sample: {
        options: {
          fileHeader: '# Changelog',
          dest: 'CHANGELOG',
          template: '{{date}}\n\n{{> features}}{{> fixes}}',
          partials: {
            features: '{{#each features}}{{> feature}}{{/each}}',
            feature: '[NEW] {{this}}\n',
            fixes: '{{#each fixes}}{{> fix}}{{/each}}',
            fix: '[FIX] {{this}}\n',
          },
        },
      },
    },
  });

  // Load the plugin that provides the "bump" task.
  grunt.loadNpmTasks('grunt-bump');
  // Changelog Generator
  grunt.loadNpmTasks('grunt-changelog');

  // Default task(s).
  grunt.registerTask('default', ['bump, changelog']);
};
// dest: 'release-notes/<%= package.version %>.txt',
