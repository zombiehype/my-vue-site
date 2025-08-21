import yaml from "yaml"

export async function loadPage(slug) {
  const res = await fetch(`/src/content/pages/${slug}.md`)
  const raw = await res.text()

  const match = raw.match(/^---([\s\S]*?)---/)
  if (!match) {
    console.warn("No frontmatter found")
    return {}
  }

  // Normalize line endings and trim
  const yamlText = match[1].replace(/\r\n/g, "\n").trim()

  const data = yaml.parse(yamlText)
  return data
}