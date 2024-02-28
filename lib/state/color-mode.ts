import { atom, useAtom, WritableAtom } from "jotai"

let strAtom: WritableAtom<string, string>
if (typeof window !== "undefined") {
  strAtom = atom(window?.localStorage.getItem("theme") || "system")
} else {
  strAtom = atom("dark")
}

export const colorMode = atom(
  (get) => get(strAtom),
  (get, set, newStr: string) => {
    set(strAtom, newStr)
    localStorage.setItem("theme", newStr)
  }
)

export const useColorMode = (): [string, () => void, (update: string) => void] => {
  const [mode, setMode] = useAtom(colorMode)
  const toggleMode = () => setMode(mode === "light" ? "dark" : "light")
  return [mode, toggleMode, setMode] as const
}
