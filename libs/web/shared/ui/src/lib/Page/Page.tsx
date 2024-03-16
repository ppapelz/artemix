export interface PageProps {
  children: React.ReactNode;
}

export function Page(props: PageProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">{props.children}</div>
    </div>
  );
}

export default Page;
