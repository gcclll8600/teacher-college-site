import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gcclll8600.github.io/teacher-college-site/"),
  title: "Teacher College｜把困惑变成课例，把课例变成研究",
  description:
    "Teacher College 帮助一线教师从真实教学问题出发，借助 AI、同伴共创与持续反馈，形成可实施的课例与持续成长。",
  openGraph: {
    title: "Teacher College",
    description: "把困惑变成课例，把课例变成研究",
    images: [{ url: "https://gcclll8600.github.io/teacher-college-site/og.jpg", width: 1200, height: 630 }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teacher College",
    description: "把困惑变成课例，把课例变成研究",
    images: ["https://gcclll8600.github.io/teacher-college-site/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
