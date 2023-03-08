export const SetLocalCodeHuggy = (codeHuggy: string) => {
  localStorage.setItem('code', JSON.stringify(codeHuggy))
}
export const GetLocalCodeHuggy = () => localStorage.getItem('code')
export const DeleteLocalCodeHuggy = () => localStorage.removeItem('code')
