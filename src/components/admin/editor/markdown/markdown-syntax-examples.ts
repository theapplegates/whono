export type MarkdownSyntaxIcon =
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'highlighter'
  | 'eye-off'
  | 'list-collapse'
  | 'quote'
  | 'link'
  | 'image'
  | 'code'
  | 'code-block'
  | 'list'
  | 'ordered-list'
  | 'task-list'
  | 'table'
  | 'message-square-text'
  | 'sigma'
  | 'square-sigma'
  | 'smile'
  | 'minus';

export type MarkdownSyntaxExample = {
  label: string;
  syntax: string;
  icon?: MarkdownSyntaxIcon;
  marker?: string;
};

export type MarkdownShortcutExample = {
  label: string;
  shortcut: string;
  icon?: MarkdownSyntaxIcon;
};

export const MARKDOWN_SYNTAX_EXAMPLES: readonly MarkdownSyntaxExample[] = [
  { label: 'Section heading', marker: 'H2', syntax: '## Title' },
  { label: 'Level 3 heading', marker: 'H3', syntax: '### Title' },
  { label: 'Bold', icon: 'bold', syntax: '**Bold text**' },
  { label: 'Italic', icon: 'italic', syntax: '*Italic text*' },
  { label: 'Strikethrough', icon: 'strikethrough', syntax: '~~Text~~' },
  { label: 'Highlight', icon: 'highlighter', syntax: '==Text==' },
  { label: 'Spoiler', icon: 'eye-off', syntax: ':spoiler[Text]' },
  { label: 'Link', icon: 'link', syntax: '[Link text](url)' },
  { label: 'Image', icon: 'image', syntax: '![alt](url "Image description")' },
  { label: 'Quote', icon: 'quote', syntax: '> Quoted text' },
  { label: 'Callout', icon: 'message-square-text', syntax: ':::note[Title]' },
  { label: 'Collapsible content', icon: 'list-collapse', syntax: ':::details[Title]' },
  { label: 'Inline formula', icon: 'sigma', syntax: '$$x$$' },
  { label: 'Block formula', icon: 'square-sigma', syntax: '$$\nx\n$$' },
  { label: 'Emoji', icon: 'smile', syntax: '🙂' },
  { label: 'Code', icon: 'code', syntax: '`Code`' },
  { label: 'Code block', icon: 'code-block', syntax: '```language' },
  { label: 'Bullet list', icon: 'list', syntax: '- Item' },
  { label: 'Numbered list', icon: 'ordered-list', syntax: '1. Item' },
  { label: 'Task list', icon: 'task-list', syntax: '- [ ] To-do' },
  { label: 'Table', icon: 'table', syntax: '| Title | Title |' },
  { label: 'Divider', icon: 'minus', syntax: '---' }
] as const;

export const MARKDOWN_SHORTCUT_EXAMPLES: readonly MarkdownShortcutExample[] = [
  { label: 'Bold', icon: 'bold', shortcut: 'Ctrl + B' },
  { label: 'Italic', icon: 'italic', shortcut: 'Ctrl + I' },
  { label: 'Link', icon: 'link', shortcut: 'Ctrl + K' }
] as const;
