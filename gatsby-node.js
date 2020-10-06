exports.onCreateWebpackConfig = ({stage,actions}) => {
    actions.setWebpackConfig({
      optimization: {
        splitChunks: false,
      },
    });
  };