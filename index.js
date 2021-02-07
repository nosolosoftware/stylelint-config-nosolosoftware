module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-recess-order'
  ],
  ignoreFiles: [
    'src/scss/assets/**/*'
  ],
  rules: {
    'scss/dollar-variable-pattern': null,
    'scss/at-function-pattern': null,
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'order/properties-alphabetical-order': null,
    'number-leading-zero': 'never',
    'selector-pseudo-element-colon-notation': 'single',
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 4,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'length-zero-no-unit': true,
    'linebreaks': 'unix',
    'no-empty-first-line': true,
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: [
          '/-moz-.*/',
          '/-webkit-.*/'
        ]
      }
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          '/animation.*/',
          '/transition.*/',
          '/transform.*/',
          '/box-shadow.*/'
        ]
      }
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: [
          '/linear-gradient.*/'
        ]
      }
    ],
    'selector-no-qualifying-type': [
      true,
      {
        ignore: [
          'class'
        ]
      }
    ],
    'color-named': [
      'never',
      {
        ignore: [
          'inside-function'
        ]
      }
    ],
    indentation: [
      2,
      {
        ignore: [
          'value'
        ]
      }
    ],
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'declarations',
      'rules',
      {
        type: 'at-rule',
        hasBlock: true
      }
    ],
    'declaration-property-value-disallowed-list': [
      {
        border: [
          'none'
        ],
        outline: [
          'none'
        ]
      }
    ]
  }
}
