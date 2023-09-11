module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order'
  ],
  rules: {
    'no-invalid-position-at-import-rule': null,
    'at-rule-empty-line-before': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-function-pattern': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'order/properties-alphabetical-order': null,
    'selector-pseudo-element-colon-notation': 'single',
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 4,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'length-zero-no-unit': true,
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
          '/appearance.*/',
          '/box-shadow.*/',
          '/filter.*/',
          '/transform.*/',
          '/transition.*/'
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
