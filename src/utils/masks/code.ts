export const formatCode = (v: string) => {
  const nMask = String(v).toUpperCase().replace("-", "")

  const f = nMask.replace(
    /([A-Za-z0-9]{5})([A-Za-z0-9]{1,5})?/,
    function (_regex, $1, $2) {
      return ($1 ?? "") + ($2 ? "-" + $2 : "")
    }
  )

  return f.slice(0, 11)
}
