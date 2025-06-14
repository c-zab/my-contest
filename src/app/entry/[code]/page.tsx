import { use } from "react";
import EntryForm from "./EntryForm";

export default function EntryPage({params}: {params: Promise<{ code: string }>}) {
  const { code } = use(params);

  return <EntryForm code={code} />;
}
