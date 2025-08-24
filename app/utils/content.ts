export default {
  getProjectKey(path: string): string | null {
    const match = path.match(/\/projects\/([^/]+)/)
    return match ? (match[1] ?? null) : null
  },
}
