import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletInfo: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formatAddress = (addr: string): string => {
    if (!addr) return '';
    return addr.slice(0, 6) + '...' + addr.slice(-4);
  };

  const connect = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setError(null);
      } catch (err: any) {
        setError(err?.message || '连接钱包失败');
      }
    } else {
      setError('请先安装 Metamask 插件');
    }
  };

  return (
    <div
      style={{
        padding: 24,
        border: '1px solid #eee',
        borderRadius: 8,
        maxWidth: 400,
      }}
    >
      <h2>钱包信息</h2>
      {account ? (
        <div>地址：{formatAddress(account)}</div>
      ) : (
        <button onClick={connect}>连接 Metamask</button>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default WalletInfo;