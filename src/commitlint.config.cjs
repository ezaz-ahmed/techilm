const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [1, 'never'],
    'footer-max-line-length': [0, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'subject-pattern': [
      2,
      'always',
      /^(✨|🐛|📚|💎|🔨|🚀|🚨|📦|👷|🔧)\s+[a-z]+: .+/i,
    ],
    'body-leading-blank': [2, 'always'],
  },
};

module.exports = config;
