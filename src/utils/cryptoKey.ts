import CryptoJS from 'crypto-js'

export const cryptoKey = (keySecret: string) => {
  const key = CryptoJS.enc.Hex.parse(import.meta.env.VITE_KEY_CRYPTO)
  const encrypted = CryptoJS.AES.encrypt(keySecret, key.words.toString())
  const encryptedKeySecret = encrypted.toString()
  return encryptedKeySecret
}
