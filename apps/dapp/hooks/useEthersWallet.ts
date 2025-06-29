import { useState, useEffect, useCallback } from 'react'
import { ethers } from 'ethers'

interface EthereumWindow extends Window {
  ethereum?: any
}

declare const window: EthereumWindow

export function useEthersWallet() {
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string>('0')
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)

  // Format address for display
  const formatAddress = (addr: string): string => {
    if (!addr) return ''
    return addr.slice(0, 6) + '...' + addr.slice(-4)
  }

  // Connect wallet
  const connect = useCallback(async () => {
    if (!window.ethereum) {
      setError('请先安装 Metamask 插件')
      return
    }

    try {
      // Create provider
      const ethersProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(ethersProvider)

      // Request account access
      await ethersProvider.send('eth_requestAccounts', [])
      
      // Get signer
      const signer = await ethersProvider.getSigner()
      const address = await signer.getAddress()
      
      setAccount(address)
      setError(null)
    } catch (err: any) {
      setError(err?.message || '连接钱包失败')
    }
  }, [])

  // Fetch balance
  const fetchBalance = useCallback(async (address: string) => {
    if (!provider) return
    
    try {
      const balance = await provider.getBalance(address)
      const balanceInEther = ethers.formatEther(balance)
      setBalance(parseFloat(balanceInEther).toFixed(4))
    } catch (err) {
      setBalance('0')
    }
  }, [provider])

  // Effect to fetch balance when account changes
  useEffect(() => {
    if (account && provider) {
      fetchBalance(account)
    }
  }, [account, provider, fetchBalance])

  // Effect to listen for account changes
  useEffect(() => {
    if (!window.ethereum) return

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        setAccount(null)
      } else {
        setAccount(accounts[0])
      }
    }

    window.ethereum.on('accountsChanged', handleAccountsChanged)

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
    }
  }, [])

  return { 
    account, 
    balance, 
    error, 
    connect, 
    formatAddress,
    provider 
  }
}