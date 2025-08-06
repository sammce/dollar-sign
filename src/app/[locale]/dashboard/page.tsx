import { getLanguage } from "@/lib/intl";

export default async function Dashboard() {
  const { language } = await getLanguage();
  return <h1>{language}</h1>;
}
