export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // CSS를 JS로 로드
          'css-loader', // CSS 파일 해석
          'postcss-loader', // PostCSS 플러그인 실행 (Tailwind 포함)
        ],
      },
    ],
  },
};