module.exports = {
  dependency: {
    platforms: {
      windows: {
        sourceDir: 'windows',
        solutionFile: 'ReactNativePosTools.sln',
        projects: [
          {
            projectFile: 'ReactNativePosTools\\ReactNativePosTools.csproj',
            directDependency: true,
          },
        ],
      },
    },
  },
};
