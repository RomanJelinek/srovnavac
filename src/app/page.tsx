import { getCampaigns } from "./actions/advertisers";

export default async function Home() {
  const data = await getCampaigns();
  console.log(data);
  return <main></main>;
}
