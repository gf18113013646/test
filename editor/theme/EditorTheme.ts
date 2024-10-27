import type {EditorThemeClasses} from 'lexical';

import './EditorTheme.css';

const theme: EditorThemeClasses = {
  autocomplete: 'editor-autocomplete',
  blockCursor: 'editor-block-cursor',
  characterLimit: 'editor-character-limit',
  code: 'editor-code',
  codeHighlight: {
    atrule: 'editor-token-attr',
    attr: 'editor-token-attr',
    boolean: 'editor-token-property',
    builtin: 'editor-token-selector',
    cdata: 'editor-token-comment',
    char: 'editor-token-selector',
    class: 'editor-token-function',
    'class-name': 'editor-token-function',
    comment: 'editor-token-comment',
    constant: 'editor-token-property',
    deleted: 'editor-token-property',
    doctype: 'editor-token-comment',
    entity: 'editor-token-operator',
    function: 'editor-token-function',
    important: 'editor-token-variable',
    inserted: 'editor-token-velector',
    keyword: 'editor-token-attr',
    namespace: 'editor-token-variable',
    number: 'editor-token-property',
    operator: 'editor-token-operator',
    prolog: 'editor-token-comment',
    property: 'editor-token-property',
    punctuation: 'editor-token-punctuation',
    regex: 'editor-token-variable',
    selector: 'editor-token-selector',
    string: 'editor-token-selector',
    symbol: 'editor-token-property',
    tag: 'editor-token-property',
    url: 'editor-token-operator',
    variable: 'editor-token-variable',
  },
  embedBlock: {
    base: 'editor-embed-block',
    focus: 'editor-embed-block-focus',
  },
  hashtag: 'editor-hashtag',
  heading: {
    h1: 'editor-h1',
    h2: 'editor-h2',
    h3: 'editor-h3',
    h4: 'editor-h4',
    h5: 'editor-h5',
    h6: 'editor-h6',
  },
  hr: 'editor-hr',
  image: 'editor-image',
  indent: 'editor-indent',
  inlineImage: 'inline-editor-image',
  layoutContainer: 'editor-layout-container',
  layoutItem: 'editor-layout-item',
  link: 'editor-link',
  list: {
    checklist: 'editor-checklist',
    listitem: 'editor-list-item',
    listitemChecked: 'editor-list-item-checked',
    listitemUnchecked: 'editor-list-item-unchecked',
    nested: {
      listitem: 'editor-nested-listItem',
    },
    olDepth: [
      'editor-ol1',
      'editor-ol2',
      'editor-ol3',
      'editor-ol4',
      'editor-ol5',
    ],
    ul: 'editor-ul',
  },
  ltr: 'editor-ltr',
  mark: 'editor-mark',
  markOverlap: 'editor-mark-overlap',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  rtl: 'editor-rtl',
  table: 'editor-table',
  tableCell: 'editor-table-cell',
  tableCellActionButton: 'editor-table-cell-action-button',
  tableCellActionButtonContainer:
    'editor-table-cell-action-button-container',
  tableCellEditing: 'editor-table-cell-editing',
  tableCellHeader: 'editor-table-cell-header',
  tableCellPrimarySelected: 'editor-table-cell-primary-selected',
  tableCellResizer: 'editor-table-cell-resizer',
  tableCellSelected: 'editor-table-cell-selected',
  tableCellSortedIndicator: 'editor-table-cell-sorted-indicator',
  tableResizeRuler: 'editor-table-cell-resize-ruler',
  tableRowStriping: 'editor-table-row-striping',
  tableSelected: 'editor-table-selected',
  tableSelection: 'editor-table-selection',
  text: {
    bold: 'editor-text-bold',
    code: 'editor-tex-code',
    italic: 'editor-text-italic',
    strikethrough: 'editor-text-strikethrough',
    subscript: 'editor-text-subscript',
    superscript: 'editor-text-superscript',
    underline: 'editor-text-underline',
    underlineStrikethrough: 'editor-text-underline-strikethrough',
  },
};

export default theme;
