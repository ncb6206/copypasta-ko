import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const font = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '밈/도배 댓글 복사',
  description: '원하는 문장을 골라 쉽게 복사하여 사용할 수 있습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={font.className}>{children}</body>
    </html>
  );
}
