function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function inlineMarkdown(input: string): string {
  return escapeHtml(input).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let inList = false;

  const closeListIfNeeded = () => {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      closeListIfNeeded();
      continue;
    }

    if (line.startsWith('# ')) {
      closeListIfNeeded();
      html.push(`<h2 class="mt-8 text-2xl font-bold text-ink">${inlineMarkdown(line.slice(2))}</h2>`);
      continue;
    }

    if (line.startsWith('## ')) {
      closeListIfNeeded();
      html.push(`<h3 class="mt-8 text-xl font-semibold text-ink">${inlineMarkdown(line.slice(3))}</h3>`);
      continue;
    }

    if (line.startsWith('### ')) {
      closeListIfNeeded();
      html.push(`<h4 class="mt-6 text-lg font-semibold text-ink">${inlineMarkdown(line.slice(4))}</h4>`);
      continue;
    }

    if (line.startsWith('- ')) {
      if (!inList) {
        html.push('<ul class="mt-4 list-disc space-y-2 pl-6 text-muted">');
        inList = true;
      }
      html.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
      continue;
    }

    closeListIfNeeded();
    html.push(`<p class="mt-4 leading-7 text-muted">${inlineMarkdown(line)}</p>`);
  }

  closeListIfNeeded();
  return html.join('\n');
}

export function stripFirstMarkdownHeading(markdown: string): string {
  return markdown.replace(/^#\s.+?(\r?\n)+/, '');
}
