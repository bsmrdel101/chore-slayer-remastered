import Head from "next/head";


interface Props {
  children: React.ReactNode
  className?: string
  title?: string
}

export default function Layout({ children, className, title }: Props) {
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Deck building strategy game combined with a task tracker" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      {children}
    </div>
  );
}
