import { useState, useEffect, useCallback } from 'react';
import { formatAddress } from '@pf/libs';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, handler: (data: any) => void) => void;
      removeListener: (event: string, handler: (data: any) => void) => void;
    };
  }
}

export function useMetamask() {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [error, setError] = useState<string | null>(null);

  // 连接钱包
  const connect = useCallback(async () => {
    if (!window.ethereum) {
      setError('请先安装 Metamask 插件');
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      setError(null);
    } catch (err) {
      setError(err && (err as any).message ? (err as any).message : '连接钱包失败');
    }
  }, []);

  // 获取余额
  const fetchBalance = useCallback(async (address: string) => {
    if (!window.ethereum) return;
    try {
      const balanceHex = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      });
      setBalance(parseFloat(parseInt(balanceHex, 16) / 1e18 + '').toFixed(4));
    } catch (err) {
      setBalance('0');
    }
  }, []);

  useEffect(() => {
    if (account) {
      fetchBalance(account);
    }
  }, [account, fetchBalance]);

  // 监听账户变更
  useEffect(() => {
    if (!window.ethereum) return;
    const handler = (accounts: string[]) => {
      setAccount(accounts[0] || null);
    };
    window.ethereum.on('accountsChanged', handler);
    return () => {
      window.ethereum?.removeListener('accountsChanged', handler);
    };
  }, []);

  return { account, balance, error, connect, formatAddress };
}
