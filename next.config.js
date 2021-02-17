module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    })

    config.resolve.modules.push(__dirname)

    config.resolve.alias = {
      ...config.resolve.alias,
    }

    return config
  },
}
