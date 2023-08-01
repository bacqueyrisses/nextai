export const monokaiCustomTheme = (isDarkMode: boolean) => {
  return {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      background: '#272822',
      color: isDarkMode ? '#ddd' : '#888',
    },
    'hljs-tag': {
      color: '#569cd6',
    },
    'hljs-keyword': {
      color: '#569cd6',
      fontWeight: 'normal',
    },
    'hljs-selector-tag': {
      color: '#569cd6',
      fontWeight: 'normal',
    },
    'hljs-literal': {
      color: '#569cd6',
      fontWeight: 'normal',
    },
    'hljs-strong': {
      color: '#569cd6',
    },
    'hljs-name': {
      color: '#569cd6',
    },
    'hljs-code': {
      color: '#66d9ef',
    },
    'hljs-class .hljs-title': {
      color: 'gray',
    },
    'hljs-attribute': {
      color: '#bf79db',
    },
    'hljs-symbol': {
      color: '#bf79db',
    },
    'hljs-regexp': {
      color: '#bf79db',
    },
    'hljs-link': {
      color: '#bf79db',
    },
    'hljs-string': {
      color: '#10B981',
    },
    'hljs-bullet': {
      color: '#10B981',
    },
    'hljs-subst': {
      color: '#10B981',
    },
    'hljs-title': {
      color: '#10B981',
      fontWeight: 'normal',
    },
    'hljs-section': {
      color: '#10B981',
      fontWeight: 'normal',
    },
    'hljs-emphasis': {
      color: '#10B981',
    },
    'hljs-type': {
      color: '#10B981',
      fontWeight: 'normal',
    },
    'hljs-built_in': {
      color: '#10B981',
    },
    'hljs-builtin-name': {
      color: '#10B981',
    },
    'hljs-selector-attr': {
      color: '#10B981',
    },
    'hljs-selector-pseudo': {
      color: '#10B981',
    },
    'hljs-addition': {
      color: '#10B981',
    },
    'hljs-variable': {
      color: '#10B981',
    },
    'hljs-template-tag': {
      color: '#10B981',
    },
    'hljs-template-variable': {
      color: '#10B981',
    },
    'hljs-comment': {
      color: isDarkMode ? '#999' : '#888',
    },
    'hljs-quote': {
      color: '#75715e',
    },
    'hljs-deletion': {
      color: '#75715e',
    },
    'hljs-meta': {
      color: '#75715e',
    },
    'hljs-doctag': {
      fontWeight: 'normal',
    },
    'hljs-selector-id': {
      fontWeight: 'normal',
    },
  }
}
