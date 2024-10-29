import type { MetaFunction } from "@remix-run/node";
import Desktop from "~/layouts/Desktop";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return <Desktop />;
}
